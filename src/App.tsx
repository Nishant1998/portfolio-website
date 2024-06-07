import {Routes, Route} from 'react-router-dom'
import Header from './components/header';
import Home from './pages/home'
import Resume from './pages/resume'
import Project from './pages/project'
import Blog from './pages/blog'
import Footer from './components/footer.tsx';
import ProjectDetail from "./pages/ProjectDetail.tsx";

function App() {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Header/>

            <main className="px-4 sm:px-6 py-8 max-w-7xl mx-auto w-full flex-grow ">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/project/:title" element={<ProjectDetail/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
            </main>

            <Footer/>
        </div>
    );
}


export default App
