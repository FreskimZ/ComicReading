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
			chapters: [14],
			path: 'All-you-need-is-kill',
			id: 2,
		},
		{
			name: 'Blame!',
			description:
				'A Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio viverra, ultricies massa vitae, elementum turpis. Maecenas diam purus, hendrerit ac tempus id, facilisis in odio. Aenean sit amet tincidunt mauris. Maecenas commodo elit quis diam viverra mattis. Sed dolor odio, mollis sit amet orci in, scelerisque rutrum tellus. Proin ut molestie dui, luctus placerat sem. Aliquam venenatis sed odio nec consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas pellentesque risus nunc, nec aliquet turpis hendrerit sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque a condimentum velit. Nunc eu velit venenatis, laoreet metus vitae, pulvinar velit. Morbi enim leo, sodales a ultrices a, dapibus eget quam. Sed quis lacus laoreet, commodo elit tristique, facilisis ex. Etiam viverra nibh sit amet condimentum ullamcorper.',
			chapters: [35, 3, 35, 3, 3],
			path: 'Blame!',
			id: 1,
		},
		{
			name: 'Blame!',
			description:
				'A Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio viverra, ultricies massa vitae, elementum turpis. Maecenas diam purus, hendrerit ac tempus id, facilisis in odio. Aenean sit amet tincidunt mauris. Maecenas commodo elit quis diam viverra mattis. Sed dolor odio, mollis sit amet orci in, scelerisque rutrum tellus. Proin ut molestie dui, luctus placerat sem. Aliquam venenatis sed odio nec consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas pellentesque risus nunc, nec aliquet turpis hendrerit sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque a condimentum velit. Nunc eu velit venenatis, laoreet metus vitae, pulvinar velit. Morbi enim leo, sodales a ultrices a, dapibus eget quam. Sed quis lacus laoreet, commodo elit tristique, facilisis ex. Etiam viverra nibh sit amet condimentum ullamcorper.',
			chapters: [35, 3],
			path: 'Blame!',
			id: 3,
		},
		{
			name: 'Blame!',
			description:
				'A Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio viverra, ultricies massa vitae, elementum turpis. Maecenas diam purus, hendrerit ac tempus id, facilisis in odio. Aenean sit amet tincidunt mauris. Maecenas commodo elit quis diam viverra mattis. Sed dolor odio, mollis sit amet orci in, scelerisque rutrum tellus. Proin ut molestie dui, luctus placerat sem. Aliquam venenatis sed odio nec consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas pellentesque risus nunc, nec aliquet turpis hendrerit sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque a condimentum velit. Nunc eu velit venenatis, laoreet metus vitae, pulvinar velit. Morbi enim leo, sodales a ultrices a, dapibus eget quam. Sed quis lacus laoreet, commodo elit tristique, facilisis ex. Etiam viverra nibh sit amet condimentum ullamcorper.',
			chapters: [35, 3],
			path: 'Blame!',
			id: 4,
		},
		{
			name: 'All you need is kill',
			description: `Since the alien Gitai invaded the Earth, the humankind has been retreating. Now that Japan is almost surrounded by the Gitai, Keiji Kiriya is just one of many new recruits forced into a suit of battle armor and sent out to kill aliens. On a joint mission with the US special force led by Rita, known as the Bitch of the War, Keiji dies on the battlefield, only to find himself reborn.
      After 4 times of "death," Kiriya realizes that he has to win the battle to get out of the loop..`,
			chapters: [14],
			path: 'All-you-need-is-kill',
			id: 2,
		},
		{
			name: 'Blame!',
			description:
				'A Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio viverra, ultricies massa vitae, elementum turpis. Maecenas diam purus, hendrerit ac tempus id, facilisis in odio. Aenean sit amet tincidunt mauris. Maecenas commodo elit quis diam viverra mattis. Sed dolor odio, mollis sit amet orci in, scelerisque rutrum tellus. Proin ut molestie dui, luctus placerat sem. Aliquam venenatis sed odio nec consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas pellentesque risus nunc, nec aliquet turpis hendrerit sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque a condimentum velit. Nunc eu velit venenatis, laoreet metus vitae, pulvinar velit. Morbi enim leo, sodales a ultrices a, dapibus eget quam. Sed quis lacus laoreet, commodo elit tristique, facilisis ex. Etiam viverra nibh sit amet condimentum ullamcorper.',
			chapters: [35, 3],
			path: 'Blame!',
			id: 5,
		},
		{
			name: 'All you need is kill',
			description: `Since the alien Gitai invaded the Earth, the humankind has been retreating. Now that Japan is almost surrounded by the Gitai, Keiji Kiriya is just one of many new recruits forced into a suit of battle armor and sent out to kill aliens. On a joint mission with the US special force led by Rita, known as the Bitch of the War, Keiji dies on the battlefield, only to find himself reborn.
      After 4 times of "death," Kiriya realizes that he has to win the battle to get out of the loop..`,
			chapters: [14],
			path: 'All-you-need-is-kill',
			id: 2,
		},
	]);

	return <ComicContext.Provider value={[comics, setComics]}>{props.children}</ComicContext.Provider>;
};
