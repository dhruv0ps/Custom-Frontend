import { Link } from "react-router-dom";


interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-[70px] left-0 right-0 z-50 bg-white shadow-lg rounded-b-lg mx-auto max-w-md">
      <div className="overflow-y-auto max-h-[80vh] py-2">
        <div className="flex flex-col">
          <Link to="/" className="flex items-center px-6 py-3 hover:bg-gray-100" onClick={onClose}>
            <span className="text-gray-700">Home</span>
          </Link>
          
          <div className="border-t border-gray-100 my-2"></div>
          <h3 className="px-6 py-2 text-sm font-medium text-gray-500">All Services</h3>
          
          <Link to="/sell-your-car" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Sell Your Car
          </Link>
          <Link to="/buy-your-car" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Buy A New Car
          </Link>
          <Link to="/demo-pre-owned" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Demo & Pre-Owned
          </Link>
          <Link to="/trade-promotion" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Trade Promotion
          </Link>
          <Link to="/virtual-tours" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Virtual Tours
          </Link>
          <Link to="/mates-rates-discounts" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Mates Rates
          </Link>
          <Link to="https://wheelz.au/membership/" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Membership
          </Link>
          <Link to="https://wheelz.au/finance/" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Finance
          </Link>
          <Link to="https://wheelz.au/insurance/" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Insurance
          </Link>
          <Link to="https://wheelz.au/fleet/" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Fleet
          </Link>
          <Link to="https://wheelz.au/overhauled-2/" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Overhauled
          </Link>
          <Link to="https://wheelz.au/fundraisers/" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Charities
          </Link>
          <Link to="https://wheelz.au/prize-draw-winners/" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Prize Draw Winners
          </Link>
          <Link to="https://wheelz.au/business-partners/" onClick={onClose} className="px-6 py-3 hover:bg-gray-100">
            Business Partners
          </Link>
        </div>
      </div>
    </div>
  );
}