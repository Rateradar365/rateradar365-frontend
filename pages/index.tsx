
import { useState } from "react";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-10">
      {!showDashboard ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">RateRadar365</h1>
          <p className="text-lg mb-6">
            Monitor, manage, and respond to Google Reviews with AI — 365 days a year.
          </p>
          <button
            onClick={() => setShowDashboard(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Enter Dashboard
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 shadow rounded border">
              <h3 className="text-xl font-bold mb-2">Total Reviews</h3>
              <p className="text-3xl">1,245</p>
            </div>
            <div className="p-4 shadow rounded border">
              <h3 className="text-xl font-bold mb-2">Average Rating</h3>
              <p className="text-3xl">4.6 ★</p>
            </div>
            <div className="p-4 shadow rounded border">
              <h3 className="text-xl font-bold mb-2">AI Suggested Replies</h3>
              <p className="text-3xl">487</p>
            </div>
          </div>
          <button
            onClick={() => setShowDashboard(false)}
            className="mt-8 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
          >
            Back to Landing Page
          </button>
        </div>
      )}
    </div>
  );
}
