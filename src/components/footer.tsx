import React from 'react';
import {LuGithub, LuLinkedin, LuMail} from 'react-icons/lu';
import {PROFILE} from "../../public/data/profile.ts";

const Footer: React.FC = () => {
    return (
        <footer
            className="bg-green-400 text-gray-700 text-sm"
            role="contentinfo"
            aria-label="Footer"
        >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-center sm:text-left">
                    &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
                </p>

                <nav
                    className="flex gap-5 text-xl justify-center"
                    aria-label="Social media"
                >
                    <a
                        href={PROFILE.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="!text-gray-700 hover:!text-green-700/80 transition"
                    >
                        <LuLinkedin/>
                    </a>
                    <a
                        href={PROFILE.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="!text-gray-700 hover:!text-green-700/80 transition"
                    >
                        <LuGithub/>
                    </a>
                    <a
                        href={`mailto:${PROFILE.email}`}
                        aria-label="Email"
                        className="!text-gray-700 hover:!text-green-700/80 transition"
                    >
                        <LuMail/>
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
