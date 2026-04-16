type TierCardProps = {
  name: string;
  description: string;
  price: number;
  deliveryDays: number;
  features: string[];
  colorScheme: "purple" | "accent" | "green";
};

const schemes = {
  purple: {
    header: "bg-[#EEEDFE] border-[#AFA9EC]",
    badge: "bg-[#7F77DD] text-white",
    bullet: "text-[#7F77DD]",
    button: "bg-[#7F77DD] text-white border-[#3C3489] hover:bg-[#534AB7]",
  },
  accent: {
    header: "bg-[#FAEEDA] border-[#BA7517]",
    badge: "bg-[#EF9F27] text-[#412402]",
    bullet: "text-[#BA7517]",
    button: "bg-[#FAC775] text-[#412402] border-[#854F0B] hover:bg-[#EF9F27]",
  },
  green: {
    header: "bg-[#E1F5EE] border-[#1D9E75]",
    badge: "bg-[#1D9E75] text-white",
    bullet: "text-[#1D9E75]",
    button: "bg-[#1D9E75] text-white border-[#085041] hover:bg-[#085041]",
  },
};

export default function TierCard({
  name,
  description,
  price,
  deliveryDays,
  features,
  colorScheme,
}: TierCardProps) {
  const s = schemes[colorScheme];

  return (
    <div className="bg-white border-[2.5px] border-[#D3D1C7] rounded-2xl overflow-hidden">
      {/* Header */}
      <div className={`px-5 py-4 border-b-[2.5px] ${s.header}`}>
        <div className="flex items-center justify-between mb-1">
          <span className="font-black text-[#26215C] text-base">{name}</span>
          <span className={`text-xs font-black px-2 py-1 rounded-full ${s.badge}`}>
            {deliveryDays} days
          </span>
        </div>
        <p className="text-sm font-bold text-[#5F5E5A]">{description}</p>
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <p className="text-2xl font-black text-[#26215C] mb-3">€{price}</p>
        <ul className="space-y-2 mb-4">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm font-bold text-[#2C2C2A]">
              <span className={`text-base ${s.bullet}`}>✓</span>
              {f}
            </li>
          ))}
        </ul>
        <button
          className={`w-full font-extrabold text-sm py-2.5 rounded-xl border-[2.5px] transition-colors ${s.button}`}
        >
          Order this tier
        </button>
      </div>
    </div>
  );
}