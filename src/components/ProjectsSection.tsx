
import { Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveSite: "#",
      github: "#"
    },
    {
      title: "Real-time Chat App",
      description: "A responsive chat application with real-time messaging, user presence indicators, and file sharing capabilities.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&auto=format&fit=crop&q=80",
      tags: ["React", "Socket.io", "Express", "Firebase"],
      liveSite: "#",
      github: "#"
    },
    {
      title: "Task Management System",
      description: "A Kanban-style project management tool with drag-and-drop interface, task assignment, and progress tracking.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80",
      tags: ["Vue.js", "Vuex", "Node.js", "PostgreSQL"],
      liveSite: "#",
      github: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-responsive fitness application that allows users to track workouts, set goals, and visualize progress.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=80",
      tags: ["React Native", "GraphQL", "Express", "MongoDB"],
      liveSite: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-fifa-dark to-fifa-blue relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold text-white mb-2 border-b-2 border-fifa-teal pb-1">
            CAREER HIGHLIGHTS
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Featured projects and development achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="fifa-card overflow-hidden">
                <div className="fifa-card-shine"></div>
                <div className="relative">
                  <div className="absolute top-0 left-0 bg-fifa-blue/80 backdrop-blur-sm text-white font-bold py-1 px-3 rounded-br-lg z-10">
                    PROJECT
                  </div>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-fifa-dark/50 px-3 py-1 rounded-full text-xs text-white/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <Button asChild variant="ghost" className="text-white hover:text-fifa-teal hover:bg-white/5">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button asChild className="bg-fifa-teal text-fifa-dark hover:bg-fifa-teal/90">
                      <a href={project.liveSite} target="_blank" rel="noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Live Site
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
            <a href="#" className="px-8">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
