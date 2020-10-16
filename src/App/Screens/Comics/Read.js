import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ComicContext } from '../../Context/ComicContext';
import '../../../styles/Read.css';

function Read({ match }) {
	const [comics] = useContext(ComicContext);

	const comic = comics.filter((comic) => comic.path === match.params.name)[0];

	const path = comic.path;
	const chapter = match.params.chapter;
	const chapNum = parseInt(chapter);

	const arr = [];
	for (let i = 1; i <= comic.chapters[chapter - 1]; i++) {
		arr.push(i);
	}

	useEffect(() => window.scroll({ top: 0, left: 0, behavior: 'smooth' }), []);

	const Buttons = (
		<div className='buttonContainer '>
			{chapNum != 1 ? (
				<Link className='prevButton readButton' to={`/comics/${path}/${chapNum - 1}`}>
					<p className='buttonText'>Previous</p>
				</Link>
			) : (
				<div></div>
			)}
			<Link className='toComicButton readButton' to={`/comics/${path}`}>
				<p className='buttonText'>Comic</p>
			</Link>
			{comic.chapters.length != chapNum ? (
				<Link className='nextButton readButton' to={`/comics/${path}/${chapNum + 1}`}>
					<p className='buttonText'>Next</p>
				</Link>
			) : (
				<div></div>
			)}
		</div>
	);

	return (
		<div className='container '>
			<p className='chapterTitleText'>Chapter {match.params.chapter}</p>
			{Buttons}
			{arr.map((e, index) => (
				<img className='readImg ' src={`/assets/${path}/${chapter}/${index + 1}.jpg`} alt={`${chapter}`} />
			))}
			{Buttons}
		</div>
	);
}

export default Read;
