import React from 'react';

const skills = [
  { name: 'AI & Machine Learning', icon: '🎓' },
  { name: 'Data Science & Business Analytics', icon: '🔄' },
  { name: 'Study Abroad', icon: '🌍' },
  { name: 'Management', icon: '📊' },
  { name: 'Cloud Computing', icon: '☁️' },
  { name: 'Cyber Security', icon: '🛡️' },
  { name: 'Software Development', icon: '💻' },
  { name: 'Digital Marketing', icon: '📱' },
  { name: 'Design', icon: '🎨' },
];

const SkillsSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-purple-600 font-semibold text-sm mb-2">
          MASTER SKILLS. BUILD A CAREER.
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Modern skills for<br />modern careers
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Stay at the top of your game with skills from the hottest domains. 
          Explore topics that interest you most and see how the programs are relevant to you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;