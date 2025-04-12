
const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Frontend",
      color: "bg-fifa-teal",
      overall: 92,
      skills: [
        { name: "HTML/CSS", rating: 94 },
        { name: "JavaScript", rating: 92 },
        { name: "React", rating: 90 },
        { name: "TypeScript", rating: 88 },
        { name: "UI/UX", rating: 85 },
        { name: "Responsive Design", rating: 95 },
      ]
    },
    {
      name: "Backend",
      color: "bg-fifa-gold",
      overall: 89,
      skills: [
        { name: "Node.js", rating: 87 },
        { name: "Express", rating: 89 },
        { name: "Python", rating: 82 },
        { name: "PHP", rating: 77 },
        { name: "Java", rating: 80 },
        { name: "RESTful APIs", rating: 93 },
      ]
    },
    {
      name: "Database",
      color: "bg-green-500",
      overall: 86,
      skills: [
        { name: "MongoDB", rating: 86 },
        { name: "MySQL", rating: 88 },
        { name: "PostgreSQL", rating: 84 },
        { name: "Firebase", rating: 85 },
        { name: "Redis", rating: 77 },
        { name: "ORM", rating: 82 },
      ]
    },
    {
      name: "DevOps",
      color: "bg-blue-400",
      overall: 83,
      skills: [
        { name: "Git", rating: 90 },
        { name: "Docker", rating: 82 },
        { name: "CI/CD", rating: 84 },
        { name: "AWS", rating: 79 },
        { name: "Linux", rating: 85 },
        { name: "Testing", rating: 87 },
      ]
    }
  ];

  const getRatingColor = (rating: number) => {
    if (rating >= 90) return "bg-green-500";
    if (rating >= 80) return "bg-green-400";
    if (rating >= 70) return "bg-yellow-500";
    if (rating >= 60) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-fifa-blue to-fifa-dark relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold text-white mb-2 border-b-2 border-fifa-teal pb-1">
            PLAYER SKILLS
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Technical attributes and programming abilities
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="fifa-card p-6 max-w-md w-full">
            <div className="fifa-card-shine"></div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">OVERALL RATING</h3>
              <div className="text-5xl font-extrabold text-fifa-gold">90</div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-fifa-teal mb-1">92</div>
                <p className="text-sm text-white/80">Frontend</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-fifa-gold mb-1">89</div>
                <p className="text-sm text-white/80">Backend</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-1">86</div>
                <p className="text-sm text-white/80">Database</p>
              </div>
            </div>
            <div className="flex justify-between mt-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1">83</div>
                <p className="text-sm text-white/80">DevOps</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">91</div>
                <p className="text-sm text-white/80">Problem Solving</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-1">88</div>
                <p className="text-sm text-white/80">Learning</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="fifa-card p-6">
              <div className="fifa-card-shine"></div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">{category.name.toUpperCase()}</h3>
                <div className={`text-3xl font-bold ${category.color.replace('bg-', 'text-')}`}>
                  {category.overall}
                </div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="font-medium">{skill.rating}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-bar-fill ${getRatingColor(skill.rating)}`}
                        style={{ width: `${skill.rating}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
