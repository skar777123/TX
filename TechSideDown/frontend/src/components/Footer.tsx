import { motion } from 'framer-motion';
import {
  Instagram, Twitter, Linkedin, Youtube,
  Mail, MapPin, Phone,
  Home, Info, Calendar, Image, Users, FileText, ArrowRight
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#', icon: Home },
  { name: 'About', href: '#about', icon: Info },
  { name: 'Events', href: '#events', icon: Calendar },
  { name: 'Schedule', href: '#schedule', icon: FileText },
  { name: 'Gallery', href: '#gallery', icon: Image },
  { name: 'Sponsors', href: '#sponsors', icon: Users },
];

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/techxpression_birla/',
    label: 'Instagram'
  },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative py-20 px-4 border-t border-primary/20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-stranger tracking-wider text-primary neon-text-subtle mb-4">
              TECHXPRESSION
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Enter the portal to the ultimate tech experience.
              Where innovation meets the upside down.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm py-1"
                  >
                    <link.icon className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                bkbirlatechxpression@gmail.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +91 9029384041
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Bk Birla College Kalyan<br />Kalyan(w)-421304,maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 TechXpression. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-stranger tracking-wider">
            The <span className="upside-down text-primary">portal</span> is open
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;