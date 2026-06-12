"use client";

import { useEffect, useState } from "react";

interface PhoneData {
  phone: string;
  feature: string;
}

export default function AdminPage() {
  const [phones, setPhones] = useState<PhoneData[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/phones")
      .then((res) => res.json())
      .then((data) => {
        setPhones(data.data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-black mb-10">
        شماره‌های ثبت شده
      </h1>

      <div className="space-y-4">
        {phones.map((item, index) => (
          <div
            key={index}
            className="
              border
              rounded-2xl
              p-5
              shadow-sm
            "
          >
            <p className="font-bold text-lg">
              {item.phone}
            </p>

            <p className="text-gray-500 mt-2">
              {item.feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}