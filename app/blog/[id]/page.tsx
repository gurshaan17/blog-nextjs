"use client";

import Header from '@/components/ui/navbar';
import { ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BlogPostProps {
  params: {
    id: string;
  };
}

interface Blog {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ params }) => {
  const { id } = params;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await fetch(`https://blog-be-mqm1.onrender.com/blog/${id}`);
          if (!response.ok) {
            throw new Error(`Error fetching blog: ${response.statusText}`);
          }
          const data: Blog = await response.json();
          setBlog(data);
        } catch (error) {
          console.error("Error fetching blog:", error);
        } finally {
          setLoading(false); // Loading finished
        }
      };
      fetchBlog();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>; // Show loading indicator
  if (!blog) return <p>Blog not found!</p>; // Handle case where no blog is found

  return (
    <div className="min-h-screen bg-black text-white">
      <Header/>
      <main className="container mx-auto px-4 py-12">
        <Link href="/blogs" className="flex items-center text-blue-600 hover:text-blue-500 mb-8">
          <ArrowLeft className="mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-3xl mx-auto">
          <div className="inline-block bg-gray-800 text-sm px-3 py-1 rounded-full mb-4">
            BLOG POST
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center text-gray-500 mb-8">
            <Clock className="mr-2" />
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="prose prose-invert max-w-none">
            <p>{blog.content}</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;