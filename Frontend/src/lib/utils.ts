import { clsx, type ClassValue } from "clsx"
import { formatDistanceToNow } from "date-fns";
import _ from "lodash";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export function generateYearArray(startYear: number) {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = currentYear; year >= startYear; year--) {
    years.push(year);
  }

  return years;
}

export function properCase(str: string): string {
  return str.toLowerCase().split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

export function timeAgo(created: string) {
  return formatDistanceToNow(new Date(created), { addSuffix: true });
}

export function formatPrice(price: number): string {
  const priceString = price.toString();
  const chunks = _.chunk(priceString.split('').reverse(), 3);
  return chunks.map(chunk => chunk.reverse().join('')).reverse().join('');
}