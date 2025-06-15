import { Route, Routes } from "react-router"
import PageNotFound from "../../../pages/404-page"
// import IndexPage from "../../../pages/index-page"
// import AboutPage from "../../../pages/about-page"
// import FAQPage from "../../../pages/faq-page"
// import CatalogPage from "../../../pages/catalog-page"
// import { ContextProvider } from "../../../shared/context/CatalogContext"
import HomePage from "../../../pages/home-page"
import AboutPage from "../../../pages/about-page"
import BlogPage from "../../../pages/blog-page"
import ContactPage from "../../../pages/contact-page"
import LocationsPage from "../../../pages/locations-page/ui"
import ServicesPage from "../../../pages/services-page"
import TeamPage from "../../../pages/team-page"
// import ProductPage from "../../../pages/product-page/ui"
// import CartPage from "../../../pages/cart-page"

const Main = () => {

	return (
		// <ContextProvider>
			<main>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/locations" element={<LocationsPage />} />
					<Route path="/services" element={<ServicesPage />} />
					<Route path="/team" element={<TeamPage />} />
					{/* <Route path="/catalog" element={<CatalogPage />} />
					<Route path="/catalog/:id" element={<ProductPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/FAQ" element={<FAQPage />} /> */}
					{/* <Route path="/cart" element={<CartPage />} /> */}
					
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</main>
		// </ContextProvider>
	)
}


export default Main