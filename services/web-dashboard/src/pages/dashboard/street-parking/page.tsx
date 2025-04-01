"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { XMarkIcon } from "@heroicons/react/24/outline";

const vehicleCategories = [
  {
    id: "salon-cbd",
    name: "Salon car/Pickup per day zone A - CBD",
    price: 100,
  },
  {
    id: "salon-other",
    name: "Salon car/Pickup per day other zones",
    price: 50,
  },
  {
    id: "motorcycle",
    name: "Motorcycle per day",
    price: 30,
  },
];

export default function StreetParkingPage() {
  const [selectedCategory, setSelectedCategory] = useState(vehicleCategories[0]);
  const [plateNumber, setPlateNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!plateNumber || !phoneNumber) {
      setError("Please fill in all fields");
      return;
    }

    // TODO: Implement M-Pesa payment integration
    try {
      // Mock API call
      console.log("Processing payment...", {
        category: selectedCategory,
        plateNumber,
        phoneNumber,
      });
    } catch (err) {
      setError("Payment processing failed. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">
              Street Parking
            </h2>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="text-gray-400 hover:text-gray-500"
              aria-label="Close"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label
                htmlFor="parking-duration"
                className="block text-sm font-medium text-gray-700"
              >
                Parking duration
              </label>
              <select
                id="parking-duration"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-md"
                defaultValue="STREET PARKING"
              >
                <option>STREET PARKING</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="vehicle-category"
                className="block text-sm font-medium text-gray-700"
              >
                Vehicle category
              </label>
              <select
                id="vehicle-category"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-md"
                value={selectedCategory.id}
                onChange={(e) =>
                  setSelectedCategory(
                    vehicleCategories.find((c) => c.id === e.target.value)!
                  )
                }
              >
                {vehicleCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="plate-number"
                className="block text-sm font-medium text-gray-700"
              >
                Car Plate Number
              </label>
              <input
                type="text"
                id="plate-number"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter The No. Plate"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Billing Totals
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  KES {selectedCategory.price}
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Mpesa Phone Number
              </label>
              <input
                type="tel"
                id="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter M-Pesa number"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}

            <div className="space-y-3">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                SEND PAYMENT REQUEST
              </button>
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Receive payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
} 