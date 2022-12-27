const Button = (props:any) => {
	return (
		<button
			className="text-white bg-red-600 hover:bg-red-700 shadow-lg font-medium py-2 px-8 rounded-full"
			{...props}
		>
		</button>
	)
}

export default Button
