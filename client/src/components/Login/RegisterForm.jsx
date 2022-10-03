import { useEffect, useState } from "react";
import { userRegister } from "../../services/userValidation/userValidation";

export default function RegisterForm() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [match, setMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    userRegister(name, username, email, password);
    setMatch(true);
  };

  const dontMatch = (e) => {
    e.preventDefault();
    setMatch(false);
  };

  return (
    <>
      <form
        onSubmit={confirmPassword != password ? dontMatch : handleSubmit}
        className="space-y-8 divide-y divide-gray-200"
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Create your accont
            </h3>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 text-start sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Full name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Username
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="given-username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Email address
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Password
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={`block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    match ? "border-gray-300" : "border-red-700"
                  } rounded-md`}
                />
              </div>

              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Comfirm Password
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="password"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className={`block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    match ? "border-gray-300" : "border-red-700"
                  } rounded-md`}
                />
                {!match ? (
                  <span className="text-sm text-red-700">
                    Password dont match
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
    </>
  );
}
