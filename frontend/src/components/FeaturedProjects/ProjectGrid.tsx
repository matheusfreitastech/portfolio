import { cards } from "./ProjectData";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {

    return (

        <section>

            <div className="flex flex-wrap gap-4">

                {cards.map(card => (

                    <ProjectCard

                        key={card.title}

                        card={card}

                    />

                ))}

            </div>

        </section>

    )

}

export default ProjectGrid;