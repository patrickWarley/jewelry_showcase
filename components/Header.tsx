"use client"
import { NavBar } from ".";
import DelayedSlidderMsg from "./DelayedSlidderMsg";
import { useState } from "react";
const info = [
	{ text: "Compras acima de R$699 com frete grátis.", link: "" },
	{ text: "Best Sellers, Conheça.", link: "" },
]

const Header = () => {
	const [showInfo, setShowInfo] = useState(true);

	return (
		<div id="header" className="header">
			<DelayedSlidderMsg
				show={showInfo}
				delay={5}
				msgs={info}
				close={() => { setShowInfo(false) }}
				className=" text-white w-full flex text-xs p-3 bg-slate-900 relative items-center justify-center" />
			<NavBar />
		</div>
	)
}

export default Header;