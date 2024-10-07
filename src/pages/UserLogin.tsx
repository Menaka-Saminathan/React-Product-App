import { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authenticate";
import { HOME_PATH } from "../constant/Constants";
import { UserData } from "../data/UserData";

export default function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [error, setError] = useState<String>("");
  const { Login } = useAuth();

  const handleLogin = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      let users = UserData.find((element) => {
        return element.email === email && element.password === password;
      });
      if (users) {
        Login();
        navigate(HOME_PATH);
      } else if (email === "" && password == "") {
        setError("Empty inputs are not accept");
      } else if (email === "") {
        setError("Invalid email");
      } else if (password === "") {
        setError("Invalid password");
      } else {
        setError("Invalid credential.. Please check");
      }
    },
    [email, password]
  );

  return (
    <div className="flex justify-end pr-20 h-screen pt-40 bg-login ">
      <form
        className="h-4/5 bg-rose-50 rounded-lg p-8"
        onSubmit={(e: FormEvent) => handleLogin(e)}
      >
        <div className="pl-5 py-2 rounded-lg border border-gray-400 text-xl">
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
        <div className="px-8 py-2 rounded-lg border border-gray-400 text-xl mt-3">
          <label className="text-orange-800" htmlFor="Password">
            Password :
          </label>
          <input
            className="ml-3 outline-0 bg-transparent placeholder-gray-400"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
        </div>
        <div className="flex justify-between my-3">
          {error && <p className="text-red-500 text-lg">{error}</p>}
          <button className="text-lg rounded-sm px-3 py-1 bg-gray-300">
            Sign-in
          </button>
        </div>
        <div className="text-center my-4 text-xl">
          <button className="text-lg px-3 py-1 text-blue-700 hover:text-red-600">
            Forgot Password..?
          </button>
          <p>
            Not a member..?
            <button className="text-xl px-3 py-1 text-red-500 hover:text-red-600">
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
