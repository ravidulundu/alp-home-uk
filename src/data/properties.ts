import { Property } from "../types";

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Penthouse with Hyde Park Views",
    price: 4500000,
    location: {
      area: "Kensington",
      city: "London",
      postcode: "SW7 5HR",
    },
    type: "penthouse",
    bedrooms: 3,
    bathrooms: 3,
    images: [
      "https://images.unsplash.com/photo-1512918760532-3ad83864d363?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
    ],
    status: "for-sale",
    features: [
      "Panoramic Views",
      "24hr Concierge",
      "Private Terrace",
      "Underground Parking",
    ],
    description:
      "An exceptional penthouse apartment offering breathtaking views over Hyde Park. This meticulously designed residence features expansive living spaces, high-end finishes, and a stunning wrap-around terrace.",
    sqft: 2500,
    addedDate: "2025-12-15",
  },
  {
    id: "2",
    title: "Elegant Georgian Townhouse",
    price: 2750000,
    location: {
      area: "Chelsea",
      city: "London",
      postcode: "SW3 4TZ",
    },
    type: "house",
    bedrooms: 5,
    bathrooms: 4,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1600",
    ],
    status: "for-sale",
    features: [
      "Period Features",
      "Private Garden",
      "Guest Suite",
      "Wine Cellar",
    ],
    description:
      "A beautifully restored Georgian townhouse in the heart of Chelsea. Spanning five floors, this family home blends classic elegance with modern luxury, featuring a landscaped garden and bespoke kitchen.",
    sqft: 3200,
    addedDate: "2025-11-20",
  },
  {
    id: "3",
    title: "Modern City Apartment",
    price: 3500,
    priceFrequency: "pcm",
    location: {
      area: "Manchester City Centre",
      city: "Manchester",
      postcode: "M3 1DE",
    },
    type: "flat",
    bedrooms: 2,
    bathrooms: 2,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1600",
    ],
    status: "to-rent",
    features: ["Gym Access", "Concierge", "Balcony", "Fully Furnished"],
    description:
      "A sleek and stylish two-bedroom apartment in the vibrant heart of Manchester. Residents enjoy exclusive access to a state-of-the-art gym and concierge service.",
    sqft: 950,
    addedDate: "2026-01-05",
  },
  {
    id: "4",
    title: "Spacious Family Home",
    price: 850000,
    location: {
      area: "Edgbaston",
      city: "Birmingham",
      postcode: "B15 2TR",
    },
    type: "house",
    bedrooms: 4,
    bathrooms: 3,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&q=80&w=1600",
    ],
    status: "sold",
    features: ["Double Garage", "Large Garden", "Study", "Open Plan Kitchen"],
    description:
      "Sold. A magnificent detached family home situated on a prestigious road in Edgbaston. Offering generous living accommodation and a beautifully maintained garden.",
    sqft: 2100,
    addedDate: "2025-10-10",
  },
  {
    id: "5",
    title: "Charming Mews House",
    price: 1850000,
    location: {
      area: "Mayfair",
      city: "London",
      postcode: "W1K 7AA",
    },
    type: "house",
    bedrooms: 2,
    bathrooms: 2,
    images: [
      "https://images.unsplash.com/photo-1513584687574-9bfd486f0d39?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1600",
    ],
    status: "let-agreed",
    features: [
      "Private Garage",
      "Roof Terrace",
      "Quiet Location",
      "Newly Renovated",
    ],
    description:
      "Let Agreed. A hidden gem in Mayfair, this charming mews house offers privacy and style. Featuring a private garage and a delightful roof terrace.",
    sqft: 1200,
    addedDate: "2025-12-01",
  },
  {
    id: "6",
    title: "Contemporary Waterfront Apartment",
    price: 2200,
    priceFrequency: "pcm",
    location: {
      area: "Canary Wharf",
      city: "London",
      postcode: "E14 9GE",
    },
    type: "flat",
    bedrooms: 1,
    bathrooms: 1,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1600",
    ],
    status: "to-rent",
    features: ["River Views", "Swimming Pool", "Cinema Room", "Close to Tube"],
    description:
      "Luxury living at its finest. This one-bedroom apartment offers stunning views of the Thames and access to premium amenities including a pool and cinema.",
    sqft: 600,
    addedDate: "2026-01-08",
  },
];
