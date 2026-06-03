
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import card1 from "../../public/assets/imgs/a1.jpg";
import card2 from "../../public/assets/imgs/a1.jpg";
import card3 from "../../public/assets/imgs/a3.jpg";

const cards = [
  {
    title: "بارکد و اصالت کالا ✅",
    image: card1,
  },
  {
    title: "سیب سلامت ✅",
    image: card2,
  },
  {
    title: "تأییدیه سازمان غذا دارو ✅",
    image: card3,
  },
];

export default function GlassCardsStack() {
  const [active, setActive] = useState(0);

  const nextCard = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setActive((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden flex items-center justify-center">
      
      {/* BG GLOW */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-orange-400/10 blur-[180px]" />

      {/* FLOAT LIGHT */}
      <div className="absolute top-20 left-20 w-5 h-5 rounded-full bg-orange-300 blur-sm animate-pulse" />
      <div className="absolute bottom-20 right-20 w-4 h-4 rounded-full bg-yellow-300 blur-sm animate-pulse" />

      {/* TITLE */}
      <h2 className="absolute top-5 text-3xl font-extrabold text-orange-500">
        مشاهده کنید
      </h2>

      {/* STACK AREA */}
      <div className="relative w-[320px] h-[560px] flex flex-col items-center justify-center">
        
        {cards.map((card, index) => {
          const position =
            (index - active + cards.length) % cards.length;

          return (
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) {
                  nextCard();
                }

                if (info.offset.x > 60) {
                  prevCard();
                }
              }}
              animate={{
                scale:
                  position === 0
                    ? 1
                    : position === 1
                    ? 0.92
                    : 0.84,

                y:
                  position === 0
                    ? 0
                    : position === 1
                    ? 25
                    : 50,

                opacity:
                  position === 0
                    ? 1
                    : position === 1
                    ? 0.7
                    : 0.45,

                zIndex:
                  position === 0
                    ? 30
                    : position === 1
                    ? 20
                    : 10,
              }}
              transition={{
                duration: 0.55,
                ease: "easeInOut",
              }}
              className="absolute cursor-grab active:cursor-grabbing"
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-orange-400/20 blur-3xl rounded-[40px]" />

              {/* CARD */}
              <div
                className="
                  relative
                  w-[300px]
                  h-[400px]
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-orange-200/30
                  bg-white/20
                  backdrop-blur-3xl
                  shadow-[0_25px_80px_rgba(255,140,0,0.2)]
                "
              >
                {/* IMAGE */}
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-orange-100/10" />

                {/* SHINE */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
              </div>

              {/* TEXT */}
              {position === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center mt-6"
                >
                  <div
                    className="
                      px-6
                      py-3
                      rounded-full
                      bg-white/70
                      backdrop-blur-xl
                      border
                      border-orange-200/40
                      text-orange-500
                      font-bold
                      shadow-[0_10px_40px_rgba(255,140,0,0.15)]
                    "
                  >
                    {card.title}
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}

        {/* SWIPE INDICATOR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.5, 1, 0.5],
            y: [0, 6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute -bottom-6 flex flex-col items-center gap-4"
        >
          {/* DOTS */}
          <div className="flex items-center gap-3">
            {cards.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActive(index)}
                animate={{
                  width: active === index ? 28 : 10,
                  opacity: active === index ? 1 : 0.4,
                }}
                className={`
                  h-[10px]
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    active === index
                      ? "bg-orange-400 shadow-[0_0_20px_rgba(255,140,0,0.6)]"
                      : "bg-orange-200"
                  }
                `}
              />
            ))}
          </div>

          {/* SWIPE TEXT */}
          <div className="flex items-center gap-3 text-orange-400 text-sm font-medium">
            
            <motion.span
              animate={{ x: [-4, 4, -4] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              ←
            </motion.span>

            اسکرول کنید

            <motion.span
              animate={{ x: [4, -4, 4] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              →
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

