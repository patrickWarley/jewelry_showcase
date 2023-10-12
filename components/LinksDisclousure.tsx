"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type prop = {
	title: string;
	links: { title: string, src: string }[]
}

const LinksDisclousure = ({ title, links }: prop) => {
	return (
		<Disclosure>
			{({ open }) => (
				<>
					<Disclosure.Button className="w-full" as={"a"}>
						<div className="flex justify-between p-2">
							<div className="text-white text-lg p-2">{title}</div>

							<ChevronRightIcon className="text-white p-0 w-3 ui-open:rotate-90 -rotate-90" />
						</div>
					</Disclosure.Button>
					<Transition
						enter="transition-opacity duration-75"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-75"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Disclosure.Panel className="flex flex-col">
							{
								links.map(link => (
									<Link className="indent-4 text-slate-500 p-2 text-sm" href={link.src}>{link.title}</Link>
								))
							}
						</Disclosure.Panel>
					</Transition>
				</>
			)}
		</Disclosure>
	)
}

LinksDisclousure.propTypes = {}

export default LinksDisclousure