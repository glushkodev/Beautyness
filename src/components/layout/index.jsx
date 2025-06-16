import styles from './index.module.css'
import Footer from "./footer"
import Header from "./header"
import Main from "./main/ui"

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	)
}

export default Layout