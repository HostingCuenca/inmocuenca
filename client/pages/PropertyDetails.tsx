import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Bed,
  Bath,
  Maximize,
  MapPin,
  Share2,
  Heart,
  ArrowLeft,
  Check,
  Phone,
  Mail,
  User,
  Building2,
  Car,
  Trees,
  Shield,
} from "lucide-react";
import { useState } from "react";

// Propiedades completas con más detalles
const allProperties = [
  {
    id: 1,
    title: "Proyecto Bosques de Monay",
    price: 185000,
    location: "Monay, Cuenca",
    images: [
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    parking: 2,
    type: "Casa",
    status: "En Construcción",
    description:
      "Exclusivo conjunto residencial en el sector de Monay. Casas modernas con acabados de primera calidad, áreas verdes comunitarias, parques infantiles y seguridad 24/7. Excelente ubicación con acceso a servicios y comercios.",
    features: [
      "Cocina con muebles empotrados",
      "Área de lavandería",
      "Patio trasero privado",
      "Ventanas de aluminio y vidrio",
      "Cerámica de primera en pisos",
      "Sistema eléctrico certificado",
      "Cisterna de agua",
      "Portón eléctrico",
    ],
    amenities: [
      "Guardianía 24/7",
      "Área de juegos infantiles",
      "Áreas verdes",
      "Salón comunal",
      "Parqueadero de visitas",
    ],
  },
  {
    id: 2,
    title: "Edificio San Joaquín Premium",
    price: 165000,
    location: "San Joaquín, Cuenca",
    images: [
      "https://images.pexels.com/photos/4832514/pexels-photo-4832514.jpeg",
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg",
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    parking: 1,
    type: "Apartamento",
    status: "Entrega Inmediata",
    description:
      "Modernos departamentos cerca del parque de San Joaquín. Acabados de lujo y diseño contemporáneo. Ubicación privilegiada con fácil acceso a transporte público y centros comerciales.",
    features: [
      "Sala-comedor integrada",
      "Cocina moderna con bar",
      "Balcón con vista",
      "Closets empotrados",
      "Baño completo en habitación principal",
      "Piso flotante en dormitorios",
      "Instalaciones de gas centralizado",
      "Bodega privada",
    ],
    amenities: [
      "Ascensor",
      "Terraza comunal",
      "Gimnasio",
      "Parqueadero cubierto",
      "Citófono",
    ],
  },
  {
    id: 3,
    title: "Urbanización Quinta Los Lagos",
    price: 245000,
    location: "Av. Ordóñez Lasso, Cuenca",
    images: [
      "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg",
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    ],
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    parking: 2,
    type: "Villa",
    status: "En Construcción",
    description:
      "Urbanización de lujo en Av. Ordóñez Lasso. Amplios espacios, diseño arquitectónico exclusivo, piscina comunal y salón de eventos. Ideal para familias que buscan confort y elegancia.",
    features: [
      "Suite principal con baño privado",
      "Estudio/oficina",
      "Sala de estar familiar",
      "Cocina gourmet",
      "Jardín privado amplio",
      "Área BBQ",
      "Cuarto de servicio con baño",
      "Sistema de alarma",
    ],
    amenities: [
      "Piscina temperada",
      "Salón de eventos",
      "Canchas deportivas",
      "Área verde extensiva",
      "Casa club",
    ],
  },
  {
    id: 4,
    title: "Torres del Río - Sector Ricaurte",
    price: 135000,
    location: "Ricaurte, Cuenca",
    images: [
      "https://images.pexels.com/photos/20025581/pexels-photo-20025581.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    parking: 1,
    type: "Apartamento",
    status: "Entrega Inmediata",
    description:
      "Departamentos con vista al río Tomebamba en Ricaurte. Zona tranquila con excelente conectividad a la ciudad. Perfectos para parejas o pequeñas familias.",
    features: [
      "Cocina americana",
      "Dormitorios con closet",
      "Balcón panorámico",
      "Baño completo",
      "Sala-comedor",
      "Área de lavandería",
      "Instalación para calefón",
      "Cableado estructurado",
    ],
    amenities: [
      "Seguridad 24/7",
      "Parqueadero techado",
      "Ascensores",
      "Área social",
    ],
  },
  {
    id: 5,
    title: "Conjunto El Cebollar",
    price: 198000,
    location: "El Cebollar, Cuenca",
    images: [
      "https://images.pexels.com/photos/34687846/pexels-photo-34687846.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 160,
    parking: 2,
    type: "Casa",
    status: "Pre-venta",
    description:
      "Conjunto residencial cerrado en El Cebollar. Casas con patios privados, parqueaderos y diseño funcional. Ambiente familiar y seguro.",
    features: [
      "3 dormitorios amplios",
      "Sala-comedor espacioso",
      "Cocina con despensa",
      "Patio delantero y trasero",
      "2 parqueaderos",
      "Lavandería techada",
      "Calentador solar",
      "Puerta principal de seguridad",
    ],
    amenities: [
      "Cerramiento perimetral",
      "Portón automático",
      "Área de juegos",
      "Parque infantil",
    ],
  },
  {
    id: 6,
    title: "Residencial Turi Alto",
    price: 220000,
    location: "Turi, Cuenca",
    images: [
      "https://images.pexels.com/photos/7587884/pexels-photo-7587884.jpeg",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    ],
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    parking: 2,
    type: "Casa",
    status: "En Construcción",
    description:
      "Casas con vista panorámica de Cuenca en Turi. Ambiente campestre con todas las comodidades urbanas. Perfectas para quienes buscan tranquilidad sin alejarse de la ciudad.",
    features: [
      "Vista panorámica a la ciudad",
      "Chimenea en sala",
      "Terraza amplia",
      "Cocina integral",
      "Suite principal con vestidor",
      "Jardín con área verde",
      "Zona de BBQ",
      "Instalaciones completas",
    ],
    amenities: [
      "Vía de acceso pavimentada",
      "Alumbrado público",
      "Agua potable",
      "Alcantarillado",
      "Internet de fibra óptica",
    ],
  },
];

export default function PropertyDetails() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const property = allProperties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Propiedad no encontrada
            </h1>
            <Link to="/">
              <Button>Volver al inicio</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "¡Gracias por tu interés! Un asesor se pondrá en contacto contigo pronto."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Back button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a propiedades</span>
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Main Image */}
            <div className="md:col-span-3">
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-[500px] object-cover rounded-xl"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex md:flex-col gap-4">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative rounded-lg overflow-hidden ${
                    currentImageIndex === index
                      ? "ring-4 ring-orange-500"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${property.title} - ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {property.status}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {property.type}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                  <p className="text-4xl font-bold text-orange-600">
                    ${property.price.toLocaleString()}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <Bed className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">
                      {property.bedrooms}
                    </p>
                    <p className="text-sm text-gray-600">Habitaciones</p>
                  </div>
                  <div className="text-center">
                    <Bath className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">
                      {property.bathrooms}
                    </p>
                    <p className="text-sm text-gray-600">Baños</p>
                  </div>
                  <div className="text-center">
                    <Maximize className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">
                      {property.area}
                    </p>
                    <p className="text-sm text-gray-600">m²</p>
                  </div>
                  <div className="text-center">
                    <Car className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">
                      {property.parking}
                    </p>
                    <p className="text-sm text-gray-600">Parqueo</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mb-8">
                  <Button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-6 text-lg">
                    Agendar Visita
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50"
                  >
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Descripción
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Características
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Amenidades del Conjunto
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Solicita Asesoría
                </h3>
                <p className="text-gray-600 mb-6">
                  Completa el formulario y te contactaremos pronto
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 mb-2">
                      Nombre completo *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 mb-2">
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 mb-2">
                      Teléfono *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+593 999 999 999"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 mb-2">
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="¿Qué te gustaría saber sobre esta propiedad?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-6"
                  >
                    Enviar Consulta
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-gray-600 mb-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-500">Llámanos</p>
                      <p className="font-semibold">+593 7 282 8000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-500">Escríbenos</p>
                      <p className="font-semibold">info@inmuebles.ec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />

      <Footer />
    </div>
  );
}
