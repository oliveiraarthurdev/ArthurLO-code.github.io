
import { Award, Code, Coffee, Headphones } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-fifa-dark to-fifa-blue relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold text-white mb-2 border-b-2 border-fifa-teal pb-1">
            ABOUT ME
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Get to know the player behind the keyboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="fifa-card p-6 space-y-6">
            <div className="fifa-card-shine"></div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Award className="h-5 w-5 text-fifa-gold" />
                Bio
              </h3>
              <p className="text-white/80">
                A passionate software developer with X years of experience building web applications 
                and solving complex problems. I specialize in [your specialties] and love working with 
                [technologies you love].
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Code className="h-5 w-5 text-fifa-gold" />
                Career Path
              </h3>
              <p className="text-white/80">
                Started my journey at [University/Institution], graduated with a degree in [Your Degree]. 
                Worked at [Previous Companies] before [Current Position]. I've contributed to projects that 
                [describe impact].
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Headphones className="h-5 w-5 text-fifa-gold" />
                Off The Field
              </h3>
              <p className="text-white/80">
                When I'm not coding, you can find me [your hobbies/interests]. I'm also passionate about 
                [causes you care about] and contribute to [open-source projects/communities].
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="fifa-card p-6">
              <div className="fifa-card-shine"></div>
              <h3 className="text-xl font-bold mb-4">Player Details</h3>
              
              <div className="space-y-3">
                <div className="fifa-stat">
                  <span className="text-white/70">Position</span>
                  <span className="font-medium">Full Stack Developer</span>
                </div>
                <div className="fifa-stat">
                  <span className="text-white/70">Level</span>
                  <span className="font-medium">Senior</span>
                </div>
                <div className="fifa-stat">
                  <span className="text-white/70">Experience</span>
                  <span className="font-medium">X Years</span>
                </div>
                <div className="fifa-stat">
                  <span className="text-white/70">Languages</span>
                  <span className="font-medium">English, Portuguese</span>
                </div>
                <div className="fifa-stat">
                  <span className="text-white/70">Location</span>
                  <span className="font-medium">Brazil</span>
                </div>
              </div>
            </div>
            
            <div className="fifa-card p-6">
              <div className="fifa-card-shine"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Coffee className="h-5 w-5 text-fifa-gold" />
                Fun Facts
              </h3>
              
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-fifa-teal">⚽</span>
                  <span className="text-white/80">Lines of code written: 100,000+</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fifa-teal">⚽</span>
                  <span className="text-white/80">Coffee cups per day: 3</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fifa-teal">⚽</span>
                  <span className="text-white/80">Favorite football team: [Your Team]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fifa-teal">⚽</span>
                  <span className="text-white/80">Bugs squashed: Too many to count</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
