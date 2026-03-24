'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DURACIONES = [5, 10, 15, 30, 45, 60, 90, 120];

export const DialDeTiempo = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Buscar el índice inicial basado en el query param
  const initialValue = Number(searchParams.get('duracion_max')) || 30;
  const initialIndex = DURACIONES.findIndex((v) => v >= initialValue);
  const [index, setIndex] = useState(initialIndex !== -1 ? initialIndex : 3);

  const value = DURACIONES[index];

  // Actualizar URL con debounce manual (aquí simulado por la interacción)
  const updateUrl = useCallback(
    (val: number) => {
      const params = new URLSearchParams(searchParams);
      if (val) {
        params.set('duracion_max', val.toString());
      } else {
        params.delete('duracion_max');
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(e.target.value);
    setIndex(newIndex);
    updateUrl(DURACIONES[newIndex]);
  };

  const formatText = (min: number) => {
    if (min < 60) return `${min} min`;
    if (min === 60) return `1 hora`;
    if (min === 120) return `2+ horas`;
    return `${Math.floor(min / 60)}h ${min % 60}m`;
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-8 bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex items-center gap-3 mb-6">
        <div className="p-2 bg-white/5 rounded-full border border-white/10">
          <Clock className="w-5 h-5 text-cyan-400" />
        </div>
        <h3 className="text-sm font-medium tracking-widest text-white/50 uppercase">Dial de Tiempo</h3>
      </div>

      <div className="relative w-full max-w-xs flex flex-col items-center">
        {/* Value Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className="text-5xl font-bold text-white mb-2 tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            {formatText(value)}
          </motion.div>
        </AnimatePresence>
        
        <p className="text-xs text-white/40 mb-10 text-center">
          "Contenido curado para tu tiempo disponible"
        </p>

        {/* Custom Slider */}
        <div className="relative w-full h-12 flex items-center">
          <input
            type="range"
            min="0"
            max={DURACIONES.length - 1}
            step="1"
            value={index}
            onChange={handleChange}
            className="absolute inset-0 w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-cyan-500 outline-none hover:bg-white/20 transition-colors"
          />
          
          {/* Ticks */}
          <div className="absolute inset-0 flex justify-between items-center pointer-events-none px-1">
            {DURACIONES.map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "w-1 h-1 rounded-full transition-all duration-300",
                  i <= index ? "bg-cyan-400 scale-125 shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "bg-white/20"
                )}
              />
            ))}
          </div>
        </div>

        {/* Labels below slider */}
        <div className="flex justify-between w-full mt-4 invisible sm:visible">
          <span className="text-[10px] text-white/30">CORTOS</span>
          <span className="text-[10px] text-white/30">LARGOMETRAJES</span>
        </div>
      </div>
    </div>
  );
};
