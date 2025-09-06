import React from 'react'
import { Button } from "./ui/button"
import { Sun, Moon, Menu } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode');
      return stored ? stored === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">AR</span>
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</a>
            <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
            <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-4"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
