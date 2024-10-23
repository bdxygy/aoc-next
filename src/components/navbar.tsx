import Link from "next/link";

export default function Navbar() {
    return <nav className="bg-white shadow-md sticky top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-between h-16">
                <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="text-xl font-bold text-gray-800">
                        Next.js RSC
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link
                        href="/features"
                        className="text-gray-800 hover:text-gray-600"
                    >
                        Features
                    </Link>
                    <Link href="/docs" className="text-gray-800 hover:text-gray-600">
                        Docs
                    </Link>
                    <Link
                        href="/showcase"
                        className="text-gray-800 hover:text-gray-600"
                    >
                        Showcase
                    </Link>
                    <Link href="/blog" className="text-gray-800 hover:text-gray-600">
                        Blog
                    </Link>
                    <Link
                        href="/github"
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                        GitHub
                    </Link>
                </div>
            </nav>
        </div>
    </nav>
}