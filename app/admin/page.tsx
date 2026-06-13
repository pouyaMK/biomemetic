"use client";

import { useEffect, useState } from "react";

interface PhoneData {
  phone: string;
  feature: string;
}

export default function AdminPage() {
  const [phones, setPhones] = useState<PhoneData[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "pouya" && password === "smpp1234") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("نام کاربری یا رمز اشتباه است");
    }
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/phones`)
      .then((res) => res.json())
      .then((data) => {
        setPhones(data.data);
      });
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-full max-w-sm p-8 border rounded-2xl shadow-sm space-y-4">
          <h1 className="text-2xl font-black text-center text-orange-500">
            ورود ادمین
          </h1>

          <input
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-12 border rounded-xl px-4 outline-none focus:ring-2 focus:ring-orange-200 text-center"
          />

          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="w-full h-12 border rounded-xl px-4 outline-none focus:ring-2 focus:ring-orange-200 text-center"
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            onClick={handleLogin}
            className="w-full h-12 bg-orange-500 text-white font-black rounded-xl"
          >
            ورود
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-10" dir="rtl">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-black">شماره‌های ثبت شده</h1>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="text-sm text-red-500 border border-red-200 px-4 py-2 rounded-xl"
        >
          خروج
        </button>
      </div>

      <div className="space-y-4">
        {phones.map((item, index) => (
          <div key={index} className="border rounded-2xl p-5 shadow-sm">
            <p className="font-bold text-lg">{item.phone}</p>
            <p className="text-gray-500 mt-2">{item.feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}