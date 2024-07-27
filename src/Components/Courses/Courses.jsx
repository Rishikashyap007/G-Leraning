import React from 'react';
import { Star, Clock, ChevronRight } from 'lucide-react';

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.name}</h3>
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <Clock size={16} className="mr-1" />
        <span>{course.duration}</span>
      </div>
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <Star size={16} className="text-yellow-400 mr-1" />
        <span>{course.rating} ({course.reviewCount} reviews)</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{course.description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center">
        Learn More
        <ChevronRight size={16} className="ml-1" />
      </button>
    </div>
  </div>
);

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: "Data Science Specialization",
      duration: "6 months",
      rating: 4.8,
      reviewCount: 1234,
      description: "Master the skills of a Data Scientist and kick-start your career in this high-demand field.",
      image: "https://thumbs.dreamstime.com/b/big-data-center-analyzes-data-science-background-presentation-big-data-center-analyzes-data-science-background-159196598.jpg"
    },
    {
      id: 2,
      name: "Full Stack Web Development",
      duration: "8 months",
      rating: 4.7,
      reviewCount: 987,
      description: "Become a proficient full stack developer with hands-on projects and industry-relevant skills.",
      image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png"
    },
    {
      id: 3,
      name: "AI and Machine Learning",
      duration: "7 months",
      rating: 4.9,
      reviewCount: 1567,
      description: "Dive into the world of AI and ML with cutting-edge techniques and real-world applications.",
      image: "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg"
    },
    {
      id: 4,
      name: "Cloud Computing Essentials",
      duration: "5 months",
      rating: 4.6,
      reviewCount: 789,
      description: "Master cloud technologies and prepare for a career in the rapidly growing cloud industry.",
      image: "https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-big-cloud-computing-infrastructure-elements-connected-with-dashed-lines-vector-illustration_1284-30495.jpg"
    },
    {
      id: 5,
      name: "Digital Marketing Mastery",
      duration: "4 months",
      rating: 4.7,
      reviewCount: 1098,
      description: "Learn to create and execute effective digital marketing strategies for business growth.",
      image: "https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=1024x1024&w=is&k=20&c=N65ufLsxvt6b5XaKSitmu09gDUhEitFqfM4cWG7CTMk="
    },
    {
      id: 6,
      name: "Cybersecurity Professional",
      duration: "6 months",
      rating: 4.8,
      reviewCount: 876,
      description: "Develop the skills to protect organizations from cyber threats and build a secure digital environment.",
      image: "https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg?size=626&ext=jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-100 w-[90%] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Amazing Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 text-lg font-semibold">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;