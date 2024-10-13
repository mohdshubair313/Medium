import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blogs'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Blogs from "./pages/Blogs"
import NewBlog from './pages/NewBlog'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<NewBlog />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App