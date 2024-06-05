export type Project = {
    title: string;
    description: string;
    github: string;
    demo: string;
    tags: string[];
    active: boolean;
    image: string;
    isFeatured: boolean;
};

export const projects: Project[] = [
    {
        title: "Project Title 1",
        description: "This is a dummy description used as a placeholder for a future project entry.",
        github: "https://github.com/yourusername/project-1",
        demo: "https://example.com/project-1",
        tags: ["Tag1", "Tag2", "Tag3"],
        active: true,
        image: "https://placehold.co/600x400/DBEAFE/DBEAFE",
        isFeatured: false
    },
    {
        title: "Project Title 2",
        description: "Brief summary of a sample project. Replace this with actual project details later.",
        github: "https://github.com/yourusername/project-2",
        demo: "",
        tags: ["Tag1", "Tag2", "Tag3"],
        active: false,
        image: "https://placehold.co/600x400/DBEAFE/DBEAFE",
        isFeatured: true
    },
    {
        title: "Project Title 3",
        description: "Use this placeholder to showcase a project in the layout preview or demo template.",
        github: "",
        demo: "https://example.com/project-3",
        tags: ["Tag1", "Tag2", "Tag3"],
        active: true,
        image: "https://placehold.co/600x400/DBEAFE/DBEAFE",
        isFeatured: false
    }
];
