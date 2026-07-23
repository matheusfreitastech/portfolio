type StatCardProps = {
  container: string;
  value: string;
  label: string;
};

const StatCardStyles = {
  container: "rounded-2xl border border-zinc-800 bg-zinc-900 p-6",
  title: "text-4xl font-bold",
  subtitle: "mt-6 max-w-2xl text-lg text-zinc-400 text-purple-900",
};

function StatCard({container, value, label}: StatCardProps) {
  return (
    <div className={StatCardStyles.container}>
      <h2 className={StatCardStyles.title}>{value}</h2>

      <p className={StatCardStyles.subtitle}>{label}</p>
    </div>
  );
}

export default StatCard;