


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import creamImg from "@/public/assets/imgs/InShot_20260531_182617855-removebg-preview.png";

const benefits = [
  "روشن کننده و ضد لک قوی",
  "سفت کننده و لیفت کننده پوست",
  "جوانساز و ضد چروک",
  // "فاقد مواد شیمیایی و مضر",
  "ضد جوش و کاهنده منافذ",
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-white py-10 px-2 overflow-hidden">
      <div className="w-full mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-black">
            چرا کرم بیومیمتیک؟
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* CONTENT */}
        <div className="flex items-center justify-between gap-3">

          {/* IMAGE */}
          <section className="h-full w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex-shrink-0"
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-orange-500/30 blur-[80px] rounded-full" />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="relative z-10"
              >
                <Image
                  src={creamImg}
                  alt="cream"
                  className="min-w-[200px] object-contain drop-shadow-[0_25px_70px_rgba(255,115,0,0.35)]"
                />
              </motion.div>
            </motion.div>
          </section>

          {/* BENEFITS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 space-y-3"
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                  rotateX: 8,
                  rotateY: -8,
                }}
                transition={{ duration: 0.25 }}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  rounded-[22px]
                  px-3
                  py-3
                  bg-gradient-to-b
                  from-white
                  to-[#fff4ec]
                  border
                  border-orange-100
                  shadow-[0_10px_30px_rgba(255,115,0,0.12)]
                  active:scale-[0.98]
                  overflow-hidden
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >

                {/* LIGHT EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent opacity-40 pointer-events-none" />

                {/* INNER SHADOW */}
                <div className="absolute inset-[1px] rounded-[20px] border border-white/60 pointer-events-none" />

                {/* ICON */}
                <div
                  className="
                    relative
                    z-10
                    min-w-[32px]
                    min-h-[32px]
                    rounded-full
                    bg-gradient-to-b
                    from-orange-400
                    to-orange-500
                    flex
                    items-center
                    justify-center
                    shadow-[0_6px_20px_rgba(255,115,0,0.35)]
                  "
                >
                  <Icon
                    icon="mdi:check-bold"
                    className="text-white text-sm"
                  />
                </div>

                {/* TEXT */}
                <p
                  className="
                    relative
                    z-10
                    text-xs
                    font-semibold
                    leading-4
                    text-gray-800
                  "
                >
                  {item}
                </p>

                {/* SHINE */}
                <div
                  className="
                    absolute
                    top-0
                    -left-[120%]
                    w-[80px]
                    h-full
                    bg-white/40
                    rotate-12
                    blur-xl
                    group-hover:left-[130%]
                    transition-all
                    duration-1000
                  "
                />
              </motion.div>
            ))}

            {/* BOTTOM TEXT */}
            <div className="pt-5 space-y-2">
              <p className="text-lg font-black text-orange-500">
                تاثیرات بدون بازگشت و دائمی
              </p>

              <p className="text-sm opacity-70">
                ضمانت عودت وجه
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}