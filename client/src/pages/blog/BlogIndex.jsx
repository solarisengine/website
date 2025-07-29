import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { AnimatedSection } from '../../components/AnimatedSection';
import brain from '../../../public/brain.avif';
import roi from '../../../public/roi.jpg';
import rpa from '../../../public/rpa.png';
import automation from '../../../public/automation.png';

// Mock blog posts data - later we'll load this from files or CMS
const blogPosts = [
  {
    id: 'ai-automation-business-transformation',
    title: 'How AI-Driven Automation is Transforming Modern Businesses',
    excerpt:
      'Discover how artificial intelligence and automation technologies are revolutionizing business operations, increasing efficiency, and driving unprecedented growth across industries.',
    author: 'Solaris Engine Team',
    date: new Date('2025-01-15'),
    readTime: '8 min read',
    category: 'AI & Automation',
    image: automation,
    featured: true,
  },
  {
    id: 'rpa-vs-intelligent-automation',
    title: 'RPA vs Intelligent Automation: Understanding the Difference',
    excerpt:
      'Learn the key differences between Robotic Process Automation (RPA) and Intelligent Automation, and discover which solution is right for your business needs.',
    author: 'Solaris Engine Team',
    date: new Date('2025-01-12'),
    readTime: '6 min read',
    category: 'Technology',
    image: rpa,
    featured: false,
  },
  {
    id: 'ai-roi-small-businesses',
    title: 'Maximizing ROI: AI Automation for Small and Medium Businesses',
    excerpt:
      'Explore practical AI automation strategies that small and medium businesses can implement to reduce costs, improve efficiency, and compete with larger enterprises.',
    author: 'Solaris Engine Team',
    date: new Date('2025-01-10'),
    readTime: '10 min read',
    category: 'Business Strategy',
    image: roi,
    featured: false,
  },
  {
    id: 'future-of-work-ai-automation',
    title: 'The Future of Work: How AI Automation is Reshaping Industries',
    excerpt:
      'An in-depth look at how AI-driven automation is changing the workforce landscape, creating new opportunities, and what businesses need to know to stay competitive.',
    author: 'Solaris Engine Team',
    date: new Date('2025-01-08'),
    readTime: '12 min read',
    category: 'Industry Insights',
    image: brain,
    featured: false,
  },
];

const categories = [
  'All',
  'AI & Automation',
  'Technology',
  'Business Strategy',
  'Industry Insights',
  'Implementation',
];

const BlogIndex = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <>
      <Helmet>
        <title>
          Blog - Solaris Engine | AI-Driven Automation Insights & Solutions
        </title>
        <meta
          name="description"
          content="Discover how AI-driven automation can transform your business. Learn about the latest trends, technologies, and strategies from industry experts."
        />
        <meta
          name="keywords"
          content="AI automation, artificial intelligence, business automation, RPA, intelligent automation, digital transformation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
        {/* Cosmic background elements */}
        <div className="cosmic-stars"></div>

        <div className="relative pt-32 pb-20">
          <div className="container mx-auto px-6">
            {/* Header */}
            <AnimatedSection>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
                  AI Automation Blog
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Insights, strategies, and expert guidance to help you harness
                  the power of AI-driven automation for business transformation.
                </p>
              </div>
            </AnimatedSection>

            {/* Search and Filter */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col md:flex-row gap-6 mb-12">
                {/* Search Bar */}
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-3 bg-white/10 border border-orange-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Featured Article */}
            {featuredPost && selectedCategory === 'All' && !searchTerm && (
              <AnimatedSection delay={0.3}>
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Featured Article
                  </h2>
                  <Link to={`/blog/${featuredPost.id}`} className="group">
                    <div className="bg-white/5 backdrop-blur-sm border border-orange-400/20 rounded-2xl overflow-hidden hover:border-orange-400/40 transition-all duration-300 cosmic-hover">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="w-full h-64 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 p-8">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-sm rounded-full">
                              Featured
                            </span>
                            <span className="text-orange-400 text-sm">
                              {featuredPost.category}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                            {featuredPost.title}
                          </h3>
                          <p className="text-gray-300 mb-6 line-clamp-3">
                            {featuredPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <span>{featuredPost.author}</span>
                            <div className="flex items-center gap-4">
                              <span>
                                {format(featuredPost.date, 'MMM dd, yyyy')}
                              </span>
                              <span>{featuredPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </AnimatedSection>
            )}

            {/* Blog Posts Grid */}
            <AnimatedSection delay={0.4}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts
                  .filter(
                    (post) =>
                      !post.featured || selectedCategory !== 'All' || searchTerm
                  )
                  .map((post, index) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="group"
                    >
                      <article className="bg-white/5 backdrop-blur-sm border border-orange-400/20 rounded-2xl overflow-hidden hover:border-orange-400/40 transition-all duration-300 cosmic-hover h-full flex flex-col">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                              {post.category}
                            </span>
                            <span className="text-gray-400 text-xs">
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-300 mb-4 line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-white/10">
                            <span>{post.author}</span>
                            <span>{format(post.date, 'MMM dd, yyyy')}</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
              </div>
            </AnimatedSection>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <AnimatedSection delay={0.3}>
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-400">
                    Try adjusting your search terms or category filter.
                  </p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
