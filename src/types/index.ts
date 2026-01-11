export interface Property {
  id: string;
  title: string;
  price: number;
  priceFrequency?: "pcm" | "pw"; // for rentals
  location: {
    area: string;
    city: string;
    postcode: string;
  };
  type: "house" | "flat" | "bungalow" | "penthouse";
  bedrooms: number;
  bathrooms: number;
  images: string[];
  status: "for-sale" | "to-rent" | "sold" | "let-agreed";
  features: string[];
  description: string;
  sqft: number;
  addedDate: string;
}

export type PropertyStatus = Property["status"];
export type PropertyType = Property["type"];
