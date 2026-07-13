type StatCardProps = {
  value: string;
  label: string;
};

const StatCardStyles = {
  container: "rounded-2xl border border-zinc-800 bg-zinc-900 p-6",
  value: "text-4xl font-bold",
  label: "text-zinc-400",
};

function StatCard({value, label}: StatCardProps) {
  return (
    <div className={StatCardStyles.container}>
      <h2 className={StatCardStyles.value}>{value}</h2>

      <p className={StatCardStyles.label}>{label}</p>
    </div>
  );
}

export default StatCard;