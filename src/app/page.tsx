import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  SkipBack,
  Shuffle,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav
            className="space-y-5 mt-10
          "
          >
            <a
              href="Home"
              className="flex items-center gap-3 text-xs font-semibold"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href="Search"
              className="flex items-center gap-3 text-xs font-semibold"
            >
              <Search />
              Search
            </a>
            <a
              href="Your library"
              className="flex items-center gap-3 text-xs font-semibold"
            >
              <Library />
              Your library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              HEY COWBOY
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              And That's It
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Beer
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Resting Around
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-4">Good afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-10">
            <a
              href="#"
              className="bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4 group"
            >
              <Image
                width={104}
                height={104}
                src="/album1.jpg"
                alt="Capa do album"
              />
              <strong>Shadows</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4 group"
            >
              <Image
                width={104}
                height={104}
                src="/album1.jpg"
                alt="Capa do album"
              />
              <strong>Shadows</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4 group"
            >
              <Image
                width={104}
                height={104}
                src="/album1.jpg"
                alt="Capa do album"
              />
              <strong>Shadows</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4 group"
            >
              <Image
                width={104}
                height={104}
                src="/album1.jpg"
                alt="Capa do album"
              />
              <strong>Shadows</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4 group"
            >
              <Image
                width={104}
                height={104}
                src="/album1.jpg"
                alt="Capa do album"
              />
              <strong>Shadows</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4 group"
            >
              <Image
                width={104}
                height={104}
                src="/album1.jpg"
                alt="Capa do album"
              />
              <strong>Shadows</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for you</h2>
          <div className="grid grid-cols-8 ga-4 mt-4 ">
            <a
              href="#"
              className="bg-wehite/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                className="w-full "
                src="/album1.jpg"
                alt="Capa do album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Shawn James</span>
            </a>
            <a
              href="#"
              className="bg-wehite/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                className="w-full "
                src="/album1.jpg"
                alt="Capa do album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Shawn James</span>
            </a>
            <a
              href="#"
              className="bg-wehite/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                className="w-full "
                src="/album1.jpg"
                alt="Capa do album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Shawn James</span>
            </a>
            <a
              href="#"
              className="bg-wehite/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                className="w-full "
                src="/album1.jpg"
                alt="Capa do album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Shawn James</span>
            </a>
            <a
              href="#"
              className="bg-wehite/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                className="w-full "
                src="/album1.jpg"
                alt="Capa do album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Shawn James</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image width={56} height={56} src="/album1.jpg" alt="Capa do album" />
          <div className="flex flex-col ">
            <strong className="font-normal">Through the Valley</strong>
            <span className="text-xs text-zinc-400">Shawn James</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto  ">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        <div className="flx flex-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
