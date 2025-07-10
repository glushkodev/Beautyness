import Layout from './components/layout'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './components/pages/404-page'
import HomePage from './components/pages/home-page'
import AboutPage from './components/pages/about-page'
import BlogPage from './components/pages/blog-page'
import ContactPage from './components/pages/contact-page'
import LocationsPage from './components/pages/locations-page/ui'
import ServicesPage from './components/pages/services-page'
import TeamPage from './components/pages/team-page'
import BlogSinglePage from './components/pages/blog-page-single'
import TeamSinglePage from './components/pages/team-page-single'
import ServicesSinglePage from './components/pages/services-page-single'

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogSinglePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServicesSinglePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/:id" element={<TeamSinglePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  )
}

export default App