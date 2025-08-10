import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div id="app">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a href="#home" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</a>
                  <a href="#about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">About</a>
                  <a href="#contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section id="home" className="component bg-white overflow-hidden">
            <div className="px-4 py-16 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Welcome To My Next Page
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
                  A modern, performant web application built with Next.js
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="component bg-white">
                <div className="px-4 py-5 sm:p-6">
                  <img className="h-12 w-12 mb-4" src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5c76212c-a886-4617-b732-a35e7b79d763.png" alt="Lightning bolt icon representing fast performance" />
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Fast Performance</h3>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Optimized for speed with automatic code splitting, optimized images, and server-side rendering.</p>
                  </div>
                </div>
              </div>

              <div className="component bg-white">
                <div className="px-4 py-5 sm:p-6">
                  <img className="h-12 w-12 mb-4" src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/badf85ac-893a-4108-bd40-28beacc02d3d.png" alt="Mobile devices showing responsive design" />
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Responsive Design</h3>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Looks great on any device, from desktop to mobile, with Tailwind CSS responsive utilities.</p>
                  </div>
                </div>
              </div>

              <div className="component bg-white">
                <div className="px-4 py-5 sm:p-6">
                  <img className="h-12 w-12 mb-4" src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d0b32519-c5d6-46f9-9ebd-7815b1b36f03.png" alt="Developer tools and code editor showing JSX syntax" />
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Developer Friendly</h3>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Includes TypeScript support, fast refresh, and an intuitive page-based routing system.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="component bg-white mt-8">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold text-gray-900">About</h2>
              <div className="mt-4 text-gray-600">
                <p>This is a demonstration of how a Next.js application can be structured in a single HTML file, simulating components with JavaScript and CSS.</p>
                <p className="mt-2">In a real Next.js project, you would have separate component files, pages, and proper routing.</p>
              </div>
            </div>
          </section>


          {/*template to fix in the next "coding" */}
          <Link 
          href="login"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-m"
          >Click here to login in my application</Link>




          <section id="contact" className="component bg-white mt-8">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">Submit</button>
              </form>
            </div>
          </section>
        </main>

        <footer className="bg-white shadow-inner mt-8">
          <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
            <p className="text-center text-base text-gray-500">
              © 2023 Next.js App Demo. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}