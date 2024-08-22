import AppHeader from "./components/header";
import { FaAngleRight } from "react-icons/fa6";
import AppButton from "./components/AppButton";
const App = () => {
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
            className="bg-[#ca5c3b] text-white"
            onClick={() => console.log("Connect X Account Clicked")}
          >
            Connect your X Account
          </AppButton>
        </div>
      </div>
    </div>
  )
}

export default App
