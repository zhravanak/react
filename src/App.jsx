import { useState } from 'react';
import './App.css';

function Page() {
	const getCookie = (name) => {
		const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
		return match ? Number(match[2]) : 1;
	};

	const [activePage, setActivePage] = useState(getCookie('activePage'));

	const pages = [
		{
			id: 1,
			name: 'Page 1',
			title: 'Content 1',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque exercitationem sapiente sunt reprehenderit ratione minima enim voluptatibus amet molestiae?',
		},
		{
			id: 2,
			name: 'Page 2',
			title: 'Content 2',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque exercitationem sapiente sunt reprehenderit ratione minima enim voluptatibus amet molestiae?',
		},
		{
			id: 3,
			name: 'Page 3',
			title: 'Content 3',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque exercitationem sapiente sunt reprehenderit ratione minima enim voluptatibus amet molestiae?',
		},
		{
			id: 4,
			name: 'Page 4',
			title: 'Content 4',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque exercitationem sapiente sunt reprehenderit ratione minima enim voluptatibus amet molestiae?',
		},
	];

	const activeHandler = (id) => {
		setActivePage(id);
		document.cookie = `activePage=${id}; path=/;`;
	};

	return (
		<>
			<div id='first'>
				<h1 id='h1'>Tabs Component </h1>
				{pages.map((page) => (
					<button id='button' key={page.id} onClick={() => activeHandler(page.id)}>
						{page.name}
					</button>
				))}
			</div>
			<div id='sec'>
				<h1 id='title'>{pages[activePage - 1].title}</h1>
				<p id='p'>{pages[activePage - 1].content}</p>
			</div>
		</>
	);
}

export default Page;
