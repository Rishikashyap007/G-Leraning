import React from 'react';

const statistics = [
  {
    value: "10 Million",
    label: "STUDENTS AND ALUMNI",
  },
  {
    value: "4.6/5",
    label: "END PROGRAM RATING",
  },
  {
    value: "50%",
    label: "AVG. HIKE POST PROGRAM*",
  },
  {
    value: "3300+",
    label: "HIRING COMPANIES*",
  },
];

const Statistics = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-purple-600 font-medium">YOUR GOALS ARE OUR GOALS</h3>
        <h2 className="mt-2 text-4xl font-bold text-gray-900">
          Invest in yourself today. Unlock success for a lifetime.
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {statistics.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-4xl font-extrabold text-orange-500">{stat.value}</p>
            <p className="mt-2 text-lg font-semibold text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
