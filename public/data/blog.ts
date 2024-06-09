// src/data/blog.ts
export type BlogPost = {
    title: string;
    description: string;
    type: string;
    day: number;
    month: string;
    year: number;
    image: string;
    link: string;
};

export const blogData: BlogPost[] = [

    {
        title: 'Blog Post Title 1',
        description: 'This is a short summary or description of the blog post used for layout testing.',
        type: 'Category',
        day: 1,
        month: 'April',
        year: 2024,
        image: 'https://placehold.co/600x400/FEF3C7/FEF3C7',
        link: 'https://example.com/blog/post-1'
    },
    {
        title: 'Blog Post Title 2',
        description: 'Placeholder content for a blog card. Replace with real text when ready.',
        type: 'Category',
        day: 1,
        month: 'April',
        year: 2024,
        image: 'https://placehold.co/600x400/FEF3C7/FEF3C7',
        link: 'https://example.com/blog/post-2'
    },
    {
        title: 'Blog Post Title 3',
        description: 'Use this space to describe what the blog is about in a sentence or two.',
        type: 'Category',
        day: 1,
        month: 'April',
        year: 2024,
        image: 'https://placehold.co/600x400/FEF3C7/FEF3C7',
        link: 'https://example.com/blog/post-3'
    }

];
