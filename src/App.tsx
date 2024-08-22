import AppHeader from "./components/header";
import { FaAngleRight } from "react-icons/fa6";
import AppButton from "./components/AppButton";
import { HomeAPI } from "./services/homeServices";
import { useState } from "react";

const App = () => {
  const [userInfo, setUserInfo] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getUserByAddress = async (address: string) => {
    try {
      setLoading(true);
      const rq = await HomeAPI.getUserByAddress(address);
      if (rq.success) {
        setUserInfo(rq.msg);
      } else {
        setUserInfo(undefined);
      }
    } catch (error) {
      console.log(error);
      setUserInfo(undefined);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    getUserByAddress('string');
  };

  return (
    <div>
      <div className="mx-[150px]">
        <AppHeader />
      </div>
      <div className="mx-[300px] mt-20 space-y-5">
        <h1 className="text-4xl font-semibold text-center">Social Tasks</h1>
        <p className="text-gray-400 text-center text-[16px]">Complete the Social Tasks to earn extra $Heart token</p>
        <div className="bg-[white] border-2 border-[#eec5c7] rounded-[10px] p-3 space-y-5">
          <h2 className="text-2xl font-semibold">Connect Your X account</h2>
          <div>
            <p className="text-gray-400 text-[16px]">You need connect your X account to join Social Task</p>
            <div className="flex flex-row items-center text-[#0D88D8]">
              <p>Learn more</p>
              <FaAngleRight />
            </div>
          </div>
          <AppButton
            className={`bg-[${!userInfo?.twitterId ? '#ca5c3b' : 'gray'}] text-white w-[250px]`}
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? 'Loading...' : (userInfo?.twitterId ? userInfo.twitterUsername : 'Connect your X account')}
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default App;
