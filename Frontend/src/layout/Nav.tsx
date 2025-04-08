import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown, Home, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sidebar } from "./Sidebar"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isSidebarOpen])

  return (
    <>
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

            {/* Desktop dropdown menu - hidden on mobile */}
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
                    <Link to="/sell-your-car" className="block px-2 py-1 rounded hover:bg-gray-100">
                      Sell Your Car
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/buy-your-car" className="block px-2 py-1 rounded hover:bg-gray-100">
                      Buy A New Car
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="https://wheelz.au/demo-pre-owned/"
                      className="block px-2 py-1 rounded hover:bg-gray-100"
                    >
                      Demo & Pre-Owned
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="https://wheelz.au/trade-promotion/"
                      className="block px-2 py-1 rounded hover:bg-gray-100"
                    >
                      Trade Promotion
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="https://wheelz.au/virtual-tours/" className="block px-2 py-1 rounded hover:bg-gray-100">
                      Virtual Tours
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="https://wheelz.au/mates-rates-discounts/"
                      className="block px-2 py-1 rounded hover:bg-gray-100"
                    >
                      Mates Rates
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="https://wheelz.au/membership/" className="block px-2 py-1 rounded hover:bg-gray-100">
                      Membership
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="https://wheelz.au/finance/" className="block px-2 py-1 rounded hover:bg-gray-100">
                      Finance
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="https://wheelz.au/insurance/" className="block px-2 py-1 rounded hover:bg-gray-100">
                      Insurance
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="https://wheelz.au/fleet/" className="block px-2 py-1 rounded hover:bg-gray-100">
                      Fleet
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="https://wheelz.au/overhauled-2/" className="block px-2 py-1 rounded hover:bg-gray-100">
                      Overhauled
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="https://wheelz.au/fundraisers/" className="block px-2 py-1 rounded hover:bg-gray-100">
                      Charities
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="https://wheelz.au/prize-draw-winners/"
                      className="block px-2 py-1 rounded hover:bg-gray-100"
                    >
                      Prize Draw Winners
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="https://wheelz.au/business-partners/"
                      className="block px-2 py-1 rounded hover:bg-gray-100"
                    >
                      Business Partners
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu button */}
            <button className="text-gray-700 p-2 md:hidden" onClick={toggleSidebar} aria-label="Toggle Sidebar">
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  )
}


