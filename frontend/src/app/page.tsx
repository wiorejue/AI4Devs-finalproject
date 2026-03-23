export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex text-center flex-col gap-6">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          late<span className="text-zinc-500">arte</span>
        </h1>
        <p className="text-xl text-zinc-400">
          Hub de Curaduría Cultural
        </p>
        
        <div className="flex gap-4 mt-8">
          <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Backend en línea</span>
          </div>
          <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span>Frontend en línea</span>
          </div>
        </div>
      </div>
    </main>
  );
}
