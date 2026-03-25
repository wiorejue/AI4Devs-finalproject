'use client';

import { Suspense } from 'react';
import { DialDeTiempo } from '@/components/DialDeTiempo/DialDeTiempo';
import { MoodSelector } from '@/components/MoodSelector/MoodSelector';
import { ObraCard } from '@/components/ObraCard/ObraCard';
import { useObrasFiltradas } from '@/hooks/useObrasFiltradas';

function ObrasGrid() {
  const { obras, loading, error } = useObrasFiltradas();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-48 bg-white/5 animate-pulse rounded-2xl border border-white/10" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400">
        Error al cargar el catálogo: {error}
      </div>
    );
  }

  if (obras.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-20 text-center">
        <p className="text-xl text-white/40 italic">
          "No encontramos obras que coincidan con tu tiempo y mood hoy... intenta girar el dial."
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full animate-in fade-in slide-in-from-bottom-5 duration-700">
      {obras.map((obra) => (
        <ObraCard key={obra.id} obra={obra} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-[#0a0a0a] text-white overflow-x-hidden">
      <div className="z-10 max-w-6xl w-full items-center justify-center font-sans text-sm flex text-center flex-col gap-6">
        <header className="space-y-2 mb-2">
          <h1 className="text-4xl font-black tracking-tighter sm:text-6xl bg-gradient-to-r from-white via-zinc-400 to-zinc-800 bg-clip-text text-transparent">
            late<span className="text-cyan-500">arte</span>
          </h1>
          <p className="text-sm font-light text-zinc-500 tracking-[0.3em] uppercase">
            HUB DE CURADURÍA CULTURAL
          </p>
        </header>

        <section className="w-full flex flex-col gap-8">
          {/* SECCIÓN 1: FILTRADO */}
          <div className="w-full max-w-sm mx-auto space-y-4">
            <Suspense fallback={<div className="h-48 animate-pulse bg-white/5 rounded-3xl" />}>
              <div className="space-y-4">
                <DialDeTiempo />
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[9px] text-white/20 uppercase tracking-[0.2em]">Mood</span>
                  <MoodSelector />
                </div>
              </div>
            </Suspense>
          </div>

          {/* SECCIÓN 2: RESULTADOS */}
          <section className="w-full">
            <Suspense fallback={<div className="h-64 animate-pulse bg-white/5 rounded-3xl" />}>
              <ObrasGrid />
            </Suspense>
          </section>
        </section>

        <footer className="mt-16 flex gap-4 opacity-30 hover:opacity-100 transition-opacity">
          <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-tighter">Motor de Curaduría Activo</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
