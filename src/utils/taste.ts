export type LabelType = {
  sweet: string;
  savory: string;
  spicy: string;
}

export const labels: LabelType = {
  sweet: "달달",
  savory: "짭짤",
  spicy: "매콤",
};

export const getTasteLabel = (name: keyof LabelType): string => labels[name];