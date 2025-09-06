"use client"

import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
        : 'bg-transparent backdrop-blur-lg border-b border-white/10'
    } animate-in slide-in-from-top`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section with Dynamic Image */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={scrolled ? "/logo1.png" : "/logo.png"} 
                alt="AuraBex Solution" 
                className="h-10 w-auto object-contain transition-all duration-300 hover:brightness-110"
              />
            </Link>
          </div>

          {/* Desktop Navigation with Enhanced Animations */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 transform-gpu hover:scale-105 group animate-in fade-in slide-in-from-top-5 ${
                    isActive(item.href) 
                      ? "text-cyan-400 scale-105" 
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-400/20 opacity-0 transition-opacity duration-300 ${
                    isActive(item.href) ? 'opacity-100' : 'group-hover:opacity-100'
                  }`}></div>
                  
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                  
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Link to="/book-service">
              <Button
                variant="outline"
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 text-white border-0 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-in fade-in slide-in-from-right delay-700 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 font-semibold">Get Started</span>
              </Button>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 animate-in fade-in delay-500 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className={`relative z-10 transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
        isOpen 
          ? 'max-h-96 opacity-100 bg-black/90 backdrop-blur-xl border-b border-purple-500/20' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 space-y-2">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`group block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform-gpu hover:translate-x-2 animate-in fade-in slide-in-from-left ${
                isActive(item.href) 
                  ? "text-cyan-400 translate-x-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-400/20" 
                  : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/10 hover:via-purple-600/10 hover:to-cyan-400/10"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-1 h-6 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 rounded-full transition-all duration-300 ${
                  isActive(item.href) ? 'opacity-100 scale-100' : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'
                }`}></div>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
          
          <div className="px-4 pt-4 animate-in fade-in slide-in-from-left delay-300">
            <Link to="/book-service" onClick={() => setIsOpen(false)}>
              <Button
                variant="outline"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
              >
                <span className="font-semibold">Get Started</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation