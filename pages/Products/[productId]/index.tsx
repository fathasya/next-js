// kalo pke serversideprops gaperlu useRouter
import { useRouter } from 'next/router'
import { Home } from '../../../layouts'
import { InputElement, Button } from '../../../components/atoms'
import axios from 'axios'
import { useState } from 'react'

// tampilin produk berdasarkan ID
export default function DetailProducts({ product }: any) {
	const router = useRouter()
	const { productId } = router.query
	const next = Number(productId) + 1
	const prev = Number(productId) - 1
	const nextUrl = `http://localhost:3000/Products/${next}`
	const prevUrl = `http://localhost:3000/Products/${prev}`
	const _url = `http://localhost:3000/Products/${productId}`

	const nextProd = async () => {
	 router.push(nextUrl)
	}

	const prevProd = () => {
		router.push(prevUrl)
	}

	// const push = router.push(`/Products/${productId}`)
	const url = `http://localhost:5000/Products/${productId}`
	const [showModalEdit, setShowModalEdit] = useState(false)

	const editProduct = async (product: any) => {
		const res = await axios.put(url, product)
	}

	const delProduct = async (product: any) => {
		const res = await axios.delete(url)
		router.push('/Products')
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		const id = e.target['id'].value
		const name = e.target['name'].value
		const price = e.target['price'].value
		const category = e.target['category'].value
		const img = e.target['img'].value
		const product = { id, name, price, img, category }
		await editProduct(product)
		setShowModalEdit(false)
		router.push(`/Products/${productId}`)
	}
	return (
		<Home pageTitle="Detail Product | Dynamic Routes">
			<div className="bg-white px-10 pt-16 shadow-lg">
				<div className="flex items-center justify-between pt-10 pb-5">
					<h1 className="text-xl font-bold text-red-500">
						See Product's Detail
						{/* - {productId} */}
					</h1>
					<button
						onClick={() => setShowModalEdit(true)}
						className="flex items-center rounded-sm bg-yellow-400 py-2 px-3 text-sm font-semibold text-white hover:bg-yellow-300">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="currentColor"
							className="mr-1 h-4 w-4">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
							/>
						</svg>
						Edit Product
					</button>
				</div>
				<div className="grid grid-cols-3 items-end justify-center py-6">
					<div className="flex items-center justify-start">
						<button
							onClick={prevProd}
							className="flex items-center justify-center rounded-sm border-[1.5px] bg-gray-100 py-2 pl-2 pr-3 text-sm text-gray-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								// stroke="currentColor"
								className="mr-1 h-5 w-5 stroke-gray-500">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
								/>
							</svg>
							Previous Product
						</button>
					</div>
					<div className="mb-16 rounded-lg bg-white shadow-lg">
						<div className="py-6 text-center text-lg font-bold shadow-lg">
							{product.name}
						</div>
						<div>
							<img src={product.img} alt="image" className="h-60 w-full pb-3" />
						</div>
						<div className="mb-2 px-5 font-serif text-sm font-semibold text-red-600">
							{product.price}
						</div>
						<div className="mb-5 px-5 text-justify text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							aliquam dolor placeat est odio, deserunt voluptatem rerum ipsum magnam
							ullam?
						</div>
						<div className="flex w-full border-t-[1.2px] p-5">
							<button
								onClick={delProduct}
								className="w-full rounded-md bg-red-600 py-2 font-semibold text-white hover:bg-red-500">
								Remove Product
							</button>
						</div>
					</div>
					<div className="flex items-center justify-end">
						<button
							onClick={nextProd}
							className="flex items-center justify-center rounded-sm border-[1.5px] bg-gray-100 py-2 pl-5 pr-4 text-sm text-gray-500">
							Next Product
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="ml-1 h-5  w-5 stroke-gray-500">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			{showModalEdit && (
				<div
					onClick={() => setShowModalEdit(false)}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
					<form
						onClick={(e) => e.stopPropagation()}
						onSubmit={handleSubmit}
						className="mx-auto max-w-xl rounded-lg bg-white p-10 shadow-xl">
						<h1 className="my-5 text-center text-2xl font-bold uppercase text-gray-700">
							update Produk
						</h1>
						<InputElement type="text" name="id	" defaultValue={product?.id} />
						<InputElement type="text" name="name" defaultValue={product?.name} />
						<InputElement type="text" name="price" defaultValue={product?.price} />
						<InputElement type="text" name="img" defaultValue={product?.img} />
						<InputElement
							type="text"
							name="category"
							defaultValue={product?.category}
						/>
						<Button>Submit</Button>
					</form>
				</div>
			)}
		</Home>
	)
}

// buat ambil ID dari tiap produk
// kalo pake serversideprops gaperlu staticpath
// export const getStaticPaths = async () => {
// 	const res = await fetch(`http://localhost:5000/Products`)
// 	const data = await res.json()
// 	const paths = data.map((item: any) => ({
// 		params: {
// 			productId: `${item.id}`,
// 		},
// 	}))
// 	return {
// 		paths,
// 		fallback: false,
// 	}
// }

// buat ambil data spesifik produk
// versi static side regeneration - di generate saat build time
// export const getStaticProps = async ({ params }: any) => {
// 	const res = await fetch(`http://localhost:5000/Products/${params.productId}`)
// 	const data = await res.json()
// 	if (!data.id) {
// 		return {
// 			notFound: true,
// 		}
// 	}
// 	return {
// 		props: {
// 			product: data,
// 		},
// 		revalidate: 1,
// 	}
// }

// buat ambil data spesifik produk
// versi static side regeneration - di generate saat terjadi request
export const getServerSideProps = async ({ params }: any) => {
	const res = await fetch(`http://localhost:5000/Products/${params.productId}`)
	const data = await res.json()
	if (!data.id) {
		return {
			notFound: true,
		}
	}
	return {
		props: {
			product: data,
		},
	}
}
