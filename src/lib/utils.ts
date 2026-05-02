export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidWhatsapp(value: string) {
  return /^[0-9+\-\s]{8,15}$/.test(value.trim());
}

export function isValidPhone(value: string) {
  if (!value.trim()) return true;
  return /^[0-9+\-\s]{8,15}$/.test(value.trim());
}
