import styles from './index.module.css'
import Footer from "./footer"
import Header from "./header"
import Main from "./main/ui"

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<Main>{children}</Main>
			</div>
			<Footer />
		</>
	)
}

export default Layout