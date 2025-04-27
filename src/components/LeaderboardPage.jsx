import React from "react";
import Logo from "../assets/images/logo.png";
import AvatarImg from "../assets/images/avatar.png";
import BackGroundImg from "../assets/images/bgimg.png";
import TrophyIcon from "../assets/images/trophy.png";

const LeaderboardPage = () => {
  const players = [
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
    { name: "Eleanor Pena", score: "30,0000", avatar: AvatarImg },
  ];
  return (
    <section
      className="relative min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${BackGroundImg})` }}
    >
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[900px] bg-gradient-to-r from-sky-500 to-sky-600 opacity-70 blur-2xl sm:blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/3 z-0 border"></div>
        {/* logo */}
        <img src={Logo} alt="Game Logo" className="w-52 z-10" />
        <h2 className=" text-white font-exo  text-center text-2xl font-semibold mb-4 uppercase tracking-wide z-10">
          Global Leaderboard
        </h2>
        <div className="bg-white/30 border border-white/70 backdrop-blur rounded-2xl p-5 w-full max-w-lg shadow-2xl overflow-hidden">
          <div className="scrollbar overflow-y-auto max-h-[400px] pr-2 space-y-4">
            {players.map((player, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl ${
                  index === 0
                    ? "bg-gradient-to-r from-pink-500 to-red-500 border-2 border-amber-400 text-white"
                    : index === 1
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 border-2 border-amber-400 text-white"
                    : index === 2
                    ? "bg-gradient-to-r from-indigo-800 to-indigo-900 border-2 border-amber-400 text-white"
                    : "bg-white border-[2px] border-red-500 text-black"
                }`}
              >
                {/* player content */}
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={player.avatar}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold">{player.name}</span>
                      <span className="text-[10px]">{player.score}</span>
                    </div>
                  </div>
                  <img src={TrophyIcon} alt="trophy icon" className="w-10" />
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
