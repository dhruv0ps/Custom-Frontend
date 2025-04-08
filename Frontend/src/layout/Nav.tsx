import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon, HomeIcon } from "@radix-ui/react-icons";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
export default function Navbar({ toggleSidebar, isSidebarOpen }: { toggleSidebar: () => void; isSidebarOpen: boolean }) {
  return (
    <header className="bg-white shadow border-b sticky top-0 left-0 right-0 z-50 ">
      {/* Logo */}
      <div className="max-w-[80%] mx-auto">
        <div className="flex items-center gap-2 px-6 py-6  justify-between">
          <a href="https://wheelz.au">
            <img
              src="https://wheelz.au/wp-content/uploads/2024/09/Wheelz-Australia-Black-and-Blue-Color-scaled.webp"
              alt="Wheelz Logo"
              className="h-10 w-auto"
            />
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-6 py-2 rounded hover:bg-gray-100 text-sm font-medium text-gray-700">
              <HomeIcon className="text-blue-500" />
              All Services
              <ChevronDownIcon />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white border rounded-md shadow-md p-2 min-w-[200px] z-50">
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/sell-your-car/" className="block px-2 py-1 rounded  hover:bg-gray-100">Sell Your Car</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/buy-your-car/" className="block px-2 py-1 rounded hover:bg-gray-100">Buy A New Car</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/demo-pre-owned/" className="block px-2 py-1 rounded hover:bg-gray-100">Demo & Pre-Owned</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/trade-promotion/" className="block px-2 py-1 rounded hover:bg-gray-100">Trade Promotion</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/virtual-tours/" className="block px-2 py-1 rounded hover:bg-gray-100">Virtual Tours</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/mates-rates-discounts/" className="block px-2 py-1 rounded hover:bg-gray-100">Mates Rates</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/membership/" className="block px-2 py-1 rounded hover:bg-gray-100">Membership</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/finance/" className="block px-2 py-1 rounded hover:bg-gray-100">Finance</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/insurance/" className="block px-2 py-1 rounded hover:bg-gray-100">Insurance</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/fleet/" className="block px-2 py-1 rounded hover:bg-gray-100">Fleet</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/overhauled-2/" className="block px-2 py-1 rounded hover:bg-gray-100">Overhauled</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/fundraisers/" className="block px-2 py-1 rounded hover:bg-gray-100">Charities</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/prize-draw-winners/" className="block px-2 py-1 rounded hover:bg-gray-100">Prize Draw Winners</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wheelz.au/business-partners/" className="block px-2 py-1 rounded hover:bg-gray-100">Business Partners</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            className="text-gray-700 text-xl p-2 lg:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </button>
        </div>



      </div>

    </header>
  );
};


