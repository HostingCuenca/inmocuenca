import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "Ecuador",
    city: "",
    propertyType: "",
    bedrooms: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construir mensaje para WhatsApp
    const message = `
🏠 *NUEVO INTERESADO EN INMUEBLES CUENCA*

👤 *Datos del Cliente:*
Nombre: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Teléfono: ${formData.phone}

📍 *Ubicación:*
País: ${formData.country}
Ciudad: ${formData.city}

🏡 *Inmueble de Interés:*
Tipo: ${formData.propertyType}
Dormitorios: ${formData.bedrooms}

💬 *Comentarios:*
${formData.comments || "Sin comentarios adicionales"}
    `.trim();

    const phoneNumber = "593999999999"; // Reemplazar con el número real
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    // Limpiar formulario
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "Ecuador",
      city: "",
      propertyType: "",
      bedrooms: "",
      comments: "",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Imagen */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl transform rotate-3"></div>
              <img
                src="/imagendecontacto.png"
                alt="Familia feliz en su nuevo hogar"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Formulario */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Tu Hogar Ideal con{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Inmuebles Cuenca
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Completa el formulario y nos pondremos en contacto contigo para
                ayudarte a encontrar la propiedad perfecta
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre y Apellido */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700 mb-2">
                    Nombre *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-700 mb-2">
                    Apellido *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Tu apellido"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="border-gray-300"
                  />
                </div>
              </div>

              {/* Email y Teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-gray-700 mb-2">
                    Correo Electrónico *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 mb-2">
                    Teléfono *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+593 999 999 999"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="border-gray-300"
                  />
                </div>
              </div>

              {/* País y Ciudad */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country" className="text-gray-700 mb-2">
                    País *
                  </Label>
                  <Input
                    id="country"
                    type="text"
                    placeholder="País"
                    required
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-gray-700 mb-2">
                    Ciudad *
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Ciudad"
                    required
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="border-gray-300"
                  />
                </div>
              </div>

              {/* Tipo de Inmueble y Dormitorios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="propertyType" className="text-gray-700 mb-2">
                    Inmueble de Interés *
                  </Label>
                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, propertyType: value })
                    }
                    required
                  >
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Departamento">Departamento</SelectItem>
                      <SelectItem value="Terreno">Terreno</SelectItem>
                      <SelectItem value="Casa">Casa</SelectItem>
                      <SelectItem value="Suite">Suite</SelectItem>
                      <SelectItem value="Villa">Villa</SelectItem>
                      <SelectItem value="Loft">Loft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="bedrooms" className="text-gray-700 mb-2">
                    Número de Dormitorios *
                  </Label>
                  <Select
                    value={formData.bedrooms}
                    onValueChange={(value) =>
                      setFormData({ ...formData, bedrooms: value })
                    }
                    required
                  >
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Seleccionar cantidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Dormitorio</SelectItem>
                      <SelectItem value="2">2 Dormitorios</SelectItem>
                      <SelectItem value="3">3 Dormitorios</SelectItem>
                      <SelectItem value="4">4 Dormitorios</SelectItem>
                      <SelectItem value="5+">5+ Dormitorios</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Comentarios */}
              <div>
                <Label htmlFor="comments" className="text-gray-700 mb-2">
                  Comentarios
                </Label>
                <Textarea
                  id="comments"
                  placeholder="Cuéntanos más sobre lo que buscas..."
                  rows={4}
                  value={formData.comments}
                  onChange={(e) =>
                    setFormData({ ...formData, comments: e.target.value })
                  }
                  className="border-gray-300"
                />
              </div>

              {/* Botón de Envío */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-6 text-lg"
              >
                Enviar Consulta por WhatsApp
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Al enviar este formulario, aceptas que nos contactemos contigo
              para brindarte información sobre nuestras propiedades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
