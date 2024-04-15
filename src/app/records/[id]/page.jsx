import Comment from "@/components/comment";
import CommentForm from "@/components/commentForm";

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
    `${process.env.NEXT_PUBLIC_ROR_API_URL}/api/features/${id}/comments`,
    { cache: "no-cache" }
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
        <div className="container px-5 pt-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
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
          <CommentForm></CommentForm>
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
