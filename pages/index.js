import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5">
      <div className="text-center">
        <div className="sm:text-3xl sm:text-center text-left text-2xl title-font mb-4 text-black">
          <div className="font-bold">Name Avatar</div>
          <div className="text-sm mt-3 pb-6 font-semibold">
            Create a aavatar for your name
          </div>
        </div>
        <div className="m-3">
          <div className="flex flex-wrap space-x-2 -m-4">
            <Link href="/avatar/adventure">
            <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
              <div className="h-full flex-grow">
                <h1>Advanture</h1>
              </div>
            </div>
            </Link>
            <div className="p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
              <div className="h-full flex-grow">
                <h1>Adventurer Neutral</h1>
              </div>
            </div>
            <div className="p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
              <div className="h-full flex-grow">
                <h1>Avataaars</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
