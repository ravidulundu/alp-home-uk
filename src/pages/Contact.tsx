import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Split Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Content & Form */}
        <div className="w-full lg:w-1/2 px-8 py-16 lg:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              Let's discuss your property needs
            </h1>
            <p className="text-gray-500 text-lg mb-12 max-w-lg">
              Whether you are looking to buy, sell, or rent, our team of
              dedicated experts is here to guide you every step of the way.
            </p>

            <form className="space-y-6 max-w-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-navy focus:ring-0 px-0 py-3 transition-colors placeholder-gray-400"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-navy focus:ring-0 px-0 py-3 transition-colors placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-navy focus:ring-0 px-0 py-3 transition-colors placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-navy focus:ring-0 px-0 py-3 transition-colors placeholder-gray-400 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button className="group flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-navy-light transition-all hover:pr-10">
                Send Message
                <Send
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Right Side - Image & Info Overlay */}
        <div className="w-full lg:w-1/2 relative bg-navy min-h-[500px] lg:min-h-screen">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
            alt="Office Interior"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/50 to-transparent"></div>

          <div className="absolute bottom-0 left-0 w-full p-12 lg:p-24 text-white">
            <h3 className="text-2xl font-serif font-bold mb-8">
              Visit our Headquarters
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">London Office</h4>
                  <p className="text-gray-300">
                    123 Oxford Street, London, W1D 1LP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
                  <Phone className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-gray-300">+44 (0) 20 7123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
                  <Mail className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-gray-300">enquiries@alphome.co.uk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
