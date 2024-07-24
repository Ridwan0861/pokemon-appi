export interface ColorsType {
  hp: { backgroundLineColor: string; lineColor: string };
  attack: { backgroundLineColor: string; lineColor: string };
  defense: { backgroundLineColor: string; lineColor: string };
  "special-attack": { backgroundLineColor: string; lineColor: string };
  "special-defense": { backgroundLineColor: string; lineColor: string };
  speed: { backgroundLineColor: string; lineColor: string };
}

const colorsType: ColorsType = {
  hp: { backgroundLineColor: "#dff6ea", lineColor: "#8576FF" },
  attack: { backgroundLineColor: "#fcdbd8", lineColor: "#f14b3d" },
  defense: { backgroundLineColor: "#fff7df", lineColor: "#E90074" },
  "special-attack": { backgroundLineColor: "#e8f6ff", lineColor: "#059212" },
  "special-defense": { backgroundLineColor: "#f8e7f3", lineColor: "#1A5319" },
  speed: { backgroundLineColor: "#ffe2d5", lineColor: "#698474" },
};

export const getColor = (type: keyof ColorsType) => {
  return colorsType[type];
};