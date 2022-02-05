import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5">
      <Head>
        <title>Name Avatar</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Create a aavatar for your name" />
      </Head>
      <div className="text-center">
        <div className="sm:text-3xl sm:text-center text-left text-2xl title-font mb-4 text-black">
          <div className="font-bold">Name Avatar</div>
          <div className="text-sm mt-3 pb-6 font-semibold text-[#317EFB]">
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
            <Link href="/avatar/adventurerneutral">
              <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
                <div className="h-full flex-grow">
                  <h1>Adventurer Neutral</h1>
                </div>
              </div>
            </Link>
            <Link href="/avatar/avataaars">
              <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
                <div className="h-full flex-grow">
                  <h1>Avataaars</h1>
                </div>
              </div>
            </Link>
            <Link href="/avatar/bigears">
              <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
                <div className="h-full flex-grow">
                  <h1>Big Ears</h1>
                </div>
              </div>
            </Link>
            <Link href="/avatar/bigsmile">
              <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
                <div className="h-full flex-grow">
                  <h1>Big Smile</h1>
                </div>
              </div>
            </Link>
            <Link href="/avatar/bottts">
              <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
                <div className="h-full flex-grow">
                  <h1>Bottts</h1>
                </div>
              </div>
            </Link>
            <Link href="/avatar/croodles">
              <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
                <div className="h-full flex-grow">
                  <h1>Croodles</h1>
                </div>
              </div>
            </Link>
            <Link href="/avatar/croodlesnatural">
              <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
                <div className="h-full flex-grow">
                  <h1>Croodles Neutral</h1>
                </div>
              </div>
            </Link>
            <Link href="/avatar/micah">
              <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
                <div className="h-full flex-grow">
                  <h1>Micah</h1>
                </div>
              </div>
            </Link>
            <Link href="/avatar/miniavs">
              <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
                <div className="h-full flex-grow">
                  <h1>Miniavs</h1>
                </div>
              </div>
            </Link>
            <Link href="/avatar/openpeeps">
              <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
                <div className="h-full flex-grow">
                  <h1>Open Peeps</h1>
                </div>
              </div>
            </Link>
            <Link href="/avatar/personas">
              <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
                <div className="h-full flex-grow">
                  <h1>Personas</h1>
                </div>
              </div>
            </Link>
            <Link href="/avatar/pixelart">
              <div className="cursor-pointer p-4 md:w-fit  md:mb-0 mb-6 bg-white border-2 rounded-md drop-shadow-md flex flex-col">
                <div className="h-full flex-grow">
                  <h1>Pixel Art</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
