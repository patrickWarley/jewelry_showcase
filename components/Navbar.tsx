"use client"
import SearchMenu from './SearchMenu'
import { useEffect } from "react";
import ProfileDropDown from './ProfileDropDown'
import { classNames, getHeaderSize } from '@/utils/util'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { COMPANY_NAME } from '@/constants';
import MobileMenu from './MobileMenu';

const navigation = [
	{ name: 'Correntes', href: '#', current: true },
	{ name: 'Aneis', href: '#', current: false },
	{ name: 'Brincos', href: '#', current: false },
	{ name: 'Pulseiras', href: '#', current: false },
]

const Navbar = () => {
	return (
		<>
			<Disclosure as="nav" className="bg-black">
				{({ open }) => (
					<>
						<div className="mx-auto max-w-7xl px-2 pr-4 sm:px-6 lg:px-8 ">
							<div className="relative flex h-16 items-center justify-between">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									<MobileMenu open={open} navigation={navigation} />
								</div>
								<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
									<div className="z-20 flex flex-shrink-0 items-center">
										<Image
											src="/images/logo.png"
											alt={COMPANY_NAME}
											width={50}
											height={50}
											className="bg-white border"
										/>
									</div>

									{/** menu for larger screeens*/}
									<div className="hidden sm:ml-6 sm:block">
										<div className="flex space-x-4">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className={classNames(
														item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
														'rounded-md px-3 py-2 text-sm font-medium'
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</a>
											))}
										</div>
									</div>
								</div>
								<div className="absolute inset-y-0 right-0 gap-3 text-white flex items-center pr-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									<ProfileDropDown />
									<ShoppingCartIcon className="navbar_icons" />
									<SearchMenu IconStyle="navbar_icons" />
								</div>
							</div>
						</div>
					</>
				)}
			</Disclosure >
		</>

	)
}

export default Navbar;