function PlayerSubHeader({ headerColor, children }) {
  return (
    <div className={`flex ${headerColor} h-16 justify-center items-center`}>
      <h1 className="text-xl text-stone-50">{children}</h1>
    </div>
  );
}

export default PlayerSubHeader;
