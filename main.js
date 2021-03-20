import Widget from './widget/main.js';

const data = [
	{
		id: 1,
		title: 'News 1',
		author: 'Author 1',
		date: '2021-03-20 18:47:50',
		href: 'https://yandex.ru/',
		isReaded: true
	},
	{
		id: 2,
		title: 'News 2',
		author: 'Author 2',
		date:'2021-03-19 12:02:45',
		href: 'https://yandex.ru/',
		isReaded: false
	},
	{
		id: 3,
		title: 'News 3',
		author: 'Author 3',
		date: '2021-03-10 23:07:06',
		href: 'https://yandex.ru/',
		isReaded: false
	},
	{
		id: 4,
		title: 'News 4',
		author: 'Author 4',
		date: '2021-02-26 02:15:52',
		href: 'https://yandex.ru/',
		isReaded: false
	},
	{
		id: 5,
		title: 'News 5',
		author: 'Author 5',
		date: '2021-02-18 16:42:09',
		href: 'https://yandex.ru/',
		isReaded: false
	},
];

new Widget(data);