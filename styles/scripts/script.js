const TILE_DURATION = 5000;
const tiles = document.querySelectorAll('.tile');
const numberTiles = tiles.length;
const cycleDuration = TILE_DURATION * numberTiles;

tiles.forEach((tile, index) => {
  const initialDelay = index * TILE_DURATION;

  function animateTile() {
    tile.style.animation = 'none';
    tile.style.transform = 'none';
    tile.offsetHeight;
    tile.style.animation = '';
    tile.style.animationPlayState = 'running';
    setTimeout(() => {
      tile.style.animationPlayState = 'paused';
    }, TILE_DURATION);
    setTimeout(animateTile, cycleDuration);
  }

  setTimeout(() => {
    animateTile();
  }, initialDelay);
});