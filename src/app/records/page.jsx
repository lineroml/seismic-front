"use client";

import SkeletonCard from "@/components/skeletonCard";
import Card from "@/components/card";
import Paginator from "@/components/paginator";

import { useEffect, useState } from "react";

export default function Records() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(9);
  const [totalEntries, setTotalEntries] = useState(0);
  const [maxPage, setMaxPage] = useState(2);

  const fetchData = async (entriesPerPage, page) => {
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ROR_API_URL}/api/features?per_page=${entriesPerPage}&page=${page}`
    );
    const data = await response.json();
    setData(data.data);
    setTotalEntries(data.pagination.total);
    const maxPage = Math.ceil(data.pagination.total / entriesPerPage);
    setMaxPage(maxPage);
    console.log(currentPage, maxPage);
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
    fetchData(entriesPerPage, currentPage);
    setLoading(false);
  }, [entriesPerPage, currentPage]);

  return (
    <section className="text-gray-600 body-font">
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
