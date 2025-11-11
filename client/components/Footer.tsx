import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre nosotros */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="font-bold text-lg">Inmuebles Cuenca</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu portal inmobiliario de confianza en Cuenca, Ecuador. Ayudamos a encontrar el hogar perfecto para ti.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-400 transition">
                  Inicio
                </Link>
              </li>
              <li>
                <a href="#propiedades" className="text-gray-400 hover:text-orange-400 transition">
                  Propiedades
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-orange-400 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  Compra de Propiedades
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  Alquiler
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  Asesoría Inmobiliaria
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  Tasación
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Cuenca, Ecuador</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a href="tel:+593" className="text-gray-400 hover:text-orange-400 transition">
                  +593 7 282 8000
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a href="mailto:info@inmuebles.ec" className="text-gray-400 hover:text-orange-400 transition">
                  info@inmuebles.ec
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Inmuebles Cuenca. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
