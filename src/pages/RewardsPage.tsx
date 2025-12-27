import { useEffect, useState} from "react"
import Sidebar from "../../components/SideBar";
import PointsBalanceCard from "../../components/cards/PointsBalanceCard";
import DailyStreakCard from "../../components/cards/DailyStreakCard";
import SpotlightCard from "../../components/cards/SpotlightCard";
import { Topbar } from "../../components/TopBar";
import { ConfigProvider, Modal, Tabs } from 'antd';
 

export default function RewardsPage() {
    const [activeTab, setActiveTab] = useState("all");
    const [showShearModal, setShowShearModal] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [userName, setUserName] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user_data") || "";
    const parsedUserString = JSON.parse(userData);
   
    setUserName(parsedUserString.user_metadata.name);

  }, []);
  const random =  Math.floor(1000 + Math.random() * 9000);
  const splitUserName = userName.split(" ")
  const referalCode = splitUserName[0] + random
  return (
    <>
       <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 p-7 overflow-y-auto">
      <Topbar onMenuClick={() => setSidebarOpen(true)} />
       
        <ConfigProvider
            theme={{
                token: {
                 colorPrimary: "#722ed1", // purple
                 colorFillSecondary: "#722ed1",
                },
            }}
            >
            <Tabs
                defaultActiveKey="1"
                items={[
                     {
                        label: (
                        <span className={`rounded-t-[15px]  ${activeTab === "earn" ? "bg-[#F3EEFB]" : ""} py-5 px-3`} onClick={() => setActiveTab("earn")}>
                          Earn Points
                        </span>
                        ),
                        key: "1",
                        children: ( 
                            <>
                                <div>
                                    <h2 className={`text-lg my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-[0.75rem] font-semibold`}>Your Rewards Journey</h2>
                                </div>
                                {/* Top Cards */}
                                {/* <div className="grid grid-cols-3 gap-6 mb-10"> */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-10">

                                <PointsBalanceCard />
                                <DailyStreakCard />
                                <SpotlightCard />
                            
                                </div>

                                {/* Earn More Points */}
                                {/* <div className="space-y-6"> */}
                                    <div className="space-y-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">

                                    <h2 className="roboto-font text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-[0.75rem] font-semibold">
                                        Earn More Points
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4 mb-2">
                                        <div className="transition-all hover:border-[#9013fe] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
                                        <div className="p-[1rem] border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-[0.75rem]">
                                            <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center shrink-0 bg-[rgba(228,144,230,0.1)] text-[#9013fe]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-star"
                                            >
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            </div>
                                            <div>
                                            <h3 className="font-semibold">Refer and win 10,000 points!</h3>
                                            </div>
                                        </div>
                                        <div className="p-[1rem]">
                                            <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-sm">
                                                Invite 3 friends by Nov 20 and earn a chance to be one of 5
                                                winners of{" "}
                                                <span className="text-[#9013fe]">10,000 points</span>. Friends
                                                must complete onboarding to qualify.
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="transition-all hover:border-[#9013fe] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
                                        <div className="p-[1rem] border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-[0.75rem]">
                                            <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center shrink-0 bg-[rgba(144,19,254,0.1)] text-[#9013fe]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-share2 lucide-share-2"
                                            >
                                                <circle cx="18" cy="5" r="3"></circle>
                                                <circle cx="6" cy="12" r="3"></circle>
                                                <circle cx="18" cy="19" r="3"></circle>
                                                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                                            </svg>
                                            </div>
                                            <div>
                                            <h3 className="font-semibold">Share Your Stack</h3>
                                            <p className="text-xs text-gray-500">Earn +25 pts</p>
                                            </div>
                                        </div>
                                        <div className="p-[1rem]">
                                            <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-sm">Share your tool stack</p>
                                            </div>
                                            <button onClick={() => setShowShearModal(true)} className="bg-[#eef2ff] hover:text-white hover:bg-[#9013fe] text-[#9013fe] py-2 px-4 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2 border-0">
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-share2 lucide-share-2"
                                                >
                                                <circle cx="18" cy="5" r="3"></circle>
                                                <circle cx="6" cy="12" r="3"></circle>
                                                <circle cx="18" cy="19" r="3"></circle>
                                                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                                                </svg>{" "}
                                                Share
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Redeem Rewards */}
                                <div className="space-y-6 ">
                                <h2 className="text-30px md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-[0.75rem] font-medium ">
                                    Refer &amp; Earn
                                </h2>
                                <div className="shadow-[0_5px_15px_rgba(0,0,0,0.05)]  rounded-[16px] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
                                    <div className="p-[1rem] relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
                                    <div className="flex items-center gap-3">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-users h-6 w-6 text-[#9013fe]"
                                        >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                        <div>
                                        <h3 className="text-xl font-semibold text-gray-700">
                                            Share Your Link
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            Invite friends and earn 25 points when they join!
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-[1rem]">
                                    <div className="space-y-6">
                                        <div className="flex justify-between mb-[1rem]">
                                        <div className="text-center p-[0.5rem] flex-1">
                                            <div className="text-[1.5rem] font-semibold text-[#9013fe]">
                                            0
                                            </div>
                                            <div className="gtext-gray-600">Referrals</div>
                                        </div>
                                        <div className="text-center p-[0.5rem] flex-1">
                                            <div className="text-[1.5rem] font-semibold text-[#9013fe]">
                                            0
                                            </div>
                                            <div className="gtext-gray-600">Points Earned</div>
                                        </div>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                        <p className="text-sm mb-2 text-gray-700">
                                            Your personal referral link:
                                        </p>
                                        <div className="relative">
                                            <input
                                            type="text"
                                            readOnly
                                            className="flex-1  border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full pr-10"
                                            value={`https://app.flowvahub.com/signup/?ref=${referalCode}`}
                                            />
                                            <button className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer z-10">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-copy text-[#9013fe]"
                                            >
                                                <rect
                                                width="14"
                                                height="14"
                                                x="8"
                                                y="8"
                                                rx="2"
                                                ry="2"
                                                ></rect>
                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                            </svg>
                                            </button>
                                        </div>
                                        </div>
                                        <div className="flex justify-center gap-[1rem] mt-[1rem]">
                                        <button
                                            className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px]"
                                            style={{background: "rgb(24, 119, 242)"}}
                                        >
                                        <img src="./public/images/facebook.png" />
                                        </button>
                                        <button
                                            className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px]"
                                            style={{background: "black"}}
                                        >
                                            <img src="./public/images/twitter.png" />
                                        </button>
                                        <button
                                            className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px]"
                                            style={{background: "rgb(0, 119, 181)"}}
                                        >
                                            <img src="./public/images/linkedin.png" />
                                        </button>
                                        <button
                                            className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px]"
                                            style={{background: "rgb(37, 211, 102)"}}
                                        >
                                            <img src="./public/images/whatsapp.png" />
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </>
                        ),
                    },
                    {
                       label: (
                        <span className={`rounded-t-[15px]  ${activeTab === "reward" ? "bg-[#F3EEFB]" : ""} py-5 px-3`} onClick={() => setActiveTab("reward")}>
                            Redeem Rewards
                            
                        </span>
                        ),
                        key: "2", 
                        children: (
                            <>
                                <div>
                                    <h2 className=" text-lg my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-[0.75rem] font-semibold">Redeem Your Points</h2>

                                    <Tabs
                                        defaultActiveKey="1"
                                        items={[
                                        {
                                            label: (
                                            <span className={`rounded-t-[15px]  ${activeTab === "all" ? "bg-[#F3EEFB]" : ""} py-5 px-3`} onClick={() => setActiveTab("all")}>
                                                All Rewards
                                                <span className={`ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center ${activeTab === "all" ? 'bg-[#9031fe]/10 text-[#9031fe]' : 'bg-[#E2E8F0] text-[#CBD5E0]'} font-semibold`}>8</span>
                                            </span>
                                            ),
                                            key: "1",
                                            children: ( 
                                                <div className="ant-tabs-content-holder">
                                                    <div className="ant-tabs-content ant-tabs-content-top">
                                                        <div
                                                        role="tabpanel"
                                                        tabIndex={0}
                                                        aria-hidden="false"
                                                        className="ant-tabs-tabpane ant-tabs-tabpane-active"
                                                        id="rc-tabs-1-panel-1"
                                                        aria-labelledby="rc-tabs-1-tab-1"
                                                        >
                                                        <div className="grid gap-[1.5rem] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                💸
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $5 Bank Transfer
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                The $5 equivalent will be transferred to your bank account.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 5000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                💸
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $5 PayPal International
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Receive a $5 PayPal balance transfer directly to your PayPal
                                                                account email.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 5000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                🎁
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $5 Virtual Visa Card
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Use your $5 prepaid card to shop anywhere Visa is accepted
                                                                online.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 5000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                🎁
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $5 Apple Gift Card
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Redeem this $5 Apple Gift Card for apps, games, music,
                                                                movies, and more on the App Store and iTunes.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 5000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                🎁
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $5 Google Play Card
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Use this $5 Google Play Gift Card to purchase apps, games,
                                                                movies, books, and more on the Google Play Store.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 5000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                🎁
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $5 Amazon Gift Card
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Get a $5 digital gift card to spend on your favorite tools
                                                                or platforms.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 5000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                🎁
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $10 Amazon Gift Card
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Get a $10 digital gift card to spend on your favorite tools
                                                                or platforms.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 10000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                📚
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                Free Udemy Course
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Coming Soon!
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 0 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Coming Soon
                                                            </button>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                            ),
                                        },
                                        {
                                            label: (
                                            <span className={`rounded-t-[15px]  ${activeTab === "unlocked" ? "bg-[#F3EEFB]" : ""} py-5 px-3`} onClick={() => setActiveTab("unlocked")}>
                                                Unlocked
                                                <span className={`ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center ${activeTab === "unlocked" ? 'bg-[#9031fe]/10 text-[#9031fe]' : 'bg-[#E2E8F0] text-[#CBD5E0]'} font-semibold`}>0</span>
                                            </span>
                                            ),
                                            key: "2",
                                            children: (<></>),
                                        },
                                        {
                                            label: (
                                            <span className={`rounded-t-[15px]  ${activeTab === "locked" ? "bg-[#F3EEFB]" : ""} py-5 px-3`} onClick={() => setActiveTab("locked")}>
                                                locked
                                                <span className={`ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center ${activeTab === "locked" ? 'bg-[#9031fe]/10 text-[#9031fe]' : 'bg-[#E2E8F0] text-[#CBD5E0]'} font-semibold`}>7</span>
                                            </span>
                                            ),
                                            key: "3",
                                            children: ( 
                                                <div className="ant-tabs-content-holder">
                                                    <div className="ant-tabs-content ant-tabs-content-top">
                                                        <div
                                                        role="tabpanel"
                                                        tabIndex={0}
                                                        aria-hidden="false"
                                                        className="ant-tabs-tabpane ant-tabs-tabpane-active"
                                                        id="rc-tabs-1-panel-1"
                                                        aria-labelledby="rc-tabs-1-tab-1"
                                                        >
                                                        <div className="grid gap-[1.5rem] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                💸
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $5 Bank Transfer
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                The $5 equivalent will be transferred to your bank account.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 5000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                💸
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $5 PayPal International
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Receive a $5 PayPal balance transfer directly to your PayPal
                                                                account email.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 5000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                🎁
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $5 Virtual Visa Card
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Use your $5 prepaid card to shop anywhere Visa is accepted
                                                                online.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 5000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                🎁
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $5 Apple Gift Card
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Redeem this $5 Apple Gift Card for apps, games, music,
                                                                movies, and more on the App Store and iTunes.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 5000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                🎁
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $5 Google Play Card
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Use this $5 Google Play Gift Card to purchase apps, games,
                                                                movies, books, and more on the Google Play Store.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 5000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                🎁
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $5 Amazon Gift Card
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Get a $5 digital gift card to spend on your favorite tools
                                                                or platforms.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 5000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                                            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                                🎁
                                                            </div>
                                                            <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                                $10 Amazon Gift Card
                                                            </h4>
                                                            <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                                Get a $10 digital gift card to spend on your favorite tools
                                                                or platforms.
                                                            </p>
                                                            <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                                ⭐ 10000 pts
                                                            </div>
                                                            <button
                                                            disabled
                                                                className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                            >
                                                                Locked
                                                            </button>
                                                            </div>
                                            
                                                        </div>
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                            ),
                                        },
                                        {
                                            label: (
                                            <span className={`rounded-t-[15px]  ${activeTab === "soon" ? "bg-[#F3EEFB]" : ""} py-5 px-3`} onClick={() => setActiveTab("soon")}>
                                                coming Soon
                                                <span className={`ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center ${activeTab === "soon" ? 'bg-[#9031fe]/10 text-[#9031fe]' : 'bg-[#E2E8F0] text-[#CBD5E0]'} font-semibold`}>1</span>
                                            </span>
                                            ),
                                            key: "4",
                                            children: ( <div className="grid gap-[1.5rem] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
                                                <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                                                <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                                                    📚
                                                </div>
                                                <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                                                    Free Udemy Course
                                                </h4>
                                                <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                                                    Coming Soon!
                                                </p>
                                                <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                                                    ⭐ 0 pts
                                                </div>
                                                <button
                                                disabled
                                                    className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
                                                >
                                                    Coming Soon
                                                </button>
                                                </div>
                                            </div>),
                                        },
                                        ]}
                                    />
                                    
                                </div>
                            </>
                        )
                    }
                ]}
            />
  
        </ConfigProvider>
              <Modal open={showShearModal} okText="Submit Claim" style={{top: "20rem"}} onCancel={() => setShowShearModal(false)} onOk={() => setShowShearModal(false)} okButtonProps={{ style: { display: "none"} }} cancelButtonProps={{ style: { display: "none" } }} >
                <div tabIndex={0} style={{outline: "none"}} >
                    <div className="ant-modal-content">
                        <button type="button" aria-label="Close" onClick={() => setShowShearModal(false)} className="ant-modal-close">
                        <span className="ant-modal-close-x">
                            <span
                            role="img"
                            aria-label="close"
                            className="anticon anticon-close ant-modal-close-icon"
                            >
                            <svg
                                fill-rule="evenodd"
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="close"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
                            </svg>
                            </span>
                        </span>
                        </button>
                        <div className="ant-modal-body">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4 text-black">
                            Share Your Stack
                            </h2>
                            <div className="flex justify-center">
                            <div className="w-[40px] h-[40px]  rounded-full flex justify-center items-center mb-[1rem] text-[1rem] bg-[#E9D4FF] text-[#9013FE]">
                                <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="layer-group"
                                className="svg-inline--fa fa-layer-group "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                >
                                <path
                                    fill="currentColor"
                                    d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"
                                ></path>
                                </svg>
                            </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                            You have no stack created yet, go to Tech Stack to create one.
                            </p>
                            <div className="space-y-2 h-full m-h-[300px] overflow-y-auto"></div>
                        </div>
                        </div>
                    </div>
                </div>
              </Modal>
      </main>
    </>
  );
}
