import { MapPin, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function HeroSearch() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"for-sale" | "to-rent">(
    "for-sale"
  );

  // Search State
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [propertyType, setPropertyType] = useState("any");
  const [bedrooms, setBedrooms] = useState("any");

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.append("status", activeTab);
    if (location) params.append("location", location);
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);
    if (propertyType !== "any") params.append("type", propertyType);
    if (bedrooms !== "any") params.append("beds", bedrooms);

    navigate(`/properties?${params.toString()}`);
  };

  // Price Generators
  const generatePriceOptions = () => {
    const options = [];
    // 50k - 500k (50k steps)
    for (let i = 50000; i <= 500000; i += 50000) options.push(i);
    // 600k - 2m (100k steps)
    for (let i = 600000; i <= 2000000; i += 100000) options.push(i);
    // 2.5m - 10m (500k steps)
    for (let i = 2500000; i <= 10000000; i += 500000) options.push(i);
    return options;
  };

  const priceOptions = generatePriceOptions();

  const formatPrice = (price: number) => {
    if (price >= 1000000) return `£${(price / 1000000).toFixed(2)}M`;
    if (price >= 1000) return `£${(price / 1000).toFixed(0)}k`;
    return `£${price}`;
  };

  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior"
          className="w-full h-full object-cover brightness-75 transition-opacity duration-700 hover:brightness-100" // Added transition for effect
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://images.unsplash.com/photo-1600596542815-e32c21216f3d?auto=format&fit=crop&q=80&w=2000"; // Reliable Fallback
          }}
        />
        <div className="absolute inset-0 bg-navy/30 mix-blend-multiply"></div>
      </div>

      {/* Search Container */}
      <div className="relative z-10 w-full max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            <button
              className={`flex-1 py-4 text-center font-bold text-lg transition-colors cursor-pointer ${
                activeTab === "for-sale"
                  ? "text-navy border-b-4 border-gold bg-gray-50"
                  : "text-gray-400 hover:text-navy hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("for-sale")}
            >
              For Sale
            </button>
            <button
              className={`flex-1 py-4 text-center font-bold text-lg transition-colors cursor-pointer ${
                activeTab === "to-rent"
                  ? "text-navy border-b-4 border-gold bg-gray-50"
                  : "text-gray-400 hover:text-navy hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("to-rent")}
            >
              To Rent
            </button>
          </div>

          {/* Form */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {/* Location */}
              <div className="lg:col-span-3 relative">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Location
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="e.g. Kensington, SW7"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-navy placeholder-gray-400 font-medium"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              {/* Min Price */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Min Price
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-navy text-navy font-medium bg-white"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                >
                  <option value="">No Min</option>
                  {priceOptions.map((price) => (
                    <option key={price} value={price}>
                      {formatPrice(price)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Max Price */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Max Price
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-navy text-navy font-medium bg-white"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                >
                  <option value="">No Max</option>
                  {priceOptions.map((price) => (
                    <option key={price} value={price}>
                      {formatPrice(price)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Property Type
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-navy text-navy font-medium bg-white"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="any">Any</option>
                  <option value="house">House</option>
                  <option value="flat">Flat</option>
                  <option value="bungalow">Bungalow</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Bedrooms
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-navy text-navy font-medium bg-white"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                >
                  <option value="any">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full bg-linear-to-r from-gold to-gold-dark text-white font-bold py-3 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search size={20} />
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
