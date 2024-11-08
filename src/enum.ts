import createEnum from '../lib/index.mjs';

const LIST_ENUM = createEnum([
	{ key: 'apple', value: 0, desc: '苹果' },
	{ key: 'pear', value: 1, desc: '梨' },
	{ key: 'watermelon', value: 2, desc: '西瓜' }
]);

export function getItem(element: HTMLButtonElement) {
	element.addEventListener('click', () => console.log(LIST_ENUM.getItem(0)));
}
export function getByKey(element: HTMLButtonElement) {
	element.addEventListener('click', () => console.log(LIST_ENUM.getByKey('梨')));
}
export function getByValue(element: HTMLButtonElement) {
	element.addEventListener('click', () => console.log(LIST_ENUM.getByValue('watermelon')));
}
export function getByDesc(element: HTMLButtonElement) {
	element.addEventListener('click', () => console.log(LIST_ENUM.getByDesc('apple')));
}
export function getByList(element: HTMLButtonElement) {
	element.addEventListener('click', () => console.log(LIST_ENUM.getByList()));
}
export function getByOptions(element: HTMLButtonElement) {
	element.addEventListener('click', () => console.log(LIST_ENUM.getByOptions({ id: 'value', title: 'desc' })));
}
export function has(element: HTMLButtonElement) {
	element.addEventListener('click', () => console.log(LIST_ENUM.has(2)));
}