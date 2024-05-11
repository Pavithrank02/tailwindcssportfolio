import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//xjjds
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
