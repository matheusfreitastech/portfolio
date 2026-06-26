type StatCardProps = {
  value: string;
  label: string;
};

function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-6">
      <h2 className="text-4xl font-bold">{value}</h2>

      <p className="text-zinc-400">{label}</p>
    </div>
  );
}

export default StatCard;