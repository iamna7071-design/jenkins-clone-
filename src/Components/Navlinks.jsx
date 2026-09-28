import { Home, User, Briefcase, Mail } from 'lucide-react';

export const navLinks = [
  { id: 1, title: "Home", path: "/", icon: <Home size={18} /> },
  { id: 2, title: "About", path: "/about", icon: <User size={18} /> },
  { id: 3, title: "Projects", path: "/projects", icon: <Briefcase size={18} /> },
  { id: 4, title: "Contact", path: "/contact", icon: <Mail size={18} /> }
];
