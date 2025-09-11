"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HelloWorldCard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState("Hello, World!");

  const greetings = [
    "Hello, World!",
    "¡Hola, Mundo!",
    "Bonjour, le Monde!",
    "Hallo, Welt!",
    "こんにちは、世界！",
    "안녕하세요, 세계!",
    "Привет, Мир!",
    "Olá, Mundo!",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const changeGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    setGreeting(greetings[randomIndex]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-105">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {greeting}
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 font-medium">
            Welcome to this beautiful Next.js application
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <div className="text-center">
            <div className="inline-block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <p className="text-sm font-semibold text-blue-800 mb-1">Current Time</p>
              <p className="text-base text-gray-700 font-mono">
                {formatTime(currentTime)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">Technology Stack</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Next.js 15</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• shadcn/ui</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <h3 className="font-semibold text-purple-800 mb-2">Features</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Responsive Design</li>
                <li>• Real-time Clock</li>
                <li>• Interactive UI</li>
                <li>• Modern Styling</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={changeGreeting}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Change Greeting
            </Button>
          </div>

          <div className="text-center pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Built with ❤️ using modern web technologies
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}