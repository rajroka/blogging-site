"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Search = ({ query }: { query: string }) => {
  const router = useRouter();

  const clearSearch = () => {
    // Clear search and go back to home
    router.push('/');
  };

  return (
    <>
      <form action="/" className="flex items-center gap-2">
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search..."
          className="border px-4 py-2 border-black rounded-md"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>

        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="px-2 py-2 border rounded-md text-gray-600 hover:text-red-500"
          >
            ×
          </button>
        )}
      </form>

      
    </>
  );
};

export default Search;
