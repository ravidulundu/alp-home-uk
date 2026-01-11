import { Bath, Bed, Heart, MapPin, Square } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Property } from "../types";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/property/${property.id}`} className="block group">
      <motion.article
        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-full flex flex-col"
        whileHover={{
          y: -5,
          boxShadow:
            "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600"; // Fallback
            }}
          />
          {/* Status Badge */}
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm
            ${property.status === "for-sale" ? "bg-green-600 text-white" : ""}
            ${property.status === "to-rent" ? "bg-blue-600 text-white" : ""}
            ${property.status === "sold" ? "bg-red-600 text-white" : ""}
            ${property.status === "let-agreed" ? "bg-amber-600 text-white" : ""}
          `}
          >
            {property.status.replace("-", " ")}
          </div>

          {/* Favorite Button */}
          <motion.button
            className="absolute top-4 right-4 p-2 bg-white/80 rounded-full text-navy hover:text-red-500 shadow-sm cursor-pointer"
            whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              // Add favorite logic here
            }}
          >
            <Heart size={18} />
          </motion.button>
        </div>

        {/* Content Section */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-2">
            <h3 className="text-2xl font-bold text-navy">
              {formatPrice(property.price)}
              {property.status === "to-rent" && property.priceFrequency && (
                <span className="text-sm font-normal text-gray-500 ml-1">
                  /{property.priceFrequency}
                </span>
              )}
            </h3>
          </div>

          <h4 className="text-lg font-semibold text-slate-800 truncate mb-2">
            {property.title}
          </h4>

          <div className="flex items-center text-gray-500 mb-4 h-6">
            <MapPin size={16} className="mr-1 shrink-0" />
            <span className="text-sm truncate">
              {property.location.area}, {property.location.city}
            </span>
          </div>

          <div className="border-t border-gray-100 my-3"></div>

          <div className="flex justify-between items-center text-gray-600 text-sm mb-3">
            <div className="flex items-center gap-1">
              <Bed size={16} className="text-gold-dark" />
              <span>{property.bedrooms} Bed</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath size={16} className="text-gold-dark" />
              <span>{property.bathrooms} Bath</span>
            </div>
            <div className="flex items-center gap-1">
              <Square size={16} className="text-gold-dark" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>

          <div className="mt-auto pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              {property.type}
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
