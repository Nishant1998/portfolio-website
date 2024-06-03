import {resumeData} from '../../public/data/resume';
import EducationCard from '../components/EducationCard';
import ExperienceCard from '../components/ExperienceCard';
import {useEffect} from "react";

const Resume = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <section className="w-full py-16   text-gray-950 scroll-mt-24">
            <div className="!px-0 mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-1">Resume</h2>
                <span className="block text-base sm:text-sm text-center mb-12 text-gray-700">My Academic and Professional Journey So Far</span>

                {/* Education Section */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mb-6">Education</h3>
                <div className="w-full grid gap-6">
                    {resumeData.education.map((edu, idx) => (
                        <EducationCard key={idx} {...edu} />
                    ))}
                </div>

                {/* Experience Section */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mt-12 mb-6">Experience</h3>
                <div className="w-full grid gap-6">
                    {resumeData.experience.map((exp, idx) => (
                        <ExperienceCard key={idx} {...exp} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Resume;
