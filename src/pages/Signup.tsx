import { useState } from "react";
import supabase from "../lib/supabase";
import AuthLayout from "../layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "antd";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const name = form.get("name") as string;

    const {data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { email, name },
      },
    });

    if (error) setError(error.message);
    else setShowConfirmModal(true);

    console.log(data)
    setLoading(false);
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Create your Flowva account
        </h2>
        <p className="text-gray-500 mb-6">
          Start earning rewards 🚀
        </p>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            name="name"
            placeholder="Full name"
            required
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary"
          />

          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            disabled={loading}
            className="w-full bg-primary bg-purple-700 text-white font-semibold p-3 rounded-lg transition"
          >
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>

        <Modal open={showConfirmModal} okText="Ok" style={{top: "20rem"}} onCancel={() => setShowConfirmModal(false)} onOk={() => setShowConfirmModal(false)} okButtonProps={{ style: { backgroundColor: "#05df72"} }} cancelButtonProps={{ style: { display: "none" } }} >
                <div tabIndex={0} style={{outline: "none"}} >
                    <div className="ant-modal-content">
                        <button type="button" aria-label="Close" onClick={() => setShowConfirmModal(false)} className="ant-modal-close">
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
                        <div className="ant-modal-body">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4 text-black">
                            Signup Successful
                            </h2>
                            <div className="flex justify-center">
                            <div className="w-[40px] h-[40px]  rounded-full flex justify-center items-center mb-[1rem] text-[1rem] bg-[#E9D4FF] text-green-400">
                                <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="layer-group"
                                className="svg-inline--fa fa-check "
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
                            <h4 className="text-gray-600 mb-4">
                           A confimation mail has been sent to your inbox, kindly confirm your email.
                            </h4>
                            <div className="space-y-2 h-full m-h-[300px] overflow-y-auto"></div>
                        </div>
                        </div>
                    </div>
                </div>
              </Modal>
    </AuthLayout>
  );
}
