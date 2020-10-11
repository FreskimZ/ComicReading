import React, { useContext } from 'react';
import { ComicContext } from './ComicContext';
import '../styles/Latests.css';
import Card from './Card';

function Latest() {
	const [comics] = useContext(ComicContext);

	return (
		<div className='latestContainer'>
			<h2 className='latestText'>Latest</h2>
			<div className='latest'>
				{comics.map((comic) => {
					return <Card key={comic.id} path={comic.path} active={'active'} />;
				})}
			</div>
		</div>
	);
}

export default Latest;
