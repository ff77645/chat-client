import {useNavigate} from 'react-router-dom'


export default function Forgot(){

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
          <div className="w-full max-w-md px-4">
            <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="appearance-none bg-gray-700 border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="appearance-none bg-gray-700 border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy; 2023 My Website. All rights reserved.
            </p>
          </div>
        </div>
      )
}