export default class Widget {
	constructor(data) {
		this.data = data;
		this.showNews();
		this.includeCSS();
	}

	includeCSS() {
		const style = document.createElement('link');
		style.rel = 'stylesheet';
		style.href = './widget/style.css';
		document.head.appendChild(style);
	}

	createBtn(title, ...classes) {
		const btn = document.createElement('button');
		btn.classList.add('button', ...classes);
		btn.textContent = title;

		return btn;
	}
	showNews() {
		console.log(this.data);
		const btn = this.createBtn(`Непрочитанных новостей: ${this.data.filter(item => item.isReaded === false).length}`, 'show-news');
		document.body.append(btn);
		btn.addEventListener('click', () => {
			btn.classList.add('hideme');
			this.renderNews();
		})
	}	

	renderNews() {
		const div = document.querySelector('.wrapper');

		if (!div) {
			const wrapper = document.createElement('div');
			wrapper.classList.add('wrapper');
			document.body.append(wrapper);

			this.data.forEach((item, i) => {

				const newsBlock = document.createElement('div');
				newsBlock.classList.add('news-block', 'anim-news-block', `${item.isReaded ? 'readed' : 'unreaded'}`);
				newsBlock.onclick = (e) => {this.readNews(e, i)}
				newsBlock.innerHTML = `
					<div class="news-block__header">
						<h3 class="news-block__title">${item.title}</h3>
						<div class="news-block__status">${item.isReaded ? 'Прочитано' : 'Не прочитано'}</div>
					</div>
					<a class="news-block__about" href=${item.href}>Узнать подробнее о новости</a>
					<div class="news-block__footer">
						<p class="news-block__author">${item.author}</p>
						<p class="news-block__date">${item.date}</p>
					</div>
				`;
				wrapper.append(newsBlock);

			});

			const btn = this.createBtn('Скрыть все новости', 'hide-news');
			wrapper.append(btn);
			btn.addEventListener('click', () => {
				btn.classList.add('hideme');
				document.querySelector('.wrapper').classList.add('hide');
				setTimeout(() => document.querySelector('.wrapper').classList.add('hideme'), 500);
				this.showNews();
			})
		} else {
			div.classList.remove('hide');
			div.classList.remove('hideme');
			document.querySelector('.hide-news').classList.remove('hideme');
		}

	}

	readNews(e, i) {
		const target = e.target.closest('.news-block');
		
		this.data[i].isReaded = true;
		target.querySelector('.news-block__status').textContent = 'Прочитано';
		target.classList.remove('unreaded');
		target.classList.add('readed');
	}
}

