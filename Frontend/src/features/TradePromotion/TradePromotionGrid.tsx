import { useNavigate } from "react-router-dom";
import img1 from "@/assets/Wheelz-Australia-White-and-Blue-Color-300x66.webp";
import img2 from "@/assets/Trade Promotion/iStock1257605497.jpg"
import img3 from "@/assets/Trade Promotion/Bucks-Bonanza.jpg"
import img4 from "@/assets/Trade Promotion/Your-TankOur-Treat.jpg"
import img5 from "@/assets/Trade Promotion/Glow-Goals.jpg"
import img6 from "@/assets/Trade Promotion/Drive, Relax-Or-Spend.jpg"
import img7 from "@/assets/MateRate/BillBusters.jpg"
import HoverArrowButton from "@/util/HoverButton";
const TradePromotionGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#002b63] py-16  text-white">
      <div className=" max-w-full sm:max-w-[80%] mx-auto text-center px-4 sm:px-2">
        <img
          src={img1}
          alt="Wheelz Logo"
          className="mx-auto mb-4"
        />
        <h2 className="text-xl sm:text-2xl font-bold mb-2 uppercase">Periodic</h2>
        <h1 className="text-2xl sm:text-3xl font-bold uppercase mb-10">
          Trade Promotion Draws
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Box 1: Mates Rates */}
          <div className="bg-[#ff3d00] text-white p-4 rounded-xl shadow">
            <h3 className="font-bold text-lg uppercase text-center mb-2">MATES RATES</h3>
            <p className="text-sm mb-4 text-center">
              Members automatically qualify for exclusive discounts from our partners,
              with great deals and special savings available year round.
            </p>
            <img
              src={img2}
              alt="Discounts"
              className="w-full object-contain rounded"
            />
          </div>

          {/* Box 2 */}
          <div className="bg-[#9ddcff] p-4 rounded-xl shadow text-white">
            <div className="flex items-start">
              <div className="text-8xl font-bold text-white pr-4">1</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-right">BUCKS BONANZA</h3>
                <p className="text-sm mb-4 text-right">
                  Join the thrill, embrace the anticipation, and let the bucks come your way in this sensational bonanza!
                </p>
              </div>
            </div>
            <img
              src={img3}
              alt="Bucks Bonanza"
              className="rounded w-full object-cover"
            />
          </div>

          {/* Box 3 */}
          <div className="bg-[#79cfff] p-4 rounded-xl shadow text-white">
            <div className="flex items-start">
              <div className="text-8xl font-bold text-white pr-4">2</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-right">YOUR TANK, OUR TREAT</h3>
                <p className="text-sm mb-4 text-right">
                  Whether you're on the open road or cruising through the city, leave the fuel worries to us.
                </p>
              </div>
            </div>
            <img
              src={img4}
              alt="Fuel"
              className="rounded w-full object-cover"
            />
          </div>

          {/* Box 4 */}
          <div className="bg-[#57c3ff] p-4 rounded-xl shadow text-white">
            <div className="flex items-start">
              <div className="text-8xl font-bold text-white pr-4">3</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-right">GLOW GOALS</h3>
                <p className="text-sm mb-4 text-right">
                  Brighten your radiance or fulfill any dream with our cash giveaways.
                </p>
              </div>
            </div>
            <img
              src={img5}
              alt="Glow Goals"
              className="rounded w-full object-cover"
            />
          </div>

          {/* Box 5 */}
          <div className="bg-[#2196f3] p-4 rounded-xl shadow text-white">
            <div className="flex items-start">
              <div className="text-8xl font-bold text-white pr-4">4</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-right">DRIVE, RELAX & SPEND</h3>
                <p className="text-sm mb-4 text-right">
                  Win cash prizes to put towards your next car, dream holiday, or anything else you desire!
                </p>
              </div>
            </div>
            <img
              src={img6}
              alt="Drive Relax Spend"
              className="rounded w-full object-cover"
            />
          </div>

          {/* Box 6 */}
          <div className="bg-white text-black p-4 rounded-xl shadow">
            <div className="flex items-start">
              <div className="text-8xl font-bold text-black pr-4">5</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-right">BILL BUSTERS</h3>
                <p className="text-sm mb-4 text-right">
                  Share your bills for a chance to win a cash equivalent directly in your bank account!
                </p>
              </div>
            </div>
            <img
              src={img7}
              alt="Bill Busters"
              className="rounded w-full object-cover"
            />
          </div>
        </div>

     
      </div>
      <div className="w-full py-4 sm:py-8">
      <div className="max-w-full mx-auto sm:max-w-[80%] flex items-center justify-between   sm:px-0">
        
        {/* Text Block */}
        <div
          className="bg-white rounded-r-full py-1 sm:py-2 pr-24 sm:px-6 flex-shrink "
          style={{ boxShadow: 'inset -6px 0 10px rgba(0, 0, 0, 0.1)' }}
        >
        <h2 className="text-base sm:text-3xl text-black font-bold whitespace-nowrap ml-4">
        Join Today 
         <span className="block sm:inline text-primary text-lg sm:text-3xl sm:ml-2 uppercase"> FOR JUST $10!</span>
        </h2>
      </div>
      <div className="flex justify-end flex-shrink-0 ml-2 mr-4 sm:mr-0">
          <HoverArrowButton
            label="Sign Me Up"
            onClick={() => navigate("/access-form")}
            className="bg-primary transition-all px-4 sm:px-8 py-3  font-semibold text-sm sm:text-base rounded-full shadow-md"
            textClass="text-white"
            hoverTextClass="text-white"
          />
        </div>
    </div>
    </div>
    
    </div>
  );
};

export default TradePromotionGrid;