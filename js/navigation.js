const navItems = [
    { id: 'index', name: 'Discover', icon: 'compass', href: 'index.html' },
    { id: 'games', name: 'Games', icon: 'gamepad-2', href: 'games.html' },
    { id: 'apps', name: 'Apps', icon: 'smartphone', href: 'apps.html' }
];

document.addEventListener('DOMContentLoaded', () => {
    const bottomNav = document.getElementById('bottom-nav');
    if (!bottomNav) return;

    const path = window.location.pathname;
    let activeId = 'index';
    if (path.includes('games.html')) activeId = 'games';
    else if (path.includes('apps.html')) activeId = 'apps';

    const navHTML = navItems.map(tab => {
        const isActive = activeId === tab.id;
        const activeClasses = isActive 
            ? 'bg-pink-500/10 text-pink-500' 
            : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/50';
        
        const textDisplay = isActive ? 'block' : 'hidden sm:block';

        return `
            <a href="${tab.href}" class="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${activeClasses}">
                <i data-lucide="${tab.icon}" class="w-5 h-5"></i>
                <span class="text-xs font-medium ${textDisplay}">${tab.name}</span>
            </a>
        `;
    }).join('');

    bottomNav.innerHTML = navHTML;

    if (window.lucide) {
        lucide.createIcons();
    }
});
