
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Github, Linkedin, Mail, MapPin, Phone, Download, Moon, Sun, ExternalLink, Code, Database, Settings, Briefcase, GraduationCap, ChevronDown, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'htharinduherath@gmail.com'
        },
        'YOUR_USER_ID'
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "Java", "PHP", "JavaScript", "TypeScript", "Python"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend",
      icon: <Settings className="w-6 h-6" />,
      skills: ["HTML5", "React", "Angular", "Tailwind CSS", "Bootstrap", "InertiaJS", "Vite"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: ["Laravel", "Node.js", "Spring Boot"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "MongoDB", "Firebase"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "QA Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Playwright", "Cucumber", "JUnit"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Tools & Others",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Git", "Clever", "Jira", "Trello", "GitHub Projects", "VS Code", "IntelliJ"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const projects = [
    {
      title: "Venomous Snake Identifier",
      description: "AI-based image classification & chatbot for safety guidelines using NLP, machine learning, and emergency response features.",
      tech: ["AI/ML", "NLP", "Image Classification"],
      github: "#",
      live: "#",
      gradient: "from-emerald-400 to-cyan-400"
    },
    {
      title: "Medical Prescription Management System",
      description: "Complete prescription management system with email notifications and pharmacy quotation system.",
      tech: ["Laravel", "React", "Email Integration"],
      github: "#",
      live: "#",
      gradient: "from-blue-400 to-purple-400"
    },
    {
      title: "ZoneED - School Management System",
      description: "Multi-role platform for educational institutions with comprehensive management features.",
      tech: ["Angular", "Spring Boot", "Firebase"],
      github: "#",
      live: "#",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "Wedagedara Products",
      description: "Herbal e-commerce platform with OnePay integration, shipping logic, and comprehensive admin tools.",
      tech: ["E-commerce", "Payment Integration", "Admin Dashboard"],
      github: "#",
      live: "#",
      gradient: "from-green-400 to-blue-400"
    },
    {
      title: "MF Mart",
      description: "Grocery store application with OTP verification, COD, Excel import/export, and Notify.lk integration.",
      tech: ["React", "Laravel", "Payment Gateway"],
      github: "#",
      live: "#",
      gradient: "from-orange-400 to-red-400"
    },
    {
      title: "Learnhub LMS",
      description: "Learning Management System with separate student and teacher modules for online education.",
      tech: ["React", "Laravel", "LMS"],
      github: "#",
      live: "#",
      gradient: "from-indigo-400 to-purple-400"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl z-50 border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tharindu Herath
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('skills')} className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('experience')} className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('projects')} className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            
            {/* Content Side */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for new opportunities</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-gradient bg-300% hover:scale-105 transition-transform duration-300 cursor-default">
                    Tharindu
                  </span>
                  <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-gradient bg-300% animation-delay-1000 hover:scale-105 transition-transform duration-300 cursor-default">
                    Herath
                  </span>
                </h1>

                <div className="space-y-4">
                  <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in animation-delay-500">
                    Full-Stack Developer
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl animate-fade-in animation-delay-1000">
                    Passionate about creating innovative and scalable solutions that bring ideas to life through clean, efficient code.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in animation-delay-1500">
                <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download CV
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 text-lg rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Let's Connect
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in animation-delay-2000">
                <a 
                  href="https://github.com/TharinduDananjaya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                </a>
                <a 
                  href="https://linkedin.com/in/tharindudhananjayaherath" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative animate-fade-in animation-delay-1000">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 scale-105 opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl transform -rotate-3 scale-110 opacity-15 animate-pulse animation-delay-1000"></div>
                
                {/* Main image container */}
                <div className="relative bg-white dark:bg-gray-800 p-4 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=800&fit=crop"
                    alt="Professional Developer"
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
                  />
                  
                  {/* Floating stats */}
                  <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200/50 dark:border-gray-700/50 animate-bounce animation-delay-2000">
                    <div className="text-2xl font-bold text-blue-600">6+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200/50 dark:border-gray-700/50 animate-bounce animation-delay-3000">
                    <div className="text-2xl font-bold text-purple-600">2+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
            >
              <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Passionate Developer & Problem Solver
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      I am a passionate and adaptable full-stack developer with hands-on experience in React, Laravel, Node.js, and TypeScript. 
                      I enjoy working in collaborative environments and solving real-world problems through clean, scalable code.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      I believe in continuous learning and embracing new technologies to deliver exceptional digital experiences 
                      that make a meaningful impact.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
                      <div className="text-3xl font-bold">6+</div>
                      <div className="text-sm opacity-90">Projects Completed</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
                      <div className="text-3xl font-bold">2+</div>
                      <div className="text-sm opacity-90">Years Experience</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
                      <div className="text-3xl font-bold">10+</div>
                      <div className="text-sm opacity-90">Technologies</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-sm opacity-90">Dedication</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    <span className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 transition-all duration-300 hover:scale-105 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
              <CardHeader className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-900 dark:text-white mb-2">
                      Full Stack Developer Intern
                    </CardTitle>
                    <CardDescription className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      Axcertro
                    </CardDescription>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">April 2024 – October 2024</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 dark:text-gray-300">Worked on Link Skill platform and several web applications</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 dark:text-gray-300">Developed proposal system with comprehensive workflow management</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 dark:text-gray-300">Implemented billing system with OTP verification and OnePay integration</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 dark:text-gray-300">Built admin dashboards with real-time data visualization</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 dark:text-gray-300">Developed real-time broadcasting features for enhanced user engagement</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white mr-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold text-lg">Email</p>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">htharinduherath@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl text-white mr-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold text-lg">Phone</p>
                    <p className="text-green-600 dark:text-green-400 font-medium">+94 778 378 446</p>
                  </div>
                </div>
                <div className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white mr-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold text-lg">Location</p>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Werellagama, Kandy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-50 dark:bg-gray-700 border-0 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-50 dark:bg-gray-700 border-0 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      />
                    </div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-50 dark:bg-gray-700 border-0 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-gray-50 dark:bg-gray-700 border-0 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                    />
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-6 bg-gray-900 dark:bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tharindu Herath
              </h3>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/TharinduDananjaya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="https://linkedin.com/in/tharindudhananjayaherath" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
            
            <p className="text-gray-400 text-center">
              © 2024 Tharindu Herath. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
