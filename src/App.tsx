import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Resume from './pages/resume'
import Project from './pages/project'
import Blog from './pages/blog'

function App() {

  return (
    <>
        <div className="">
            <main className="px-4 sm:px-6 py-8 max-w-7xl mx-auto w-full flex-grow ">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
            </main>
        </div>
    </>
  )
}

export default App
