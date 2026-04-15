import Button from "../app/components/ui/Button";
import ListingCard from "../app/components/ui/ListingsCard";

const FILTERS = [
  "All styles",
  "Illustration",
  "Character art",
  "Pixel art",
  "Portrait",
  "Concept art",
  "Under €20",
  "Fast delivery",
];

const LISTINGS = [
  {
    artistName: "mika.draws",
    artistInitials: "MK",
    title: "Full-body character illustration",
    priceFrom: 35,
    rating: 4.9,
    reviewCount: 48,
    availability: "open" as const,
    colorScheme: "purple" as const,
  },
  {
    artistName: "juneart",
    artistInitials: "JR",
    title: "Chibi & kawaii portraits",
    priceFrom: 18,
    rating: 5.0,
    reviewCount: 31,
    availability: "fast" as const,
    colorScheme: "green" as const,
  },
  {
    artistName: "torchArt",
    artistInitials: "TA",
    title: "Dark fantasy concept art",
    priceFrom: 60,
    rating: 4.8,
    reviewCount: 19,
    availability: "busy" as const,
    colorScheme: "orange" as const,
  },
  {
    artistName: "softelune",
    artistInitials: "SL",
    title: "Soft watercolor couple portrait",
    priceFrom: 28,
    rating: 4.9,
    reviewCount: 62,
    availability: "open" as const,
    colorScheme: "pink" as const,
  },
  {
    artistName: "pixelwitch",
    artistInitials: "PX",
    title: "Retro pixel art sprites & scenes",
    priceFrom: 22,
    rating: 4.7,
    reviewCount: 83,
    availability: "open" as const,
    colorScheme: "yellow" as const,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#EEEDFE] border-b-[3px] border-[#AFA9EC] px-6 py-10 text-center">
        <h1 className="text-3xl font-black text-[#26215C] mb-2 tracking-tight">
          Find your perfect commission
        </h1>
        <p className="text-sm font-bold text-[#534AB7] mb-6">
          Custom art from real artists, made just for you
        </p>
        <div className="flex gap-2 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search styles, artists, or vibes..."
            className="flex-1 px-4 py-3 border-[2.5px] border-[#534AB7] rounded-xl font-bold text-sm text-[#26215C] bg-white placeholder:text-[#AFA9EC] outline-none"
          />
          <Button variant="primary">Search</Button>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex bg-white border-b-[3px] border-[#D3D1C7] px-5">
        {["Browse", "Artists", "Requests", "My orders"].map((tab, i) => (
          <button
            key={tab}
            className={`font-extrabold text-sm px-4 py-3 border-b-[3px] -mb-[3px] transition-colors ${
              i === 0
                ? "text-[#7F77DD] border-[#7F77DD]"
                : "text-[#888780] border-transparent hover:text-[#7F77DD]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 px-5 py-3 bg-white border-b-[2px] border-[#F1EFE8] flex-wrap">
        {FILTERS.map((filter, i) => (
          <button
            key={filter}
            className={`font-extrabold text-xs px-3 py-1.5 rounded-full border-[2px] transition-colors ${
              i === 0
                ? "bg-[#EEEDFE] border-[#7F77DD] text-[#3C3489]"
                : "bg-white border-[#D3D1C7] text-[#5F5E5A] hover:border-[#AFA9EC] hover:text-[#534AB7]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Listings grid */}
      <section className="px-5 py-5">
        <p className="text-xs font-black text-[#888780] uppercase tracking-widest mb-4">
          Featured
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {LISTINGS.map((listing) => (
            <ListingCard key={listing.artistName} {...listing} />
          ))}
        </div>
      </section>

      {/* CTA band */}
      <div className="mx-5 mb-6 bg-[#FAEEDA] border-[2.5px] border-[#BA7517] rounded-[18px] p-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-black text-[#412402]">Got something specific in mind?</p>
          <p className="text-sm font-bold text-[#854F0B] mt-0.5">
            Post a request and let artists come to you
          </p>
        </div>
        <Button variant="accent">Post a request ↗</Button>
      </div>
    </main>
  );
}