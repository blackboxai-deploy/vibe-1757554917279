import HelloWorldCard from "@/components/hello-world-card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to Next.js
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A modern, fast, and beautiful Hello World application showcasing the power of React, 
            Next.js, and Tailwind CSS working together seamlessly.
          </p>
        </div>
        
        <HelloWorldCard />
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600">Next.js</p>
              <p className="text-xs text-gray-500">React Framework</p>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600">TypeScript</p>
              <p className="text-xs text-gray-500">Type Safety</p>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600">Tailwind</p>
              <p className="text-xs text-gray-500">CSS Framework</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}