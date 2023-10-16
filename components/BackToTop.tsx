"use client"

import { ChevronUpIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

interface props {
	className: string,
}
export const BackToTop = ({ className }: props) => {

	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const position = window.scrollY;
			if (position < 300 && show === true) setShow(false);
			if (position > 300 && show === false) setShow(true);
		}, { passive: true });
	});

	const scrollTop = () => {
		window.scrollTo(0, 0);
	}

	return (
		<div className={`${className} ${show ? "block" : "hidden"} p-2`}>
			<div
				onClick={scrollTop}
				className={`rounded-full shadow shadow-white flex flex-col text-white bg-black w-[46px] h-[46px] items-center text-xs font-bold`}>
				<ChevronUpIcon className="w-6 h-6 text-white" />
				<span className="block">top</span>
			</div >
		</div >
	)
}
