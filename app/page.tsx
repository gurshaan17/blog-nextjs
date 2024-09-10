import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { UserRoundPen, Lock, BookOpen } from 'lucide-react'
import Header from '@/components/ui/navbar'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header/>
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <div className="inline-block bg-gray-800 text-sm px-3 py-1 rounded-full mb-4">
            LATEST BLOG ENTRIES
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight py-5">
            DISCOVER MORE <br />ON <span className="text-blue-600">SMART CONTRACTS.</span>
          </h1>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <UserRoundPen className="h-6 w-6" />
                </div>
                <span className="text-gray-500">3 JANUARY 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">NEW UPDATE SOON</h3>
              <p className="text-gray-400 mb-4">Explore the latest changes in our blockchain system! Stay informed about the latest developments...</p>
              <Link href='/blog/66e06ac59bb2eae59fae2824' className="p-0 h-auto font-normal text-blue-600 hover:text-blue-500">
                DISCOVER MORE →
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Lock className="h-6 w-6" />
                </div>
                <span className="text-gray-500">28 DECEMBER 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">PROTOCOLS AND SECURITY</h3>
              <p className="text-gray-400 mb-4">Security is paramount in the blockchain world, and new protocols aim to strengthen this foundation...</p>
              <Link href='/blog/66e06b199bb2eae59fae2829' className="p-0 h-auto font-normal text-blue-600 hover:text-blue-500">
                DISCOVER MORE →
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <BookOpen className="h-6 w-6" />
                </div>
                <span className="text-gray-500">22 DECEMBER 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">START WITH OUR TUTORIALS</h3>
              <p className="text-gray-400 mb-4">Guide through the fundamentals of blockchain that will help you embark on exploring the world of this fascinating technology.</p>
              <Link href='/blog/66e06b569bb2eae59fae282c' className="p-0 h-auto font-normal text-blue-600 hover:text-blue-500">
                DISCOVER MORE →
              </Link >
            </CardContent>
          </Card>
        </section>
        <section className="text-center pt-10">
          <Link href='/blogs' className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 py-3 text-lg ">
            Discover Our Blogs
          </Link>
        </section>
      </main>
    </div>
  )
}