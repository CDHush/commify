import Link from "next/link";

type ListingCardProps = {
  artistName: string;
  artistInitials: string;
  title: string;
  priceFrom: number;
  rating: number;
  reviewCount: number;
  availability: "open" | "busy" | "fast";
  colorScheme: "purple" | "green" | "orange" | "pink" | "yellow";
};

const colorSchemes = {
  purple: {
    bg: "bg-[#EEEDFE]",
    avatar: "bg-[#EEEDFE] text-[#3C3489] border-[#7F77DD]",
  },
  green: {
    bg: "bg-[#E1F5EE]",
    avatar: "bg-[#E1F5EE] text-[#085041] border-[#1D9E75]",
  },
  orange: {
    bg: "bg-[#FAECE7]",
    avatar: "bg-[#FAECE7] text-[#712B13] border-[#D85A30]",
  },
  pink: {
    bg: "bg-[#FBEAF0]",
    avatar: "bg-[#FBEAF0] text-[#72243E] border-[#D4537E]",
  },
  yellow: {
    bg: "bg-[#FAEEDA]",
    avatar: "bg-[#FAEEDA] text-[#633806] border-[#BA7517]",
  },
};

const availabilityStyles = {
  open: "bg-[#EAF3DE] text-[#27500A] border-[#639922]",
  busy: "bg-[#FCEBEB] text-[#791F1F] border-[#E24B4A]",
  fast: "bg-[#E1F5EE] text-[#085041] border-[#1D9E75]",
};

const availabilityLabel = {
  open: "Open",
  busy: "Busy",
  fast: "Fast",
};

export default function ListingCard({
  artistName,
  artistInitials,
  title,
  priceFrom,
  rating,
  reviewCount,
  availability,
  colorScheme,
}: ListingCardProps) {
  const scheme = colorSchemes[colorScheme];

  return (
    <Link href={`/artists/${artistName}`}>
      <div className="bg-white border-[2.5px] border-[#D3D1C7] rounded-[18px] overflow-hidden cursor-pointer hover:-translate-y-1 hover:border-[#7F77DD] transition-all">
      {/* Card image area */}
      <div
        className={`w-full h-[120px] ${scheme.bg} border-b-[2.5px] border-[#D3D1C7] flex items-center justify-center relative`}
      >
        <span className="text-5xl">🎨</span>
        <span
          className={`absolute top-2 right-2 text-[10px] font-black px-2 py-1 rounded-full border-[2px] ${availabilityStyles[availability]}`}
        >
          {availabilityLabel[availability]}
        </span>
      </div>

      {/* Card body */}
      <div className="p-3">
        {/* Artist row */}
        <div className="flex items-center gap-2 mb-1">
          <div
            className={`w-6 h-6 rounded-full border-[2px] flex items-center justify-center text-[10px] font-black flex-shrink-0 ${scheme.avatar}`}
          >
            {artistInitials}
          </div>
          <span className="text-xs font-black text-[#26215C]">
            {artistName}
          </span>
        </div>

        {/* Title */}
        <p className="text-sm font-bold text-[#2C2C2A] mb-2 leading-snug">
          {title}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-black text-[#534AB7]">
            from €{priceFrom}
          </span>
          <span className="text-xs font-bold text-[#633806]">
            ★ {rating} ({reviewCount})
          </span>
        </div>
      </div>
      </div>
    </Link>
  );
}