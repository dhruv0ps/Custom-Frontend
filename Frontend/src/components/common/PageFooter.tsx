import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCar,
  faScrewdriverWrench,
  faHeart,
  faEye,
  faHome,
  faGift,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

export default function BottomNavBar() {
  const navigate = useNavigate();

  const navItems = [
    { to: "/automotive-interface", icon: faCar },
    { to: "/mates-rates", icon: faScrewdriverWrench },
    { to: "/trade-promotion", icon: faGift, customContent: <span className="text-primary font-bold text-[16px]">WIN</span> },
    { to: "/charities", icon: faHeart },
    { to: "/request-virtual-tour", icon: faEye },
    { to: "/", icon: faHome },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t z-50 container w-full lg:w-6/12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <button
            onClick={() => navigate(-1)}
            className="flex flex-col items-center p-2 border-2 rounded-lg border-gray-300"
          >
            <FontAwesomeIcon icon={faChevronLeft as IconProp} className="h-6 w-6 text-primary" />
          </button>

          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex flex-col items-center p-2 border-2 rounded-lg border-gray-300"
            >
              {item.icon ? (
                <FontAwesomeIcon icon={item.icon as IconProp} className="h-6 w-6 text-primary" />
              ) : (
                item.customContent
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
