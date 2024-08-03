/** @format */

import { useEffect, useState, useRef, useCallback } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlayerFeatureInfo from './PlayerFeatureInfo'
import PlayerFeatureStats from './PlayerFeatureStats'

function PlayerFeatureCards({ player, index, centerIndex }) {
	const [playerStats, setPlayerStats] = useState([])
	const [playerId, setPlayerId] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const prevPlayerRef = useRef()
	const playerCacheRef = useRef({})
	const statsCacheRef = useRef({})

	const [isRelative, setIsRelative] = useState(false)

	const animateDiv = () => {
		setIsRelative(!isRelative)
	}
	const fetchPlayer = useCallback(async () => {
		if (
			playerCacheRef.current[
				`${player.PLAYER_FIRST_NAME}_${player.PLAYER_LAST_NAME}`
			]
		) {
			setPlayerId(
				playerCacheRef.current[
					`${player.PLAYER_FIRST_NAME}_${player.PLAYER_LAST_NAME}`
				].id
			)
			return
		}
		try {
			setIsLoading(true)

			const res = await fetch(
				`https://api.balldontlie.io/v1/players?search=${player.PLAYER_FIRST_NAME}`,
				{
					headers: {
						Authorization: '4f2fd5ee-d6c7-4b3f-9a84-156412b07f55',
					},
				}
			)
			const data = await res.json()
			const matchedPlayer = data.data.find(
				(p) => p.last_name === player.PLAYER_LAST_NAME
			)
			if (matchedPlayer) {
				setPlayerId(matchedPlayer.id || '')
				playerCacheRef.current[
					`${player.PLAYER_FIRST_NAME}_${player.PLAYER_LAST_NAME}`
				] = matchedPlayer
			}
		} catch (err) {
			console.log(err)
			setPlayerId('')
		} finally {
			setIsLoading(false)
		}
	}, [player.PLAYER_FIRST_NAME, player.PLAYER_LAST_NAME])

	const fetchPlayerStats = useCallback(async (playerId) => {
		if (statsCacheRef.current[playerId]) {
			setPlayerStats(statsCacheRef.current[playerId])
			return
		}
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
			setPlayerStats(data.data[0] || [])
			statsCacheRef.current[playerId] = data.data[0]
		} catch (err) {
			console.log(err)
			setPlayerStats([])
		} finally {
			setIsLoading(false)
		}
	}, [])

	useEffect(() => {
		if (
			!prevPlayerRef.current ||
			prevPlayerRef.current.PLAYER_FIRST_NAME !== player.PLAYER_FIRST_NAME ||
			prevPlayerRef.current.PLAYER_LAST_NAME !== player.PLAYER_LAST_NAME
		) {
			fetchPlayer()
		}
		prevPlayerRef.current = player
	}, [player, fetchPlayer])

	useEffect(() => {
		if (playerId) {
			fetchPlayerStats(playerId)
		}
	}, [playerId, fetchPlayerStats])

	return (
		<li
			className={`w-[35rem] bg-gray-800 rounded-lg overflow-hidden shadow-lg m-4 relative flex flex-col ${
				centerIndex === index
					? 'bg-gray-800  shadow-3xl ease-in duration-300 z-50'
					: 'mt-16 z-0'
			}`}>
			<PlayerFeatureInfo player={player} />

			<div
				className={`transition-all duration-500 ease-in-out overflow-hidden ${
					index === centerIndex ? 'h-[6rem]' : 'h-0'
				} w-64 relative`}>
				<div
					className={`absolute transition-transform duration-500 ease-in-out ${
						index === centerIndex ? 'translate-y-0' : '-translate-y-full'
					}`}>
					<PlayerFeatureStats
						playerStats={playerStats}
						isLoading={isLoading}
					/>
				</div>
			</div>
		</li>
	)
}

export default PlayerFeatureCards
