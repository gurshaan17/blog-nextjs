"use client"

interface BlogPostProps {
  params: {
    id: string;
  };
}

import { Button } from '@/components/ui/button';
import { log } from 'console';
import { ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const BlogPost: React.FC<BlogPostProps> = ({ params }) => {
    const { id } = params;
    const [blog, setBlog] = useState<{_id: string; title: string; content: string; createdAt: string}[]>([]);

    useEffect(() => {
        if (id) {
            const fetchBlog = async () => {
                try {
                    const response = await fetch(`http://localhost:4000/blog/${id}`);
                    const data = await response.json();
                    console.log(response.json);
                    setBlog(data);
                } catch (error) {
                    console.error("Error fetching blog:", error);
                }
            };
            fetchBlog();
        }
    }, [id]);

    if (!blog.length) return <p>Loading...</p>; // Loading state

    return (
        <div className="min-h-screen bg-black text-white">
            <header className="container mx-auto px-4 py-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold flex items-center">
                    <span className="text-3xl mr-2">*</span> NewBlockchain
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <Link href="/services" className="hover:text-gray-300">Services</Link>
                    <Link href="/tokens" className="hover:text-gray-300">Tokens</Link>
                    <Link href="/whitelist" className="hover:text-gray-300">Our Whitelist</Link>
                    <Link href="/dashboard" className="text-gray-500 hover:text-gray-300">Dashboard</Link>
                </nav>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6">Get Started →</Button>
            </header>

            <main className="container mx-auto px-4 py-12">
                <Link href="/blog" className="flex items-center text-blue-600 hover:text-blue-500 mb-8">
                    <ArrowLeft className="mr-2" />
                    Back to Blog
                </Link>

                <article className="max-w-3xl mx-auto">
                    <div className="inline-block bg-gray-800 text-sm px-3 py-1 rounded-full mb-4">
                        BLOG POST
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog[0].title}</h1>
                    <div className="flex items-center text-gray-500 mb-8">
                        <Clock className="mr-2" />
                        <span>{new Date(blog[0].createdAt).toLocaleDateString()}</span> {/* Format date */}
                    </div>
                    <div className="prose prose-invert max-w-none">
                        <p>{blog[0].content}</p>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default BlogPost;