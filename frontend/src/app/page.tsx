'use client';

import { Suspense } from 'react';
import { User, LogOut } from 'lucide-react';
import { DialDeTiempo } from '@/components/DialDeTiempo/DialDeTiempo';
import { MoodSelector } from '@/components/MoodSelector/MoodSelector';
import { ObraCard } from '@/components/ObraCard/ObraCard';
import { LoginModal } from '@/components/LoginModal/LoginModal';
import { useObrasFiltradas } from '@/hooks/useObrasFiltradas';
import { useWatchlist } from '@/hooks/useWatchlist';
import { useAuth } from '@/context/AuthContext';

function Header() {
  const { user, isAuthenticated, openLoginModal, logout } = useAuth();

  return (
    <header className="w-full flex justify-between items-center mb-12">
      <div className="space-y-1 text-left">
        <h1 className="text-3xl font-black tracking-tighter bg-gradient-to-r from-white via-zinc-400 to-zinc-800 bg-clip-text text-transparent">
          late<span className="text-cyan-500">arte</span>
        </h1>
        <p className="text-[10px] font-light text-zinc-500 tracking-[0.3em] uppercase">
          HUB DE CURADURÍA CULTURAL
        </p>
      </div>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <div className="flex items-center gap-4 p-1 px-4 bg-white/5 border border-white/10 rounded-full">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Bienvenido</span>
              <span className="text-sm font-medium text-white">{user?.nombre}</span>
            </div>
            <button 
              onClick={logout}
              className="p-2 hover:bg-white/5 rounded-full text-white/20 hover:text-red-400 transition-colors"
              title="Cerrar sesión"
            >
              <LogOut size={18} />
            </button>
          </div>
        ) : (
          <button 
            onClick={openLoginModal}
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
          >
            <User size={16} /> Entrar
          </button>
        )}
      </div>
    </header>
  );
}

function ObrasGrid() {
  const { obras, loading, error } = useObrasFiltradas();
  const { isSaved, toggleWatchlist } = useWatchlist();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-[300px] animate-pulse bg-white/5 rounded-2xl" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-12 bg-red-500/10 border border-red-500/20 rounded-2xl w-full">
        <p className="text-red-400">Error: {error}</p>
      </div>
    );
  }

  if (obras.length === 0) {
    return (
      <div className="text-center p-12 bg-white/5 border border-white/10 rounded-2xl w-full">
        <p className="text-white/40 italic">
          "No encontramos obras que coincidan con tu tiempo y mood hoy... intenta girar el dial."
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-24">
      {obras.map((obra) => (
        <ObraCard 
          key={obra.id} 
          obra={obra} 
          isSaved={isSaved(obra.id)}
          onToggleWatchlist={toggleWatchlist}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-[#0a0a0a] text-white overflow-x-hidden">
      <div className="z-10 max-w-6xl w-full items-center justify-center font-sans text-sm flex text-center flex-col gap-6">
        <Header />

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
          
          <LoginModal />

          {/* SECCIÓN 2: RESULTADOS */}
          <section className="w-full">
            <Suspense fallback={<div>Cargando catálogo...</div>}>
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
