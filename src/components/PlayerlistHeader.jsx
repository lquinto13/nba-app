import PlayerSubHeader from "./PlayerSubHeader";

function PlayerlistHeader({ headerColor, headerPhoto }) {
  return (
    <>
      <div className="flex relative h-28 justify-center items-center">
        <img src={headerPhoto} className="h-full w-full" />
      </div>
      <PlayerSubHeader headerColor={headerColor}> Starters</PlayerSubHeader>
    </>
  );
}

export default PlayerlistHeader;
