import { Home } from '../layouts'
import Image from 'next/image'
import next from 'next'

export default function Main() {
	return (
		<Home pageTitle="Homepage">
			<div className="min-h-screen bg-white pt-20 shadow-lg">
				<div className="grid grid-cols-2 place-items-center gap-36">
					<div className="">
						<h1 className="mb-3 text-4xl font-bold leading-snug text-gray-700 sm:text-[42px] lg:text-[52px]">
							Create <br />
							Startup Website <br />
							with <span className="text-red-600">Next</span> Olshop.
						</h1>
						<p className="text-body-color mb-8 max-w-[480px] text-base">
							With <span className="font-bold text-red-600">Next</span> Olshop,
							business and students thrive together. Business can perfectly match their
							staffing to changing demand throughout the dayed.
						</p>
					</div>
					{/* <div className=''> */}
					<div className="relative z-10 inline-block pt-11 lg:pt-0">
						<img
							src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-01.png"
							alt="hero"
							className="max-w-sm lg:ml-auto"
						/>
						<span className="absolute -left-8 -bottom-8 z-[-1]">
							<svg
								width="93"
								height="93"
								viewBox="0 0 93 93"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="2.5" cy="2.5" r="2.5" fill="red" />
								<circle cx="2.5" cy="24.5" r="2.5" fill="red" />
								<circle cx="2.5" cy="46.5" r="2.5" fill="red" />
								<circle cx="2.5" cy="68.5" r="2.5" fill="red" />
								<circle cx="2.5" cy="90.5" r="2.5" fill="red" />
								<circle cx="24.5" cy="2.5" r="2.5" fill="red" />
								<circle cx="24.5" cy="24.5" r="2.5" fill="red" />
								<circle cx="24.5" cy="46.5" r="2.5" fill="red" />
								<circle cx="24.5" cy="68.5" r="2.5" fill="red" />
								<circle cx="24.5" cy="90.5" r="2.5" fill="red" />
								<circle cx="46.5" cy="2.5" r="2.5" fill="red" />
								<circle cx="46.5" cy="24.5" r="2.5" fill="red" />
								<circle cx="46.5" cy="46.5" r="2.5" fill="red" />
								<circle cx="46.5" cy="68.5" r="2.5" fill="red" />
								<circle cx="46.5" cy="90.5" r="2.5" fill="red" />
								<circle cx="68.5" cy="2.5" r="2.5" fill="red" />
								<circle cx="68.5" cy="24.5" r="2.5" fill="red" />
								<circle cx="68.5" cy="46.5" r="2.5" fill="red" />
								<circle cx="68.5" cy="68.5" r="2.5" fill="red" />
								<circle cx="68.5" cy="90.5" r="2.5" fill="red" />
								<circle cx="90.5" cy="2.5" r="2.5" fill="red" />
								<circle cx="90.5" cy="24.5" r="2.5" fill="red" />
								<circle cx="90.5" cy="46.5" r="2.5" fill="red" />
								<circle cx="90.5" cy="68.5" r="2.5" fill="red" />
								<circle cx="90.5" cy="90.5" r="2.5" fill="red" />
							</svg>
						</span>
					</div>
					{/* <Image src="/next.jpg" width={200} height={200} alt="image" /> */}
				</div>
			</div>
			{/* </div> */}
		</Home>
	)
}
