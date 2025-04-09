interface SidebarProps {
    isOpen: boolean
    onClose: () => void
  }
  
  const menuItems = [
    { label: "All Services", href: "/", highlight: true },
    { label: "Sell Your Car", href: "/sell-your-car" },
    { label: "Buy A New Car", href: "/buy-your-car" },
    { label: "Demo & Pre-Owned", href: "/demo-pre-owned" },
    { label: "Trade Promotion", href: "/trade-promotion" },
    { label: "Virtual Tours", href: "https://wheelz.au/virtual-tours/" },
    { label: "Mates Rates", href: "https://wheelz.au/mates-rates-discounts/" },
    { label: "Membership", href: "https://wheelz.au/membership/" },
    { label: "Finance", href: "https://wheelz.au/finance/" },
    { label: "Insurance", href: "https://wheelz.au/insurance/" },
    { label: "Fleet", href: "https://wheelz.au/fleet/" },
    { label: "Overhauled", href: "https://wheelz.au/overhauled-2/" },
    { label: "Charities", href: "https://wheelz.au/fundraisers/" },
    { label: "Prize Draw Winners", href: "https://wheelz.au/prize-draw-winners/" },
    { label: "Business Partners", href: "https://wheelz.au/business-partners/" },
  ]
  
  export function Sidebar({ isOpen, onClose }: SidebarProps) {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 z-50 bg-white overflow-y-auto transition-transform duration-300 ease-in-out md:hidden">
        <nav className="py-6 px-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className={`block px-4 py-3 text-sm font-medium rounded-md ${
                    item.highlight
                      ? "bg-gray-100 text-black font-semibold"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
  
  