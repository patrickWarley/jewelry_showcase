import { Menu, Transition } from "@headlessui/react"
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"

interface SearchMenuProps {
	IconStyle: string,
}

const SearchMenu = ({ IconStyle }: SearchMenuProps) => {
	return (
		<Menu as="div" className="relative flex items-center">
			{({ open }) => (
				<>
					<Menu.Button>
						{
							open ? <XMarkIcon className={`${IconStyle}`} /> : <MagnifyingGlassIcon className={`${IconStyle}`} />
						}
					</Menu.Button>
					<Transition
						show={open}
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-100 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<Menu.Items className="fixed top-6 -right-5">
							<Menu.Item>
								<form className="w-screen px-5">
									<div className="text-white relative flex w-full">
										<input onClick={(e) => e.preventDefault()} type="text" placeholder="Buscar" className="bg-black border-b-2 focus-within:border-yellow-300 outline-none flex-1 p-3" />
										<div className="p-3 text-white absolute top-0 right-0">
											<button type="submit" >
												<MagnifyingGlassIcon className="w-5" />
											</button>
										</div>
									</div>
								</form>
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	)
}

SearchMenu.propTypes = {}

export default SearchMenu