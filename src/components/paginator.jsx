export default function Paginator({
  currentPageValue,
  setPageCallback,
  maxPageValue,
  entriesPerPage,
  totalEntries,
  setEntriesPerPageCallback,
}) {
  return (
    <div className="flex flex-col items-center mt-5">
      <span className="text-sm text-gray-700">
        Mostrando registros&nbsp;
        <span className="font-semibold text-gray-900">
          {(currentPageValue - 1) * entriesPerPage + 1}
        </span>
        &nbsp;-&nbsp;
        <span className="font-semibold text-gray-900">
          {currentPageValue * entriesPerPage}&nbsp;
        </span>
        de&nbsp;
        <span className="font-semibold text-gray-900">
          {totalEntries}&nbsp;
        </span>
        Registros
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-yellow-500 rounded-s hover:bg-yellow-900"
          onClick={() => {
            setPageCallback(currentPageValue - 1);
          }}
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-yellow-500 border-0 border-s border-yellow-700 rounded-e hover:bg-yellow-900"
          onClick={() => {
            setPageCallback(currentPageValue + 1);
          }}
        >
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center mt-2">
        <label className="text-sm text-gray-700">Registros por página:</label>
        <select
          className="w-16 h-8 ms-2 text-sm text-gray-900 border-0 border-s border-gray-300 rounded-s"
          value={entriesPerPage}
          onChange={(e) => {
            setEntriesPerPageCallback(e.target.value);
          }}
        >
          <option value="9">9</option>
          <option value="15">15</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
}
