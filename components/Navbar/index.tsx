import navbarItems from '../constant/navbarItems'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Navbar = () => {
	const router = useRouter()
	return (
		<div className="fixed z-50 mx-auto flex w-full max-w-[1280px] items-center justify-between rounded-b-md bg-white px-10 py-5 shadow-sm">
			<div className="flex items-center">
				<Image src="/next.jpg" width={50} height={25} alt="next-app" />
				<Link
					href={'/'}
					className="ml-2 font-serif text-xl font-semibold text-gray-600">
					Olshop
				</Link>
			</div>
			<div>
				<ul className="flex items-center justify-between">
					{navbarItems.map((item, i) => (
						<li
							key={i}
							className="mr-10 text-sm font-normal hover:font-semibold hover:text-red-600">
							<Link href={item.href}>{item.name}</Link>
						</li>
					))}
					<li>
						<button className="rounded-full bg-red-600 px-8 py-2 text-sm font-semibold text-white hover:bg-red-500">
							Sign In
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
