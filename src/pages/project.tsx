import {projects} from '../../public/data/project';
import ProjectCard from '../components/ProjectCard';
import {useEffect} from "react";

const Project = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <section className="w-full py-16 text-gray-950 scroll-mt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">Projects</h2>
                <p className="text-base sm:text-lg text-gray-700 text-center mb-10">
                    A Playground of Ideas – From Small Experiments to Production-Ready Projects.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
