import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const BlogCard = ({ post }) => (
  <div className="group h-full flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="p-6 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-200">
          {post.title}
        </h3>
      </div>
      <div className="flex-grow">
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button 
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
          aria-label={`Read more about ${post.title}`}
        >
          Read More <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Understanding Modern Web Architecture",
      excerpt: "An in-depth look at how modern web applications are built and deployed, covering everything from frontend frameworks to backend services and deployment strategies.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Web Development", "Architecture", "Frontend"]
    },
    {
      title: "My Journey with Three.js and WebGL",
      excerpt: "Lessons learned while building 3D experiences for the web, including performance optimization techniques and best practices for immersive web experiences.",
      date: "2024-02-01",
      readTime: "4 min read",
      tags: ["3D Graphics", "WebGL", "JavaScript"]
    },
    {
      title: "Optimizing React Applications",
      excerpt: "Best practices and techniques for building performant React apps, including code splitting, lazy loading, and state management strategies.",
      date: "2024-02-15",
      readTime: "6 min read",
      tags: ["React", "Performance", "JavaScript"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50" aria-label="Latest blog articles">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={post.title}>
              <BlogCard post={post} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;