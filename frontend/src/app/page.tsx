import { Suspense } from 'react';
import { DialDeTiempo } from '@/components/DialDeTiempo/DialDeTiempo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#0a0a0a] text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-sans text-sm flex text-center flex-col gap-12">
        <header className="space-y-4">
          <h1 className="text-6xl font-black tracking-tighter sm:text-8xl bg-gradient-to-r from-white via-zinc-400 to-zinc-800 bg-clip-text text-transparent">
            late<span className="text-cyan-500">arte</span>
          </h1>
          <p className="text-2xl font-light text-zinc-500 tracking-widest">
            HUE DE CURADURÍA CULTURAL
          </p>
        </header>

        <section className="w-full max-w-md mx-auto">
          <Suspense fallback={<div className="h-64 animate-pulse bg-white/5 rounded-3xl" />}>
            <DialDeTiempo />
          </Suspense>
        </section>

        <div className="flex gap-4 opacity-50 hover:opacity-100 transition-opacity">
          <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-tighter">Motor de Curaduría Activo</span>
          </div>
        </div>
      </div>
    </main>
  );
}
