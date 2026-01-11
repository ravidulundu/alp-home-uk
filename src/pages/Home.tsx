import { Award, Shield, Users } from "lucide-react";
import { motion } from "motion/react";
import HeroSearch from "../components/HeroSearch";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function Home() {
  const featuredProperties = properties.slice(0, 3);

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-gold mb-4" />,
      title: "Trusted Agency",
      description:
        "Over 20 years of experience in the prime UK property market.",
    },
    {
      icon: <Award className="w-12 h-12 text-gold mb-4" />,
      title: "Award Winning",
      description:
        "Recognized for excellence in customer service and property management.",
    },
    {
      icon: <Users className="w-12 h-12 text-gold mb-4" />,
      title: "Expert Agents",
      description:
        "Our dedicated team provides personalized advice for your property journey.",
    },
  ];

  return (
    <div className="bg-white">
      <HeroSearch />

      {/* Featured Properties */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Featured Properties
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
              Why Choose ALP HOME
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
