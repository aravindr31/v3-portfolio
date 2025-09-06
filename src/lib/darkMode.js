import { atom } from 'nanostores';

export const isDarkMode = atom(false);

// Initialize dark mode from localStorage or system preference
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('darkMode');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialDarkMode = stored ? stored === 'true' : systemPrefersDark;
  isDarkMode.set(initialDarkMode);
  document.documentElement.classList.toggle('dark', initialDarkMode);
}

export function toggleDarkMode() {
  isDarkMode.set(!isDarkMode.get());
  document.documentElement.classList.toggle('dark', isDarkMode.get());
  localStorage.setItem('darkMode', isDarkMode.get().toString());
}
