import { useNavigate } from "react-router";
import { LoginForm } from "../components/Utility/Form";
import { useEffect, useContext } from "react";
import Main from "../Contex";
import { Loader } from "../components/Utility/Loader";

export const Login = () => {
  const navigate = useNavigate();
  const { loggedIn, isLoading } = useContext(Main);

  useEffect(() => {
    loggedIn && navigate("/home");
  }, [loggedIn, navigate]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="w-screen h-[100svh] bg-stone-100 text-gray-800 grid place-content-center px-10">
          <div className="flex flex-col w-[min(100%,500px)]  items-center justify-center py-8 mx-auto md:h-screen lg:py-0">
            <div className=" w-full rounded-lg shadow-md md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight mb-10">
                  Sign in to your account
                </h1>
                <LoginForm />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};