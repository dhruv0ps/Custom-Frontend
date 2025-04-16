import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Home, Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (isMenuOpen && 
          !e.target.closest('.mobile-menu') && 
          !e.target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative">
      <header
        className={`bg-white shadow border-b sticky top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="max-w-[90%] md:max-w-[80%] mx-auto">
          <div className="flex items-center gap-2 px-2 md:px-6 justify-between transition-all duration-300 ease-in-out">
            <Link to="https://wheelz.au">
              <img
                src="https://wheelz.au/wp-content/uploads/2024/09/Wheelz-Australia-Black-and-Blue-Color-scaled.webp"
                alt="Wheelz Logo"
                className={`w-auto transition-all duration-300 ease-in-out ${scrolled ? "h-8" : "h-10"}`}
              />
            </Link>

            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 px-6 py-2 rounded hover:bg-gray-100 text-sm font-medium text-gray-700">
                  <Home className="text-[#00b2ff]" />
                  All Services
                  <ChevronDown />
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className="bg-white border border-gray-300 rounded-md shadow-md p-2 min-w-[200px] z-50"
                  style={{
                    borderTopColor: "#00b2ff",
                    borderTopWidth: "4px",
                  }}
                >
                  <DropdownMenuItem asChild><Link to="/sell-your-car" className="block px-2 py-1 rounded hover:bg-gray-100">Sell Your Car</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/buy-your-car" className="block px-2 py-1 rounded hover:bg-gray-100">Buy A New Car</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/demo-pre-owned" className="block px-2 py-1 rounded hover:bg-gray-100">Demo & Pre-Owned</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/trade-promotion" className="block px-2 py-1 rounded hover:bg-gray-100">Trade Promotion</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/virtual-tours" className="block px-2 py-1 rounded hover:bg-gray-100">Virtual Tours</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/mates-rates-discounts" className="block px-2 py-1 rounded hover:bg-gray-100">Mates Rates</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/membership" className="block px-2 py-1 rounded hover:bg-gray-100">Membership</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/finance" className="block px-2 py-1 rounded hover:bg-gray-100">Finance</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/insurance" className="block px-2 py-1 rounded hover:bg-gray-100">Insurance</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/fleet" className="block px-2 py-1 rounded hover:bg-gray-100">Fleet</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/overhauled" className="block px-2 py-1 rounded hover:bg-gray-100">Overhauled</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/fundraisers" className="block px-2 py-1 rounded hover:bg-gray-100">Charities</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/prize-draw-winners" className="block px-2 py-1 rounded hover:bg-gray-100">Prize Draw Winners</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="https://wheelz.au/business-partners/" className="block px-2 py-1 rounded hover:bg-gray-100">Business Partners</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <button 
              className="text-gray-700 p-2 md:hidden mobile-menu-button" 
              onClick={toggleMenu} 
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
  <div className="absolute top-full left-0 right-0 ml-10 mr-10 bg-white shadow-lg z-50 md:hidden mobile-menu border-t-4 border-[#1cbeff]">
    <div className="bg-white py-2">
      <Link to="/" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">
        <div className="flex items-center">
          <Home className="mr-2" size={16} />
          Home
        </div>
      </Link>

      <div className="border-t border-gray-100 text-[#] my-2"></div>
      <h3 className="px-4 py-2 text-sm font-medium text-gray-500">All Services</h3>

      <Link to="/sell-your-car" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Sell Your Car</Link>
      <Link to="/buy-your-car" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Buy A New Car</Link>
      <Link to="/demo-pre-owned" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Demo & Pre-Owned</Link>
      <Link to="/trade-promotion" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Trade Promotion</Link>
      <Link to="/virtual-tours" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Virtual Tours</Link>
      <Link to="/mates-rates-discounts" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Mates Rates</Link>
      <Link to="/membership" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Membership</Link>
      <Link to="/finance" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Finance</Link>
      <Link to="/insurance" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Insurance</Link>
      <Link to="/fleet" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Fleet</Link>
      <Link to="/overhauled" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Overhauled</Link>
      <Link to="/fundraisers" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Charities</Link>
      <Link to="/prize-draw-winners" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Prize Draw Winners</Link>
      <Link to="https://wheelz.au/business-partners/" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100">Business Partners</Link>
    </div>
  </div>
)}

    </div>
  );
}
