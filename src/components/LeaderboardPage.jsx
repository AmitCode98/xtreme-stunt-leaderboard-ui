import React from "react";
import Logo from "../assets/images/logo.png";
import BackGroundImg from "../assets/images/bgimg.png";
import TrophyIcon from "../assets/images/trophy.png";

const LeaderboardPage = () => {
  const players = [
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
    { name: "Eleanor Pena", score: "30,0000", avatar: Logo },
  ];
  return (
    <section
      className="relative min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${BackGroundImg})` }}
    >
      {/* <h1 className="bg-red-500 text-6xl font-exo">Global Leaderboard</h1>
      <img src={BackGroundImg} alt="bg-img" />
      <img src={Logo} alt="logo" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div> */}
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <img src={Logo} alt="Game Logo" className="w-52" />
        <h2 className=" text-white font-exo  text-center text-2xl font-bold mb-4 uppercase tracking-wide">
          Global Leaderboard
        </h2>
        <div
          className="bg-white/30 backdrop-blur-md rounded-2xl p-6 w-full max-w-md shadow-xl scrollbar"
          style={{ maxHeight: "400px", overflowY: "auto" }}
        >
          <div className="space-y-4 ">
            {players.map((player, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={player.avatar}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full border"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold">{player.name}</span>
                      <span className="text-[10px]">{player.score}</span>
                    </div>
                  </div>
                  <img src={TrophyIcon} alt=" trophy icon" className="w-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardPage;
