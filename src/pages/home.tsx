import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {LuGithub, LuLinkedin, LuMail, LuExternalLink} from 'react-icons/lu';
import {FiChevronDown} from "react-icons/fi";
import {PROFILE} from "../../public/data/profile.ts";

const roles = PROFILE.roles;

const Home = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // Cycle roles every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section
                className="h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center px-4 bg-gray-50 text-gray-950">
                <p className="text-base sm:text-lg text-gray-950 mb-2">Hi there, I'm</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-green-400 mb-1">{PROFILE.name}</h1>

                <p className="text-lg sm:text-xl font-medium h-6 text-gray-950 transition-all duration-300 ease-in-out mb-6">
                    {roles[roleIndex]}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <a
                        href={PROFILE.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 w-[180px] text-center border-2 border-green-400 !text-white font-semibold rounded bg-green-400 hover:!text-white hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 text-base"
                    >
            <span className="inline-flex items-center gap-2">
              Resume <LuExternalLink className="text-base"/>
            </span>
                    </a>

                    <Link
                        to="/project"
                        className="px-6 py-2 w-[180px] text-center border-2 border-green-400 text-gray-950 font-semibold rounded hover:bg-green-400 hover:!text-white hover:border-green-400 hover:scale-105 transition-transform duration-300 text-base"
                    >
                        View Projects
                    </Link>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 text-2xl justify-center mt-4">
                    <a
                        href={PROFILE.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-400 transition-transform duration-300 hover:scale-125 hover:-rotate-6"
                    >
                        <LuLinkedin/>
                    </a>
                    <a
                        href={PROFILE.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-400 transition-transform duration-300 hover:scale-125 hover:-rotate-6"
                    >
                        <LuGithub/>
                    </a>
                    <a
                        href={`mailto:${PROFILE.email}`}
                        className="text-gray-600 hover:text-green-400 transition-transform duration-300 hover:scale-125 hover:-rotate-6"
                    >
                        <LuMail/>
                    </a>
                </div>

                {/* Scroll Down Arrow */}
                <div className="mt-10">
                    <a
                        href="#about"
                        className="text-gray-950 transition-transform duration-300 text-2xl animate-bounce"
                        aria-label="Scroll to About section"
                    >
                        <FiChevronDown className="text-xl"/>
                    </a>
                </div>
            </section>

        </>
    );
};

export default Home;
