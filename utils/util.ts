
export function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export function getHeaderSize() {
	const header = document.getElementById("header");

	return header?.offsetHeight;
}