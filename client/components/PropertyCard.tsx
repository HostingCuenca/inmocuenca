import { Heart, MapPin, Bed, Bath, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  image,
  bedrooms,
  bathrooms,
  area,
  type,
}: PropertyCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const formatPrice = (priceValue: number) => {
    return new Intl.NumberFormat("es-EC", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(priceValue);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
      {/* Image container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Property type badge */}
        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {type}
        </div>
        {/* Favorite button */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorited ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="mb-3">
          <p className="text-2xl font-bold text-gray-900">{formatPrice(price)}</p>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
          <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
          <span>{location}</span>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-3 mb-4 py-4 border-y border-gray-100">
          <div className="flex flex-col items-center">
            <Bed className="w-5 h-5 text-orange-500 mb-1" />
            <span className="text-sm font-semibold text-gray-700">{bedrooms}</span>
            <span className="text-xs text-gray-500">Dormitorios</span>
          </div>
          <div className="flex flex-col items-center">
            <Bath className="w-5 h-5 text-orange-500 mb-1" />
            <span className="text-sm font-semibold text-gray-700">{bathrooms}</span>
            <span className="text-xs text-gray-500">Baños</span>
          </div>
          <div className="flex flex-col items-center">
            <Ruler className="w-5 h-5 text-orange-500 mb-1" />
            <span className="text-sm font-semibold text-gray-700">{area}</span>
            <span className="text-xs text-gray-500">m²</span>
          </div>
        </div>

        {/* Button */}
        <Link to={`/property/${id}`}>
          <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2">
            Ver Detalles
          </Button>
        </Link>
      </div>
    </div>
  );
}
