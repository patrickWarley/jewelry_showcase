import { Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { getHeaderSize, classNames } from "@/utils/util";
import { useEffect, useState } from "react";


const showMobileMenu = () => {
	const body = document.getElementsByTagName("body");
	body[0]?.classList.toggle("fixed");
	body[0]?.classList.toggle("relative");
}

interface MobileMenuProps {
	open: boolean,
	navigation: { current: boolean, name: string, href: string }[]
}

const MobileMenu = ({ open, navigation }: MobileMenuProps) => {
	const [headerSize, setHeaderSize] = useState(0);

	useEffect(() => {
		setHeaderSize(getHeaderSize());
	});

	return (
		<>
			<Disclosure.Button
				onClick={showMobileMenu}
				className="navbar_mobile_menu_button"
			>
				<span className="absolute -inset-0.5" />
				<span className="sr-only">Abri menu principal</span>
				{open ? (
					<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
				) : (
					<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
				)}
			</Disclosure.Button>
			<Transition
				className="fixed top-0 left-0 w-screen h-screen"
				enter='transition duration-100 ease-out'
				enterFrom='opacity-0 -translate-x-52'
				enterTo='opacity-100 translate-x-0'
				leave="transition duration-100 ease-out"
				leaveFrom="transform opacity-100 translate-x-0"
				leaveTo="transform opacity-0 -translate-x-52"
			>
				<Disclosure.Panel as="div" className="fixed left-0 top-0 w-screen bg-white h-screen z-20 sm:hidden text-black">
					<div
						className={`absolute space-y-1 px-2 pb-3 pt-2 w-full z-20`}
						style={{ top: `${headerSize}px` }}
					>
						{
							navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current ? 'relative bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-slate-800',
										'block rounded-md px-3 py-2 text-base font-medium navbar_menu_item'
									)}
									aria-current={item.current ? 'page' : undefined}
									onClick={showMobileMenu}
								>
									{item.name}
									<ChevronRightIcon className="absolute right-0 text-black p-0 w-6 mx-4" />
								</Disclosure.Button>
							))
						}
					</div>
				</Disclosure.Panel>
			</Transition>
		</>
	)
}

export default MobileMenu