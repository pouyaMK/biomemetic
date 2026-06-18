


"use client";

import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import Image from "next/image";
import img from "@/public/assets/imgs/picture.jpg"
export default function BiomimeticHero() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handlePhoneChange = (value: string) => {
    const englishNumber = value
      .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
      .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));

    const cleaned = englishNumber.replace(/\D/g, "");

    if (cleaned.length <= 11) {
      setPhone(cleaned);
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (phone.length !== 11) {
      setError("شماره موبایل باید ۱۱ رقم باشد");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/phone`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone,
            feature: "landing-page",
          }),
        }
      );

      await response.json();

      toast.success("شماره شما با موفقیت ثبت شد 🎉");

      setPhone("");
      setError("");
    } catch {
      toast.error("خطا در ثبت شماره ❌");
    }
  };

  return (
    <section
      dir="ltr"
      className="w-full min-h-screen bg-orange-500/90 overflow-hidden"
    >
      <h1
        className="
          text-white
          text-3xl
          md:text-6xl
          mt-6
          font-black
          text-center
          leading-tight
        "
      >
        زیبایی طبیعی با کرم بیوممتیک
      </h1>


      <section className="px-4 pt-10">
        <div className="relative w-full h-64 mx-auto overflow-hidden rounded-4xl shadow-[0_0_20px_rgba(255,255,255,0.70)]">
          <Image
            src={img}
            alt="Profile Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

{/* input */}
      <div
        className="
          w-full
          mx-auto
          mt-8
          px-4
        "
      >
        <div
          className="
            bg-white
            rounded-4xl
            border
            
            border-orange-100
            shadow-[0_15px_40px_rgba(255,140,0,0.15)]
            p-6
          "
        >
         
          <p className="text-center w-[90%] mx-auto text-black text-lg font-bold mt-2 leading-7">
            برای دریافت{" "}
            <span className="font-extrabold text-xl mx-1 text-orange-700">
              مشاوره رایگان
            </span>
            {" "}پوستی شماره تماس خود را وارد کنید
          </p>

          <input
            type="tel"
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            placeholder="شماره موبایل خود را وارد کنید"
            className={`
              mt-5
              w-full
              h-14
              rounded-full
              border-orange-700
              shadow
              border-4
              text-center
              text-lg
              outline-none
              px-4
              ${
                error
                  ? "border-red-400 focus:ring-red-200"
                  : "border-orange-200 focus:ring-orange-200"
              }
              focus:ring-4
            `}
          />

          {error && (
            <p className="text-red-500 text-sm text-center mt-2">
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            className="
              mt-5
              w-full
              h-14
              rounded-full
              bg-linear-to-r
              from-orange-500
              to-orange-400
              text-white
              font-black
              shadow-xl
              text-xl
              cursor-pointer
            "
          >
            ثبت شماره تماس
          </button>
        </div>

        <div className=" text-center py-7 text-white text-xl font-bold">
          ظرفیت بسیار محدود ! همین الان اقدام کنید 
        </div>
      </div>

      <Toaster position="top-center" />
    </section>
  );
}