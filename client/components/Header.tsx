import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="border-b border-gray-100 py-2 md:py-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 text-xs md:text-sm text-gray-600">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6">
              <div className="flex items-center gap-1 md:gap-2">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-orange-500 flex-shrink-0" />
                <span className="truncate">Cuenca, Ecuador</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Phone className="w-3 h-3 md:w-4 md:h-4 text-orange-500 flex-shrink-0" />
                <a href="tel:+593" className="hover:text-orange-500 truncate">
                  +593 7 282 8000
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-orange-500 flex-shrink-0" />
              <a href="mailto:info@inmuebles.ec" className="hover:text-orange-500 truncate">
                info@inmuebles.ec
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Inmuebles Cuenca Logo"
              className="h-16 w-auto object-contain"
            />
            {/* <div className="hidden sm:block">
              <div className="font-bold text-lg text-gray-900">Inmuebles Cuenca</div>
              <div className="text-xs text-gray-500">Tu portal inmobiliario</div>
            </div> */}
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium transition">
              Inicio
            </Link>
            <Link to="/properties" className="text-gray-700 hover:text-orange-500 font-medium transition">
              Propiedades
            </Link>
            <a href="#servicios" className="text-gray-700 hover:text-orange-500 font-medium transition">
              Servicios
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-orange-500 font-medium transition">
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/properties" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium">
                Ver Propiedades
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-500 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <nav className="py-4 space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition rounded-lg"
              >
                Inicio
              </Link>
              <Link
                to="/properties"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition rounded-lg"
              >
                Propiedades
              </Link>
              <a
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition rounded-lg"
              >
                Servicios
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition rounded-lg"
              >
                Contacto
              </a>
              <div className="px-4 pt-2 sm:hidden">
                <Link to="/properties" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium">
                    Ver Propiedades
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
