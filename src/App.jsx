/** @format */

import { useEffect, useState } from 'react'
import Header from './components/Header'
import PlayerFeature from './components/home/PlayerFeatured/PlayerFeature'
const BASE_URL = 'https://www.balldontlie.io/api/v1'
const CURRENT_SEASON = 2023 // Update to the current season

function App() {
	const [data, setData] = useState([])
	const [players, setPlayers] = useState([])
	const [activePlayers, setActivePlayers] = useState([])

	return (
		<>
			<div className='min-h-screen bg-gray-900 text-gray-100'>
				<Header />
				<main class='p-4'>
					<PlayerFeature />

					<section class='mb-8'>
						<h2 class='text-xl font-semibold text-gray-100'>League Leaders</h2>
						<div class='mt-4 bg-gray-800 p-4 rounded-lg'>
							<ul>
								<li class='text-gray-400'>Player 1: 30.2 PPG</li>
								<li class='text-gray-400'>Player 2: 28.7 PPG</li>
							</ul>
						</div>
					</section>
					<section class='mb-8'>
						<h2 class='text-xl font-semibold text-gray-100'>Upcoming Games</h2>
						<div class='mt-4 bg-gray-800 p-4 rounded-lg'>
							<ul>
								<li class='text-gray-400'>Team A vs. Team B - Date</li>
								<li class='text-gray-400'>Team C vs. Team D - Date</li>
							</ul>
						</div>
					</section>
				</main>
			</div>
			<footer class='bg-gray-800 p-4 text-center'>
				<p class='text-gray-400'>&copy; 2024 NBA Stats Dashboard</p>
			</footer>
		</>
	)
}

export default App

{
	/* <div className="w-[34rem]">
        <ul className="flex flex-col shadow-lg">
          <PlayerlistHeader headerColor={"bg-red-400"} headerPhoto={west} />
          {westAllStars
            .filter((player) => player.isStarter === true)
            .map((player) => (
              <PlayerList
                player={player}
                setPlayerId={setPlayerId}
                order={"order-last"}
                orderTwo={"order-first"}
                justify={"justify-end"}
                west={true}
              />
            ))}
          <PlayerSubHeader headerColor={"bg-red-400"}>Reserve</PlayerSubHeader>
          {westAllStars
            .filter((player) => player.isStarter === false)
            .map((player) => (
              <PlayerList
                player={player}
                setPlayerId={setPlayerId}
                order={"order-last"}
                orderTwo={"order-first"}
                justify={"justify-end"}
                west={true}
                iv
              />
            ))}
        </ul>
      </div>
      <div className="w-[34rem]">
        <ul className="flex flex-col  shadow-lg">
          <PlayerlistHeader headerColor={"bg-blue-400"} headerPhoto={east} />

          {eastAllStars
            .filter((player) => player.isStarter === true)
            .map((player) => (
              <PlayerList
                player={player}
                setPlayerId={setPlayerId}
                order={"order-first"}
                orderTwo={"order-last"}
                justify={"justify-start"}
              />
            ))}
          <PlayerSubHeader headerColor={"bg-blue-400"}>Reserve</PlayerSubHeader>
          {eastAllStars
            .filter((player) => player.isStarter === false)
            .map((player) => (
              <PlayerList
                player={player}
                setPlayerId={setPlayerId}
                order={"order-first"}
                orderTwo={"order-last"}
                justifySelf={"justify-start"}
              />
            ))}
        </ul>
      </div>

      {playerId != null ? (
        <div className="flex items-center justify-center w-1/4">
          <Player
            playerId={playerId}
            westAllStars={westAllStars}
            eastAllStars={eastAllStars}
          />
        </div>
      ) : (
        ""
      )} */
}
