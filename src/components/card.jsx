export default function Card({ item }) {
  const featureType = item.attributes.tsunami ? "Tsunami" : "Earthquake";
  const featureDate = new Date(parseInt(item.attributes.time));
  const featureMonth = featureDate.toLocaleString("en-us", { month: "short" });
  const featureDay = featureDate.getDate();

  return (
    <div className="py-8 px-4 lg:w-1/3">
      <div className="h-full flex items-start">
        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
            {featureMonth}
          </span>
          <span className="font-medium text-lg text-gray-800 title-font leading-none mb-10">
            {featureDay}
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
            {item.attributes.comment_count}
          </span>
        </div>
        <div className="flex-grow pl-6">
          <a href={`/records/${item.id}`}>
            <h2 className="tracking-widest text-xs title-font font-medium text-yellow-500 mb-1">
              {featureType}
            </h2>

            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              {item.attributes.external_id}
            </h1>
            <p className="leading-relaxed mb-5">{item.attributes.title}</p>
          </a>
          <a className="inline-flex items-center">
            <span className="flex-grow flex flex-col">
              <span className="title-font font-medium text-gray-900">
                Magnitude: {item.attributes.magnitude}
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
