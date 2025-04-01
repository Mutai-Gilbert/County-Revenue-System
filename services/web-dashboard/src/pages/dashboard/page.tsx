"use client";

import { useCallback } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  CurrencyDollarIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

// Define types
interface RevenueCategoryProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}

interface RevenueData {
  amount: number;
  target: number;
  performance: string;
}

const revenueCategories = [
  {
    name: "Street Parking",
    icon: TruckIcon,
    description: "Parking Charges for motorbikes, personal vehicles and more.",
    href: "/dashboard/street-parking",
  },
  {
    name: "Matatu/Bus Park",
    icon: TruckIcon,
    description: "A fee applied to matatus/buses at a stage.",
    href: "/dashboard/bus-park",
  },
  {
    name: "Markets",
    icon: BuildingStorefrontIcon,
    description: "Taxes for vendors on items sold at our markets.",
    href: "/dashboard/markets",
  },
  {
    name: "Public Health",
    icon: ShieldCheckIcon,
    description: "Medical Certificates, food hygiene, food handlers and so on.",
    href: "/dashboard/public-health",
  },
  {
    name: "Cess",
    icon: TruckIcon,
    description: "Drivers pay for materials like ballast, sand etc...",
    href: "/dashboard/cess",
  },
  {
    name: "SBP Permits",
    icon: DocumentTextIcon,
    description: "Efficient tenant payment request and tracking.",
    href: "/dashboard/sbp-permits",
  },
];

const RevenueSummary = ({ data }: { data: RevenueData }) => {
  return (
    <div className="bg-red-500 rounded-2xl p-5 m-4 text-white">
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium">COLLECTED TODAY</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-semibold">KES</span>
          <span className="text-4xl font-bold">{data.amount.toLocaleString()}</span>
          <span>({((data.amount / data.target) * 100).toFixed(2)}%)</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <span>KES {data.target.toLocaleString()} Target Margin</span>
      </div>
      <div className="inline-block bg-yellow-400 px-3 py-1 rounded-full mt-3">
        <span className="text-black font-medium">{data.performance}</span>
      </div>
    </div>
  );
};

const RevenueCategory = ({ icon: Icon, title, description, href }: RevenueCategoryProps) => {
  return (
    <Link 
      href={href}
      className="block w-full md:w-[calc(50%-1rem)] bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <Icon className="w-6 h-6 text-gray-600 mb-2" />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </Link>
  );
};

const RevenueGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {revenueCategories.map((category) => (
        <RevenueCategory
          key={category.name}
          icon={category.icon}
          title={category.name}
          description={category.description}
          href={category.href}
        />
      ))}
    </div>
  );
};

interface HeaderProps {
  user?: {
    name: string;
    zone?: string;
  };
}

const Header = ({ user }: HeaderProps) => {
  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Hello {user?.name || 'User'}</h2>
          <p className="text-sm text-gray-600">
            {user?.zone || 'Allocated Zone, KERICHO TOWN'}
          </p>
        </div>
        <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
          <span>Contact Support</span>
          <PhoneIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

const DashboardContent = () => {
  const mockData: RevenueData = {
    amount: 0,
    target: 3000,
    performance: "UNDER PERFORMING"
  };

  const mockUser = {
    name: "John Doe",
    zone: "Allocated Zone, KERICHO TOWN"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={mockUser} />
      <RevenueSummary data={mockData} />
      <RevenueGrid />
    </div>
  );
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardContent />
    </DashboardLayout>
  );
}

