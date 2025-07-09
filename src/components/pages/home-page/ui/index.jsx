import { lazy } from 'react'
import LazyAnimated from '../../../shared/LazyAnimated/LazyAnimated'
import Welcome from "./components/welcome/Welcome"
const Services = lazy(() => import('./components/Services/Services'))
const About = lazy(() => import('./components/About/About'))
const Prices = lazy(() => import('./components/Prices/Prices'))
const Reviews = lazy(() => import('../../../shared/Reviews/Reviews'))
const Benefits = lazy(() => import('../../../shared/Benefits/Benefits'))
const Discount = lazy(() => import('./components/Discount/Discount'))
const Blog = lazy(() => import('./components/Blog/Blog'))

const HomePage = () => {
	return (
		<div>
			<Welcome />
			<LazyAnimated component={Services} />
      <LazyAnimated component={About} />
      <LazyAnimated component={Prices} />
      <LazyAnimated component={Reviews} />
      <LazyAnimated component={Benefits} />
      <LazyAnimated component={Discount} />
      <LazyAnimated component={Blog} />
		</div>
	)
}

export default HomePage