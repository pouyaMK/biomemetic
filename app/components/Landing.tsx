

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import img1 from "@/public/assets/imgs/InShot_20260531_182617855-removebg-preview.png"
import img2 from "@/public/assets/imgs/InShot_20260531_182633539-removebg-preview.png"
import img3 from "@/public/assets/imgs/InShot_20260531_182650031-removebg-preview.png"

const features = [
  "چروک",
  "لک و تیرگی",
  "منافذ و اسکار",
  "جوش و کک و مک",
];

export default function BiomimeticHero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="w-full min-h-screen bg-white overflow-hidden">
      {/* ========================= */}
      {/* VIDEO / BANNER */}
      {/* ========================= */}

      <div className="relative w-full h-[45vh] md:h-[70vh] overflow-hidden bg-zinc-100">
        {/* Skeleton */}
        {!videoLoaded && (
          <div className="absolute inset-0 animate-pulse  from-zinc-200 via-zinc-100 to-zinc-200 z-10" />
        )}

        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`
            w-full
            h-full
            object-cover
            transition-opacity
            duration-700
            ${videoLoaded ? "opacity-100" : "opacity-0"}
          `}
        >
          <source src="/videos/cream-banner.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-20" />

        {/* Banner Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-white
              text-3xl
              md:text-6xl
              font-black
              text-center
              leading-tight
            "
          >
            زیبایی طبیعی با کرم بیوممتیک
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="
              mt-5
              text-white/90
              text-sm
              md:text-lg
              max-w-2xl
              text-center
              leading-8
            "
          >
            درمان تخصصی لک، چروک، منافذ و مشکلات پوستی با فرمول
            حرفه‌ای ایتالیایی
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 text-right"
          >
            <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-xs font-semibold">
              محصول تخصصی مراقبت پوست
            </span>

            <h2 className="mt-6 text-2xl md:text-5xl font-black text-zinc-900 leading-tight">
              کرم بیوممتیک ایتالیایی
            </h2>

            <p className="mt-6 text-zinc-600 leading-6 text-sm">
              کرم بیوممتیک با فرمول پیشرفته ایتالیایی، به بازسازی پوست،
              کاهش لک، چروک و بهبود بافت پوست کمک می‌کند. این محصول با
              ترکیبات تخصصی باعث شفافیت، لطافت و جوان‌سازی پوست شده و
              مناسب انواع پوست می‌باشد.
            </p>

            {/* BUTTONS */}
            <div className="grid grid-cols-2 gap-4 mt-10">
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
                    rounded-2xl
                    bg-gradient-to-br
                    from-orange-100
                    to-orange-200
                    px-6
                    py-5
                    text-orange-700
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
                      bg-white/40
                      skew-x-12
                    "
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-[320px] h-[420px] md:w-[450px] md:h-[550px]">
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
              <div className="absolute inset-0 blur-3xl bg-orange-200/50 rounded-full scale-110" />

              {/* Floating Image */}
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

              {/* Image Label */}
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
                "
              >
                <p className="text-orange-600 rounded-4xl text-nowrap font-bold text-xs ">
                  کرم بیوممتیک ایتالیایی اصل
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}