"use client";

import { useEffect, useState } from "react";

interface PhoneData {
  phone: string;
  feature: string;
  createdAt?: string;
}

export default function AdminPage() {
  const [phones, setPhones] = useState<PhoneData[]>([]);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/phones`
        );

        const data = await res.json();
        setPhones(data.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhones();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-slate-900">
            شماره‌های ثبت شده
          </h1>

          <p className="text-slate-500 mt-2">
            تعداد کل درخواست‌ها: {phones.length}
          </p>
        </div>

        <div className="grid gap-5">
          {phones.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-6
                shadow-lg
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className="
                      inline-flex
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-bold
                      bg-blue-100
                      text-blue-700
                      mb-3
                    "
                  >
                    درخواست #{index + 1}
                  </span>

                  <h3 className="text-2xl font-black text-slate-900">
                    {item.phone}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {item.feature}
                  </p>
                </div>

                <div
                  className="
                    shrink-0
                    text-right
                    bg-slate-100
                    px-4
                    py-2
                    rounded-2xl
                  "
                >
                  <p className="text-xs text-slate-500">
                    زمان ثبت
                  </p>

                  <p className="font-bold text-slate-800">
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleTimeString(
                          "fa-IR",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )
                      : "--:--"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {phones.length === 0 && (
          <div
            className="
              bg-white
              rounded-3xl
              p-12
              text-center
              shadow-lg
            "
          >
            <p className="text-slate-500">
              هنوز شماره‌ای ثبت نشده است
            </p>
          </div>
        )}
      </div>
    </div>
  );
}