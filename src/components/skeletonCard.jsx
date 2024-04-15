export default function SkeletonCard() {
  return (
    <div className="py-8 px-4 lg:w-1/3">
      <div className="h-full flex items-start">
        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200 items-center">
            <div className="bg-gray-400 w-10 py-2 rounded-lg animate-pulse mx-1"></div>
          </span>
          ß
          <span className="font-medium text-lg text-gray-800 title-font leading-none mb-10">
            <div className="bg-gray-400 w-10 py-2 rounded-lg animate-pulse mx-1"></div>
          </span>
          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
            <svg
              className="w-5 h-5 mx-3"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </span>
          <span className="font-medium text-lg text-gray-800 title-font leading-none">
            <div className="bg-gray-400 w-8 py-2 rounded-lg animate-pulse mx-2"></div>
          </span>
        </div>
        <div className="flex-grow pl-6">
          <div className="bg-yellow-400 rounded-lg py-1 w-16 mb-1 animate animate-pulse"></div>
          <div className="bg-gray-500 h-6 w-32 rounded-lg animate-pulse mb-5"></div>
          <div className="mb-8 bg-gray-400 rounded-lg py-2 w-full animate-pulse"></div>
          <a className="inline-flex items-center">
            <span className="flex-grow flex flex-col">
              <div className="bg-gray-400 w-28 py-2 rounded-lg animate-pulse"></div>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
