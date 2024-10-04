import { FormEvent, useCallback, useState } from "react";
import { UserData } from "../data/UserData";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authenticate";

export default function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [error, setError] = useState<String>("");
  const { Login } = useAuth();

  const handleLogin = useCallback((e: FormEvent) => {
    e.preventDefault();
    let users = UserData.find((element) => {
      return element.email === email && element.password === password;
    });
    if (users) {
      Login();
      navigate("/Home");
    } else if (email === "") {
      setError("Invalid email")  
    } else if (password === "") {
      setError("Invalid password")
    } else {
      setError("Invalid credential.. Please check")
    };
  }, [email, password]);


  return (
    <div className="flex justify-center pt-60">
      <form className="" onSubmit={(e: FormEvent) => handleLogin(e)}>
        <div className="pl-5 py-2 rounded-lg border border-gray-200 text-xl">
          <label className="text-orange-800" htmlFor="Email-address">
            Email-add :
          </label>
          <input
            className="ml-3 outline-0 bg-transparent placeholder-gray-400"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your mail address"
          />
        </div>
        <div className="px-8 py-2 rounded-lg border border-gray-200 text-xl mt-3">
          <label className="text-orange-800" htmlFor="Password">
            Password :
          </label>
          <input
            className="ml-3 outline-0 bg-transparent placeholder-gray-400"
            type="password"
            onChange={(e) => setPassword(e.target.value)
             }
            placeholder="Enter your Password"
          />
        </div>
        {error ? <p className="py-2">{error}</p> : <></>}
        <div className="flex justify-between">
          <button className="mt-3 text-lg px-3 py-1 text-blue-700 hover:text-red-600">
            Forgot Password..?
          </button>
          <button className="mt-3 text-xl px-3 rounded-lg bg-gray-400 py-1 text-white hover:text-black">
            Sign-in
          </button>
        </div>
        <div className="text-center my-4 text-xl">
          <p>
            Not a member..?
            <button className="mt-3 text-xl px-3 py-1 text-red-500 hover:text-red-600">
              {" "}
              Register..!
            </button>
          </p>
        </div>
        <div className="flex flex-col">
          <button className="mb-4 w-100  bg-indigo-800 py-3 text-xl">
            <i className="fa-brands fa-facebook mx-2" />
            Continue with facebook
          </button>

          <button className="mb-4 w-100 bg-sky-500 py-3 text-xl">
            <i className="fa-brands fa-twitter mx-2" />
            Continue with twitter
          </button>
        </div>
      </form>
    </div>
  );
}
