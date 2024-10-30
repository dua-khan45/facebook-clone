
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
      {/* Left side section */}
      <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left md:items-start mb-8 md:mb-0">
        <Image src="/images/fb.svg" height={100} width={300} alt="Facebook logo" />
        <p className="mt-4 text-lg md:text-xl">
          Facebook helps you connect
          <br />
           and
          
           share with the people in your life.
        </p>
      </div>

      {/* Right side section */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-full md:w-1/3 shadow-lg">
        <input
          className="my-2 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="my-2 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="password"
          placeholder="Password"
          />
          <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
            Log In
          </button>
          <p className="cursor-pointer text-blue-600 text-sm text-center my-2 hover:underline">
            Forgotten password?
          </p>
          <hr className="my-4" />
          <button className="bg-green-500 py-2 px-6 text-lg font-bold text-white rounded-md hover:bg-green-600 transition-colors duration-300 mx-auto">
            Create New Account
          </button>
        </div>
      </div>
    );
  }