"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import img from "../../public/assets/imgs/1.png";

const videos = [
  {
    id : 1,
    src: "/biomemetic/assets/videos/11.mp4",
    title: "کلاژن",
  },
  {
    id : 2,
    src: "/biomemetic/assets/videos/12.mp4",
    title: "الاستین",
  },
  {
    id : 3,
    src: "/biomemetic/assets/videos/13.mp4",
    title: "پپتاید",
  },
  {
    id : 4,
    src: "/biomemetic/assets/videos/12.mp4",
    title: "آلفاآربیوتین",
  },
  {
    id : 5,
    src: "/biomemetic/assets/videos/11.mp4",
    title: "نیاسینامید",
  },
];

export default function StructureSection() {
  return (
    <section className="relative overflow-hidden py-14 px-4 bg-white">
      {/* MAIN ORANGE GLOW */}
      <div className="absolute   top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/20 blur-[180px] rounded-full" />

      {/* FLOAT LIGHTS */}
      <div className="absolute  top-40 left-20 w-4 h-4 rounded-full bg-orange-200 blur-sm" />
      <div className="absolute top-72 right-32 w-3 h-3 rounded-full bg-yellow-200 blur-sm" />
      <div className="absolute bottom-32 left-1/4 w-5 h-5 rounded-full bg-white blur-md" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* MAIN PHONE */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative perspective-[2000px]"
        >
          {/* ORANGE RING */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[220px] h-[220px] rounded-full border border-orange-400/30 shadow-[0_0_120px_rgba(255,140,0,0.5)]" />
          </div>

          {/* FLOATING */}
          <motion.div
            animate={{
              y: [0, -18, 0],
              rotateY: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* PHONE */}
            <div className="relative w-full h-[310px] rounded-[30px] border border-orange-300/20 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_25px_120px_rgba(255,140,0,0.35)]">
              <Image
                src={img}
                alt="phone"
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-orange-200/10" />
            </div>

            {/* SIDE GLOWS */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-28 h-72 bg-orange-500/30 blur-3xl rounded-full" />
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-28 h-72 bg-yellow-400/20 blur-3xl rounded-full" />
          </motion.div>
        </motion.div>

        {/* VIDEO SECTION */}
        <div className="relative mt-24 w-full max-w-5xl">
          <p className="w-full font-bold text-2xl  pb-10 text-center">ترکیبات اصلی کرم بیوممتیک</p>
          {/* CONNECTION LIGHT */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-orange-400/60 to-transparent blur-sm" />

          {/* TOP */}
          <div className="grid grid-cols-3 gap-8">
            {videos.slice(0, 3).map((item, index) => (
              <VideoCard
                key={index}
                video={item.src}
                title={item.title}
              />
            ))}
          </div>

          {/* BOTTOM */}
          <div className="flex justify-center gap-8 mt-8">
            {videos.slice(3, 5).map((item, index) => (
              <VideoCard
                key={index}
                video={item.src}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  video,
  title,
}: {
  video: string;
  title: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        rotateX: 8,
        rotateY: 8,
        scale: 1.03,
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative flex flex-col items-center"
    >
      {/* GLOW */}
      <div className="absolute inset-0 rounded-full bg-orange-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* CARD */}
      <div
        className="
          relative
          bg-white/5
          overflow-hidden
          rounded-full
          w-35
          h-35
          border border-orange-100/10
          backdrop-blur-2xl
          shadow-[12px_12px_30px_rgba(0,0,0,0.45),-10px_-10px_30px_rgba(255,255,255,0.03)]
        "
      >
        <div className="relative overflow-hidden w-full h-full rounded-full">
          {/* VIDEO */}
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-110"
          />

          {/* SOFT OVERLAY */}
          <div className="absolute inset-0 bg-black/10" />

          {/* LIGHT REFLECTION */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-white/20 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* TITLE */}
      <div className="mt-4 relative">
        <div className="absolute inset-0 bg-orange-400/20 blur-xl rounded-full" />

        <div
          className="
            relative
            px-5
            py-2
            rounded-full
            bg-white/70
            backdrop-blur-xl
            border
            border-orange-200/40
            text-orange-500
            text-sm
            font-bold
            shadow-[0_10px_30px_rgba(255,140,0,0.15)]
          "
        >
          {title}
        </div>
      </div>
    </motion.div>
  );
}