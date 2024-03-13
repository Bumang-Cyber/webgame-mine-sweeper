const pickTileColor = (mineNearby: number) => {
  if (mineNearby === 0) return "black";
  if (mineNearby === 1) return "blue";
  if (mineNearby === 2) return "green";
  if (mineNearby === 3) return "red";
  if (mineNearby === 4) return "darkblue";
  if (mineNearby === 5) return "purple";
  if (mineNearby === 6) return "darkmagenta";
  if (mineNearby === 7) return "sienna";
  if (mineNearby === 8) return "black";
  return "black";
};

export default pickTileColor;
