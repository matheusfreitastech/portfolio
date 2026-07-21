import { cards } from "./ProjectData";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {

    return (

        <section>

            <div className="grid">

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