"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "آیا کرم بیومیمتیک برای انواع پوست مناسب است؟",
    answer:
      "بله، این کرم با فرمولاسیون پیشرفته بیومیمتیک برای پوست‌های خشک، چرب، مختلط و حساس طراحی شده و بدون ایجاد حساسیت قابل استفاده است.",
  },
  {
    question: "بعد از چه مدت نتیجه استفاده از کرم مشخص می‌شود؟",
    answer:
      "معمولاً بعد از ۷ تا ۱۴ روز استفاده مداوم، شفافیت، لطافت و آبرسانی پوست به شکل محسوسی افزایش پیدا می‌کند.",
  },
  {
    question: "آیا این محصول تأییدیه و اصالت کالا دارد؟",
    answer:
      "بله، محصول دارای بارکد اصالت، سیب سلامت و تأییدیه سازمان غذا و دارو می‌باشد.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 bg-[#fffaf5] overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-orange-400/10 blur-[180px] rounded-full" />

      {/* FLOAT LIGHTS */}
      <div className="absolute top-20 left-20 w-5 h-5 rounded-full bg-orange-300 blur-sm animate-pulse" />
      <div className="absolute bottom-24 right-24 w-4 h-4 rounded-full bg-yellow-300 blur-sm animate-pulse" />

      <div className="relative max-w-4xl mx-auto px-6">
        
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-orange-500">
            سوالات متداول
          </h2>

          <p className="mt-5 text-gray-500 text-md">
            پاسخ سوالات مهم درباره کرم بیومیمتیک
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="flex  flex-col gap-4">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{
                  layout: {
                    duration: 0.5,
                    type: "spring",
                  },
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-orange-200/30
                  bg-white/20
                  backdrop-blur-2xl
                  shadow-[15px_15px_50px_rgba(255,140,0,0.08),-15px_-15px_50px_rgba(255,255,255,0.7)]
                "
              >
                {/* GLOW */}
                <div className="absolute inset-0 bg-orange-400/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    relative
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-4
                    px-4
                    py-4
                    text-right
                  "
                >
                  <span className="text-xs sm:text-sm font-bold text-orange-500">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="
                      min-w-12
                      h-12
                      rounded-full
                      bg-orange-100/60
                      border
                      border-orange-200/40
                      flex
                      items-center
                      justify-center
                      shadow-inner
                    "
                  >
                    {isOpen ? (
                      <Minus className="text-orange-500" size={20} />
                    ) : (
                      <Plus className="text-orange-500" size={20} />
                    )}
                  </motion.div>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7">
                        
                        {/* LINE */}
                        <div className="w-full h-px bg-linear-to-r from-transparent via-orange-300/50 to-transparent mb-6" />

                        <p className="text-gray-600 leading-6 text-xs sm:text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}