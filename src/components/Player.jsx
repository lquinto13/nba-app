/** @format */

import { useEffect, useState } from 'react'
import Spinner from './Spinner'

function Player({ playerId, westAllStars, eastAllStars }) {
	const [playerStats, setPlayerStats] = useState([])
	const [player, setPlayer] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const allStars = [...westAllStars, ...eastAllStars]
	const currentPlayer = allStars.find((player) => player.id === playerId)

	useEffect(
		function () {
			async function getPlayerStats() {
				try {
					setIsLoading(true)
					const res = await fetch(
						`https://api.balldontlie.io/v1/season_averages?season=2023&player_ids[]=${playerId}`,
						{
							headers: {
								Authorization: '4f2fd5ee-d6c7-4b3f-9a84-156412b07f55',
							},
						}
					)
					const data = await res.json()
					console.log(data)
					setPlayerStats(data.data[0])
				} catch (err) {
					console.log(err)
				} finally {
					setIsLoading(false)
				}
			}
			getPlayerStats()
		},
		[playerId]
	)

	useEffect(
		function () {
			async function getPlayer() {
				try {
					const res = await fetch(
						`https://api.balldontlie.io/v1/players/${playerId}`,
						{
							headers: {
								Authorization: '4f2fd5ee-d6c7-4b3f-9a84-156412b07f55',
							},
						}
					)
					const data = await res.json()
					setPlayer(data.data)
				} catch (err) {
					console.log(err)
				}
			}
			getPlayer()
		},
		[playerId]
	)

	const playerFG = playerStats?.fg_pct * 100
	return (
		<>
			{isLoading === true ? (
				<div>
					<Spinner />
				</div>
			) : (
				<div className='flex  items-center'>
					<div className='mt-10 ml-4 w-96'>
						<header>
							<h1 className='text-3xl'>
								<strong>{player?.team?.full_name}</strong>
							</h1>
							<h1 className='text-2xl'> {player?.team?.abbreviation}</h1>
						</header>

						<span>
							{player?.first_name} {player?.last_name}
						</span>
						<div className='flex flex-col'>
							<h1 className='font-bold text-2xl'>2023-2024 Season Averages</h1>
							<span>Points: {playerStats?.pts || 'N.A.'}</span>
							<span>Steals: {playerStats?.stl || 'N.A.'}</span>
							<span>Assists: {playerStats?.ast || 'N.A.'}</span>
							<span>Blocks {playerStats?.blk || 'N.A.'}</span>
							<span>FG% {playerFG.toFixed('2') + '%' || 'N.A.'}</span>
						</div>
					</div>
					<div>
						<img
							className='w-96 h-full'
							src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${currentPlayer.photo}.png`}
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default Player
