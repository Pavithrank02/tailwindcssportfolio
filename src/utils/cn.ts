import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//xjj
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
