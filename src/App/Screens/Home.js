import React, { useContext } from 'react';
import { ComicContext } from '../Context/ComicContext';
import Card from '../Components/Card';
import '../../styles/Home.css';

function Home() {
	const [comics] = useContext(ComicContext);

	return (
		<div className='homeContainer'>
			<h2 className='homeText'>Home</h2>
			<div>
				<p className='newReleasesText'>New Releases</p>
				<div className='home'>
					{comics.map((comic) => {
						return <Card key={comic.id} cover={comic.cover} path={comic.path} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;
