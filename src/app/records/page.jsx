
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
		console.log(`Fetching page ${page} with ${entriesPerPage} entries per page`);
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${entriesPerPage}&_page=${page}`);
		const data = await response.json();
		setData(data);
		console.log(data);
		setTotalEntries(1000);
	};

	useEffect(() => {
		fetchData(entriesPerPage, currentPage);
		setLoading(false);
	}, [entriesPerPage, currentPage]);

	return (
		<section class="text-gray-600 body-font">

			<div className="flex flex-wrap">
				{
					loading ? Array(entriesPerPage).fill().map((_, i) => <SkeletonCard key={i} />) : data.map((item, i) => <Card key={i} {...item} />)
				}
			</div>

			<div className="mt-5">
				<Paginator currentPageValue={currentPage} setPageCallback={setCurrentPage} maxPageValue={maxPage} entriesPerPage={entriesPerPage} totalEntries={totalEntries}/>
			</div>
		</section>
	);
}
