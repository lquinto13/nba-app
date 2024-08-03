/** @format */
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Header() {
	return (
		<Router>
			<header className='bg-gray-900 text-gray-100'>
				<div className='container mx-auto flex justify-between items-center p-4'>
					<div className='text-2xl font-bold text-indigo-200'>
						<Link to='/'>NBA Stats Dashboard</Link>
					</div>
					<nav className='hidden md:flex space-x-4'>
						<Link
							to='/'
							className='text-gray-100 hover:text-indigo-200'>
							Home
						</Link>
						<Link
							to='/players'
							className='text-gray-100 hover:text-indigo-200'>
							Players
						</Link>
						<Link
							to='/teams'
							className='text-gray-100 hover:text-indigo-200'>
							Teams
						</Link>
						<Link
							to='/standings'
							className='text-gray-100 hover:text-indigo-200'>
							Standings
						</Link>
						<Link
							to='/schedule'
							className='text-gray-100 hover:text-indigo-200'>
							Schedule
						</Link>
					</nav>
					<div className='md:hidden'>
						<button
							id='menu-button'
							className='text-gray-100 focus:outline-none'>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16m-7 6h7'></path>
							</svg>
						</button>
					</div>
				</div>
				<div className='md:hidden'>
					<nav
						id='menu'
						className='hidden p-4 space-y-4 bg-gray-800'>
						<Link
							to='/'
							className='block text-gray-100 hover:text-indigo-200'>
							Home
						</Link>
						<Link
							to='/players'
							className='block text-gray-100 hover:text-indigo-200'>
							Players
						</Link>
						<Link
							to='/teams'
							className='block text-gray-100 hover:text-indigo-200'>
							Teams
						</Link>
						<Link
							to='/standings'
							className='block text-gray-100 hover:text-indigo-200'>
							Standings
						</Link>
						<Link
							to='/schedule'
							className='block text-gray-100 hover:text-indigo-200'>
							Schedule
						</Link>
					</nav>
				</div>
			</header>
		</Router>
	)
}

export default Header
