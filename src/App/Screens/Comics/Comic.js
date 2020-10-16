import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ComicContext } from '../../Context/ComicContext';
import '../../../styles/Comic.css';

function Comic({ match }) {
	const [comics] = useContext(ComicContext);

	const comic = comics.filter((comic) => comic.path === match.params.name)[0];
	console.log(match);
	const description = comic.description;

	return (
		<div className='comicContainer'>
			<p className='title'>{match.params.name}</p>
			<div className=''>
				<img className='comicImg' src={`/assets/${comic.path}/cover.jpg`} alt='cover' />
			</div>
			<div className=''>
				<p className='description'>{description}</p>
				<div className='miniCard '>
					{comic.chapters.map((chapter, index) => {
						return (
							<Link className='miniCardText' to={`/comics/${comic.path}/${index + 1}`}>
								<p className='miniCardText'>{`Chapter ${index + 1}`}</p>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Comic;
