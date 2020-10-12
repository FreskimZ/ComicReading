import React, { useState, createContext } from 'react';

export const ComicContext = createContext();

export const ComicProvider = (props) => {
	const [comics, setComics] = useState([
		{
			name: 'Blame!',
			description:
				'A Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio viverra, ultricies massa vitae, elementum turpis. Maecenas diam purus, hendrerit ac tempus id, facilisis in odio. Aenean sit amet tincidunt mauris. Maecenas commodo elit quis diam viverra mattis. Sed dolor odio, mollis sit amet orci in, scelerisque rutrum tellus. Proin ut molestie dui, luctus placerat sem. Aliquam venenatis sed odio nec consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas pellentesque risus nunc, nec aliquet turpis hendrerit sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque a condimentum velit. Nunc eu velit venenatis, laoreet metus vitae, pulvinar velit. Morbi enim leo, sodales a ultrices a, dapibus eget quam. Sed quis lacus laoreet, commodo elit tristique, facilisis ex. Etiam viverra nibh sit amet condimentum ullamcorper.',
			chapters: [35, 3, 35, 3, 3, 35],
			path: 'Blame!',
			id: 1,
		},
		{
			name: 'All you need is kill',
			description: `Since the alien Gitai invaded the Earth, the humankind has been retreating. Now that Japan is almost surrounded by the Gitai, Keiji Kiriya is just one of many new recruits forced into a suit of battle armor and sent out to kill aliens. On a joint mission with the US special force led by Rita, known as the Bitch of the War, Keiji dies on the battlefield, only to find himself reborn.
      After 4 times of "death," Kiriya realizes that he has to win the battle to get out of the loop..`,
			chapters: [14, 14],
			path: 'All-you-need-is-kill',
			id: 2,
		},
		{
			name: 'Attack on Titan',
			description:
				'Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of Titans. Flash forward to the present and the southern district of Shinganshina has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as one of the outer district walls is damaged by a 60 meter (196.85 feet) Titan causing a breach in the wall. As the smaller Titans flood the city, the two kids watch in horror the tragic events that follow, as the Titans devour people uninpeded. Eren vows that he will wipe out every single Titan and take revenge for all of mankind.',
			chapters: [9, 13],
			path: 'Attack-on-Titan',
			id: 3,
		},
		{
			name: 'Dragon ball',
			description:
				'Dragon Ball follows the adventures of Goku from his childhood through adulthood as he trains in martial arts and explores the world in search of the seven mystical orbs known as the Dragon Balls, which can summon a wish-granting dragon when gathered. Along his journey, Goku makes several friends and battles a wide variety of villains, many of whom also seek the Dragon Balls for their own desires. Along the way becoming the strongest warrior in the universe.',
			chapters: [10],
			path: 'Dragon-ball',
			id: 4,
		},
		{
			name: 'Martial Legacy',
			description:
				'A boy named Shi Shan and his little sister were offered as sacrifice to a demon that has been haunting their village. They were rescued by a martial artist who exorcised demons. He took the siblings in as his disciples and taught them the art of cultivation and about the demons that dwell in this world.',
			chapters: [6],
			path: 'Martial-legacy',
			id: 5,
		},
		{
			name: 'Blame!',
			description:
				'A Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio viverra, ultricies massa vitae, elementum turpis. Maecenas diam purus, hendrerit ac tempus id, facilisis in odio. Aenean sit amet tincidunt mauris. Maecenas commodo elit quis diam viverra mattis. Sed dolor odio, mollis sit amet orci in, scelerisque rutrum tellus. Proin ut molestie dui, luctus placerat sem. Aliquam venenatis sed odio nec consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas pellentesque risus nunc, nec aliquet turpis hendrerit sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque a condimentum velit. Nunc eu velit venenatis, laoreet metus vitae, pulvinar velit. Morbi enim leo, sodales a ultrices a, dapibus eget quam. Sed quis lacus laoreet, commodo elit tristique, facilisis ex. Etiam viverra nibh sit amet condimentum ullamcorper.',
			chapters: [35, 3, 35, 3, 3, 35],
			path: 'Blame!',
			id: 1,
		},
		{
			name: 'All you need is kill',
			description: `Since the alien Gitai invaded the Earth, the humankind has been retreating. Now that Japan is almost surrounded by the Gitai, Keiji Kiriya is just one of many new recruits forced into a suit of battle armor and sent out to kill aliens. On a joint mission with the US special force led by Rita, known as the Bitch of the War, Keiji dies on the battlefield, only to find himself reborn.
      After 4 times of "death," Kiriya realizes that he has to win the battle to get out of the loop..`,
			chapters: [14, 14],
			path: 'All-you-need-is-kill',
			id: 2,
		},
		{
			name: 'Attack on Titan',
			description:
				'Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of Titans. Flash forward to the present and the southern district of Shinganshina has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as one of the outer district walls is damaged by a 60 meter (196.85 feet) Titan causing a breach in the wall. As the smaller Titans flood the city, the two kids watch in horror the tragic events that follow, as the Titans devour people uninpeded. Eren vows that he will wipe out every single Titan and take revenge for all of mankind.',
			chapters: [9, 13],
			path: 'Attack-on-Titan',
			id: 3,
		},
		{
			name: 'Martial Legacy',
			description:
				'A boy named Shi Shan and his little sister were offered as sacrifice to a demon that has been haunting their village. They were rescued by a martial artist who exorcised demons. He took the siblings in as his disciples and taught them the art of cultivation and about the demons that dwell in this world.',
			chapters: [6],
			path: 'Martial-legacy',
			id: 5,
		},
		{
			name: 'Dragon ball',
			description:
				'Dragon Ball follows the adventures of Goku from his childhood through adulthood as he trains in martial arts and explores the world in search of the seven mystical orbs known as the Dragon Balls, which can summon a wish-granting dragon when gathered. Along his journey, Goku makes several friends and battles a wide variety of villains, many of whom also seek the Dragon Balls for their own desires. Along the way becoming the strongest warrior in the universe.',
			chapters: [10],
			path: 'Dragon-ball',
			id: 4,
		},
		{
			name: 'Martial Legacy',
			description:
				'A boy named Shi Shan and his little sister were offered as sacrifice to a demon that has been haunting their village. They were rescued by a martial artist who exorcised demons. He took the siblings in as his disciples and taught them the art of cultivation and about the demons that dwell in this world.',
			chapters: [6],
			path: 'Martial-legacy',
			id: 5,
		},
	]);

	return <ComicContext.Provider value={[comics, setComics]}>{props.children}</ComicContext.Provider>;
};
