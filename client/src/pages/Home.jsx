import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-blue-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-2">
          Import Genius
        </h1>
        <p className="text-xl text-blue-200 mb-8">
          Your AI-powered import guidance assistant
        </p>
        <p className="text-lg text-blue-100 mb-12">
          Navigating the complexities of international trade, one query at a
          time
        </p>
        <div className="space-y-4">
          <p className="text-md text-blue-200">
            We leverage cutting-edge GenAI technology to provide:
          </p>
          <ul className="text-blue-100 space-y-2">
            <li>• Accurate import regulations</li>
            <li>• Custom-tailored guidance</li>
            <li>• Up-to-date trade information</li>
            <li>• Simplified complex procedures</li>
          </ul>
        </div>
        <div className="mt-10">
          <Link
            to="/ImportGuidance"
            className="bg-blue-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 "
          >
            Get Started
          </Link>
        </div>
      </div>
      <footer className="mt-16 text-blue-200 text-sm">
        <p>Empowering global trade with artificial intelligence</p>
      </footer>
    </div>
  );
}
