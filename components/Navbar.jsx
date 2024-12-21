"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Programs", href: "/#programs" },
    { name: "Facilities", href: "/#facilities" },
    { name: "Events", href: "/#events" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div>
              <h1 className="text-2xl font-bold text-primary-500 font-quicksand">Ideal Academy</h1>
              <p className="text-sm text-neutral-600 font-nunito">Nurturing Young Minds</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() =>
                  link.href.includes("#")
                    ? scrollToSection(link.href.split("#")[1])
                    : (window.location.href = link.href)
                }
                className={`text-neutral-600 hover:text-primary-500 transition-colors font-nunito
                  ${isScrolled ? "text-neutral-600" : "text-white"}`}
              >
                {link.name}
              </button>
            ))}
            <Link
              href="/admission"
              className="bg-accent-yellow text-neutral-800 px-6 py-2 rounded-full font-medium 
                hover:bg-accent-yellow/90 transition-colors font-nunito"
            >
              Admission
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden
            ${isMobileMenuOpen ? "max-h-96" : "max-h-0"}`}
        >
          <div className="pb-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() =>
                  link.href.includes("#")
                    ? scrollToSection(link.href.split("#")[1])
                    : (window.location.href = link.href)
                }
                className="block w-full text-left px-4 py-2 text-neutral-600 hover:text-primary-500 
                  transition-colors font-nunito"
              >
                {link.name}
              </button>
            ))}
            <Link
              href="/admission"
              className="block w-full text-center bg-accent-yellow text-neutral-800 px-6 py-2 
                rounded-full font-medium hover:bg-accent-yellow/90 transition-colors font-nunito"
            >
              Admission
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
