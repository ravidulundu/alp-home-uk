import {
  ArrowLeft,
  Bath,
  Bed,
  Check,
  Heart,
  Mail,
  MapPin,
  Phone,
  Share2,
  Square,
} from "lucide-react";
import { motion } from "motion/react";
import { Link, useParams } from "react-router";
import { properties } from "../data/properties";

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-navy">Property not found</h2>
        <p className="text-gray-600 mt-2">
          The property you are looking for may have been removed.
        </p>
        <Link
          to="/properties"
          className="text-gold hover:text-navy underline mt-4 inline-block"
        >
          Back to Properties
        </Link>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Breadcrumb / Back Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/properties"
            className="inline-flex items-center text-gray-500 hover:text-navy transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Search Results
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                  ${
                    property.status === "for-sale"
                      ? "bg-green-100 text-green-800"
                      : ""
                  }
                  ${
                    property.status === "to-rent"
                      ? "bg-blue-100 text-blue-800"
                      : ""
                  }
                  ${property.status === "sold" ? "bg-red-100 text-red-800" : ""}
                  ${
                    property.status === "let-agreed"
                      ? "bg-amber-100 text-amber-800"
                      : ""
                  }
                `}
              >
                {property.status.replace("-", " ")}
              </span>
              <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                {property.type}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-navy mb-2 leading-tight">
              {property.title}
            </h1>
            <div className="flex items-center text-gray-500 text-lg">
              <MapPin size={20} className="mr-2 text-gold" />
              <span>
                {property.location.area}, {property.location.city},{" "}
                {property.location.postcode}
              </span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-3xl md:text-4xl font-bold text-navy mb-2">
              {formatPrice(property.price)}
              {property.status === "to-rent" && property.priceFrequency && (
                <span className="text-xl font-normal text-gray-500">
                  /{property.priceFrequency}
                </span>
              )}
            </div>
            <div className="flex justify-end gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-gray-600 hover:border-navy hover:text-navy transition-colors">
                <Heart size={18} />
                <span className="text-sm font-medium">Save</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-gray-600 hover:border-navy hover:text-navy transition-colors">
                <Share2 size={18} />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid (Mosaic) */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px] mb-12 rounded-xl overflow-hidden">
          {/* Main Image */}
          <motion.div
            className="md:col-span-2 md:row-span-2 relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600";
              }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </motion.div>

          {/* Secondary Images */}
          {property.images[1] && (
            <motion.div
              className="md:col-span-1 md:row-span-1 relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <img
                src={property.images[1]}
                alt="Detail 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600";
                }}
              />
            </motion.div>
          )}

          {/* More Placeholders / Images */}
          <motion.div
            className="md:col-span-1 md:row-span-1 bg-gray-100 relative group cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Using a fixed placeholder URL for demo since we have limited mock data images */}
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600"
              alt="Detail 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            className="md:col-span-1 md:row-span-1 bg-gray-100 relative group cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1600"
              alt="Detail 3"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            className="md:col-span-1 md:row-span-1 bg-navy relative group cursor-pointer overflow-hidden flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ backgroundColor: "#152943" }}
          >
            <div className="text-center">
              <span className="block text-3xl font-bold text-gold mb-1">
                +5
              </span>
              <span className="text-white text-sm font-medium uppercase tracking-wider">
                View All Photos
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Key Features Cards */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <Bed className="text-gold w-8 h-8 mx-auto mb-3" />
                <span className="block font-bold text-navy text-2xl mb-1">
                  {property.bedrooms}
                </span>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                  Bedrooms
                </span>
              </div>
              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <Bath className="text-gold w-8 h-8 mx-auto mb-3" />
                <span className="block font-bold text-navy text-2xl mb-1">
                  {property.bathrooms}
                </span>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                  Bathrooms
                </span>
              </div>
              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <Square className="text-gold w-8 h-8 mx-auto mb-3" />
                <span className="block font-bold text-navy text-2xl mb-1">
                  {property.sqft}
                </span>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                  Square Feet
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h3 className="text-2xl font-serif font-bold text-navy mb-6 pb-4 border-b border-gray-100">
                About this property
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                {property.description}
              </p>
            </div>

            {/* Detailed Features List */}
            <div className="mb-10">
              <h3 className="text-2xl font-serif font-bold text-navy mb-6 pb-4 border-b border-gray-100">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"
                  >
                    <Check size={18} className="text-gold mr-3 shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Agent Card */}
              <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-gold ring-1 ring-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-navy w-14 h-14 rounded-full flex items-center justify-center text-gold font-bold text-xl">
                    AH
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg">
                      ALP HOME Agents
                    </h4>
                    <div className="flex items-center text-green-600 text-xs font-bold uppercase tracking-wider gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Online Now
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy mb-2">
                  Interested?
                </h3>
                <p className="text-gray-500 mb-6 text-sm">
                  Arrange a private viewing for this property.
                </p>

                <div className="space-y-3">
                  <button className="w-full bg-navy hover:bg-navy-light text-white font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-all hover:shadow-lg group">
                    <Phone size={20} className="group-hover:animate-bounce" />
                    Call Agent
                  </button>
                  <button className="w-full bg-white border-2 border-gold text-navy font-bold py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-gold hover:text-white transition-all">
                    <Mail size={20} />
                    Email Enquiry
                  </button>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  title="Property Location"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                    `${property.location.area}, ${property.location.city}, ${property.location.postcode}, UK`
                  )}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
