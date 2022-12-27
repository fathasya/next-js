import Link from 'next/link'
import axios from 'axios'
// import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Home } from '../../layouts'
import { InputElement, Button } from '../../components/atoms'
// buat client side data fetching
// import useSWR  from 'swr'

const url = 'http://localhost:5000/Products'

// cara client side data fetching
// const fetcher = (...args:any) => (fetch(...args).then((res)=> res.json()))
// const Products = () => {
//   const {data, error} = useSWR(url, fetcher)
//   if(error) return <div>Failed to load data</div>
//   if(!data) return <div>Loading...</div>

export default function Products({ product }: any) {
	const router = useRouter()
	const { page, limit } = router.query
	const add = () => {
		router.push('/Products/Add')
	}

	const [showModalAdd, setShowModalAdd] = useState(false)

	const addProduct = async (data: any) => {
		const res = await axios.post(url, data)
		router.push('/Products')
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		const id = e.target['id'].value
		const name = e.target['name'].value
		const price = e.target['price'].value
		const category = e.target['category'].value
		const img = e.target['img'].value
		const data = { id, name, price, img, category }
		await addProduct(data)
		setShowModalAdd(false)
	}

	return (
		<Home pageTitle="Products | Try Query Params">
			<div className="bg-white px-10 pt-16 shadow-lg">
				<div className="flex justify-between py-10">
					<h1 className="text-xl font-bold text-red-500">
						See All Products Here
						{/* page {page} - limit {limit} */}
					</h1>
					<button
						onClick={() => setShowModalAdd(true)}
						className="rounded-md bg-blue-600 py-2 px-3 text-sm font-semibold text-white hover:bg-blue-500">
						Add New Product
					</button>
				</div>

				{/* versi client side */}
				{/* {data.map((item: any, i: any) => ( */}
				{/* versi server side */}
				<div className="grid grid-cols-3 justify-center gap-16 rounded-lg pb-16">
					{product.map((item: any, i: any) => (
						// <Card>
						// 	key={product.id}, id={product.id}, name = {product.name}, price ={' '}
						// 	{product.price}, img = {product.img}
						// </Card>
						<div key={i} className="rounded-lg shadow-lg">
							<Link href={`/Products/${item.id}`}>
								<div className="py-6 text-center text-lg font-bold shadow-lg">
									{item.name}
								</div>
								<div>
									<img src={item.img} alt="image" className="h-56 w-96 pb-3" />
								</div>
								<div className="mb-2 px-5 font-serif text-sm font-semibold text-red-600">
									$ {item.price}
								</div>
								<div className="mb-5 px-5 text-justify text-sm">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
									obcaecati.
								</div>
								<div className="flex w-full border-t-[1.2px] p-5">
									<button className="w-full rounded-md bg-red-600 py-2 font-semibold text-white hover:bg-red-500">
										Lihat Detail
									</button>
								</div>
							</Link>
						</div>
					))}
					{showModalAdd && (
						<div
							onClick={() => setShowModalAdd(false)}
							className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
							<form
								onClick={(e) => e.stopPropagation()}
								onSubmit={handleSubmit}
								className="mx-auto max-w-xl rounded-lg bg-white p-10 shadow-xl">
								<h1 className="my-5 text-center text-2xl font-bold uppercase text-gray-700">
									Add Produk
								</h1>
								<InputElement type="text" name="id" placeholder="ID Product" />
								<InputElement type="text" name="name" placeholder="name" />
								<InputElement type="text" name="price" placeholder="price" />
								<InputElement type="text" name="img" placeholder="link image" />
								<InputElement type="text" name="category" placeholder="category" />
								<Button>Submit</Button>
							</form>
						</div>
					)}
				</div>
			</div>
		</Home>
	)
}
// export default Products

// buat ambil data produk
// versi static side regeneration - di generate saat build time
// export const getStaticProps = async () => {
// 	const res = await fetch('http://localhost:5000/Products')
// 	const data = await res.json()
// 	return {
// 		props: {
// 			product: data,
// 		},
// 		revalidate: 1,
// 	}
// }

// buat ambil data produk
// versi server side regeneration - di generate saat terjadi request
export const getServerSideProps = async ({ params }: any) => {
	const res = await fetch(url)
	const data = await res.json()

	return {
		props: {
			product: data,
		},
	}
}
