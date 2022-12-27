import Link from 'next/link'

export default function Footer() {
	return (
		<div className="bg-gray-100 py-5 text-center text-sm font-semibold text-gray-600">
			Made by Love - &nbsp;
			<span>
				<Link href={'https:/fathasya.github.io'} target="_blank">
					Fathasya
				</Link>
			</span>
		</div>
	)
}
