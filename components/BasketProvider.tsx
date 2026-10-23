"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { SizeKey } from "@/lib/products";

export type BasketItem = {
  id: string;
  slug: string;
  name: string;
  image: string;
  size: SizeKey;
  price: number;
  qty: number;
  deliveryDate?: string;
  message?: string;
};

type Ctx = {
  items: BasketItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (item: Omit<BasketItem, "id" | "qty">) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  count: number;
  subtotal: number;
};

const BasketContext = createContext<Ctx | null>(null);
const KEY = "sm-basket-v1";

export function BasketProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BasketItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  const add: Ctx["add"] = (item) => {
    setItems((prev) => [...prev, { ...item, id: `${item.slug}-${Date.now()}`, qty: 1 }]);
    setOpen(true);
  };
  const remove = (id: string) => setItems((p) => p.filter((i) => i.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems((p) => p.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)));

  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);

  return (
    <BasketContext.Provider value={{ items, open, setOpen, add, remove, setQty, count, subtotal }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  const ctx = useContext(BasketContext);
  if (!ctx) throw new Error("useBasket must be used inside BasketProvider");
  return ctx;
}
