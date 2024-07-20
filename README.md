# 🌐 Portfolio Website

A sleek, dynamic personal portfolio website built using **React**, **Vite**, and **Tailwind CSS**. It showcases projects, a developer resume, blog posts, and an interactive project details system powered by dynamic Markdown and TypeScript data structures.

---

## 📑 Table of Contents

- [Demo](#-demo)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Technologies Used](#-technologies-used)
- [Screenshots](#-screenshots)
- [License](#-license)

---

## 🚀 Demo

🔗 **Live Site:** *Coming Soon*

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v16 or higher
- npm v8 or higher

### Installation

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
npm install
```

### Local Development

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

---

## 🧬 Customizing Content

You can update the portfolio content by modifying the files in the `public/data/` and `public/projects_blog/` directories:

- `profile.ts`: Fill out your personal details, social links, and profile summary.
- `project.ts`: Add or update your projects here. For each project, you can create a detailed Markdown file under `public/projects_blog/` to show extended descriptions.

  **Markdown File Naming Convention**:

  The Markdown file name must match the `title` in `project.ts` by following this rule:

  - Convert the title to lowercase
  - Replace spaces with underscores
  - Add `.md` extension

  **Example**:

  ```ts
  title: "Project Title 1"
  ```
  → Markdown file should be named:
  ```
  public/projects_blog/project_title_1.md
  ```

- `resume.ts`: Input your education background, work experience, and categorized skills.
- `blog.ts`: Include external blog posts with title, description, and links.

Changes made to these files will dynamically update the corresponding sections on the site.

---

## 🛠 Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Markdown](https://daringfireball.net/projects/markdown/) (for project details)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

