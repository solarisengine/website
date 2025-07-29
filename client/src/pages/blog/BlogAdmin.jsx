import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '../../components/AnimatedSection';

const BlogAdmin = () => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: 'AI & Automation',
    content: '',
    author: 'Solaris Engine Team',
    readTime: '5 min read',
    featured: false,
  });

  const [preview, setPreview] = useState(false);

  const categories = [
    'AI & Automation',
    'Technology',
    'Business Strategy',
    'Industry Insights',
    'Implementation',
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const generateMarkdownFile = () => {
    const slug = generateSlug(formData.title);
    const frontmatter = `---
title: "${formData.title}"
excerpt: "${formData.excerpt}"
author: "${formData.author}"
date: "${new Date().toISOString()}"
category: "${formData.category}"
readTime: "${formData.readTime}"
featured: ${formData.featured}
slug: "${slug}"
---

${formData.content}`;

    // Create and download the file
    const element = document.createElement('a');
    const file = new Blob([frontmatter], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `${slug}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const copyToClipboard = () => {
    const slug = generateSlug(formData.title);
    const blogPostObject = `'${slug}': {
  id: '${slug}',
  title: '${formData.title}',
  excerpt: '${formData.excerpt}',
  author: '${formData.author}',
  date: new Date('${new Date().toISOString().split('T')[0]}'),
  readTime: '${formData.readTime}',
  category: '${formData.category}',
  image: '/api/placeholder/800/400',
  featured: ${formData.featured},
  content: \`${formData.content.replace(/`/g, '\\`')}\`
},`;

    navigator.clipboard.writeText(blogPostObject).then(() => {
      alert('Blog post object copied to clipboard! Add it to BlogPost.jsx');
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog Admin - Solaris Engine</title>
        <meta
          name="description"
          content="Create and manage AI automation blog articles for Solaris Engine"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
        <div className="cosmic-stars"></div>

        <div className="relative pt-32 pb-20">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
                  Blog Admin
                </h1>
                <p className="text-xl text-gray-300">
                  Create and manage AI automation articles
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Form Section */}
                <AnimatedSection delay={0.2}>
                  <div className="bg-white/5 backdrop-blur-sm border border-orange-400/20 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Article Details
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-orange-400 mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-orange-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                          placeholder="Enter article title..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-orange-400 mb-2">
                          Excerpt
                        </label>
                        <textarea
                          name="excerpt"
                          value={formData.excerpt}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 bg-white/10 border border-orange-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                          placeholder="Brief description of the article..."
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-orange-400 mb-2">
                            Category
                          </label>
                          <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/10 border border-orange-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                          >
                            {categories.map((cat) => (
                              <option
                                key={cat}
                                value={cat}
                                className="bg-slate-800"
                              >
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-orange-400 mb-2">
                            Read Time
                          </label>
                          <input
                            type="text"
                            name="readTime"
                            value={formData.readTime}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/10 border border-orange-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                            placeholder="5 min read"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-orange-400 mb-2">
                            Author
                          </label>
                          <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/10 border border-orange-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                          />
                        </div>

                        <div className="flex items-end">
                          <label className="flex items-center space-x-3 text-white">
                            <input
                              type="checkbox"
                              name="featured"
                              checked={formData.featured}
                              onChange={handleInputChange}
                              className="w-5 h-5 text-orange-500 rounded focus:ring-orange-400 focus:ring-2"
                            />
                            <span>Featured Article</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-orange-400 mb-2">
                          Content (Markdown)
                        </label>
                        <textarea
                          name="content"
                          value={formData.content}
                          onChange={handleInputChange}
                          rows={20}
                          className="w-full px-4 py-3 bg-white/10 border border-orange-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none font-mono text-sm"
                          placeholder="Write your article content in Markdown..."
                        />
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => setPreview(!preview)}
                          className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                        >
                          {preview ? 'Edit' : 'Preview'}
                        </button>
                        <button
                          onClick={generateMarkdownFile}
                          className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                        >
                          Download .md
                        </button>
                        <button
                          onClick={copyToClipboard}
                          className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-lg transition-all duration-300"
                        >
                          Copy Object
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Preview Section */}
                <AnimatedSection delay={0.3}>
                  <div className="bg-white/5 backdrop-blur-sm border border-orange-400/20 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      {preview ? 'Preview' : 'Instructions'}
                    </h2>

                    {preview ? (
                      <div className="prose prose-lg max-w-none">
                        <h1 className="text-3xl font-bold text-white mb-4">
                          {formData.title || 'Your Article Title'}
                        </h1>
                        <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded">
                            {formData.category}
                          </span>
                          <span>{formData.readTime}</span>
                          {formData.featured && (
                            <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 mb-6 italic">
                          {formData.excerpt ||
                            'Your article excerpt will appear here...'}
                        </p>
                        <div className="text-gray-300 whitespace-pre-wrap">
                          {formData.content ||
                            'Your article content will appear here...'}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4 text-gray-300">
                        <h3 className="text-lg font-semibold text-orange-400">
                          How to Add Articles
                        </h3>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-white">
                              Method 1: Copy Object (Quick)
                            </h4>
                            <p className="text-sm">
                              Fill out the form, click "Copy Object", then paste
                              it into the blogPosts object in both BlogIndex.jsx
                              and BlogPost.jsx files.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-white">
                              Method 2: Markdown File
                            </h4>
                            <p className="text-sm">
                              Click "Download .md" to save as a markdown file in
                              the content/blog/ directory. You'll need to set up
                              a markdown loader to use this method.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-white">
                              Markdown Tips
                            </h4>
                            <ul className="text-sm list-disc list-inside space-y-1 ml-4">
                              <li>Use # for headings (# H1, ## H2, ### H3)</li>
                              <li>Use **bold** and *italic* for emphasis</li>
                              <li>Use ```language for code blocks</li>
                              <li>Use {'>'} for blockquotes</li>
                              <li>Use - or * for bullet lists</li>
                              <li>Use 1. for numbered lists</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-white">
                              Slug Generation
                            </h4>
                            <p className="text-sm">
                              Slug for "{formData.title}":
                              <span className="text-orange-400 font-mono">
                                {formData.title
                                  ? generateSlug(formData.title)
                                  : 'your-article-title'}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAdmin;
