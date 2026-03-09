import React, { useState } from 'react';
import { Search, Settings, Play, Star, HardDrive, Gamepad2, Smartphone, Compass, Hexagon } from 'lucide-react';

const trendingApps = [
  { id: 1, name: 'Undress AI', category: 'Apps', icon: 'https://picsum.photos/seed/app1/200' },
  { id: 2, name: 'Uber Eats', category: 'Apps', icon: 'https://picsum.photos/seed/app2/200' },
  { id: 3, name: 'SpongeBob: ...', category: 'Games', icon: 'https://picsum.photos/seed/app3/200' },
];

const newGames = [
  { id: 1, name: 'Metal Slug: Awakening', size: '93mb', rating: '5.0', icon: 'https://picsum.photos/seed/game1/200' },
  { id: 2, name: 'SpongeBob: Krusty Cook-...', size: '75mb', rating: '5.0', icon: 'https://picsum.photos/seed/game2/200' },
  { id: 3, name: 'Jurassic World Alive', size: '51mb', rating: '5.0', icon: 'https://picsum.photos/seed/game3/200' },
  { id: 4, name: 'Magic Chronicle: Isekai', size: '57mb', rating: '5.0', icon: 'https://picsum.photos/seed/game4/200' },
  { id: 5, name: 'MOONVALE - Detective St...', size: '63mb', rating: '5.0', icon: 'https://picsum.photos/seed/game5/200' },
];

const newApps = [
  { id: 1, name: 'Undress AI', size: '42mb', rating: '5.0', icon: 'https://picsum.photos/seed/app4/200' },
  { id: 2, name: 'Discord nitro', size: '23mb', rating: '5.0', icon: 'https://picsum.photos/seed/app5/200' },
  { id: 3, name: 'Uber Eats', size: '44mb', rating: '5.0', icon: 'https://picsum.photos/seed/app6/200' },
  { id: 4, name: 'Bumble Dating App', size: '23mb', rating: '5.0', icon: 'https://picsum.photos/seed/app7/200' },
  { id: 5, name: 'Instagram Followers', size: '28mb', rating: '5.0', icon: 'https://picsum.photos/seed/app8/200' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Discover');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#131b2f] to-[#0a0f1c] text-slate-200 font-sans pb-24 selection:bg-pink-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#131b2f]/90 backdrop-blur-md px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-pink-500/20">
          <Hexagon className="w-6 h-6 text-white" fill="currentColor" />
        </div>
        
        <button className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 hover:bg-slate-700/50 transition-colors">
          <Settings className="w-5 h-5 text-slate-400" />
        </button>
        
        <div className="flex-1 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#1c2438] text-sm rounded-full py-2.5 pl-9 pr-4 outline-none focus:ring-2 focus:ring-pink-500/50 transition-all placeholder:text-slate-500 border border-white/5"
          />
        </div>
      </header>

      <main className="px-4 pt-4 space-y-8 max-w-md mx-auto">
        {/* Main Button */}
        <button className="w-full bg-gradient-to-r from-[#ff2a7a] to-[#ff0055] text-white font-bold py-3.5 rounded-2xl shadow-[0_0_20px_rgba(255,42,122,0.4)] hover:shadow-[0_0_25px_rgba(255,42,122,0.6)] transition-shadow active:scale-[0.98]">
          TEXT INSTRUCTIONS
        </button>

        {/* Trending Section */}
        <section>
          <h2 className="text-lg font-bold mb-4 tracking-tight">Trending</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar -mx-4 px-4">
            {trendingApps.map((app) => (
              <div key={app.id} className="snap-center shrink-0 w-[100px] bg-[#1c2438] rounded-2xl p-3 flex flex-col items-center gap-2 shadow-lg shadow-black/20 border border-white/5">
                <img src={app.icon} alt={app.name} className="w-16 h-16 rounded-xl object-cover shadow-inner" referrerPolicy="no-referrer" />
                <div className="text-center w-full">
                  <h3 className="text-xs font-medium truncate w-full text-slate-300">{app.name}</h3>
                  <div className="flex items-center justify-center gap-1 mt-1 text-[10px] text-slate-400">
                    {app.category === 'Apps' ? <Smartphone className="w-3 h-3 text-pink-500" /> : <Gamepad2 className="w-3 h-3 text-pink-500" />}
                    <span>{app.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Games Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold tracking-tight">New Games</h2>
            <button className="text-xs text-pink-500 font-medium hover:text-pink-400 transition-colors">View all</button>
          </div>
          <div className="space-y-3">
            {newGames.map((game) => (
              <div key={game.id} className="bg-[#1c2438] rounded-2xl p-3 flex items-center gap-3 shadow-lg shadow-black/20 hover:bg-[#253347] transition-colors cursor-pointer group border border-white/5">
                <img src={game.icon} alt={game.name} className="w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm" referrerPolicy="no-referrer" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium truncate text-slate-200 group-hover:text-white transition-colors">{game.name}</h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <HardDrive className="w-3.5 h-3.5 text-pink-500" />
                      <span>Size: {game.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-pink-500" />
                      <span>Rating: {game.rating}</span>
                    </div>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0 group-hover:bg-pink-500/20 transition-colors">
                  <Play className="w-4 h-4 text-pink-500 ml-0.5" fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* New Apps Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold tracking-tight">New Apps</h2>
            <button className="text-xs text-pink-500 font-medium hover:text-pink-400 transition-colors">View all</button>
          </div>
          <div className="space-y-3">
            {newApps.map((app) => (
              <div key={app.id} className="bg-[#1c2438] rounded-2xl p-3 flex items-center gap-3 shadow-lg shadow-black/20 hover:bg-[#253347] transition-colors cursor-pointer group border border-white/5">
                <img src={app.icon} alt={app.name} className="w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm" referrerPolicy="no-referrer" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium truncate text-slate-200 group-hover:text-white transition-colors">{app.name}</h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <HardDrive className="w-3.5 h-3.5 text-pink-500" />
                      <span>Size: {app.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-pink-500" />
                      <span>Rating: {app.rating}</span>
                    </div>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0 group-hover:bg-pink-500/20 transition-colors">
                  <Play className="w-4 h-4 text-pink-500 ml-0.5" fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Text */}
        <p className="text-[10px] text-slate-500 text-center leading-relaxed px-4 pb-4">
          All trademarks, service marks, trade names, trade dress, product names and logos appearing on the site are the property of their respective owners.
        </p>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 inset-x-0 bg-[#131b2f]/95 backdrop-blur-lg border-t border-white/5 pb-safe z-50">
        <div className="flex items-center justify-around p-2 max-w-md mx-auto">
          {[
            { id: 'Discover', icon: Compass },
            { id: 'Games', icon: Gamepad2 },
            { id: 'Apps', icon: Smartphone },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-pink-500/10 text-pink-500' 
                    : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className={`text-xs font-medium ${isActive ? 'block' : 'hidden sm:block'}`}>
                  {tab.id}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Custom styles for hiding scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}} />
    </div>
  );
}
