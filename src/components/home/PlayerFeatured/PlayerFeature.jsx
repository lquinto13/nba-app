/** @format */
import { useEffect, useState } from 'react'
import {
	getDatabase,
	ref,
	query,
	get,
	orderByChild,
	equalTo,
} from 'firebase/database'
import app from '../../../firebaseconfig'
import { feature } from '../../../data/players'
import PlayerFeatureCards from './PlayerFeatureCards'
import Arrow from './Arrow'
import React, { Component } from 'react'
import Slider from 'react-slick'
function PlayerFeature() {
	const [activePlayers, setActivePlayers] = useState([])
	const [index, setIndex] = useState(0)

	useEffect(function () {
		async function fetchPlayers() {
			const db = getDatabase(app)
			const playersPromise = feature.map((players) => {
				const firstNameQuery = query(
					ref(db, 'players'),
					orderByChild('PLAYER_FIRST_NAME'),
					equalTo(players.first_name)
				)
				const lastNameQuery = query(
					ref(db, 'players'),
					orderByChild('PLAYER_LAST_NAME'),
					equalTo(players.last_name)
				)

				return Promise.all([get(firstNameQuery), get(lastNameQuery)]).then(
					([firstSnapshot, lastSnapshot]) => {
						const firstPlayers = firstSnapshot.exists()
							? Object.values(firstSnapshot.val())
							: []
						const lastPlayers = lastSnapshot.exists()
							? Object.values(lastSnapshot.val())
							: []
						return firstPlayers.filter((player) =>
							lastPlayers.some(
								(lastPlayer) => lastPlayer.PERSON_ID === player.PERSON_ID
							)
						)
					}
				)
			})
			try {
				const playersArray = await Promise.all(playersPromise)
				const combinedPlayers = playersArray.flat()
				setActivePlayers(combinedPlayers)
			} catch (err) {
				alert(err.message)
			}
		}
		fetchPlayers()
	}, [])

	const settings = {
		className: 'center',
		swipe: false,
		centerMode: true,
		slidesToShow: 3,
		centerPadding: '5px',
		speed: 800,
		afterChange: (index) => setIndex(index),
		nextArrow: <Arrow direction='next' />,
		prevArrow: (
			<Arrow
				direction='prev'
				className='arrow'
			/>
		),
	}

	return (
		<section className='mb-16 w-full'>
			<h2 className='text-xl font-semibold text-gray-100'>Featured Players</h2>
			<ul className='mt-4 h-64 px-8 relative'>
				<Slider {...settings}>
					{activePlayers.map((player, centerIndex) => (
						<PlayerFeatureCards
							player={player}
							key={player.PERSON_ID}
							centerIndex={centerIndex}
							index={index}
						/>
					))}
				</Slider>
			</ul>
		</section>
	)
}

export default PlayerFeature
