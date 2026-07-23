import { cards } from "./ProjectData";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {

    return (
        <div className="flex gap-4 p-12">

            {cards.map(card => (

                <ProjectCard

                    key={card.title}

                    card={card}

                />

            ))}

        </div>
    )

}

export default ProjectGrid;