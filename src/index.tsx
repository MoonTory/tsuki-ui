import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { App } from './app';

import './assets/scss/style.scss';

ReactDOM.render(
	<Fragment>
		<HashRouter>
			<App />
		</HashRouter>
	</Fragment>,
	document.getElementById('root')
);
