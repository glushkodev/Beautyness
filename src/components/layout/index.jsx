import Footer from "./footer"
import Header from "./header"
import Main from "./main/ui"

const Layout = ({ children }) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}

export default Layout