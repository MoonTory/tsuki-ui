import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { App } from './app';

ReactDOM.render(
	<Fragment>
		<HashRouter>
			<App />
		</HashRouter>
	</Fragment>,
	document.getElementById('root')
);
