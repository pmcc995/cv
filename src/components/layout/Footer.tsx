import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/pmcc995?tab=repositories", label: "GitHub", spa: false },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pedro-cerqueira-80a296b7/", label: "LinkedIn", spa: false },
    { icon: Mail, href: "/contact", label: "Email", spa: true }
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold gradient-text">
            Home
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) =>
              social.spa ? (
                <Link
                  key={index}
                  to={social.href}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ) : (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              )
            )}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t.footer?.rights ?? "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
