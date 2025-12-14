// ======== Draw Module ========
Game.draw.sprite = function(src, x = 0, y = 0) {
    if (!Game.canvas) {
        console.warn("Canvas not initialized!");
        return;
    }
    const img = new Image();
    img.src = src;
    img.onload = () => {
        Game.context.drawImage(img, x, y);
    };
};
