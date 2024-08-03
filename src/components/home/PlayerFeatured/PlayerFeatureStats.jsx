/** @format */

function PlayerFeatureStats({ playerStats, isLoading }) {
	return (
		<div className='p-4 '>
			Season's Stats
			{isLoading ? (
				<div>Loading...</div>
			) : (
				playerStats && (
					<div>
						<p>Games Played: {playerStats.games_played || '00'}</p>
						<p>Points: {playerStats.pts || '00'}</p>
					</div>
				)
			)}
		</div>
	)
}

export default PlayerFeatureStats
