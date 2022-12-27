import { useRouter } from 'next/router'
import React from 'react'
import { Home } from '../../layouts'

export default function Slug() {
	const router = useRouter()
	const { slug = [] } = router.query
	// console.log(slug);

	return (
		<Home pageTitle="Try Catch All Routes">
			{[slug].map((item, i) => (
				<p key={i}>{slug + ''} </p>
			))}

			{/* <ul> */}
			{/* <li>{slug[0]}</li>
        <li>{slug[1]}</li>
        <li>{slug[2]}</li> */}
			{/* </ul> */}
		</Home>
	)
}
