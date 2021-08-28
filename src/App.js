//
import React from 'react';
import Card from './Card.js';

import './style.css';

const App = () => {
	return (
		<div className='app-main'>
			<Card name='Jerome' age={18} course='Computer Science' />
			<Card name='Alvin' age={19} course='Criminolosgy' />
			<Card name='Sandee' age={19} course='Bachelor of Special Needs Education' />
			<Card name='Budoy' age={20} course='Information Technology' />
		</div>
	);
};
export default App;
