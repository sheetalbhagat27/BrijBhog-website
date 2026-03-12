

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/Logo2.png"; 

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Venues", path: "/venues", hasDropdown: true },
  { label: "Blog", path: "/blog" },   // ⭐ BLOG ADD KIYA
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [venueOpen, setVenueOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleVenueSelect = (venue) => {
    setVenueOpen(false);
    setIsOpen(false);
    navigate(`/venues/${venue}`);
  };

  const venues = [
    { label: "Elegant Green", slug: "elegant-green" },
    { label: "Samariya Green", slug: "samariya-green" },
    { label: "Taste of Temple", slug: "taste-of-temple" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Brij Bhog Logo"
            className="h-14 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.path} className="relative">

              <Link
                to={link.path}
                className={`font-body text-sm font-medium tracking-wide uppercase flex items-center gap-1 transition-colors ${
                  location.pathname === link.path ||
                  location.pathname.startsWith(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={(e) => {
                  if (link.hasDropdown) {
                    e.preventDefault();
                    setVenueOpen(!venueOpen);
                  }
                }}
              >
                {link.label}

                {link.hasDropdown && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      venueOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown */}
              {link.hasDropdown && venueOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-2xl py-2 z-50">
                  {venues.map((venue) => (
                    <button
                      key={venue.slug}
                      onClick={() => handleVenueSelect(venue.slug)}
                      className="w-full text-left px-6 py-3 text-sm hover:bg-primary/5 hover:text-primary transition-all text-muted-foreground"
                    >
                      {venue.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Button asChild>
            <Link to="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Book Now
            </Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-base font-medium py-2 text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>

                {link.hasDropdown && (
                  <div className="ml-4 border-l-2 border-primary/20 pl-4 mt-2 pb-2">
                    {venues.map((venue) => (
                      <button
                        key={venue.slug}
                        onClick={() => handleVenueSelect(venue.slug)}
                        className="w-full text-left py-2 text-sm hover:text-primary"
                      >
                        • {venue.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Button asChild className="mt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Phone className="mr-2 h-4 w-4" />
                Book Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;