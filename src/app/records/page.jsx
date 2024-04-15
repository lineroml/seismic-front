"use client";

import SkeletonCard from "@/components/skeletonCard";
import Card from "@/components/card";
import Paginator from "@/components/paginator";

import { useEffect, useState } from "react";

export default function Records() {
  const [loading, setLoading] = useState(true);
  const [filterValue, setFilterValue] = useState(["any"]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(9);
  const [totalEntries, setTotalEntries] = useState(0);
  const [maxPage, setMaxPage] = useState(2);

  const fetchData = async (entriesPerPage, page, filter = []) => {
    setLoading(true);

    let url = `${process.env.NEXT_PUBLIC_ROR_API_URL}/api/features?per_page=${entriesPerPage}&page=${page}`;
    if (filter.length > 0 && filter.includes("any") === false) {
      for (let i = 0; i < filter.length; i++) {
        url += `&mag_type[]=${filter[i]}`;
      }
    }
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    setData(data.data);
    setTotalEntries(data.pagination.total);
    const maxPage = Math.ceil(data.pagination.total / entriesPerPage);
    setMaxPage(maxPage);
  };

  const setPage = (page) => {
    if (page < 1) {
      setCurrentPage(1);
    } else if (page > maxPage) {
      return;
    } else {
      setCurrentPage(page);
    }
  };

  const setMaxEntriesPerPage = (entriesPerPage) => {
    setEntriesPerPage(entriesPerPage);
    if (entriesPerPage * currentPage > totalEntries) {
      setCurrentPage(Math.ceil(totalEntries / entriesPerPage));
    }
  };

  useEffect(() => {
    fetchData(entriesPerPage, currentPage, filterValue);
    setLoading(false);
  }, [entriesPerPage, currentPage, filterValue]);

  return (
    <section className="text-gray-600 body-font">
      <form className="max-w-lg mx-auto">
        <label
          htmlFor="magtypes_multiple"
          className="block mb-2 text-sm font-medium text-gray-900 text-center"
        >
          Filter by MagType (Hold Ctrl to select multiple)
        </label>
        <select
          onChange={(e) => {
            let options = e.target.options;
            let value = [];
            for (let i = 0, l = options.length; i < l; i++) {
              if (options[i].selected) {
                value.push(options[i].value);
              }
            }
            setFilterValue(value);
          }}
          multiple
          id="magtypes_multiple"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
        >
          <option value="any">Any/All</option>
          <option value="md">MD</option>
          <option value="ml">ML</option>
          <option value="ms">MS</option>
          <option value="mw">MW</option>
          <option value="mb">MB</option>
          <option value="me">ME</option>
          <option value="mi">MI</option>
          <option value="mlg">MLG</option>
        </select>
      </form>
      <div className="flex flex-wrap">
        {loading
          ? Array(entriesPerPage)
              .fill()
              .map((_, i) => <SkeletonCard key={i} />)
          : data.map((item, i) => <Card key={i} item={item} />)}
      </div>

      <div className="mt-5">
        <Paginator
          currentPageValue={currentPage}
          setPageCallback={setPage}
          maxPageValue={maxPage}
          entriesPerPage={entriesPerPage}
          totalEntries={totalEntries}
          setEntriesPerPageCallback={setEntriesPerPage}
          loading={loading}
        />
      </div>
    </section>
  );
}
