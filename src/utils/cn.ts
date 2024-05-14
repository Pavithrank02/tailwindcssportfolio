import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//xjjdsxa
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
