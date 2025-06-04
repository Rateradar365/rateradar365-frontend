import { useState } from "react";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center p-6">
      {!showDashboard ? (
        <div className="text-center max-w-xl">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-600">RateRadar365</h1>
          <p className="text-lg mb-8">
            Monitor, manage, and respond to Google Reviews with AI — 365 days a year.
          </p>
          <button
            onClick={() => setShowDashboard(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-full transition"
          >
            Enter Dashboard
          </button>
        </div>
      ) : (
        <div className="w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Total Reviews</h3>
              <p className="text-4xl font-bold">1,245</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Average Rating</h3>
              <p className="text-4xl font-bold">4.6 ★</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">AI Suggested Replies</h3>
              <p className="text-4xl font-bold">487</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowDashboard(false)}
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-full transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
         
