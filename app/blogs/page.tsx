"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import Header from '@/components/ui/navbar'

export default function BlogListing() {
  const [blogPosts, setBlogPosts] = useState<{ _id: string; title: string; content: string; createdAt: string }[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        //https://blog-be-mqm1.onrender.com
        const response = await fetch("http://localhost:4000/blog/public");
        const data = await response.json();
        console.log(data); // Log the data to check its structure
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header/>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <div className="inline-block bg-gray-800 text-sm px-3 py-1 rounded-full mb-4">
            BLOG POSTS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            LATEST <span className="text-blue-600">INSIGHTS</span>
          </h1>
        </section>
        
        <div className="mb-12 flex">
          <input 
            type="text" 
            placeholder="Search blog posts..." 
            className="flex-grow p-3 bg-gray-900 text-white rounded-l-full border-2 border-r-0 border-gray-800 focus:outline-none focus:border-blue-600"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-l-none rounded-r-full px-6">
            <Search className="mr-2" />
            Search
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post._id} className="bg-gray-900 border-gray-800 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Clock className="h-6 w-6" /> {/* Use a default icon or customize as needed */}
                  </div>
                  <span className="text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p>{post.content.substring(0, 150)}{post.content.length > 150 ? '...' : ''}</p> {/* Show first 150 characters */}
                <Link href={`/blog/${post._id}`} className="text-blue-500 hover:underline">Read More</Link> {/* Read More button */}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}