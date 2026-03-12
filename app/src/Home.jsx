import React from 'react';
import './input.css';

export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2f6d] via-[#1e4fa3] to-[#0f2f6d] text-white relative overflow-hidden px-6">
      {/* background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />
      </div>

      {/* grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <main className="relative z-10 w-full max-w-3xl">
        <div className="text-center rounded-[32px] border border-white/20 bg-white/10 p-10 md:p-16 shadow-2xl backdrop-blur-xl">

          <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-[0.25em] uppercase text-white/80">
            Скоро запуск
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Сайт <span className="text-orange-400">в разработке</span>
          </h1>

          <p className="mt-6 text-white/80 text-lg leading-8 max-w-xl mx-auto">
            Сайт медицинского центра еще находится в разработке, но мы уже работаем над его созданием. Следите за обновлениями и готовьтесь к запуску! Спасибо за ваше терпение и поддержку!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
           
          </div>

        </div>
      </main>
    </div>
  );
}