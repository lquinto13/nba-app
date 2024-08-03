/** @format */

function PlayerFeatureInfo({ player }) {
	return (
		<div className='relative w-full h-1/2 flex mb-48'>
			<img
				className='absolute h-[16rem] opacity-40 top-[-50px] left-[-85px] z-0'
				src={`https://cdn.nba.com/logos/nba/${player.TEAM_ID}/global/L/logo.svg`}
			/>
			<img
				className='absolute z-10 left-[-20px] top-[7px]'
				src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.PERSON_ID}.png`}
			/>

			<div className='absolute top-0 z-20 right-[-20px] h-[12.25rem] w-2/3 -skew-x-12 bg-gray-100 opacity-50'>
				<div className='text-4xl relative z-20 ml-8 text-gray-900 skew-x-12'>
					<div className='mt-3 flex flex-col'>
						<div className='flex'>
							<div className='flex flex-col'>
								<span className='text-2xl'>{player.PLAYER_FIRST_NAME}</span>
								<span className='font-bold text-2xl'>
									{player.PLAYER_LAST_NAME}
								</span>
							</div>

							<span
								className={`absolute  text-5xl text-gray-500 ${
									player.JERSEY_NUMBER > 10 ? 'left-[-4rem]' : 'left-[-2rem]'
								}`}>
								{player.JERSEY_NUMBER}
							</span>
						</div>

						<span className='text-lg'>
							{player.TEAM_CITY} {player.TEAM_NAME}
						</span>
						<span className='text-sm'>Position: {player.POSITION || '00'}</span>
						<span className='text-sm'>Weight: {player.WEIGHT || '00'} </span>
						<span className='text-sm'>Height: {player.HEIGHT || '00'}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlayerFeatureInfo
