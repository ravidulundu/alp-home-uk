import { Home, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    const [targetPath, targetQuery] = path.split("?");

    // 1. Pathname check
    if (location.pathname !== targetPath) {
      return "text-slate-200 hover:text-white";
    }

    // 2. If no query in target link, it's a match (if we only care about path)
    // But for 'Properties' vs 'Buy', we interpret empty query as "just path"
    // dependent on requirements. Here 'Buy' has specific query.
    if (!targetQuery) {
      return "text-gold";
    }

    // 3. Query params check
    const currentParams = new URLSearchParams(location.search);
    const targetParams = new URLSearchParams(targetQuery);

    // Check every single param in target. If ANY don't match, return inactive.
    let match = true;
    targetParams.forEach((val, key) => {
      if (currentParams.get(key) !== val) {
        match = false;
      }
    });

    if (!match) return "text-slate-200 hover:text-white";

    // Extra safety: If target has status, and current has status, they MUST match.
    // (This covers cases where target expects a param that is present in current but different)
    const targetStatus = targetParams.get("status");
    const currentStatus = currentParams.get("status");
    if (targetStatus && currentStatus && targetStatus !== currentStatus) {
      return "text-slate-200 hover:text-white";
    }

    return "text-gold";
  };

  const navLinks = [
    { name: "Buy", path: "/properties?status=for-sale" },
    { name: "Rent", path: "/properties?status=to-rent" },
    { name: "Sold Prices", path: "/sold" },
    { name: "Commercial", path: "/commercial" },
    { name: "Contact", path: "/contact" },
  ];

  const navbarClasses =
    isHome && !scrolled
      ? "fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300"
      : "fixed top-0 left-0 w-full z-50 bg-navy shadow-lg transition-all duration-300";

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white text-2xl font-serif font-bold tracking-wider"
          >
            <Home className="text-gold" size={28} />
            ALP HOME
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${isActive(
                  link.path
                )}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/valuation"
              className="bg-gold hover:bg-gold-light text-navy-dark px-6 py-2.5 rounded-md font-semibold transition-colors duration-200 shadow-md"
            >
              Book a Valuation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-navy-dark border-t border-navy-light absolute w-full left-0 shadow-xl">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-slate-200 hover:text-gold py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/valuation"
              className="bg-gold text-navy-dark text-center py-3 rounded-md font-semibold mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book a Valuation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
