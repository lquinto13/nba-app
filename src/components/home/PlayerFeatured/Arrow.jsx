/** @format */

const Arrow = ({ className, style, onClick, direction }) => (
	<div
		className={`${className} ${
			direction === 'next' ? 'right-4' : 'left-4'
		} fixed top-[19rem]`}
		style={{ ...style }}
		onClick={onClick}
	/>
)

export default Arrow
