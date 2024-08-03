import { useEffect } from "react";

const PER_PAGE = 10;

function PlayerList({ player, setPlayerId, order, orderTwo, justify, west }) {
  //   useEffect(
  //     function () {
  //       async function getPlayers() {
  //         try {
  //           const res = await fetch(
  //             `https://www.balldontlie.io/api/v1/players/?per_page=${PER_PAGE}&search=${searchPlayer}`
  //           );
  //           const data = await res.json();
  //           setData(data.data);
  //         } catch (err) {
  //           console.log(err);
  //         }
  //       }
  //       getPlayers();
  //     },
  //     [searchPlayer]
  //   );

  return (
    <>
      <li
        key={player.id}
        className="flex justify-evenly w-full h-20 shadow-sm cursor-pointer even:bg-slate-200"
        onClick={() => setPlayerId(player.id)}
      >
        <div className={`${orderTwo}`}>
          <img
            src={`https://cdn.nba.com/logos/nba/${player.teamID}/global/L/logo.svg`}
            className="h-full"
          />
        </div>
        <div className={`flex gap-2 w-64  ${justify} items-center`}>
          {west === true ? (
            <>
              {player.first_name}
              <strong className="uppercase">{player.last_name}</strong>
              <strong> #{player.jerseyNumber}</strong>
            </>
          ) : (
            <>
              <strong> #{player.jerseyNumber}</strong>
              {player.first_name}
              <strong className="uppercase">{player.last_name}</strong>
            </>
          )}
        </div>

        <div className={`p-1 ${order} `}>
          <img
            className="h-full w-24"
            src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.photo}.png`}
          />
        </div>
      </li>
    </>
  );
}

export default PlayerList;
