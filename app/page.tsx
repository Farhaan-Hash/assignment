import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-900 min-h-screen p-6">
      <h1 className="mb-6 text-light-800 text-semi-bold ">Welcome</h1>
      <div className="flex space-x-2">
        <Link href="/books">
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-6 font-bold py-2 px-4 rounded">
            Go to Book Store
          </button>
        </Link>
        {/* <Link href="/about">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Go to About
          </button> 
        </Link>*/}
      </div>
    </main>
  )
}
