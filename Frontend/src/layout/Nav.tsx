import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <div className="max-w-[97%] sm:max-w-[80%] mx-auto">
          <div className="flex items-center  px-2  justify-between transition-all duration-300 ease-in-out">
            <Link to="/">
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
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/sell-your-car" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Sell Your Car
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/buy-your-car" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Buy A New Car
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/demo-pre-owned" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Demo & Pre-Owned
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/trade-promotion" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Trade Promotion
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/virtual-tours" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Virtual Tours
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/mates-rates-discounts" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Mates Rates
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/membership" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Membership
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/finance" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Finance
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/insurance" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Insurance
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/fleet" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Fleet
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/overhauled" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Overhauled
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/fundraisers" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Charities
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/prize-draw-winners" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Prize Draw Winners
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink 
                      to="/business-partners" 
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
                      }
                    >
                      Business Partners
                    </NavLink>
                  </DropdownMenuItem>
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
          <NavLink 
            to="/" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            <div className="flex items-center">
              <Home className="mr-2" size={16} />
              Home
            </div>
          </NavLink>

          <div className="border-t border-gray-100 my-2"></div>
          <h3 className="px-4 py-2 text-sm font-medium text-gray-500">All Services</h3>

          <NavLink
            to="/sell-your-car"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Sell Your Car
          </NavLink>
          <NavLink 
            to="/buy-your-car" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Buy A New Car
          </NavLink>
          <NavLink 
            to="/demo-pre-owned" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Demo & Pre-Owned
          </NavLink>
          <NavLink 
            to="/trade-promotion" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Trade Promotion
          </NavLink>
          <NavLink 
            to="/virtual-tours" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Virtual Tours
          </NavLink>
          <NavLink 
            to="/mates-rates-discounts" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Mates Rates
          </NavLink>
          <NavLink 
            to="/membership" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Membership
          </NavLink>
          <NavLink 
            to="/finance" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Finance
          </NavLink>
          <NavLink 
            to="/insurance" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Insurance
          </NavLink>
          <NavLink 
            to="/fleet" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Fleet
          </NavLink>
          <NavLink 
            to="/overhauled" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Overhauled
          </NavLink>
          <NavLink 
            to="/fundraisers" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Charities
          </NavLink>
          <NavLink 
            to="/prize-draw-winners" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Prize Draw Winners
          </NavLink>
          <NavLink 
            to="/business-partners" 
            onClick={handleNavLinkClick} 
            className={({ isActive }) =>
              `block px-4 py-2 hover:text-primary ${isActive ? "text-primary" : "text-gray-700"}`
            }
          >
            Business Partners
          </NavLink>
        </div>
      </div>
      )}
    </div>
  );
}