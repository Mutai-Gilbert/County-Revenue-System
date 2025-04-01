import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'zustand/middleware';

export type RevenueType = 
  | 'PARKING' 
  | 'MARKET' 
  | 'CESS' 
  | 'HEALTH' 
  | 'FISH' 
  | 'FIRE' 
  | 'RENTAL' 
  | 'FINES';

export type PaymentStatus = 'PENDING' | 'COMPLETED' | 'FAILED';

export interface Collection {
  id: string;
  type: RevenueType;
  amount: number;
  timestamp: string;
  details: Record<string, any>;
  paymentStatus: PaymentStatus;
  mpesaReference?: string;
}

export interface PendingPayment {
  id: string;
  collectionId: string;
  amount: number;
  phoneNumber: string;
  timestamp: string;
  status: PaymentStatus;
}

interface RevenueState {
  collections: Collection[];
  pendingPayments: PendingPayment[];
  dailyTarget: number;
  todayCollected: number;
  addCollection: (collection: Collection) => void;
  addPendingPayment: (payment: PendingPayment) => void;
  updatePaymentStatus: (id: string, status: PaymentStatus) => void;
  clearTodayCollections: () => void;
}

export const useRevenueStore = create(
  persist<RevenueState>(
    (set) => ({
      collections: [],
      pendingPayments: [],
      dailyTarget: 3000,
      todayCollected: 0,

      addCollection: (collection) => 
        set((state) => ({
          collections: [collection, ...state.collections],
          todayCollected: state.todayCollected + collection.amount
        })),

      addPendingPayment: (payment) =>
        set((state) => ({
          pendingPayments: [payment, ...state.pendingPayments]
        })),

      updatePaymentStatus: (id, status) =>
        set((state) => ({
          collections: state.collections.map(collection =>
            collection.id === id 
              ? { ...collection, paymentStatus: status }
              : collection
          ),
          pendingPayments: state.pendingPayments.filter(
            payment => payment.collectionId !== id
          )
        })),

      clearTodayCollections: () =>
        set(() => ({
          todayCollected: 0
        }))
    }),
    {
      name: 'revenue-storage',
      getStorage: () => AsyncStorage
    }
  )
); 