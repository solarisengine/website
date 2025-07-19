export default function AboutUs() {
  const teamMembers = [
    {
      initials: 'GA',
      name: 'Gabriel Alonso',
      title: 'Co-Founder & Lead Developer',
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
      initials: 'AA',
      name: 'Alini Alonso',
      title: 'Head of Growth & Content Strategy',
      description:
        'With a background in journalism and 7 years in digital marketing, Alini brings sharp insight into SEO, copywriting, and content strategy. She blends data-driven analysis with creative leadership to drive sustainable growth and innovative brand presence.',
    },
    {
      initials: 'BA',
      name: 'Bruno Araujo',
      title: 'Software Engineer',
      description:
        'Bruno brings over a decade of experience delivering scalable, reliable software solutions. As both an engineer and educator, he’s passionate about creating systems that are not only powerful, but easy to understand and maintain.',
    },
  ];

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
      <h2 className="text-2xl font-semibold mb-8 text-purple-300 text-center">
        Meet the Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 mb-12 w-full max-w-3xl justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center w-full md:w-88 shadow-lg"
          >
            <div className="w-28 h-28 rounded-full bg-purple-700 flex items-center justify-center text-3xl mb-4 font-bold">
              {member.initials}
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">
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
        problems. Let’s work together to automate your toughest challenges!
      </p>
    </div>
  );
}
