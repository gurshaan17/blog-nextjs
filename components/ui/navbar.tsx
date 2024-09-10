import Link from "next/link";


export default function Header(){
    return <div>
       <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="text-3xl mr-2 text-blue-600">*</span> NewBlockchain
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/blogs" className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 py-3"> Read our Blogs</Link>
        </nav>

      </header>
    </div>
}