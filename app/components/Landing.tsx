

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// import img1 from "@/public/assets/imgs/InShot_20260531_182617855-removebg-preview.png"
import img2 from "@/public/assets/imgs/InShot_20260531_182633539-removebg-preview.png";
// import img3 from "@/public/assets/imgs/InShot_20260531_182650031-removebg-preview.png"

const features = [
  "چروک",
  "لک و تیرگی",
  "منافذ و اسکار",
  "جوش و کک و مک",
];

export default function BiomimeticHero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      dir="ltr"
      className="w-full min-h-screen bg-white overflow-hidden"
    >
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          text-black
          text-3xl
          md:text-6xl
          mt-6
          font-black
          text-center
          leading-tight
        "
      >
        زیبایی طبیعی با کرم بیوممتیک
      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="
          mt-3
          text-orange-600
          text-sm
          md:text-lg
          max-w-2xl
          mx-auto
          text-center
          leading-7
          px-4
        "
      >
        درمان تخصصی لک، چروک، منافذ و مشکلات پوستی با فرمول
        حرفه‌ای ایتالیایی
      </motion.p>

      {/* IMAGE SECTION */}
      <div className="max-w-6xl mx-auto ">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center w-full"
          >
            <div className="relative w-full max-w-[700px] h-[500px]">

              {/* BUBBLE 1 */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  top-24
                  left-32
                  w-16
                  h-16
                  rounded-full
                  scale-90
                  opacity-80
                  bg-gradient-to-br
                  from-white/80
                  to-orange-200/40
                  backdrop-blur-xl
                  border
                  border-white/40
                  shadow-2xl
                  z-10
                "
              >
                <div className="absolute top-2 left-3 w-3 h-3 bg-white rounded-full blur-[1px]" />
              </motion.div>

              {/* BUBBLE 2 */}
              <motion.div
                animate={{
                  y: [0, 14, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-32
                  right-28
                  w-11
                  h-11
                  rounded-full
                  opacity-70
                  bg-gradient-to-br
                  from-orange-100
                  to-white/50
                  backdrop-blur-lg
                  border
                  border-white/30
                  shadow-xl
                  z-10
                "
              >
                <div className="absolute top-1 left-2 w-2 h-2 bg-white rounded-full blur-[1px]" />
              </motion.div>

              {/* BUBBLE 3 */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  top-[42%]
                  right-24
                  w-20
                  h-20
                  rounded-full
                  opacity-75
                  bg-gradient-to-br
                  from-orange-200/40
                  to-white/40
                  backdrop-blur-xl
                  border
                  border-white/30
                  shadow-2xl
                  z-10
                "
              >
                <div className="absolute top-3 left-4 w-4 h-4 bg-white/80 rounded-full blur-[2px]" />
              </motion.div>

              {/* MINI BUBBLE */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  x: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  top-[58%]
                  left-40
                  w-6
                  h-6
                  rounded-full
                  bg-white/50
                  backdrop-blur-md
                  border
                  border-white/40
                  shadow-lg
                  z-10
                "
              />

              {/* Skeleton */}
              {!imageLoaded && (
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[40px]
                    animate-pulse
                    bg-gradient-to-r
                    from-orange-100
                    via-orange-50
                    to-orange-100
                  "
                />
              )}

              {/* Glow */}
              <div className="absolute inset-0 blur-3xl bg-orange-200/60 rounded-full scale-110" />

              {/* IMAGE */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative w-full h-full"
              >
                <Image
                  src={img2}
                  alt="کرم بیوممتیک ایتالیایی"
                  fill
                  onLoad={() => setImageLoaded(true)}
                  className={`
                    object-contain
                    drop-shadow-2xl
                    transition-opacity
                    duration-700
                    ${imageLoaded ? "opacity-100" : "opacity-0"}
                  `}
                />
              </motion.div>

              {/* LABEL */}
              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  bg-white/90
                  backdrop-blur-md
                  px-5
                  py-3
                  rounded-2xl
                  shadow-xl
                  border
                  border-orange-100
                  z-20
                "
              >
                <p className="text-orange-600 text-nowrap font-bold text-xs">
                  کرم بیوممتیک ایتالیایی اصل
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="grid grid-cols-2 gap-4 mt-10 px-5 max-w-md mx-auto">
        {features.map((item, index) => (
          <motion.button
            key={index}
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{ scale: 0.96 }}
            className="
              relative
              overflow-hidden
              text-sm
              rounded-full
              cursor-pointer
              bg-gradient-to-br
              from-orange-50/50
              to-orange-200
              px-5
              py-4
              font-bold
              shadow-lg
              border
              border-orange-200
            "
          >
            <span className="relative z-10">{item}</span>

            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
              className="
                absolute
                top-0
                left-0
                w-1/2
                h-full
                bg-white/40
                skew-x-12
              "
            />
          </motion.button>
        ))}
      </div>
    </section>
  );
}