import React, { useContext } from 'react';
import { ComicContext } from './ComicContext';
import Card from './Card';

function Comics() {
	const [comics] = useContext(ComicContext);

	const hashMap = {};

	const filteredComics = comics.filter((item) => {
		let exists = hashMap.hasOwnProperty(item.id);

		return exists ? false : (hashMap[item.id] = true);
	});

	return (
		<div className='latestContainer'>
			<h2 className='latestText'>Latest</h2>
			<div className='latest'>
				{filteredComics.map((comic) => {
					return <Card key={comic.id} path={comic.path} active={'active'} />;
				})}
			</div>
		</div>
	);
}

export default Comics;
