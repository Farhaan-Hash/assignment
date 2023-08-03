"use client";
import {
  useQueryClient,
  useInfiniteQuery,
  QueryKey,
  useQuery,
} from "@tanstack/react-query";
import {Metadata} from "next";
import Link from "next/link";
import React, {RefObject, useEffect, useRef} from "react";
// import useBooksQuery from '@/lib/getAllBooks';
import Image from "next/image";
import profilepic from "../images/4.png";
import PullToRefresh from "react-simple-pull-to-refresh";
import InfiniteScroll from "react-infinite-scroll-component";
import loadingPic from "../images/9.svg";

export const metadata: Metadata = {
  title: "Books",
};

const BooksPage: React.FC = () => {
  const queryClient = useQueryClient();
  const fetchBooks = async ({pageParam = 1}: {pageParam?: number}) => {
    const res = await fetch(`http://localhost:4000/books?page=${pageParam}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  };

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery<any, Error>({
    queryKey: ["books"],
    queryFn: fetchBooks,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 10 > lastPage.pages) {
        return false;
      }
      return lastPage.prevOffset + 10;
    },
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const hasNextPage: boolean = !!data?.pages?.[0]?.length;
  const useScrollListener = (
    containerRef: React.RefObject<HTMLDivElement>,
    fetchNextPage: () => void,
    hasNextPage: boolean
  ) => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const scrollableHeight: number =
          container.scrollHeight - container.clientHeight;
        const scrolledPercentage: number =
          (container.scrollTop / scrollableHeight) * 100;

        if (scrolledPercentage >= 80 && hasNextPage) {
          fetchNextPage();
        }
      }
    };

    useEffect(() => {
      container?.addEventListener("scroll", handleScroll);
      return () => container?.removeEventListener("scroll", handleScroll);
    }, [fetchNextPage, hasNextPage]);
  };

  useScrollListener(containerRef, fetchNextPage, hasNextPage);

  const handleRefresh = async () => {
    await refetch();
    queryClient.resetQueries(["books"]);
  };

  if (isLoading) {
    return (
      <div className="text-gray-500 flex justify-center items-center text-center mt-6">
        <Image src={loadingPic} alt="loading" />
      </div>
    );
  }

  if (isError) {
    return <div>Error: Failed to fetch data</div>;
  }
  console.log(data.pages);

  return (
    <section className="p-4">
      <h2 className="mb-4">
        <Link href="/">
          <button className="mb-4 inline-block border-gray-800 text-gray-800 hover:text-red-800 hover:bg-red-00 hover:text-gray-800 px-4 py-2 rounded-lg">
            &larr; Go Back
          </button>
        </Link>
      </h2>
      <PullToRefresh
        onRefresh={handleRefresh}
        canFetchMore={!!hasNextPage} // Adjust canFetchMore based on whether there is more data to load
        onFetchMore={fetchNextPage}
        pullDownContent={
          <div className="text-gray-500 text-center mt-6">
            ↓ Pull down to refresh
          </div>
        }
        releaseContent={
          <div className="text-gray-500 text-center mt-6">
            ↑ Release to refresh
          </div>
        }
        refreshingContent={
          <div className="text-gray-500 text-center mt-6">Refreshing...</div>
        }
        ref={containerRef}
      >
        <InfiniteScroll
          dataLength={data ? data.pages?.length : 0}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={
            <h4 className="text-gray-500 text-center mt-6">Loading...</h4>
          }
          endMessage={
            <p className="text-gray-500 text-center mt-6">
              No more books to load
            </p>
          }
          refreshFunction={handleRefresh}
          pullDownToRefresh
          pullDownToRefreshContent={
            <h3 className="text-gray-500 text-center mt-6">
              Release to refresh
            </h3>
          }
          releaseToRefreshContent={
            <h3 className="text-gray-500 text-center mt-6">Refreshing...</h3>
          }
        >
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {data.pages[0]?.map((book: Book, index: number) => (
              <div
                key={index}
                className="relative p-4 border border-gray-300 rounded-md"
              >
                <Link href={`http://localhost:3000/books/${index}`}>
                  <div>
                    <div className="relative h-80">
                      <Image
                        src={profilepic}
                        alt="imagePic"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 80%"
                      />
                    </div>
                    <h1 className="text-xl text-gray-900 pt-2 mt-6 font-semibold">
                      {book?.name}
                    </h1>
                    {book?.discount && (
                      <div className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-red-500 text-white font-bold rounded-full">
                        {book?.discount} OFF
                      </div>
                    )}
                  </div>
                  <div className="mt-8 flex justify-between">
                    <div className="text-red-500 text-xl font-bold">20%</div>
                    <div className="text-xl font-bold text-gray-900">
                      56700루피
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div>
              <button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage
                  ? "Loading more..."
                  : hasNextPage
                  ? "Load More"
                  : "Nothing more to load"}
              </button>
            </div>
            <div>
              {isFetching && !isFetchingNextPage ? "Fetching..." : null}
            </div>
          </div>
        </InfiniteScroll>
      </PullToRefresh>
    </section>
  );
};

export default BooksPage;
