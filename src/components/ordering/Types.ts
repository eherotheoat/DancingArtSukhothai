export type OrderingAll = OrderingItem[];

export type OrderingItem = {
  productName: string;
  productCode: string;
  rank: string;
  retail: number;
  gp: string;
  sales: OrderingSale[];
};

export type OrderingSale = {
  period: string;
  qty1: number;
  qty2: number;
  qty3: number;
  qty4: number;
  suggest: number;
  ord: number;
};
