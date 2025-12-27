import { useState } from "react";
import { Modal } from "antd";

export default function SpotlightCard() {
    const [showClaimModal, setShowClaimModal] = useState(false);

  return (
    <div className="rounded-xl shadow-sm hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
      <div className="p-4 bg-[linear-gradient(135deg,#9013FE_0%,#70D6FF_100%)] text-white relative rounded-t-xl overflow-hidden">
        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
          Featured
        </span>

       <div className="flex flex-2 justify-between align-middle">
         <h3 className="text-lg font-semibold mt-4">Top Tool Spotlight</h3>
        <div className="overflow-hidden relative rounded-full size-10 md:size-16"><img src="/src/assets/images/reclaim.png" /></div>
       </div>
        <h3 className="text-lg font-semibold opacity-90">Reclaim.</h3>
      </div>
      <div className="p-[1rem] bg-white rounded-b-xl">
        <div className="p-[1rem]">
          <div className="flex justify-start mb-[1rem]">
            <div className="w-[24px] h-[24px] animate-pulse bg-[#eef2ff] rounded-[6px] flex items-center justify-center mr-[1rem] shrink-0 text-[#9013fe]">
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
                className="lucide lucide-calendar"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="mb-[0.25rem] font-semibold">
                Automate and Optimize Your Schedule
              </h4>
              <p className="text-[0.875rem] text-gray-600">
                Reclaim.ai is an AI-powered calendar assistant that
                automatically schedules your tasks, meetings, and breaks to
                boost productivity. Free to try — earn Flowva Points when you
                sign up!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-between align-middle mt-6">
          <button className="bg-[#9013fe] hover:bg-[#8628da] text-white py-2 px-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 border-0">
            Sign up
          </button>
          <button onClick={() => (setShowClaimModal(true))} className="bg-[linear-gradient(45deg,#9013FE,#FF8687)] text-white px-4 py-2 font-semibold text-sm rounded-full">
            Claim 50 pts
          </button>
        </div>
      </div>

      <Modal open={showClaimModal} okText="Submit Claim" onCancel={() => setShowClaimModal(false)} onOk={() => setShowClaimModal(false)} okButtonProps={{ style: { display: "none"} }} cancelButtonProps={{ style: { display: "none" } }} >
        <div className="ant-modal-content">
          <div className="ant-modal-header">
            <div className="ant-modal-title" id=":r2:">
              <h1 className="md:text-lg">Claim Your 25 Points</h1>
            </div>
                      <button type="button" aria-label="Close" className="ant-modal-close" onClick={() => setShowClaimModal(false)}>
            <span className="ant-modal-close-x">
              <span
                role="img"
                aria-label="close"
                className="anticon anticon-close ant-modal-close-icon"
              >
                <svg
                  fillRule="evenodd"
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
          </div>
          <div className="ant-modal-body">
            <p className="text-[0.9rem] text-[#6c757d]">
              Sign up for Reclaim (free, no payment needed), then fill the form
              below:
            </p>
            <li className="text-[0.9rem] text-[#6c757d]">
              <ul>1️⃣ Enter your Reclaim sign-up email.</ul>
              <ul>
                2️⃣ Upload a screenshot of your Reclaim profile showing your email.
              </ul>
            </li>
            <p className="text-[0.9rem] text-[#6c757d]">
              After verification, you’ll get 25 Flowva Points! 🎉😊
            </p>
            <form className="mt-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-[#111827]"
              >
                Email used on Reclaim
              </label>
              <div className="relative group w-full mb-5">
                <input
                  type="email"
                  id="email"
                  placeholder="user@example.com"
                  className=" peer w-full border text-base py-[10px] px-[14px]  border-[#EDE9FE] transition-all ease-linear duration-200 rounded-md outline-none focus:border-[#9013fe]"
                  required
                  value=""
                />
                <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
              </div>
              <label
                htmlFor={"file"}
                className="block text-sm mb-[0.5rem] font-medium text-[#111827]"
              >
                Upload screenshot (mandatory)
              </label>
              <label className="p-[0.5rem] cursor-pointer hover:bg-[rgba(29,28,28,0.05)] block border border-dashed border-[#e9ecef] rounded-[8px] bg-[#f9f9f9] transition-all duration-200">
                <p className="text-center flex justify-center gap-[0.5rem]">
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
                    className="lucide lucide-cloud-download"
                  >
                    <path d="M12 13v8l-4-4"></path>
                    <path d="m12 21 4-4"></path>
                    <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"></path>
                  </svg>
                  <span className="text-base">Choose file</span>
                </p>
                <input
                  className="hidden"
                  type="file"
                  accept="image/*"
                  required
                />
              </label>
              <div className="flex gap-3 justify-end mt-4">
                <button
                  type="button"
                  onClick={() => setShowClaimModal(false)}
                  className="p-[0.5rem_1rem] rounded-[8px] font-semibold transition-all duration-200 hover:bg-[#d1d5db] bg-[#e9ecef] text-[#020617]"
                >
                  Cancel
                </button>
                <button  onClick={() => setShowClaimModal(false)} className="p-[0.5rem_1rem] rounded-[8px] font-semibold transition-all duration-200 bg-[#9103fe] text-white hover:bg-[#FF8687]">
                  Submit Claim
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
