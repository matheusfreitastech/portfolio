import type { Card } from "./ProjectData";

type ProjectCardProps = {
    card: Card;
}

function ProjectCard({
    card
}: ProjectCardProps) {

    return (

        <article>

            <h3>{card.title}</h3>

            <p>{card.description}</p>

            <div>

                {card.technologies.map(tech => (

                    <span key={tech}>
                        {tech}
                    </span>

                ))}

            </div>

    )

}

export default ProjectCard;