import Comment from "@/components/comment";

async function getData(id) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ROR_API_URL}/api/features/${id}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function getComments(id) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ROR_API_URL}/api/features/${id}/comments`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export default async function Record({ params }) {
  const data = await getData(params.id);
  const comments = await getComments(params.id);
  const date = new Date(parseInt(data.time));
  const prettyDate = date.toLocaleString("en-us");

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${data.latitude},${data.longitude}&ie=UTF8&t=&z=10&iwloc=B&output=embed`}
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  LOCATION
                </h2>
                <p className="mt-1">{data.place}</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  TIME
                </h2>
                {prettyDate}
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  MAGNITUDE
                </h2>
                <p className="leading-relaxed">{data.magnitude}</p>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  TYPE
                </h2>
                <p className="leading-relaxed uppercase">{data.mag_type}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              {/* <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> */}
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              {/* <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> */}
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {comments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
