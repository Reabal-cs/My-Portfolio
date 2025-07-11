import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Laravel Developer & Curious Tech Explorer
            </h3>

            <p className="text-muted-foreground">
              I’m a web developer with over a year of hands-on experience in
              building custom PHP and Laravel applications. I work on freelance
              projects and love turning real world ideas into clean, secure, and
              scalable code.
            </p>

            <p className="text-muted-foreground">
              I'm always hungry to learn whether it’s DevOps, machine learning,
              or cybersecurity. Certified in Docker, Kubernetes, and Cisco CyberOps,
              I’m constantly sharpening my skills to stay one step ahead.
            </p>

            <p className="text-muted-foreground">
              From Beirut to the backend I approach every project with heart,
              hustle, and a real love for what I do.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Reabal-Fayad_CV.pdf"
               download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Laravel & PHP</h4>
                  <p className="text-muted-foreground">
                    Building secure and efficient backend systems with Laravel
                    and clean PHP code.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Continuous Learning</h4>
                  <p className="text-muted-foreground">
                    From DevOps to NLP, I’m always learning something new to
                    bring more to the table.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Freelance Projects</h4>
                  <p className="text-muted-foreground">
                    Collaborating with clients to deliver real, working solutions
                    that solve real problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
