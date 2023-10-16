"use client";

import Image from "next/image";

import { WHATSAPP_LINK } from "@/constants";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MouseEvent, useState } from "react";

interface props {
	className: string,
}

export const WhatsAppContactIcon = ({ className }: props) => {
	const [show, setShow] = useState(true);

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		setShow(false);
	}

	return (
		<a href={WHATSAPP_LINK} className={`p-2 z-10 ${!show ? "hidden" : "block"} ${className}`} target="_blank">
			<XMarkIcon className=" absolute top-0 right-4 bg-white font-bolder rounded-full border text-black block w-4" onClick={handleClick} />
			<Image src="/images/WhatsAppLogo.png" width={50} height={50} alt="WhatsApp" />
		</a>
	)
}
