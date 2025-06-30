import { Route, Routes } from "react-router"
import PageNotFound from "../../../pages/404-page"
import HomePage from "../../../pages/home-page"
import AboutPage from "../../../pages/about-page"
import BlogPage from "../../../pages/blog-page"
import ContactPage from "../../../pages/contact-page"
import LocationsPage from "../../../pages/locations-page/ui"
import ServicesPage from "../../../pages/services-page"
import TeamPage from "../../../pages/team-page"
import BlogSinglePage from "../../../pages/blog-page-single"

const Main = () => {

	return (
		<main>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/blog/:id" element={<BlogSinglePage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/locations" element={<LocationsPage />} />
				<Route path="/services" element={<ServicesPage />} />
				{/* <Route path="/services/:id" element={<ServicesSinglePage />} /> */}
				<Route path="/team" element={<TeamPage />} />
				{/* <Route path="/team/:id" element={<TeamSinglePage />} /> */}
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</main>
	)
}


export default Main