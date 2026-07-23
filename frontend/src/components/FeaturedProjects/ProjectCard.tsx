import type { Card } from "./ProjectData";

type ProjectCardProps = {
    card: Card;
}

function ProjectCard({
    card
}: ProjectCardProps) {

    return (
            <div
                className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
                <div className="relative">
                    <img className="w-full h-64 object-cover" src={card.image} alt={card.title}></img>
                        <div className="absolute bottom-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                            Location
                        </div>
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">{card.title}</h2>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <div className="flex justify-between items-center">
                        <a href={card.github} className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out">
                            View
                        </a>
                    </div>
                </div>
            </div>
    )

}

export default ProjectCard;