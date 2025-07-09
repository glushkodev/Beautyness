import PageHeader from "../../../shared/PageHeader/PageHeader"
import LazyAnimated from "../../../shared/LazyAnimated/LazyAnimated"
import { lazy } from 'react'

const Values = lazy(() => import("./components/Values/Values"))
const Style = lazy(() => import("./components/Style/Style"))
const Experts = lazy(() => import("./components/Experts/Experts"))
const Reviews = lazy(() => import("../../../shared/Reviews/Reviews"))
const Follow = lazy(() => import("./components/Follow/Follow"))

const AboutPage = () => {
	return (
		<div>
			<div>
				<PageHeader 
					subtitle="Короткая история о нас"
					title="Большая история, стоящая за нашим центром красоты"
				/>
				<LazyAnimated component={Values} />
				<LazyAnimated component={Style} />
				<LazyAnimated component={Experts} />
				<LazyAnimated component={Reviews} />
				<LazyAnimated component={Follow} />
			</div>
		</div>
	)
}

export default AboutPage