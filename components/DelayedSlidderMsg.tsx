import { useState, useEffect } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface SlidderMsgProps {
	show: boolean,
	delay: number,
	msgs: { text: string, link: string }[],
	className?: string,
	close: () => void
}

const DelayedSlidderMsg = ({ delay, msgs, className, close, show }: SlidderMsgProps) => {
	const [msgIdx, setMsgIdx] = useState(0);

	useEffect(() => {

		const timer = setTimeout(() => {
			let infoQtd = msgs.length;
			let nextIdxMsg = (msgIdx + 1) >= infoQtd ? 0 : (msgIdx + 1);

			setMsgIdx(nextIdxMsg);
		}, 3000)

		return () => clearInterval(timer);
	}, [msgIdx]);


	return (
		<div className={`${className} ${!show ? "hidden" : ""}`}>
			<div>{msgs[msgIdx]?.text}</div>
			<div className=" absolute top-50 right-0" >
				<XMarkIcon className="w-4 mr-3	" onClick={close} />
			</div>
		</div>
	)
}

export default DelayedSlidderMsg