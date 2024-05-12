import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//xjjdsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
