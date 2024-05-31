import {useRef, useState, useEffect} from 'react';
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

    // Animate About Me section on scroll
    const aboutRef = useRef<HTMLDivElement>(null);
    const [showAbout, setShowAbout] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowAbout(entry.isIntersecting);
            },
            {threshold: 0.2}
        );

        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
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


            {/* About Me Section */}
            <section
                ref={aboutRef}
                id="about"
                className={`w-full min-h-screen bg-gray-50 px-4 flex items-center sm:px-6 lg:px-8 text-gray-950 scroll-mt-24 transition-all duration-700 ${
                    showAbout ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
                <div className="max-w-6xl mx-auto w-full">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-1 text-gray-950">About Me</h2>
                    <span className="block text-base sm:text-sm text-center mb-12 text-gray-700">
                      My Introduction
                    </span>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Image */}
                        <div className="flex !items-center !justify-center lg:justify-start px-4">
                            <div
                                className="aspect-square w-full max-w-[300px] rounded-xl overflow-hidden lg:mr-4 shadow-lg">
                                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover"/>
                            </div>
                        </div>


                        {/* Text */}
                        <div className="flex flex-col justify-center max-w-prose mx-auto lg:mx-0">
                            <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                                {PROFILE.summary}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 text-center mb-6">
                                <div>
                                    <p className="text-2xl font-bold text-green-400">{PROFILE.stats.experience}</p>
                                    <p className="text-sm text-gray-600">Years XP</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-green-400">{PROFILE.stats.projects}</p>
                                    <p className="text-sm text-gray-600">Projects</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-green-400">{PROFILE.stats.companies}</p>
                                    <p className="text-sm text-gray-600">Companies</p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex justify-center lg:justify-start">
                                <a
                                    href="#contact"
                                    className="px-6 py-2 w-[180px] text-center border-2 !border-green-400 !text-white font-semibold rounded !bg-green-400 hover:scale-105 transition-transform duration-300"
                                >
                                    Contact Me
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
