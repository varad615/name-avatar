import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

export default function Bigsmile() {
  const [title, setTitle] = useState("");
  console.log(`https://avatars.dicebear.com/api/big-smile/${title}.svg`);
  const style = { color: "black", fontSize: "1.5em" };
  return (
    <div className="p-5">
      <div>
        <div>
          <Link href="/application">
            <IoIosArrowBack className="mb-3 cursor-pointer" style={style} />
          </Link>
          <div className=" select-none font-bold sm:text-3xl sm:text-center text-left text-2xl title-font mb-4 text-black">
            Big Smile
          </div>
        </div>
        <div>
          <div className="lg:w-4/5 mx-auto flex item-center justify-center">
            <img
              src={`https://avatars.dicebear.com/api/big-smile/${title}.svg`}
              className="sm:w-1/4 w-6/12 lg:h-auto object-cover object-center rounded"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="flex space-x-2 bg-white rounded-md border-gray-500 p-3">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
          </div>
          <div className="text-center text-sm mt-3 pb-6 text-red-500 font-semibold">
            Long press on the image to download
          </div>
        </div>
      </div>
    </div>
  );
}
