import { Home } from '../layouts'

export default function About() {
	return (
		<Home pageTitle="About | Basic Routes">
			<div className="grid grid-cols-2 gap-10 bg-white shadow-lg pt-20 min-h-screen">
				<div className="items-center p-5 sm:py-4">
					<img
						src="https://th.bing.com/th/id/OIP.LvR0WDB3DRRaGRwqPsiEIQHaE8?pid=ImgDet&rs=1"
						alt="image"
						className="w-full rounded-lg pb-3"
					/>
				</div>
        {/* <div className='flex items-center'> */}

				<div className="pt-10 lg:mt-0">
					<h2 className="text-gray-700 mb-8 max-w-md text-3xl font-bold sm:text-4xl">
						Make your customers <span className='text-red-500'> happy </span> by giving <span className='text-yellow-300'>services.</span>
					</h2>
					<p className="text-body-color max-w-md text-justify mb-8 text-base">
						It is a long established fact that a reader will be distracted by the
						readable content of a page when looking at its layout. The point of using
						Lorem Ipsum is that it has a more-or-less.
					</p>
					<p className="text-body-color max-w-md mb-12 text-base">
						A domain name is one of the first steps to establishing your brand. Secure
						a consistent brand image with a domain name that matches your business.
					</p>
				</div>
        {/* </div> */}

			</div>
		</Home>
	)
}
