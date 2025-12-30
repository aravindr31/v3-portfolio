import React from 'react'
import { Button } from "./ui/button"
import { Sun, Moon, Menu, X } from "lucide-react"

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">AR</span>
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t bg-background/95 backdrop-blur">
            <nav className="container flex flex-col space-y-4 py-4">
              <a 
                href="#about" 
                className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                onClick={closeMenu}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                onClick={closeMenu}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                onClick={closeMenu}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                onClick={closeMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Desktop - Just theme toggle in top right */}
      <div className="hidden lg:block absolute top-6 right-6 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </>
  )
}
