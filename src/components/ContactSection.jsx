import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Contact Info Block */}
        <div className="flex flex-col items-center space-y-12 md:space-y-0 md:flex-row md:justify-between md:space-x-12">
          {/* Info Section */}
          <div className="space-y-8 w-full md:w-1/2">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <ContactItem
                icon={<Mail className="h-6 w-6 text-primary" />}
                title="Email"
                value="reabalfayad.cs@gmail.com"
                link="mailto:reabalfayad.cs@gmail.com"
              />
              <ContactItem
                icon={<Phone className="h-6 w-6 text-primary" />}
                title="Phone"
                value="+961 71/390344"
                link="tel:+96171390344"
              />
              <ContactItem
                icon={<MapPin className="h-6 w-6 text-primary" />}
                title="Location"
                value="Beirut"
              />
            </div>

            {/* Social Links with inline title */}
            <div className="pt-6 flex items-center space-x-4">
              <h4 className="font-medium whitespace-nowrap">Connect With Me:</h4>
              <SocialLink
                href="https://www.linkedin.com/in/reabal-fayad-8aa9a2320/"
                icon={<Linkedin className="h-5 w-5" />}
              />
              <SocialLink
                href="https://www.instagram.com/reabalfayad/"
                icon={<Instagram className="h-5 w-5" />}
              />
              <SocialLink
                href="https://github.com/Reabal-cs"
                icon={<Github className="h-5 w-5" />}
              />
            </div>
          </div>

          {/* Right Section (optional text block) */}
          <div className="w-full md:w-1/2 text-muted-foreground text-center md:text-left text-sm leading-relaxed">
            You can always reach me through email or social media. I’m open to freelance work, collaborations, and new opportunities in web development.
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, value, link }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">{icon}</div>
    <div>
      <h4 className="font-medium">{title}</h4>
      {link ? (
        <a
          href={link}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-muted-foreground">{value}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    {icon}
  </a>
);
