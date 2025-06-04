import { useState } from "react";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-10 flex flex-col items-center justify-center">
      {!showDashboard ? (
        <div className="text-center max-w-lg">
          <h1 className="text-5xl font-extrabold mb-6">RateRadar365</h1>
          <p className="text-xl mb-8">
            Monitor, manage, and respond to Google Reviews with AI — 365 days a year.
          </p>
          <button
            onClick={() => setShowDashboard(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Enter Dashboard
          </button>
        </div>
      ) : (
        <div className="w-full max-w-5xl">
          <h2 className="text-3xl font-semibold mb-8">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow rounded border text-center">
              <h3 className="text-2xl font-bold mb-3">Total Reviews</h3>
              <p className="text-4xl">1,245</p>
            </div>
            <div className="p-6 shadow rounded border text-center">
              <h3 className="text-2xl font-bold mb-3">Average Rating</h3>
              <p className="text-4xl">4.6 ★</p>
            </div>
            <div className="p-6 shadow rounded border text-center">
              <h3 className="text-2xl font-bold mb-3">AI Suggested Replies</h3>
              <p className="text-4xl">487</p>
            </div>
          </div>
          <button
            onClick={() => setShowDashboard(false)}
            className="mt-10 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg"
          >
            Back to Landing Page
          </button>
        </div>
      )}
    </div>
  );
}
