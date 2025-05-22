"use client";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Spotlight } from "./ui/Spotlight";

export function ContainerTextFlipDemo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="pb-20 pt-10">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="grey"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="white"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="darkred"
        />
      </div>

      <div className="flex flex-col justify-center items-center h-screen gap-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="relative w-64 h-64 rounded-full overflow-hidden"
        >
          <img
            src="/rushdy14.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          />
        </motion.div>
        <div className="flex items-center gap-2">
          <span className="text-7xl font-['Gathenia'] text-white">
            I will make you
          </span>
          <ContainerTextFlip
            words={["better", "modern", "Tyler Durden", "awesome"]}
            textClassName="font-['Gathenia']"
          />
        </div>
      </div>
    </div>
  );
}
