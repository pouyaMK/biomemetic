"use client";

import { useEffect, useState } from "react";

interface PhoneData {
  id: number;
  phone: string;
  feature: string;
  created_at: string;
}

const ADMIN_USER = "pouya";
const ADMIN_PASS = "smpp12345";

function SkeletonCard() {
  return (
    <div className="bg-white border border-orange-100 rounded-2xl p-5 flex items-center justify-between animate-pulse">
      <div className="space-y-2">
        <div className="h-4 w-32 bg-orange-100 rounded-full" />
        <div className="h-3 w-20 bg-orange-50 rounded-full" />
      </div>
      <div className="h-3 w-16 bg-orange-50 rounded-full" />
    </div>
  );
}

export default function AdminPage() {
  const [phones, setPhones] = useState<PhoneData[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<number[]>([]);
  const [confirmDeleteAll, setConfirmDeleteAll] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token === "authenticated") setIsLoggedIn(true);
    setAuthLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;
    setDataLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/phones`)
      .then((res) => res.json())
      .then((data) => setPhones(data.data || []))
      .catch(() => setPhones([]))
      .finally(() => setDataLoading(false));
  }, [isLoggedIn]);

  const handleLogin = () => {
    if (username.trim() === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem("admin_token", "authenticated");
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsLoggedIn(false);
    setPhones([]);
    setSelected([]);
  };

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selected.length === phones.length) {
      setSelected([]);
    } else {
      setSelected(phones.map((p) => p.id));
    }
  };

  const deletePhone = async (id: number) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/phone/${id}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (data.success) {
        setPhones((prev) => prev.filter((item) => item.id !== id));
        setSelected((prev) => prev.filter((i) => i !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSelected = async () => {
    await Promise.all(selected.map((id) => deletePhone(id)));
    setSelected([]);
  };

  const deleteAll = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/phones`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (data.success) {
        setPhones([]);
        setSelected([]);
        setConfirmDeleteAll(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-orange-400 text-sm">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4" dir="rtl">
        <div className="w-full max-w-sm bg-white border border-orange-100 rounded-3xl shadow-sm p-8 space-y-5">
          <div className="text-center space-y-1">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔐</span>
            </div>
            <h1 className="text-xl font-black text-gray-800">پنل ادمین</h1>
            <p className="text-sm text-gray-400">برای ورود اطلاعات خود را وارد کنید</p>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs text-gray-500 font-medium">نام کاربری</label>
              <input
                type="text"
                placeholder="pouya"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-12 border border-orange-200 rounded-xl px-4 outline-none focus:ring-2 focus:ring-orange-300 text-center transition"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-500 font-medium">رمز عبور</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full h-12 border border-orange-200 rounded-xl px-4 outline-none focus:ring-2 focus:ring-orange-300 text-center transition"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              <p className="text-red-500 text-sm text-center">{error}</p>
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full h-12 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] transition text-white font-black rounded-xl"
          >
            ورود به پنل
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50" dir="rtl">

      {/* HEADER */}
      <div className="bg-white border-b border-orange-100 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-black text-gray-800">شماره‌های ثبت شده</h1>
            <p className="text-xs text-orange-400 mt-0.5">
              {dataLoading ? "در حال بارگذاری..." : `${phones.length} شماره`}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-red-500 border border-red-200 px-4 py-2 rounded-xl hover:bg-red-50 active:scale-[0.98] transition"
          >
            <span>خروج</span>
            <span>←</span>
          </button>
        </div>
      </div>

      {/* ACTION BAR */}
      {phones.length > 0 && !dataLoading && (
        <div className="max-w-2xl mx-auto px-4 pt-4">
          <div className="bg-white border border-orange-100 rounded-2xl px-4 py-3 flex items-center justify-between gap-3">
            
            {/* SELECT ALL */}
            <button
              onClick={toggleSelectAll}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition"
            >
              <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition ${selected.length === phones.length ? "bg-orange-500 border-orange-500" : "border-gray-300"}`}>
                {selected.length === phones.length && (
                  <span className="text-white text-xs font-black">✓</span>
                )}
              </div>
              <span>انتخاب همه</span>
            </button>

            <div className="flex items-center gap-2">
              {/* DELETE SELECTED */}
              {selected.length > 0 && (
                <button
                  onClick={deleteSelected}
                  className="flex items-center gap-1.5 text-sm text-red-500 border border-red-200 px-3 py-1.5 rounded-xl hover:bg-red-50 active:scale-[0.98] transition"
                >
                  <span>حذف انتخاب‌شده</span>
                  <span className="bg-red-100 text-red-500 text-xs font-bold px-1.5 py-0.5 rounded-md">
                    {selected.length}
                  </span>
                </button>
              )}

              {/* DELETE ALL */}
              {!confirmDeleteAll ? (
                <button
                  onClick={() => setConfirmDeleteAll(true)}
                  className="text-sm text-gray-400 border border-gray-200 px-3 py-1.5 rounded-xl hover:bg-red-50 hover:text-red-500 hover:border-red-200 active:scale-[0.98] transition"
                >
                  حذف همه
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-red-500">مطمئنی؟</span>
                  <button
                    onClick={deleteAll}
                    className="text-sm text-white bg-red-500 px-3 py-1.5 rounded-xl hover:bg-red-600 active:scale-[0.98] transition"
                  >
                    بله
                  </button>
                  <button
                    onClick={() => setConfirmDeleteAll(false)}
                    className="text-sm text-gray-500 border border-gray-200 px-3 py-1.5 rounded-xl hover:bg-gray-50 active:scale-[0.98] transition"
                  >
                    نه
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className="max-w-2xl mx-auto px-4 py-4 space-y-3">
        {dataLoading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : phones.length === 0 ? (
          <div className="text-center py-24 space-y-3">
            <p className="text-4xl">📭</p>
            <p className="text-gray-400 font-medium">هیچ شماره‌ای ثبت نشده</p>
            <p className="text-gray-300 text-sm">شماره‌های ثبت شده اینجا نمایش داده می‌شوند</p>
          </div>
        ) : (
          phones.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleSelect(item.id)}
              className={`bg-white border rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition cursor-pointer ${
                selected.includes(item.id)
                  ? "border-orange-400 bg-orange-50"
                  : "border-orange-100"
              }`}
            >
              <div className="flex items-center gap-3">
                {/* CHECKBOX */}
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition flex-shrink-0 ${selected.includes(item.id) ? "bg-orange-500 border-orange-500" : "border-gray-200"}`}>
                  {selected.includes(item.id) && (
                    <span className="text-white text-xs font-black">✓</span>
                  )}
                </div>

                <div className="space-y-1">
                  <p className="font-bold text-gray-800 text-base tracking-wide">
                    {item.phone}
                  </p>
                  <span className="inline-block bg-orange-50 text-orange-500 text-xs font-medium px-3 py-1 rounded-full border border-orange-100">
                    {item.feature}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-gray-300 text-xs">
                  {new Date(item.created_at).toLocaleDateString("fa-IR")}
                </p>

                {/* DELETE BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deletePhone(item.id);
                  }}
                  className="w-8 h-8 flex items-center justify-center rounded-xl text-gray-300 hover:text-red-500 hover:bg-red-50 transition active:scale-[0.95]"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}