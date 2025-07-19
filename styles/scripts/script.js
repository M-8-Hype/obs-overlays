const TILE_DURATION = 5000;
const tiles = document.querySelectorAll('.tile');
const numberTiles = tiles.length;
const cycleDuration = TILE_DURATION * numberTiles;

// tiles.forEach((tile, index) => {
//   const run = () => {
//     const initialDelay = index * TILE_DURATION;
//     setTimeout(function loop() {
//       tile.style.animationPlayState = 'running';
//       setTimeout(() => {
//         tile.style.animationPlayState = 'paused';
//       }, TILE_DURATION);
//       setTimeout(loop, cycleDuration);
//     }, initialDelay);
//   };
//   run();
// });

tiles.forEach((tile, index) => {
  const run = () => {
    const initialDelay = index * TILE_DURATION;
    setTimeout(function loop() {
      tile.style.animation = 'none'; // Reset animation
      tile.style.transform = 'none'; // Explicitly reset transform
      tile.offsetHeight; // Force reflow
      tile.style.animation = ''; // Re-apply animation from CSS
      tile.style.animationPlayState = 'running';
      setTimeout(() => {
        tile.style.animationPlayState = 'paused';
      }, TILE_DURATION);
      setTimeout(loop, cycleDuration);
    }, initialDelay);
  };
  run();
});