type StatBadgeProps = {
  label: string;
  value: string | number;
};

export default function StatBadge({ label, value }: StatBadgeProps) {
  return (
    <div className="bg-white border-[2.5px] border-[#D3D1C7] rounded-2xl px-4 py-3 text-center">
      <p className="text-lg font-black text-[#26215C]">{value}</p>
      <p className="text-xs font-bold text-[#888780]">{label}</p>
    </div>
  );
}