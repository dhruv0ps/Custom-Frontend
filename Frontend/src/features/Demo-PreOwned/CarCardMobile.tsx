import gif2 from "@/assets/Wheelz-Australia-Coming-Soon-icon.webp";

export default function CarCardMobile() {
  return (
    <div className="bg-white rounded-2xl p-2 flex flex-col items-center border-[12px] border-primary shadow-md">
      <img
        src={gif2}
        alt="Coming Soon"
        className="w-full max-w-[320px] h-auto object-contain mx-auto"
        loading="lazy"
      />
      <button className="bg-primary text-white px-3 py-1 mb-2 mx-2 rounded-full shadow-md hover:shadow-lg transition ml-auto">
        Enquire Now
      </button>
    </div>
  );
}
