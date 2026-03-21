"use client";

import { Group } from "@mantine/core";
import MainLayout from "@/src/components/layout/MainLayout";

import {
  IconBuildingBank,
  IconCashBanknote,
  IconCoin,
  IconCreditCard,
  IconReceipt,
  IconReceiptRefund,
  IconReceiptTax,
  IconRepeat,
  IconReport,
} from "@tabler/icons-react";

// ---------------------------
// 🔹 Actions Grid Data
// ---------------------------
const mockdata = [
  { title: "Credit Cards", icon: IconCreditCard, color: "bg-violet-100", iconColor: "text-violet-600" },
  { title: "Banks Nearby", icon: IconBuildingBank, color: "bg-indigo-100", iconColor: "text-indigo-600" },
  { title: "Transfers", icon: IconRepeat, color: "bg-blue-100", iconColor: "text-blue-600" },
  { title: "Refunds", icon: IconReceiptRefund, color: "bg-green-100", iconColor: "text-green-600" },
  { title: "Receipts", icon: IconReceipt, color: "bg-teal-100", iconColor: "text-teal-600" },
  { title: "Taxes", icon: IconReceiptTax, color: "bg-cyan-100", iconColor: "text-cyan-600" },
  { title: "Reports", icon: IconReport, color: "bg-pink-100", iconColor: "text-pink-600" },
  { title: "Payments", icon: IconCoin, color: "bg-red-100", iconColor: "text-red-600" },
  { title: "Cashback", icon: IconCashBanknote, color: "bg-orange-100", iconColor: "text-orange-600" },
];

// ---------------------------
// 🔹 Actions Grid Component (IN SAME FILE)
// ---------------------------
function ActionsGrid() {
  return (
    <div className="border rounded-xl bg-white shadow-lg p-6 mt-12">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800 text-lg">Services</h3>
        <span className="text-xs text-gray-500 cursor-pointer hover:text-gray-700">
          + 21 other services
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {mockdata.map((item) => (
          <button
            key={item.title}
            className={`flex flex-col items-center justify-center text-center rounded-xl 
                        h-[100px] shadow-sm ${item.color} 
                        hover:shadow-xl hover:scale-105 
                        transition-all duration-200`}
          >
            <item.icon size={34} className={`${item.iconColor} mb-1`} />
            <p className="text-xs font-medium text-gray-700">{item.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------------------------
// 🔹 PAGE COMPONENT
// ---------------------------
export default function HomePage() {
  return (
    <MainLayout>
      <Group align="center" justify="center">
        <div className="min-h-screen flex flex-col items-center justify-start p-4 w-full">

          {/* ⭐ Beautiful Gradient Coming Soon Card */}
          <div
            className="p-10 rounded-2xl shadow-xl text-center max-w-md w-full space-y-5 mt-10
                       bg-gradient-to-br from-[#fff1e8] via-[#ffe6fa] to-[#e6f3ff]
                       border border-white/60 backdrop-blur-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 drop-shadow-sm">
              ✨ Hotels Page Coming Soon
            </h2>

            <h3 className="text-xl font-semibold text-gray-800">
              Our Services
            </h3>

            <p className="text-gray-700 leading-relaxed font-medium text-sm">
              🌍 Domestic & International Holidays<br />
              🏨 Hotel Bookings • ✈️ Flight Bookings<br />
              🛂 Visa Assistance • 💱 Forex Services<br />
              🛡️ Travel Insurance Support
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Reach Us
            </h3>

            <div className="text-gray-800 font-semibold space-y-1">
              <p>📞 +91-97921 14666</p>
              <p>📞 +91-81275 54658</p>
            </div>

            <p className="text-gray-800 font-semibold">
              📧 ashish.mishra@myjourneywings.com
            </p>
          </div>

          {/* Actions Grid */}
          <div className="w-full max-w-xl">
            <ActionsGrid />
          </div>

        </div>
      </Group>
    </MainLayout>
  );
}
