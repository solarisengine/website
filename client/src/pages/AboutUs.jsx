export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center px-4 py-8 overflow-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400 text-center">
        About Solaris Engine
      </h1>
      <p className="max-w-2xl text-lg mb-4 text-center">
        Solaris Engine is an agile consultancy specialized in helping
        organizations unlock efficiency and innovation through practical
        automation and AI solutions.
      </p>
      <p className="max-w-2xl text-lg mb-8 text-center">
        Our mission:{' '}
        <span className="text-purple-300">
          To help organizations unlock efficiency and innovation through
          practical automation and AI solutions.
        </span>
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-purple-300 text-center">
        Meet the Team
      </h2>
      <div className="flex flex-col md:flex-row gap-8 mb-8 md:items-start justify-center w-auto">
        {/* Gabriel */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center w-full md:w-80 shadow-lg">
          {/* <img src="/path-to-gabriel.jpg" alt="Gabriel Alonso" className="w-28 h-28 rounded-full mb-4 object-cover" /> */}
          <div className="w-28 h-28 rounded-full bg-purple-700 flex items-center justify-center text-3xl mb-4 font-bold">
            GA
          </div>
          <h3 className="text-xl font-bold mb-2">Gabriel Alonso</h3>
          <p className="text-gray-400 text-center mb-2">
            Founder & Lead Developer
          </p>
          <p className="text-gray-300 text-sm text-center">
            Gabriel specializes in building interactive systems and automation
            tools that bridge technical complexity with practical impact. With a
            background in game development, he brings creativity and precision
            to every solution.
          </p>
        </div>
        {/* Bruno */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center w-full md:w-80 shadow-lg">
          {/* <img src="/path-to-bruno.jpg" alt="Bruno Araujo" className="w-28 h-28 rounded-full mb-4 object-cover" /> */}
          <div className="w-28 h-28 rounded-full bg-purple-700 flex items-center justify-center text-3xl mb-4 font-bold">
            BA
          </div>
          <h3 className="text-xl font-bold mb-2">Bruno Araujo</h3>
          <p className="text-gray-400 text-center mb-2">
            Co-Founder, Software Engineer
          </p>
          <p className="text-gray-300 text-sm text-center">
            Bruno brings over a decade of experience delivering scalable,
            reliable software solutions. As both an engineer and educator, he’s
            passionate about creating systems that are not only powerful, but
            easy to understand and maintain.
          </p>
        </div>
      </div>
      <p className="max-w-2xl text-lg text-center">
        We combine technical expertise with a passion for solving real-world
        problems. Let’s work together to automate your toughest challenges!
      </p>
    </div>
  );
}
