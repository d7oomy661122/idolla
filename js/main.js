const trendingApps = [
  { id: 1, name: 'Undress AI', category: 'Apps', icon: 'https://picsum.photos/seed/app1/200' },
  { id: 2, name: 'Uber Eats', category: 'Apps', icon: 'https://picsum.photos/seed/app2/200' },
  { id: 3, name: 'SpongeBob: ...', category: 'Games', icon: 'https://picsum.photos/seed/app3/200' },
];

const gamesList = [
  { id: 1, name: 'Metal Slug: Awakening', size: '93mb', rating: '5.0', icon: 'https://picsum.photos/seed/game1/200' },
  { id: 2, name: 'SpongeBob: Krusty Cook-...', size: '75mb', rating: '5.0', icon: 'https://picsum.photos/seed/game2/200' },
  { id: 3, name: 'Jurassic World Alive', size: '51mb', rating: '5.0', icon: 'https://picsum.photos/seed/game3/200' },
  { id: 4, name: 'Magic Chronicle: Isekai', size: '57mb', rating: '5.0', icon: 'https://picsum.photos/seed/game4/200' },
  { id: 5, name: 'MOONVALE - Detective St...', size: '63mb', rating: '5.0', icon: 'https://picsum.photos/seed/game5/200' },
];

const appsList = [
  { id: 1, name: 'Undress AI', size: '42mb', rating: '5.0', icon: 'https://picsum.photos/seed/app4/200' },
  { id: 2, name: 'Discord nitro', size: '23mb', rating: '5.0', icon: 'https://picsum.photos/seed/app5/200' },
  { id: 3, name: 'Uber Eats', size: '44mb', rating: '5.0', icon: 'https://picsum.photos/seed/app6/200' },
  { id: 4, name: 'Bumble Dating App', size: '23mb', rating: '5.0', icon: 'https://picsum.photos/seed/app7/200' },
  { id: 5, name: 'Instagram Followers', size: '28mb', rating: '5.0', icon: 'https://picsum.photos/seed/app8/200' },
];

function createTrendingCard(app) {
    const iconName = app.category === 'Apps' ? 'smartphone' : 'gamepad-2';
    return `
        <div class="snap-center shrink-0 w-[100px] bg-[#1c2438] rounded-2xl p-3 flex flex-col items-center gap-2 shadow-lg shadow-black/20 border border-white/5">
            <img src="${app.icon}" alt="${app.name}" class="w-16 h-16 rounded-xl object-cover shadow-inner" referrerpolicy="no-referrer">
            <div class="text-center w-full">
                <h3 class="text-xs font-medium truncate w-full text-slate-300">${app.name}</h3>
                <div class="flex items-center justify-center gap-1 mt-1 text-[10px] text-slate-400">
                    <i data-lucide="${iconName}" class="w-3 h-3 text-pink-500"></i>
                    <span>${app.category}</span>
                </div>
            </div>
        </div>
    `;
}

function createListItemCard(item) {
    return `
        <div class="bg-[#1c2438] rounded-2xl p-3 flex items-center gap-3 shadow-lg shadow-black/20 hover:bg-[#253347] transition-colors cursor-pointer group border border-white/5">
            <img src="${item.icon}" alt="${item.name}" class="w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm" referrerpolicy="no-referrer">
            <div class="flex-1 min-w-0">
                <h3 class="text-sm font-medium truncate text-slate-200 group-hover:text-white transition-colors">${item.name}</h3>
                <div class="flex items-center gap-3 mt-1.5 text-xs text-slate-400">
                    <div class="flex items-center gap-1">
                        <i data-lucide="hard-drive" class="w-3.5 h-3.5 text-pink-500"></i>
                        <span>Size: ${item.size}</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <i data-lucide="star" class="w-3.5 h-3.5 text-pink-500"></i>
                        <span>Rating: ${item.rating}</span>
                    </div>
                </div>
            </div>
            <button class="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0 group-hover:bg-pink-500/20 transition-colors">
                <i data-lucide="play" class="w-4 h-4 text-pink-500 ml-0.5" fill="currentColor"></i>
            </button>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const trendingContainer = document.getElementById('trending-container');
    if (trendingContainer) {
        trendingContainer.innerHTML = trendingApps.map(createTrendingCard).join('');
    }

    const newGamesContainer = document.getElementById('new-games-container');
    if (newGamesContainer) {
        newGamesContainer.innerHTML = gamesList.slice(0, 2).map(createListItemCard).join('');
    }

    const newAppsContainer = document.getElementById('new-apps-container');
    if (newAppsContainer) {
        newAppsContainer.innerHTML = appsList.slice(0, 2).map(createListItemCard).join('');
    }

    const gamesListContainer = document.getElementById('games-list-container');
    if (gamesListContainer) {
        gamesListContainer.innerHTML = gamesList.map(createListItemCard).join('');
    }

    const appsListContainer = document.getElementById('apps-list-container');
    if (appsListContainer) {
        appsListContainer.innerHTML = appsList.map(createListItemCard).join('');
    }

    if (window.lucide) {
        lucide.createIcons();
    }
});
