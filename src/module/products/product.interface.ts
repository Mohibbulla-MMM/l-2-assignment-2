export type TProductVariants = {
  type: string;
  value: string;
};

export type TProductInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: [TProductVariants];
  inventory: TProductInventory;
};
