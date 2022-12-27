export default function InputElement(props: any) {
	return (
		<input
			className="active:border-red:700 my-4 w-full cursor-pointer rounded-lg border-[1.5px] border-red-600 px-5 py-2 text-gray-800 hover:border-red-300"
			{...props}
		/>
	)
}
