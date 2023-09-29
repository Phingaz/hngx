import { Link, useNavigate } from "react-router-dom";

//
export const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/welcome");
  };
  return (
    <section className="flex justify-center items-center min-h-[100svh]">
      <Link
        to="/"
        className=" absolute md:top-[5%] top-2 left-2 md:left-[10%] flex justify-center items-center gap-2 link t"
      >
        <img src="/icons/icon.png" width={"40px"} />
        <p className="text-2xl md:text-primary font-bold hover:link t">
          HelpMeOut
        </p>
      </Link>
      <div className="w-[min(90%,600px)] flex flex-col gap-5 py-20">
        <div className="flex justify-center items-center flex-col mb-5">
          <h1 className="text-black font-bold text-3xl mb-4">
            Log in or Sign up
          </h1>
          <p className="max-w-sm text-center text-gray-500 font-light text-sm">
            Join millions of others in sharing successful moves on HelpMeOut.
          </p>
        </div>
        <a className="flex border-[2px] border-black rounded-lg h-[50px] justify-center items-center gap-3 t hover:link">
          <span>
            <img src="/login/google.svg" />
          </span>
          Continue with Google
        </a>
        <a className="flex border-[2px] border-black rounded-lg h-[50px] justify-center items-center gap-3 t hover:link">
          <span>
            <img src="/login/facebook.svg" />
          </span>
          Continue with Facebook
        </a>
        <div className="flex justify-center items-center gap-5 my-10">
          <hr className="border-gray-400 h-[1px] w-full" />
          <p className="text-center">or</p>
          <hr className="border-gray-400 h-[1px] w-full" />
        </div>
        <form className="flex flex-col gap-7 w-full" onSubmit={handleSubmit}>
          <label className="w-full font-semibold">
            Email
            <input
              className="border-[2px] font-normal mt-2 w-full border-gray-400  rounded-lg h-[50px] px-5"
              type="text"
              placeholder="Enter your email address"
            />
          </label>
          <label className="w-full font-semibold">
            Password
            <input
              className="border-[2px] font-normal mt-2 w-full border-gray-400  rounded-lg h-[50px] px-5"
              type="password"
              placeholder="Enter your password"
            />
          </label>
          <button className="btn-main t hover:btn-link">Sign Up</button>
        </form>
      </div>
    </section>
  );
};
