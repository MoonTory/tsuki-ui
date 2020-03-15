import React, { Suspense } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import { Home } from '../Home';

const Lazy = React.lazy(() => import('../Lazy'));

interface Props {}
export const App: React.FC<Props> = () => {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						{' '}
						<Link to="/lazy">Lazy</Link>
					</li>
				</ul>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/lazy" component={Lazy} />
				</Switch>
			</Suspense>
		</div>
	);
};
