"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, UserRoundPen } from 'lucide-react'
import { useEffect, useState } from 'react'
import Header from '@/components/ui/navbar'

interface Blog {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}


export default function BlogListing() {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        
        const response = await fetch(`https://blog-be-mqm1.onrender.com/blog/public`);
        const data = await response.json();
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post._id} className="bg-gray-900 border-gray-800 overflow-hidden">
              <Link href={`/blog/${post._id}`}>
              <CardContent className="p-6 hover: cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <UserRoundPen className="h-6 w-6" />
                  </div>
                  <span className="text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()} 
                    <span className="text-blue-600 ml-2">• 2 minute read</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p>{post.content.substring(0, 150)}{post.content.length > 150 ? '...' : ''}</p> 
                <Link href={`/blog/${post._id}`} className="text-blue-500 hover:underline">Read More</Link>
              </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}