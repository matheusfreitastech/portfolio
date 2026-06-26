import StatCard from "./StatCard";

type Stat = {
    value: string;
    label: string;
};

const stats: Stat[] = [ 
    {
        value: "+8",
        label: "Anos de estudo",
    },
    {
        value: "+15",
        label: "Projetos",
    },
    {
        value: "3",
        label: "Especializações",
    },
    {
        value: "∞",
        label: "Curiosidade",
    },
];

function HeroStats() {
    return (
        <div className="mt-10 flex gap-6">

            {stats.map((stat) => (

                <StatCard
                    value={stat.value}
                    label={stat.label}
                />

            ))}

        </div>
    );
}

export default HeroStats;