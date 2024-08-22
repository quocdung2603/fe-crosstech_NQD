import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const tabMenu = ["Tapos", "Wallet", "Leaderboard", "Shop"];

const AppHeader = () => {
  const [isActive, setIsActive] = useState(tabMenu[0]);
  const [onSwitch, setOnSwitch] = useState(true);
  const handleTabClick = (tab: string) => {
    setIsActive(tab);
  };

  return (
    <header className="flex flex-row justify-between items-center p-4">
      <img src="/src/assets/common/images/logo.svg" alt="logo" />
      <div className="flex flex-row items-center space-x-8">
        {tabMenu.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(item)}
            className={`px-4 py-2 font-semibold ${isActive === item ? 'text-black' : 'text-[gray]'}`}
          >
            {item}
          </button>
        ))}
        <div className="flex flex-row items-center space-x-2">
          <p className="font-semibold text-[#CA5C3B]">More</p>
          <FaChevronDown className="text-[#CA5C3B]" />
        </div>
      </div>
      <div className="flex flex-row p-1 rounded-[20px] bg-[#eec5c7]">
        <button
          onClick={() => setOnSwitch(true)}
          className={`${onSwitch === true ? 'text-[white] bg-[#CA5C3B] rounded-[20px]' : 'text-black]'} w-1/2 text-center font-semibold py-1 px-4`}
        >
          Mainnet
        </button>
        <button
          onClick={() => setOnSwitch(false)}
          className={`${onSwitch === false ? 'text-[white] bg-[#CA5C3B] rounded-[20px]' : 'text-black]'} w-1/2 text-center font-semibold py-1 px-4`}
        >
          Testnet
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
