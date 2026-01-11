import { Filter, Search } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter State (Sync with URL)
  const status = searchParams.get("status") || "all";
  const type = searchParams.get("type") || "any";
  const beds = searchParams.get("beds") || "any";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const locationParam = searchParams.get("location") || "";

  // Apply Filters (Memoized)
  const filteredProperties = useMemo(() => {
    let result = properties;

    // Status Filter
    if (status !== "all") {
      result = result.filter((p) => p.status === status);
    }

    // Type Filter
    if (type !== "any") {
      result = result.filter((p) => p.type === type);
    }

    // Beds Filter (1+, 2+ logic)
    if (beds !== "any") {
      const minBeds = parseInt(beds);
      result = result.filter((p) => p.bedrooms >= minBeds);
    }

    // Price Filter
    if (minPrice) {
      result = result.filter((p) => p.price >= parseInt(minPrice));
    }
    if (maxPrice) {
      result = result.filter((p) => p.price <= parseInt(maxPrice));
    }

    // Location Filter
    if (locationParam) {
      const locTerm = locationParam.toLowerCase();
      result = result.filter(
        (p) =>
          p.location.area.toLowerCase().includes(locTerm) ||
          p.location.city.toLowerCase().includes(locTerm) ||
          p.location.postcode.toLowerCase().includes(locTerm)
      );
    }

    return result;
  }, [status, type, beds, minPrice, maxPrice, locationParam]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== "any" && value !== "all") {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          className="md:hidden flex items-center justify-center gap-2 bg-navy text-white py-3 rounded-md font-bold shadow-md cursor-pointer"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter size={18} />
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Sidebar Filters */}
        <div
          className={`w-full md:w-72 shrink-0 space-y-6 ${
            isFilterOpen ? "block" : "hidden md:block"
          }`}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
            <h3 className="font-serif font-bold text-xl text-navy mb-6 pb-4 border-b border-gray-100 flex items-center gap-2">
              <Filter size={20} className="text-gold" />
              Filter Properties
            </h3>

            {/* Status */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Status
              </label>
              <div className="space-y-3">
                {["all", "for-sale", "to-rent"].map((s) => (
                  <label
                    key={s}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                        status === s
                          ? "border-navy"
                          : "border-gray-300 group-hover:border-navy"
                      }`}
                    >
                      {status === s && (
                        <div className="w-2 h-2 rounded-full bg-navy" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="status"
                      className="hidden"
                      checked={status === s}
                      onChange={() => updateFilter("status", s)}
                    />
                    <span
                      className={`capitalize text-sm font-medium transition-colors ${
                        status === s
                          ? "text-navy"
                          : "text-gray-600 group-hover:text-navy"
                      }`}
                    >
                      {s.replace("-", " ")}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Type */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Property Type
              </label>
              <select
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-navy focus:ring-1 focus:ring-navy text-navy font-medium outline-none transition-shadow"
                value={type}
                onChange={(e) => updateFilter("type", e.target.value)}
              >
                <option value="any">Any Type</option>
                <option value="house">House</option>
                <option value="flat">Flat</option>
                <option value="bungalow">Bungalow</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Min Bedrooms
              </label>
              <select
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-navy focus:ring-1 focus:ring-navy text-navy font-medium outline-none transition-shadow"
                value={beds}
                onChange={(e) => updateFilter("beds", e.target.value)}
              >
                <option value="any">Any</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}+ Bedrooms
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Price Range
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                  value={minPrice}
                  onChange={(e) => updateFilter("minPrice", e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                  value={maxPrice}
                  onChange={(e) => updateFilter("maxPrice", e.target.value)}
                />
              </div>
            </div>

            {/* Clear Button */}
            <button
              onClick={() => setSearchParams({ status: "all" })}
              className="w-full text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-navy transition-colors py-2 border-t border-gray-100 mt-2"
            >
              Result Filters
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="flex-1">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <span className="text-gold font-bold uppercase tracking-wider text-xs block mb-2">
                Search Results
              </span>
              <h1 className="text-3xl font-serif font-bold text-navy">
                {status === "to-rent"
                  ? "Properties To Rent"
                  : status === "for-sale"
                  ? "Properties For Sale"
                  : "All Properties"}
              </h1>
            </div>
            <span className="text-gray-500 font-medium bg-gray-100 px-4 py-2 rounded-full text-sm">
              {filteredProperties.length} Properties Found
            </span>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProperties.map((property) => (
                  <motion.div
                    key={property.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="bg-white p-16 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-gray-300" size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-3">
                No properties found
              </h3>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                We couldn't find any properties matching your current filters.
                Try removing some filters or expanding your price range.
              </p>
              <button
                onClick={() => setSearchParams({ status: "all" })}
                className="bg-navy text-white px-8 py-3 rounded-md font-bold hover:bg-navy-light transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
