import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal, X } from "lucide-react";

// Todas las propiedades disponibles
const allProperties = [
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
  {
    id: 7,
    title: "Departamento Moderno El Batán",
    price: 175000,
    location: "El Batán, Cuenca",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
    type: "Apartamento",
  },
  {
    id: 8,
    title: "Casa Campestre Baños",
    price: 280000,
    location: "Baños, Cuenca",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    type: "Casa",
  },
  {
    id: 9,
    title: "Loft Centro Histórico",
    price: 155000,
    location: "Centro Histórico, Cuenca",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    area: 85,
    type: "Loft",
  },
];

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const [bedrooms, setBedrooms] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filtrar propiedades
  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      propertyType === "all" || property.type === propertyType;

    const matchesPrice =
      property.price >= priceRange[0] && property.price <= priceRange[1];

    const matchesBedrooms =
      bedrooms === "all" || property.bedrooms === Number(bedrooms);

    return matchesSearch && matchesType && matchesPrice && matchesBedrooms;
  });

  const resetFilters = () => {
    setSearchQuery("");
    setPropertyType("all");
    setPriceRange([0, 300000]);
    setBedrooms("all");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Explora Todas las{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Propiedades
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Encuentra tu hogar ideal entre nuestra amplia selección de propiedades en Cuenca
            </p>
          </div>

          {/* Quick Search */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center px-4">
                <Search className="w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar por ubicación, nombre del proyecto..."
                  className="border-0 focus:ring-0 ml-2 placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="sm:px-6 border-orange-500 text-orange-500 hover:bg-orange-50"
              >
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                Filtros
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      {showFilters && (
        <section className="bg-white border-b shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tipo de Propiedad */}
              <div>
                <Label className="text-gray-700 mb-2 block font-semibold">
                  Tipo de Propiedad
                </Label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los tipos</SelectItem>
                    <SelectItem value="Casa">Casa</SelectItem>
                    <SelectItem value="Apartamento">Apartamento</SelectItem>
                    <SelectItem value="Villa">Villa</SelectItem>
                    <SelectItem value="Loft">Loft</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Habitaciones */}
              <div>
                <Label className="text-gray-700 mb-2 block font-semibold">
                  Habitaciones
                </Label>
                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger>
                    <SelectValue placeholder="Cualquier cantidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Cualquier cantidad</SelectItem>
                    <SelectItem value="1">1 Habitación</SelectItem>
                    <SelectItem value="2">2 Habitaciones</SelectItem>
                    <SelectItem value="3">3 Habitaciones</SelectItem>
                    <SelectItem value="4">4+ Habitaciones</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Rango de Precio */}
              <div className="md:col-span-2">
                <Label className="text-gray-700 mb-3 block font-semibold">
                  Rango de Precio: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                </Label>
                <Slider
                  min={0}
                  max={300000}
                  step={5000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-2"
                />
              </div>
            </div>

            {/* Clear Filters Button */}
            <div className="mt-4 flex justify-end">
              <Button
                onClick={resetFilters}
                variant="ghost"
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
              >
                <X className="w-4 h-4 mr-2" />
                Limpiar Filtros
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {filteredProperties.length} Propiedad{filteredProperties.length !== 1 ? "es" : ""} Disponible{filteredProperties.length !== 1 ? "s" : ""}
            </h2>
            <p className="text-gray-600 mt-1">
              {propertyType !== "all" && `Filtrando por: ${propertyType} `}
              {bedrooms !== "all" && `• ${bedrooms} habitaciones`}
            </p>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No se encontraron propiedades
                </h3>
                <p className="text-gray-600 mb-6">
                  Intenta ajustar tus filtros o realiza una búsqueda diferente
                </p>
                <Button
                  onClick={resetFilters}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8"
                >
                  Limpiar Filtros
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />

      <Footer />
    </div>
  );
}
