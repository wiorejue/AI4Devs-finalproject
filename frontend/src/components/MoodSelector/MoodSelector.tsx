'use client';

import React, { useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { MOODS } from '@/utils/moods';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MoodSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedMood = searchParams.get('mood');

  const toggleMood = useCallback(
    (moodId: string) => {
      const params = new URLSearchParams(searchParams);
      if (selectedMood === moodId) {
        params.delete('mood');
      } else {
        params.set('mood', moodId);
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router, selectedMood]
  );

  return (
    <div className="flex flex-wrap justify-center gap-2 p-2">
      {MOODS.map((mood) => {
        const isSelected = selectedMood === mood.id;
        const Icon = mood.icon;

        return (
          <motion.button
            key={mood.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleMood(mood.id)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300",
              "border border-white/5 backdrop-blur-md",
              isSelected
                ? "bg-white/10 border-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.05)]"
                : "bg-black/20 text-white/30 hover:text-white/50 hover:bg-white/5"
            )}
          >
            <Icon size={12} className={cn(isSelected ? mood.color : "text-white/20")} />
            {mood.label}
            {isSelected && (
              <motion.div
                layoutId="active-mood"
                className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]"
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};
