import React, { useContext } from 'react';
import { ComicContext } from './ComicContext';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

function Card({ active, path }) {
	const [comics] = useContext(ComicContext);

	const comic = comics.filter((comic) => comic.path === path)[0];
	console.log(comic);
	return (
		<div className='card'>
			<Link to={`/comics/${path}/1`}>
				<img className={`cardImg ${active}`} src={`/assets/${path}/cover.jpg`} alt='img' />
			</Link>
			<Link className='textDecor' to={`/comics/${path}`}>
				<p className='cardText'>{comic.name}</p>
			</Link>
			<p>chapter number</p>
		</div>
	);
}

export default Card;

//'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
