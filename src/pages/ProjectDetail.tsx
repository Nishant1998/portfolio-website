import {useParams, Link} from 'react-router-dom';
import {projects} from '../../public/data/project';
import {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {LuGithub, LuExternalLink} from 'react-icons/lu';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const ProjectDetail = () => {
    const {title} = useParams();
    const [content, setContent] = useState("");

    const lookupKey = title?.toLowerCase().replace(/\s+/g, "_");
    const project = projects.find((p) =>
        p.title.toLowerCase().replace(/\s+/g, "_") === lookupKey
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        if (!lookupKey) return;

        fetch(`/projects_blog/${lookupKey}.md`)
            .then((res) => {
                if (!res.ok) throw new Error('Markdown not found');
                return res.text();
            })
            .then((text) => {
                // Detect if it's returning HTML instead of Markdown
                if (text.includes('<!doctype html>')) {
                    setContent(""); // or setContent("# Blog not found");
                } else if (text.trim() === '') {
                    setContent(""); // or setContent("# Coming Soon");
                } else {
                    setContent(text);
                }
            })
            .catch(() => setContent("")); // In case of fetch errors
    }, [lookupKey]);


    if (!project) {
        return <div className="text-center py-20 text-xl text-red-600">Project not found</div>;
    }

    console.log(content)

    return (
        <section className="max-w-4xl mx-auto px-4 py-10 text-gray-950">
            {/* Back Button */}
            <Link
                to="/project"
                className="inline-block mb-6 text-sm font-medium text-white  px-4 py-2 rounded transition"
            >
                ← Back to Projects
            </Link>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">{project.title}</h1>

            {/* Image */}
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg shadow-sm mb-6"
                />
            )}

            {/* GitHub & Demo Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 justify-center sm:justify-start">
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-50 text-gray-800 text-sm font-medium rounded-full border border-gray-200 hover:bg-green-400 hover:!text-white hover:border-green-400 flex items-center gap-2"
                    >
                        <LuExternalLink/>
                        Live Demo
                    </a>
                )}
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-50 text-gray-800 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-100 hover:!text-green-400 hover:border-green-400 flex items-center gap-2"
                    >
                        <LuGithub/>
                        GitHub
                    </a>
                )}
            </div>

            {/* Markdown Blog Content */}
            {content ? (
                // prose max-w-none prose-headings:font-semibold prose-p:text-gray-800
                <div className="prose prose-slate max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                        {content}
                    </ReactMarkdown>
                </div>
            ) : (
                <p></p>
            )}
        </section>
    );
};

export default ProjectDetail;
