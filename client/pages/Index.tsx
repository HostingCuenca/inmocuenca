import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, Award, Clock, Users, Building2, CreditCard, FileText, Home } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Hero background images for carousel
const heroImages = [
  "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
  "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg",
  "https://images.pexels.com/photos/4832514/pexels-photo-4832514.jpeg",
  "https://images.pexels.com/photos/34687846/pexels-photo-34687846.jpeg",
  "https://images.pexels.com/photos/7587884/pexels-photo-7587884.jpeg",
];

const properties = [
  {
    id: 1,
    title: "Proyecto Bosques de Monay",
    price: 185000,
    location: "Monay, Cuenca",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    type: "Casa",
  },
  {
    id: 2,
    title: "Edificio San Joaquín Premium",
    price: 165000,
    location: "San Joaquín, Cuenca",
    image: "https://images.pexels.com/photos/4832514/pexels-photo-4832514.jpeg",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    type: "Apartamento",
  },
  {
    id: 3,
    title: "Urbanización Quinta Los Lagos",
    price: 245000,
    location: "Av. Ordóñez Lasso, Cuenca",
    image: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg",
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    type: "Villa",
  },
  {
    id: 4,
    title: "Torres del Río - Sector Ricaurte",
    price: 135000,
    location: "Ricaurte, Cuenca",
    image: "https://images.pexels.com/photos/20025581/pexels-photo-20025581.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    type: "Apartamento",
  },
  {
    id: 5,
    title: "Conjunto El Cebollar",
    price: 198000,
    location: "El Cebollar, Cuenca",
    image: "https://images.pexels.com/photos/34687846/pexels-photo-34687846.jpeg",
    bedrooms: 3,
    bathrooms: 2,
    area: 160,
    type: "Casa",
  },
  {
    id: 6,
    title: "Residencial Turi Alto",
    price: 220000,
    location: "Turi, Cuenca",
    image: "https://images.pexels.com/photos/7587884/pexels-photo-7587884.jpeg",
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    type: "Casa",
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate hero background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Background carousel images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-30" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Encuentra tu Hogar Perfecto
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                en Cuenca
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Descubre las mejores propiedades disponibles en la hermosa ciudad de Cuenca, Ecuador. 
              Tu hogar ideal está a un clic de distancia.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-2 flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center px-4">
              <Search className="w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por ubicación, tipo de propiedad..."
                className="border-0 focus:ring-0 ml-2 placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold sm:px-8 py-2 rounded-xl">
              Buscar
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">150+</div>
              <p className="text-gray-300">Propiedades Disponibles</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">5K+</div>
              <p className="text-gray-300">Clientes Satisfechos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">15</div>
              <p className="text-gray-300">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir Inmuebles Cuenca?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Somos tu mejor opción para encontrar la propiedad perfecta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Propiedades Verificadas
              </h3>
              <p className="text-gray-600">
                Todas nuestras propiedades han sido cuidadosamente verificadas
                y auditadas para garantizar tu confianza.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Proceso Rápido y Seguro
              </h3>
              <p className="text-gray-600">
                Completamos trámites de compra y venta de manera eficiente,
                respetando toda la normativa legal.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Equipo Profesional
              </h3>
              <p className="text-gray-600">
                Nuestros agentes inmobiliarios certificados están listos para
                ayudarte en cada paso del proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Opciones de Financiamiento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Te ayudamos a hacer realidad tu sueño con diversas opciones de crédito y financiamiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Crédito Hipotecario
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Financiamiento hasta el 80% del valor del inmueble con tasas competitivas desde el 8.5% anual.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Plazo hasta 25 años</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Entrada desde 20%</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Crédito BIESS
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Accede a tu crédito del IESS para la compra de tu vivienda con excelentes condiciones.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Tasa preferencial</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Te asesoramos en el proceso</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Financiamiento Directo
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Planes de pago directo con la constructora sin necesidad de intermediarios bancarios.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Entrada flexible</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Cuotas personalizadas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Casa para Todos
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Programa del gobierno ecuatoriano con subsidios y bonos para vivienda.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Bono de hasta $6,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Requisitos accesibles</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  ¿Necesitas asesoría financiera?
                </h3>
                <p className="text-gray-600 mb-6">
                  Nuestros expertos en financiamiento te ayudarán a encontrar la mejor opción
                  según tu situación financiera. Trabajamos con los principales bancos y entidades
                  financieras del Ecuador.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pre-calificación crediticia gratuita</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Comparación de tasas de interés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Acompañamiento en todo el proceso</span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-6 rounded-xl text-lg">
                  Solicitar Asesoría Gratuita
                </Button>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Bancos Aliados
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800">Banco Pichincha</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800">Banco Guayaquil</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800">Banco Pacífico</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800">Produbanco</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800">Banco del Austro</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800">BIESS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Projects in Cuenca Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proyectos Inmobiliarios en Cuenca
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre los desarrollos más exclusivos en las mejores zonas de la ciudad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1 */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img
                  src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
                  alt="Bosques de Monay"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  En Construcción
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bosques de Monay
                </h3>
                <p className="text-gray-600 mb-4">
                  Exclusivo conjunto residencial en el sector de Monay. Áreas verdes, parques infantiles y seguridad 24/7.
                </p>
                <div className="flex items-center gap-2 text-orange-600 mb-4">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">Monay, Cuenca</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Desde</p>
                    <p className="text-2xl font-bold text-gray-900">$185,000</p>
                  </div>
                  <Link to="/property/1">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      Ver Más
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img
                  src="https://images.pexels.com/photos/4832514/pexels-photo-4832514.jpeg"
                  alt="San Joaquín Premium"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  Entrega Inmediata
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  San Joaquín Premium
                </h3>
                <p className="text-gray-600 mb-4">
                  Modernos departamentos cerca del parque de San Joaquín. Acabados de lujo y diseño contemporáneo.
                </p>
                <div className="flex items-center gap-2 text-orange-600 mb-4">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">San Joaquín, Cuenca</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Desde</p>
                    <p className="text-2xl font-bold text-gray-900">$165,000</p>
                  </div>
                  <Link to="/property/2">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      Ver Más
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Proyecto 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img
                  src="https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg"
                  alt="Quinta Los Lagos"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  En Construcción
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Quinta Los Lagos
                </h3>
                <p className="text-gray-600 mb-4">
                  Urbanización de lujo en Av. Ordóñez Lasso. Amplios espacios, piscina comunal y salón de eventos.
                </p>
                <div className="flex items-center gap-2 text-orange-600 mb-4">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">Av. Ordóñez Lasso</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Desde</p>
                    <p className="text-2xl font-bold text-gray-900">$245,000</p>
                  </div>
                  <Link to="/property/3">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      Ver Más
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Proyecto 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img
                  src="https://images.pexels.com/photos/20025581/pexels-photo-20025581.jpeg"
                  alt="Torres del Río"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  Entrega Inmediata
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Torres del Río - Ricaurte
                </h3>
                <p className="text-gray-600 mb-4">
                  Departamentos con vista al río Tomebamba en Ricaurte. Zona tranquila con excelente conectividad.
                </p>
                <div className="flex items-center gap-2 text-orange-600 mb-4">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">Ricaurte, Cuenca</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Desde</p>
                    <p className="text-2xl font-bold text-gray-900">$135,000</p>
                  </div>
                  <Link to="/property/4">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      Ver Más
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Proyecto 5 */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img
                  src="https://images.pexels.com/photos/34687846/pexels-photo-34687846.jpeg"
                  alt="Conjunto El Cebollar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  Pre-venta
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Conjunto El Cebollar
                </h3>
                <p className="text-gray-600 mb-4">
                  Conjunto residencial cerrado en El Cebollar. Casa con patios privados y parqueaderos.
                </p>
                <div className="flex items-center gap-2 text-orange-600 mb-4">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">El Cebollar, Cuenca</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Desde</p>
                    <p className="text-2xl font-bold text-gray-900">$198,000</p>
                  </div>
                  <Link to="/property/5">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      Ver Más
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Proyecto 6 */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img
                  src="https://images.pexels.com/photos/7587884/pexels-photo-7587884.jpeg"
                  alt="Residencial Turi Alto"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  En Construcción
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Residencial Turi Alto
                </h3>
                <p className="text-gray-600 mb-4">
                  Casas con vista panorámica de Cuenca en Turi. Ambiente campestre con todas las comodidades urbanas.
                </p>
                <div className="flex items-center gap-2 text-orange-600 mb-4">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">Turi, Cuenca</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Desde</p>
                    <p className="text-2xl font-bold text-gray-900">$220,000</p>
                  </div>
                  <Link to="/property/6">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      Ver Más
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Banner */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Tu Sueño de Casa Propia Está Más Cerca de lo que Piensas
              </h2>
              <p className="text-xl text-orange-50 mb-8">
                Miles de familias ya cumplieron su sueño con nosotros. Permítenos ayudarte
                a encontrar tu hogar ideal y acompañarte en cada paso del proceso.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-3xl font-bold mb-1">500+</p>
                  <p className="text-orange-50">Familias Felices</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-3xl font-bold mb-1">98%</p>
                  <p className="text-orange-50">Satisfacción</p>
                </div>
              </div>
              <Button className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-6 rounded-xl text-lg">
                Comienza Tu Historia
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/comprada la casa.png"
                  alt="Cliente feliz con llaves de su nueva casa"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-300 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-gray-50" id="propiedades">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Propiedades Destacadas
              </h2>
              <p className="text-gray-600">
                Descubre nuestras propiedades más solicitadas en Cuenca
              </p>
            </div>
            <Button
              variant="outline"
              className="hidden sm:flex items-center gap-2 border-orange-500 text-orange-500 hover:bg-orange-50"
            >
              Ver todas <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="flex justify-center mt-12 sm:hidden">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-xl">
              Ver Todas las Propiedades
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />

      <Footer />
    </div>
  );
}
