import StatBadge from "@/app/components/ui/StatBadge";  
import TierCard from "@/app/components/ui/TierCard";
import ListingCard from "@/app/components/ui/ListingsCard";

//Placeholder data — will be replaced with real Supabase data later
const ARTIST = {
  name: "mika.draws",
  displayName: "Mika Andersson",
  initials: "MK",
  bio: "Hi! I'm Mika, a freelance illustrator specialising in character art and full-body illustrations. I've been drawing for 10+ years and love bringing characters to life with vibrant colors and expressive poses.",
  avatarColor: "bg-[#EEEDFE]",
  avatarText: "text-[#3C3489]",
  avatarBorder: "border-[#7F77DD]",
  availability: "open" as const,
  stats: {
    completed: 132,
    rating: 4.9,
    reviews: 48,
    responseTime: "< 2hrs",
  },
  tags: ["Character art", "Illustration", "Full body", "Vibrant colors"],
  tiers: [
    {
      name: "Sketch",
      description: "Clean pencil sketch of your character",
      price: 20,
      deliveryDays: 3,
      colorScheme: "green" as const,
      features: [
        "Full body or bust",
        "1 character",
        "1 revision round",
        "High res PNG",
      ],
    },
    {
      name: "Lineart",
      description: "Fully inked digital lineart",
      price: 35,
      deliveryDays: 5,
      colorScheme: "purple" as const,
      features: [
        "Full body or bust",
        "1 character",
        "2 revision rounds",
        "High res PNG",
        "Transparent background",
      ],
    },
    {
      name: "Full Color",
      description: "Fully rendered color illustration",
      price: 65,
      deliveryDays: 10,
      colorScheme: "accent" as const,
      features: [
        "Full body or bust",
        "Up to 2 characters",
        "3 revision rounds",
        "High res PNG + PSD",
        "Commercial use license",
      ],
    },
  ],
  portfolio: [
    {
      artistName: "mika.draws",
      artistInitials: "MK",
      title: "OC full body illustration",
      priceFrom: 65,
      rating: 5.0,
      reviewCount: 12,
      availability: "open" as const,
      colorScheme: "purple" as const,
    },
    {
      artistName: "mika.draws",
      artistInitials: "MK",
      title: "Couple portrait commission",
      priceFrom: 65,
      rating: 4.9,
      reviewCount: 8,
      availability: "open" as const,
      colorScheme: "pink" as const,
    },
    {
      artistName: "mika.draws",
      artistInitials: "MK",
      title: "Fantasy character lineart",
      priceFrom: 35,
      rating: 5.0,
      reviewCount: 6,
      availability: "open" as const,
      colorScheme: "green" as const,
    },
  ],
};

const availabilityStyles = {
  open: "bg-[#EAF3DE] text-[#27500A] border-[#639922]",
  busy: "bg-[#FCEBEB] text-[#791F1F] border-[#E24B4A]",
  closed: "bg-[#F1EFE8] text-[#5F5E5A] border-[#D3D1C7]",
};

const availabilityLabel = {
  open: "✓ Open for commissions",
  busy: "⏳ Busy — limited slots",
  closed: "✗ Closed for commissions",
};

export default function ArtistProfilePage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8">

      {/* Profile header */}
      <div className="bg-white border-[2.5px] border-[#D3D1C7] rounded-2xl p-6 mb-6">
        <div className="flex items-start gap-5">
          {/* Avatar */}
          <div
            className={`w-20 h-20 rounded-2xl border-[3px] flex items-center justify-center text-2xl font-black flex-shrink-0 ${ARTIST.avatarColor} ${ARTIST.avatarText} ${ARTIST.avatarBorder}`}
          >
            {ARTIST.initials}
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h1 className="text-xl font-black text-[#26215C]">
                {ARTIST.displayName}
              </h1>
              <span className="text-sm font-bold text-[#888780]">
                @{ARTIST.name}
              </span>
              <span
                className={`text-xs font-black px-3 py-1 rounded-full border-[2px] ${availabilityStyles[ARTIST.availability]}`}
              >
                {availabilityLabel[ARTIST.availability]}
              </span>
            </div>
            <p className="text-sm font-bold text-[#5F5E5A] leading-relaxed mb-3">
              {ARTIST.bio}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {ARTIST.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-extrabold px-3 py-1 bg-[#EEEDFE] text-[#3C3489] border-[2px] border-[#AFA9EC] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3 mt-5">
          <StatBadge label="Completed" value={ARTIST.stats.completed} />
          <StatBadge label="Rating" value={`★ ${ARTIST.stats.rating}`} />
          <StatBadge label="Reviews" value={ARTIST.stats.reviews} />
          <StatBadge label="Response" value={ARTIST.stats.responseTime} />
        </div>
      </div>

      {/* Commission tiers */}
      <section className="mb-8">
        <h2 className="text-xs font-black text-[#888780] uppercase tracking-widest mb-4">
          Commission tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ARTIST.tiers.map((tier) => (
            <TierCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section>
        <h2 className="text-xs font-black text-[#888780] uppercase tracking-widest mb-4">
          Portfolio
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {ARTIST.portfolio.map((item, i) => (
            <ListingCard key={i} {...item} />
          ))}
        </div>
      </section>

    </main>
  );
}
