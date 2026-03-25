'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, ExternalLink, Trophy } from 'lucide-react';
import { AccesoIndicator } from '../AccesoIndicator/AccesoIndicator';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Obra {
  id: string;
  titulo: string;
  director?: string;
  duracion_min: number;
  vibe_mood?: string;
  estado_acceso: 'ABIERTO' | 'SUSCRIPCION' | 'VOD';
  plataforma: {
    nombre: string;
    logo_url?: string;
    permite_iframe: boolean;
  };
  hitos?: {
    nombre: string;
    anio?: number;
  }[];
}

interface ObraCardProps {
  obra: Obra;
  onSave?: (id: string) => void;
  isSaved?: boolean;
}

export const ObraCard = ({ obra, onSave, isSaved }: ObraCardProps) => {
  const primaryHito = obra.hitos?.[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] text-left"
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header: Platform + Badges */}
        <div className="flex justify-between items-start mb-4 gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">
              {obra.plataforma.nombre}
            </span>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <AccesoIndicator estado={obra.estado_acceso} />
            {obra.plataforma.permite_iframe && (
              <div className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 text-[8px] uppercase font-bold tracking-widest rounded border border-cyan-500/20 whitespace-nowrap">
                En Reproductor
              </div>
            )}
          </div>
        </div>

        {/* Title & Director */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white line-clamp-2 leading-tight group-hover:text-cyan-400 transition-colors">
            {obra.titulo}
          </h3>
          <p className="text-sm text-white/50 mt-2 italic font-light">
            {obra.director || 'Director Desconocido'}
          </p>
        </div>

        {/* Hito / Badge */}
        {primaryHito && (
          <div className="mb-6 flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-lg max-w-fit">
            <Trophy className="w-3 h-3 text-amber-500" />
            <span className="text-[10px] font-medium text-amber-200 uppercase tracking-wide">
              {primaryHito.nombre} {primaryHito.anio && `(${primaryHito.anio})`}
            </span>
          </div>
        )}

        {/* Info Grid */}
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-white/20">Duración</span>
            <span className="text-sm font-medium text-white/80">{obra.duracion_min} min</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onSave?.(obra.id)}
              className={cn(
                "p-2.5 rounded-full border transition-all duration-300",
                isSaved 
                  ? "bg-cyan-500 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]" 
                  : "bg-white/5 border-white/10 text-white/40 hover:text-white hover:bg-white/10"
              )}
            >
              <Bookmark className="w-4 h-4" />
            </button>
            
            <button className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Hover Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};
