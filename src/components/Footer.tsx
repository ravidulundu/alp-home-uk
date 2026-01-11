import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-serif font-bold mb-4">
              ALP HOME
            </h3>
            <p className="mb-4 leading-relaxed">
              Experience the pinnacle of British real estate. specializing in
              luxury properties across London and the UK including Kensington,
              Chelsea, and Mayfair.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="text-gold" size={18} />
                <span>123 Oxford Street, London, W1D 1LP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold" size={18} />
                <span>+44 (0) 20 7123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold" size={18} />
                <span>enquiries@alphome.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-gold">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} ALP HOME Estate Agents. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
