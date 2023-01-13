import React from "react";
import timeline from "../data/timeline";
import { useState } from "react";
import Layout from "../components/Layout";

const Timeline = () => {
  const [data, setData] = useState(timeline);

  const timelineList = data.map((item) => {
    let cardPlace;
    let index = data.indexOf(item);
    if (index % 2 === 0) {
      cardPlace = {
        justify: "justify-start",
        sm: "sm:pr-8",
      };
    } else {
      cardPlace = {
        justify: "justify-end",
        sm: "sm:pl-8",
      };
    }

    return (
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div
            className={`flex ${cardPlace.justify} w-full mx-auto items-center`}
          >
            <div className={`w-full sm:w-1/2 ${cardPlace.sm}`}>
              <div className="p-4 bg-white rounded shadow">
                <div className="flex justify-between">
                  <div className="font-bold text-xl pb-2">{item.name}</div>
                  <div className="mt-2">{item.date}</div>
                </div>
                {item.desc}
              </div>
            </div>
          </div>
          <div className="rounded-full bg-slate-600 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Layout title="Timeline">
      <div className="min-h-screen bg-slate-200 py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 sm:max-w-3xl sm:mx-auto w-full px-2 sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            {/* <!-- Vertical bar running through middle --> */}
            <div className="hidden sm:block w-1 bg-slate-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {timelineList}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Timeline;
