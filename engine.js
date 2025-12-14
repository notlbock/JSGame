// ======== Engine Loader ========
// This file just loads the modules in order
Game.loadScript('core.js', () => {
    Game.loadScript('draw.js', () => {
        Game.loadScript('scriptLoader.js');
    });
});
