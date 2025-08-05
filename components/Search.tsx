'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface Blog {
  id: string;
  title: string;
  description: string;
  author: string;
}

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';

  const [results, setResults] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  // Removed error state as you requested no error messages

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<{ searchTerm: string }>({
    defaultValues: {
      searchTerm: '',
    },
  });

  const searchTerm = watch('searchTerm');

  useEffect(() => {
    reset({ searchTerm: search });

    if (!search) {
      setResults([]);
      return;
    }

    const fetchBlogs = async () => {
      setLoading(true);

      try {
        const res = await fetch(`/api/blogs?search=${encodeURIComponent(search)}`);
        if (!res.ok) {
          // Don't show error, just clear results
          setResults([]);
          return;
        }
        const blogs: Blog[] = await res.json();
        setResults(blogs);
      } catch {
        // On fetch error, just clear results, no error shown
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [search, reset]);

  const onSubmit = (data: { searchTerm: string }) => {
    const trimmed = data.searchTerm.trim();
    if (trimmed) {
      router.push(`?search=${encodeURIComponent(trimmed)}`);
    } else {
      router.push('/');
    }
  };

  const clearSearch = () => {
    reset({ searchTerm: '' });
    setResults([]);
    router.push('/');
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 mb-4 relative">
        <input
          type="text"
          placeholder="Search blogs..."
          {...register('searchTerm', { required: true })}
          className="flex-grow p-2 border border-gray-300 rounded pr-10"
        />
        {/* Clear button (cross) */}
        {searchTerm && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
          >
            &#10005;
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {errors.searchTerm && (
        <p className="text-red-500 mb-2">Search term is required.</p>
      )}

      {loading && <p>Loading results...</p>}

      {!loading && results.length === 0 && search && (
        <p>No results found for "{search}"</p>
      )}

      <ul className="space-y-4">
        {results.map((blog) => (
          <li key={blog.id} className="border p-4 rounded shadow">
            <h3 className="font-semibold text-lg">{blog.title}</h3>
            <p className="text-gray-700">{blog.description}</p>
            <p className="text-sm text-gray-500 mt-1">By {blog.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
