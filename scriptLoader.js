// ======== Script Loader ========
window.addEventListener('DOMContentLoaded', () => {
    const gameScripts = document.querySelectorAll('script[type="game"]');
    gameScripts.forEach(s => {
        try {
            new Function('draw', s.innerHTML)(Game.draw);
        } catch (e) {
            console.error("Game script error:", e);
        }
    });
});
