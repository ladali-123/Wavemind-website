import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import olympiadb from '../assets/olympiadb.png';
import blogpic2 from '../assets/blogpic2.png';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: 'Understanding Olympiad Preparation',
      excerpt: 'National Standard Examination in Physics (NSEP): Complete guide, strategy and preparation tips.',
      content: 'Full content about Olympiad preparation goes here.',
      date: 'January 31, 2026',
      author: 'WaveMind Edu',
      image: olympiadb,
      sku: 'EDU101'
    },

     {
      id: 2,
      title: 'Why Students Should Start Olympiad Physics from Class 9–10',
      excerpt: 'Physics is one of the most important subjects for students who dream of IIT and top science colleges.',
      content: 'Full content about Olympiad preparation goes here.',
      date: 'February 6, 2026',
      author: 'WaveMind Edu',
      image: blogpic2,
      sku: 'EDU102'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <div className="pt-28 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Insights & Preparation Guides
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Expert strategies, Olympiad preparation tips, and academic guidance from WaveMind Edu.
        </p>
      </div>

      {/* FEATURED BLOG */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 mb-24">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
          <img
            src={blogs[1].image}
            alt={blogs[1].title}
            className="w-full h-full object-cover"
          />

          <div className="p-10 flex flex-col justify-center">
            <span className="inline-block w-fit px-4 py-1 mb-4 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
              FEATURED • {blogs[1].sku}
            </span>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {blogs[1].title}
            </h2>

            <p className="text-gray-600 mb-6">
              {blogs[1].excerpt}
            </p>

            <p className="text-sm text-gray-500 mb-6">
              By {blogs[1].author} • {blogs[1].date}
            </p>

            <button
              onClick={() => navigate('/why-students')}
              className="w-fit px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Read Full Article →
            </button>
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                  {blog.sku}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>

                <button
                  onClick={() => blog.id === 1 ? navigate('/nsep-physics') : blog.id === 2 ? navigate('/why-students') : null}
                  className="w-full py-2 font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
