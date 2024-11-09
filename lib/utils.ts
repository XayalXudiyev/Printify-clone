import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// congigId is a string, so we need to convert it to a number | path: catalog/[configId]/page.tsx
export const isValidObjectId = (id: string) => {
  return /^[0-9a-fA-F]{24}$/.test(id)
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)
}
