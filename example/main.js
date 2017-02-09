import './assets/style/main.scss';

const examplesContext = require.context('./src', true, /[^/]\/index\.js/);

const examples = examplesContext.keys().sort().map(path => examplesContext(path));
const mainMenu = document.querySelector('.main-menu');
const demoWrapper = document.querySelector('.demo-wrapper');
const demoInput = document.querySelector('#demo-input');
demoInput.addEventListener('input', renderDemo);
let activeDemo = null;

const menuItems = examples.map((example, index) => {
	const menuItem = document.createElement('li');
	mainMenu.appendChild(menuItem);
	menuItem.innerHTML = example.menuName;
	menuItem.addEventListener('click', () => startExample(index));
	return menuItem;
});

function startExample(index) {
	menuItems.forEach((menuItem, menuItemIndex) => {
		menuItem.classList[(index === menuItemIndex ? 'add' : 'remove')]('is-active');
	});

	demoWrapper.innerHTML = examples[index].template;
	demoInput.value = examples[index].defaultText;
	if (activeDemo) {
		activeDemo.dispose();
	}
	activeDemo = new examples[index].Demo();

	renderDemo();
}

function renderDemo() {
	if(activeDemo) {
		activeDemo.render(demoInput.value);
	}
}

startExample(0);

