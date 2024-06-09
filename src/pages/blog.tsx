import {blogData} from '../../public/data/blog';
import BlogCard from '../components/BlogCard';
import {useEffect} from "react";

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-gray-950 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-1">Blog</h2>
                <span className="block text-base sm:text-sm text-center mb-12 text-gray-700">
          A Collection of Thoughts, Ideas, and Lessons from the Journey
        </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogData.map((post, idx) => (
                        <BlogCard key={idx} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
