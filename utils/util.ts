
export function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export function getHeaderSize(): number {
	const header = document.getElementById("header");

	if (!header) return 0;

	return header.offsetHeight;
}