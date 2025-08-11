export default function AboutUs() {
  const teamMembers = [
    {
      initials: 'GA',
      name: 'Gabriel Alonso',
      title: 'Co-Founder & Automation Lead',
      description:
        'Gabriel specializes in building interactive systems and automation tools that bridge technical complexity with practical impact. With a background in game development, he brings creativity and precision to every solution.',
    },
    {
      initials: 'CM',
      name: 'Casey McKelvey',
      title: 'Co-Founder, Operations & Strategy',
      description:
        'Casey brings 20 years of experience in high-stakes environments. He leads operations and strategy with precision, supporting execution, infrastructure, and sales growth with deep AI fluency.',
    },
    {
      initials: 'BA',
      name: 'Bruno Araujo',
      title: 'Co-Founder, Lead Developer',
      description:
        "Bruno brings over a decade of experience delivering scalable, reliable software solutions. As both an engineer and educator, he's passionate about creating systems that are not only powerful, but easy to understand and maintain.",
    },
    {
      initials: 'AA',
      name: 'Alini Yoshida',
      title: 'Head of Growth & Content Strategy',
      description:
        'With a background in journalism and 7 years in digital marketing, Alini brings sharp insight into SEO, copywriting, and content strategy. She blends data-driven analysis with creative leadership to drive sustainable growth and innovative brand presence.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-indigo-950 text-gray-200 flex flex-col items-center justify-center px-4 py-8 overflow-auto relative">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 opacity-10 cosmic-bg">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-orange-400 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-32 w-20 h-20 bg-yellow-500 rounded-full blur-2xl"></div>
      </div>

      {/* Twinkling stars */}
      <div className="absolute inset-0 opacity-20 cosmic-stars">
        <div className="absolute top-16 left-16 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-48 right-24 w-1.5 h-1.5 bg-orange-300 rounded-full"></div>
        <div className="absolute bottom-32 left-24 w-1 h-1 bg-yellow-300 rounded-full"></div>
        <div className="absolute bottom-48 right-16 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-orange-400 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent text-center cosmic-glow">
          About Solaris Engine
        </h1>
        <p className="max-w-2xl text-lg mb-4 text-center">
          Solaris Engine is an agile consultancy specialized in helping
          organizations unlock efficiency and innovation through practical
          automation and AI solutions.
        </p>
        <p className="max-w-2xl text-lg mb-8 text-center">
          Our mission:{' '}
          <span className="text-orange-300 font-semibold">
            To help organizations unlock efficiency and innovation through
            practical automation and AI solutions.
          </span>
        </p>
        <h2 className="text-2xl font-semibold mb-8 text-orange-400 text-center">
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 mb-12 w-full max-w-3xl justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center w-full md:w-88 shadow-lg border border-blue-800/30 cosmic-hover"
            >
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-3xl mb-4 font-bold text-slate-900 shadow-lg">
                {member.initials}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-orange-400">
                {member.name}
              </h3>
              <p className="text-gray-400 text-center mb-2">{member.title}</p>
              <p className="text-gray-300 text-sm text-center">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <p className="max-w-2xl text-lg text-center">
          We combine technical expertise with a passion for solving real-world
          problems. Let's work together to automate your toughest challenges!
        </p>
      </div>
    </div>
  );
}
