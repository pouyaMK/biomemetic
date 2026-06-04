
"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Lead {
  id: number;
  phone: string;
  feature: string;
  created_at: string;
}

export default function DashboardPage() {
  const [data, setData] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch data
  const fetchLeads = async () => {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setData(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // delete item
  const deleteLead = async (id: number) => {
    // حذف لحظه ای از UI
    setData((prev) => prev.filter((item) => item.id !== id));

    // حذف از دیتابیس
    const { error } = await supabase
      .from("leads")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
      alert("خطا در حذف");
      fetchLeads();
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-center">
        در حال دریافت اطلاعات...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          شماره تلفن ها
        </h1>

        <div className="space-y-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="
                border
                border-gray-200
                rounded-2xl
                p-4
                flex
                items-center
                justify-between
              "
            >
              <div>
                <p className="font-bold text-orange-600 text-lg">
                  {item.phone}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {item.feature}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-400">
                  {new Date(item.created_at).toLocaleDateString(
                    "fa-IR"
                  )}
                </p>

                <button
                  onClick={() => deleteLead(item.id)}
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-red-50
                    flex
                    items-center
                    justify-center
                    hover:bg-red-100
                    transition
                  "
                >
                  <Trash2
                    size={18}
                    className="text-red-500"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

