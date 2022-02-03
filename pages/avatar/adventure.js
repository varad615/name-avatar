import { useState } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

export default function Adventure() {
  const [title, setTitle] = useState("");
  console.log(`https://avatars.dicebear.com/api/adventurer/${title}.svg`);
  return (
    <div className="p-5">
      <div>
        <div className="font-bold sm:text-3xl sm:text-center text-left text-2xl title-font mb-4 text-black">
          Adventure
        </div>
        <div>
          <div className="lg:w-4/5 mx-auto flex item-center justify-center">
            <img
              src={`https://avatars.dicebear.com/api/adventurer/${title}.svg`}
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
              <div>
                <a
                  download="avatar.png"
                  href={`https://avatars.dicebear.com/api/adventurer/${title}.svg`}
                >
                  <BsFillArrowUpRightCircleFill className="text-gray-500 text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
