"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster , toast } from "react-hot-toast"
interface PhonePopupProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  selectedFeature: string;
}

export default function PhonePopup({
  open,
  setOpen,
  selectedFeature,
}: PhonePopupProps) {

  const [phone, setPhone] = useState("");
const [error, setError] = useState("");
const handlePhoneChange = (value: string) => {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length <= 11) {
    setPhone(cleaned);
    setError("");
  }
};

console.log(process.env.NEXT_PUBLIC_API_URL);


const handleSubmit = async () => {
  if (phone.length !== 11) {
    setError("شماره موبایل باید ۱۱ رقم باشد");
    return;
  }

  try {
    console.log(
      `${process.env.NEXT_PUBLIC_API_URL}/api/phone`
    );
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/phone`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone,
        feature: selectedFeature,
      }),
    });

    const data = await response.json();
    
    console.log(data);
    setPhone("");
    setError("");
    toast.success("شماره شما با موفقیت ثبت شد 🎉");
    setOpen(false)
  } catch (error) {
    console.log(error);
    toast.error("خطا در ثبت شماره ❌");
    setOpen(false)
  }
};


  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          className="relative z-50"
        >
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/40
              backdrop-blur-sm
            "
          />

        {/* container */}
          <div className="fixed inset-0 flex items-end justify-center">
            <DialogPanel
              as={motion.div}
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 400, opacity: 0 }}
              className="
                w-full
                max-w-md
                rounded-t-[35px]
                bg-white
                p-6
                shadow-2xl
                border-t
                border-orange-100
              "
            >
              <div className="w-16 h-1.5 bg-gray-300 rounded-full mx-auto mb-6" />
              <h3 className="text-center text-2xl font-black text-orange-600">
                مشاوره رایگان
              </h3>

              <p className="text-center text-sm text-gray-500 mt-2 leading-7">
                برای درمان
                <span className="font-bold text-orange-500 mx-1">
                "{selectedFeature}"
                </span>
                شماره موبایل خود را وارد کنید
              </p>

              {/* INPUT */}
              <div className="mt-6">
              <input
  type="tel"
  value={phone}
  onChange={(e) => handlePhoneChange(e.target.value)}
  placeholder="09xxxxxxxxx"
  className={`
    w-full
    h-14
    rounded-2xl
    border
    px-4
    outline-none
    text-center
    text-lg
    transition-all
    ${
      error
        ? "border-red-400 focus:ring-red-200"
        : "border-orange-200 focus:ring-orange-200"
    }
    focus:ring-4
  `}
/>
{error && (
  <p className="text-red-500 text-sm mt-2 text-center">
    {error}
  </p>
)}
              </div>

              {/* BUTTON */}
              <motion.button
  onClick={handleSubmit}
  whileTap={{ scale: 0.96 }}
  whileHover={{ scale: 1.02 }}
  className="
    mt-5
    w-full
    h-14
    rounded-2xl
    bg-linear-to-r
    from-orange-500
    to-orange-400
    text-white
    font-black
    shadow-xl
  "
>
  ثبت درخواست
</motion.button>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}