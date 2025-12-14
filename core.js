// ======== Core ========
window.Game = {
    canvas: null,
    context: null,
    draw: {}, // draw module will attach here
    scripts: {},
    loadScript: function(url, callback) {
        const script = document.createElement('script');
        script.src = url;
        script.onload = callback;
        document.head.appendChild(script);
    }
};

// Initialize canvas
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    Game.canvas = canvas;
    Game.context = canvas.getContext('2d');
});
