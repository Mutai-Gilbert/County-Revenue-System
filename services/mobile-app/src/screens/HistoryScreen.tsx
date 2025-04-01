import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet 
} from 'react-native';
import { useRevenueStore } from '../store/revenueStore';
import { MobileLayout } from '../components/layout/MobileLayout';

export const HistoryScreen = () => {
  const { collections } = useRevenueStore();

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.historyItem}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemType}>{item.type}</Text>
        <Text style={[
          styles.itemStatus,
          item.paymentStatus === 'COMPLETED' && styles.statusCompleted,
          item.paymentStatus === 'PENDING' && styles.statusPending,
          item.paymentStatus === 'FAILED' && styles.statusFailed
        ]}>
          {item.paymentStatus}
        </Text>
      </View>
      
      <Text style={styles.itemAmount}>KES {item.amount}</Text>
      <Text style={styles.itemDate}>
        {new Date(item.timestamp).toLocaleDateString('en-KE', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </Text>
    </View>
  );

  return (
    <MobileLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Collection History</Text>
        
        <FlatList
          data={collections}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>
                No collections recorded yet
              </Text>
            </View>
          )}
        />
      </View>
    </MobileLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FE'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    padding: 16
  },
  listContent: {
    padding: 16
  },
  historyItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  itemType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827'
  },
  itemStatus: {
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4
  },
  statusCompleted: {
    backgroundColor: '#DCFCE7',
    color: '#15803D'
  },
  statusPending: {
    backgroundColor: '#FEF3C7',
    color: '#92400E'
  },
  statusFailed: {
    backgroundColor: '#FEE2E2',
    color: '#B91C1C'
  },
  itemAmount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4
  },
  itemDate: {
    fontSize: 14,
    color: '#6B7280'
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center'
  }
}); 