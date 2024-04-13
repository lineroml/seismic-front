export default function Comment({ comment }) {
  const timestamp = Date.parse(comment.created_at);
  const date = new Date(timestamp);
  const prettyDate = date.toLocaleString("en-us");

  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">COMMENT</span>
        <span className="mt-1 text-gray-500 text-sm">{prettyDate}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {comment.text || "No comment text"}
        </h2>
      </div>
    </div>
  );
}
