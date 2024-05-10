import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//xjjd
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
