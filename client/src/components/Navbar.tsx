import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "tabla-contenido", label: "Contenido" },
    { id: "analisis", label: "Análisis" },
    { id: "pilares", label: "Pilares" },
    { id: "hallazgos", label: "Hallazgos" },
    { id: "estrategias", label: "Estrategias" },
    { id: "planes", label: "Planes" },
    { id: "propuesta", label: "Propuesta" },
    { id: "forma-pago", label: "Pago" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      style={{
        borderBottom: isScrolled
          ? `1px solid #ded6cb`
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-8 md:h-10 w-auto object-contain"
              onError={(e) => {
                // Fallback si no existe el logo
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <span
              className="text-xl md:text-2xl font-bold hidden"
              style={{ color: "#082053", fontWeight: 700 }}
            >
              LOGO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-[#082053] hover:text-[#306ab0]"
                }`}
                style={{
                  backgroundColor:
                    activeSection === item.id ? "#306ab0" : "transparent",
                  fontWeight: activeSection === item.id ? 600 : 500,
                }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.open("https://wa.me/573185538835", "_blank")}
              className="ml-4 rounded-lg"
              style={{
                backgroundColor: "#306ab0",
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              Agendar Reunión
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 rounded-lg"
                style={{ color: "#082053" }}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px]"
              style={{ backgroundColor: "#faf6f1" }}
            >
              <div className="flex flex-col space-y-4 mt-8">
                <div className="mb-6">
                  <img
                    src="/logo.svg"
                    alt="Logo"
                    className="h-10 w-auto object-contain"
                    onError={(e) => {
                      // Fallback si no existe el logo
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <span
                    className="text-2xl font-bold hidden"
                    style={{ color: "#082053", fontWeight: 700 }}
                  >
                    LOGO
                  </span>
                </div>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-[#082053]"
                    }`}
                    style={{
                      backgroundColor:
                        activeSection === item.id ? "#306ab0" : "transparent",
                      fontWeight: activeSection === item.id ? 600 : 500,
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => {
                    window.open("https://wa.me/573185538835", "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-4 rounded-lg w-full"
                  style={{
                    backgroundColor: "#306ab0",
                    color: "#ffffff",
                    fontWeight: 600,
                  }}
                >
                  Agendar Reunión
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

