'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp, CheckCircle, Star, TrendingUp, Shield, BarChart3, Bot, Mail, Phone, Users, Target, Zap, Monitor, Settings, Brain, Database, Network, Globe, ArrowRight, Play, Award, Clock, ChevronRight, DollarSign, LineChart, PieChart, Activity, Layers, Cpu, HardDrive, Wifi, Eye, AlertTriangle, Lightbulb, Sparkles, RocketIcon as Rocket, Building, Gauge, ChevronLeft } from 'lucide-react';

// Testimonial Carousel Component
function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "TeraOps analyzed our entire cloud infrastructure and identified optimization opportunities we completely missed. Their detailed recommendations helped us achieve 52% cost savings within 90 days while maintaining the same performance levels.",
      author: "Marcus Chen",
      title: "Chief Technology Officer",
      company: "DataFlow Systems",
      avatar: Building,
      caseStudyLink: true
    },
    {
      id: 2,
      quote: "The SmartScale platform transformed our approach to cloud cost management. We went from reactive cost control to proactive optimization, saving $1.2M annually while enabling faster product development cycles.",
      author: "Sarah Martinez",
      title: "VP of Engineering",
      company: "InnovateAI Labs",
      avatar: Building,
      caseStudyLink: true
    },
    {
      id: 3,
      quote: "TeraOps didn't just reduce our costs - they fundamentally improved our cloud architecture. The 6-pillar optimization approach delivered insights our internal team would have taken months to discover.",
      author: "David Park",
      title: "Head of Infrastructure",
      company: "ScaleUp Technologies",
      avatar: Building,
      caseStudyLink: true
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  // Auto-advance testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentData = testimonials[currentTestimonial];

  return (
    <div className="relative">
      {/* Main Testimonial Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-4xl mx-auto shadow-sm">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
            <currentData.avatar className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-900 text-lg mb-6 leading-relaxed">
              "{currentData.quote}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">{currentData.author}</div>
                <div className="text-sm text-gray-600">{currentData.title}, {currentData.company}</div>
              </div>
              {currentData.caseStudyLink && (
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
                  <span>View case study</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        {/* Previous Button */}
        <button
          onClick={prevTestimonial}
          className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial
                ? 'bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextTestimonial}
          className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Testimonial Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-gray-500">
          {currentTestimonial + 1} of {testimonials.length}
        </span>
      </div>
    </div>
  );
}

export default function TeraOpsLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['hero', 'challenge', 'solution', 'platform', 'results', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md">
                <img src="/QSlogo.png" alt="TeraOps Logo" className="w-full h-full object-cover" />
              </div>

              <div className="text-2xl font-bold text-white/100">TeraOps</div>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { id: 'platform', label: 'Platform' },
                { id: 'solution', label: 'SmartScale' },
                { id: 'results', label: 'Results' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-2 px-1 text-sm font-medium transition-colors ${activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Login
              </button> */}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
              >
                <span>Start Free Analysis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 bg-gray-900 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Better Visibility */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "url('/background-image.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </div>
        {/* Subtle gradient overlay to maintain text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span className="text-blue-200 text-sm font-medium">TeraOps SmartScale - Powered by Agentic AI Platform</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="block text-white drop-shadow-lg">You Innovate,</span>
              <span className="block text-blue-300 drop-shadow-lg">We Optimize</span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto drop-shadow-md">
              While your teams focus on innovation and customer growth, TeraOps SmartScale automatically identifies and eliminates cloud waste, delivering 35%+ cost reduction without compromising performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl backdrop-blur-sm"
              >
                <span>Get Free Optimization Analysis</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('platform')}
                className="border border-white/40 hover:border-white/60 text-white hover:text-blue-200 bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Impact Stats with Enhanced Glass Effect */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  number: "35%+",
                  label: "Average cloud cost reduction delivered"
                },
                {
                  number: "4-8 Weeks",
                  label: "Fast time-to-value implementation"
                },
                {
                  number: "$180M+",
                  label: "Total savings delivered across industries"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-300 mb-2 drop-shadow-lg">{stat.number}</div>
                  <div className="text-sm text-gray-200 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section id="challenge" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Cloud Optimization Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cloud optimization is complex and time-consuming, diverting attention from customer growth and innovation when teams lack specialized skills and adequate tools.
            </p>
          </div>

          {/* Cloud Waste Statistics */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-200 p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cloud Spending Reality</h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Pie Chart Representation */}
                    <div className="absolute inset-0 rounded-full" style={{
                      background: `conic-gradient(#ef4444 0deg 126deg, #06b6d4 126deg 360deg)`
                    }}>
                    </div>
                    <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-600">35%</div>
                        <div className="text-sm text-gray-600">Wasted</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-sm text-gray-700">Wasted Spend (35%)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-cyan-500 rounded"></div>
                    <span className="text-sm text-gray-700">Efficient Spend (65%)</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Why Teams Struggle</h4>
                    <div className="space-y-3">
                      {[
                        "Business growth takes precedence over cost optimization",
                        "Available tools lack depth and actionable insights",
                        "Lack of specialized skills in cloud cost optimization",
                        "Misaligned cost and revenue dimensions"
                      ].map((reason, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Beyond Monitoring: Design, Monitor & Optimize</h3>
              <p className="text-lg text-gray-600 mb-8">
                While other solutions focus on monitoring and reporting, TeraOps leverages its AI-powered platform to optimize and design improvements, delivering actionable results that drive business growth.
              </p>

              <div className="space-y-4">
                {[
                  "AI-powered optimization that goes beyond basic monitoring",
                  "Proactive cost reduction recommendations with business impact analysis",
                  "Automated implementation of optimization strategies",
                  "Continuous improvement through machine learning algorithms"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Three Pillars Visualization */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Our Three-Pillar Approach</h4>

              <div className="relative">
                {/* Central Hub */}
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Three Pillars in Triangle Formation */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Monitor, title: "Monitor", desc: "Real-time visibility" },
                    { icon: Settings, title: "Design", desc: "Strategic planning" },
                    { icon: Zap, title: "Optimize", desc: "Automated actions" }
                  ].map((pillar, i) => (
                    <div key={i} className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 border border-gray-200">
                        <pillar.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h5 className="font-semibold text-gray-900 text-sm mb-1">{pillar.title}</h5>
                      <p className="text-xs text-gray-600">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="platform" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Cloud Optimization Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We analyze your cloud data using proven algorithms and methodologies to identify cost optimization opportunities and provide actionable recommendations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Data-Driven Cloud Optimization</h3>
              <p className="text-lg text-gray-600 mb-8">
                Once you're onboarded, TeraOps connects to your cloud environment and performs deep analysis of your usage patterns, costs, and resource utilization to generate customized optimization strategies.
              </p>

              <div className="space-y-4">
                {[
                  "Comprehensive cloud billing and usage data analysis",
                  "Advanced algorithms for identifying optimization patterns",
                  "Detailed cost reduction recommendations with implementation steps",
                  "ROI projections and impact assessment for each recommendation"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-semibold text-gray-900">Cloud Analysis Dashboard</h4>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium border border-green-200">
                  ANALYZING
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { service: 'Compute', potential: '$12,450', status: 'Right-sizing' },
                  { service: 'Storage', potential: '$8,320', status: 'Lifecycle opt.' },
                  { service: 'Database', potential: '$4,180', status: 'Performance' },
                  { service: 'Network', potential: '$2,950', status: 'Optimization' }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1">{item.service}</div>
                    <div className="text-lg font-bold text-gray-900 mb-1">{item.potential}</div>
                    <div className="text-xs text-blue-600 font-medium">
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Total Savings Potential</span>
                  <span className="text-sm text-green-600 font-medium">47% reduction</span>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">$28,900</div>
                <div className="text-xs text-gray-500">Monthly optimization opportunities identified</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Usage Pattern Analysis",
                description: "Advanced algorithms analyze your cloud usage data to identify optimization opportunities and waste patterns."
              },
              {
                icon: Zap,
                title: "Actionable Recommendations",
                description: "Receive detailed, step-by-step recommendations that your team can implement to achieve immediate cost savings."
              },
              {
                icon: Eye,
                title: "Complete Cloud Visibility",
                description: "Get comprehensive insights into every cloud service, cost driver, and optimization opportunity across your entire infrastructure."
              },
              {
                icon: Rocket,
                title: "Proven Methodologies",
                description: "Our cost optimization algorithms are based on industry best practices and real-world implementation experience."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SmartScale 6 Pillars */}
      {/* <section id="solution" className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">SmartScale - 6 Pillars of Optimization</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our comprehensive AI platform optimizes every aspect of your cloud infrastructure through six specialized optimization engines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HardDrive,
                title: "Smart Storage",
                color: "from-purple-600 to-pink-600",
                capabilities: [
                  "Intelligent storage class optimization",
                  "Automated lifecycle management",
                  "Backup optimization strategies",
                  "Smart retention policies"
                ]
              },
              {
                icon: Database,
                title: "Smart Data",
                color: "from-pink-600 to-purple-600",
                capabilities: [
                  "Data pipeline optimization",
                  "Query performance tuning",
                  "Right analytics architecture",
                  "Smart data retention"
                ]
              },
              {
                icon: Network,
                title: "Smart Network",
                color: "from-blue-600 to-purple-600",
                capabilities: [
                  "Network cost optimization",
                  "Data transfer reduction",
                  "Bandwidth optimization",
                  "Smart routing strategies"
                ]
              },
              {
                icon: Brain,
                title: "Smart AI",
                color: "from-cyan-500 to-blue-600",
                capabilities: [
                  "AI workload optimization",
                  "Model serving efficiency",
                  "Training cost reduction",
                  "Inference optimization"
                ]
              },
              {
                icon: Cpu,
                title: "Smart Compute",
                color: "from-orange-500 to-red-600",
                capabilities: [
                  "Instance rightsizing",
                  "Auto-scaling optimization",
                  "Container efficiency",
                  "Serverless optimization"
                ]
              },
              {
                icon: Settings,
                title: "Smart Admin",
                color: "from-purple-600 to-violet-600",
                capabilities: [
                  "Policy optimization",
                  "Cost governance",
                  "Resource tagging",
                  "Budget management"
                ]
              }
            ].map((pillar, index) => (
              <div key={index} className="bg-gray-700 rounded-xl border border-gray-600 p-6 hover:bg-gray-600/50 transition-colors">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${pillar.color} rounded-lg flex items-center justify-center mr-4`}>
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                </div>

                <ul className="space-y-2">
                  {pillar.capabilities.map((capability, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Cloud Optimization Analysis</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section> */}
      {/* SmartScale Optimization Engines */}
      {/* <section id="solution" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-900/30 to-cyan-900/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-violet-900/30 to-pink-900/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Intelligent Cloud Optimization</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">The Optimization Engine Ecosystem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              TeraOps SmartScale transforms cloud infrastructure through six specialized engines working in concert to maximize efficiency and minimize waste.
            </p>
          </div>


          <div className="relative min-h-[500px] flex flex-col lg:flex-row items-center justify-center gap-12">

            <div className="relative w-full lg:w-1/2 aspect-square max-w-xl">

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-2xl animate-pulse-slow">
                <div className="text-center">
                  <Brain className="w-10 h-10 text-white mx-auto mb-2" />
                  <span className="text-white font-semibold">SmartCore</span>
                  <span className="block text-xs text-blue-200">AI Optimization Hub</span>
                </div>
              </div>


              {[
                {
                  id: 'storage',
                  icon: HardDrive,
                  title: "Storage Engine",
                  color: "from-purple-600 to-pink-600",
                  position: "top-0 left-1/2",
                  capabilities: [
                    "Intelligent storage class optimization",
                    "Automated lifecycle management",
                    "Backup optimization strategies",
                    "Smart retention policies"
                  ]
                },
                {
                  id: 'data',
                  icon: Database,
                  title: "Data Engine",
                  color: "from-pink-600 to-purple-600",
                  position: "top-1/4 right-0",
                  capabilities: [
                    "Data pipeline optimization",
                    "Query performance tuning",
                    "Right analytics architecture",
                    "Smart data retention"
                  ]
                },
                {
                  id: 'network',
                  icon: Network,
                  title: "Network Engine",
                  color: "from-blue-600 to-purple-600",
                  position: "bottom-1/4 right-0",
                  capabilities: [
                    "Network cost optimization",
                    "Data transfer reduction",
                    "Bandwidth optimization",
                    "Smart routing strategies"
                  ]
                },
                {
                  id: 'ai',
                  icon: Brain,
                  title: "AI Engine",
                  color: "from-cyan-500 to-blue-600",
                  position: "bottom-0 left-1/2",
                  capabilities: [
                    "AI workload optimization",
                    "Model serving efficiency",
                    "Training cost reduction",
                    "Inference optimization"
                  ]
                },
                {
                  id: 'compute',
                  icon: Cpu,
                  title: "Compute Engine",
                  color: "from-orange-500 to-red-600",
                  position: "bottom-1/4 left-0",
                  capabilities: [
                    "Instance rightsizing",
                    "Auto-scaling optimization",
                    "Container efficiency",
                    "Serverless optimization"
                  ]
                },
                {
                  id: 'admin',
                  icon: Settings,
                  title: "Admin Engine",
                  color: "from-purple-600 to-violet-600",
                  position: "top-1/4 left-0",
                  capabilities: [
                    "Policy optimization",
                    "Cost governance",
                    "Resource tagging",
                    "Budget management"
                  ]
                }
              ].map((engine, index) => (
                <div
                  key={engine.id}
                  className={`absolute ${engine.position} transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-2xl bg-gradient-to-br ${engine.color} flex flex-col items-center justify-center p-4 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer group`}
                >
                  <engine.icon className="w-8 h-8 text-white mb-2" />
                  <span className="text-xs text-white font-medium text-center group-hover:text-blue-200 transition-colors">{engine.title}</span>


                  <div className="absolute top-1/2 left-1/2 w-3/4 h-1 origin-left bg-gradient-to-r from-blue-500/20 to-transparent transform -translate-x-full -translate-y-1/2"></div>
                </div>
              ))}
            </div>


            <div className="w-full lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Optimization Engine Ecosystem</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  The TeraOps SmartScale system employs six specialized engines that continuously monitor and optimize every aspect of your cloud infrastructure.
                  These engines work synergistically to identify inefficiencies and implement optimizations in real-time.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-2">
                        <ArrowUp className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-white font-medium">Performance</span>
                    </div>
                    <p className="text-gray-400 text-sm">Maintain optimal resource utilization while reducing costs</p>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-white font-medium">Cost Savings</span>
                    </div>
                    <p className="text-gray-400 text-sm">Average 35%+ reduction in cloud spending</p>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-white text-sm">Continuous Optimization</span>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-2 h-2 bg-blue-500 rounded-full mx-0.5"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-time Analysis",
                icon: Activity,
                description: "Continuous monitoring of cloud infrastructure with instant anomaly detection",
                color: "from-blue-600/20 to-blue-700/20"
              },
              {
                title: "Predictive Optimization",
                icon: LineChart,
                description: "AI-driven forecasting to prevent resource waste before it occurs",
                color: "from-purple-600/20 to-purple-700/20"
              },
              {
                title: "Automated Actions",
                icon: Settings,
                description: "Intelligent systems that implement optimizations without manual intervention",
                color: "from-cyan-600/20 to-cyan-700/20"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-blue-500/50 transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="relative bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center space-x-2 shadow-xl hover:shadow-2xl group overflow-hidden"
            >
              <span className="relative z-10">Analyze My Cloud Infrastructure</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-400 animate-beam"></div>
            </button>

            <div className="mt-4 flex items-center justify-center space-x-3 text-gray-400 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1.5" />
                <span>No credit card required</span>
              </div>
              <div className="h-4 w-px bg-gray-600"></div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-blue-400 mr-1.5" />
                <span>Results in 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="solution" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-900/30 to-cyan-900/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-violet-900/30 to-pink-900/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Intelligent Cloud Optimization</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">The Optimization Engine Ecosystem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              TeraOps SmartScale transforms cloud infrastructure through six specialized engines working in concert to maximize efficiency and minimize waste.
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="relative w-[360px] h-[360px] mx-auto">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-center shadow-xl z-10">
                <div>
                  <Brain className="w-8 h-8 text-white mx-auto mb-1" />
                  <div className="text-white font-semibold text-sm">SmartCore</div>
                  <div className="text-[10px] text-blue-200">AI Optimization Hub</div>
                </div>
              </div>

              {[{
                icon: HardDrive, title: "Storage Engine", color: "from-pink-600 to-purple-600", style: { top: '0%', left: '50%' }
              },
              { icon: Database, title: "Data Engine", color: "from-purple-600 to-pink-500", style: { top: '20%', left: '90%' } },
              { icon: Network, title: "Network Engine", color: "from-blue-600 to-purple-600", style: { top: '70%', left: '90%' } },
              { icon: Brain, title: "AI Engine", color: "from-cyan-500 to-blue-600", style: { top: '100%', left: '50%' } },
              { icon: Cpu, title: "Compute Engine", color: "from-orange-500 to-red-600", style: { top: '70%', left: '10%' } },
              { icon: Settings, title: "Admin Engine", color: "from-violet-600 to-purple-600", style: { top: '20%', left: '10%' } }
              ].map((engine, index) => (
                <div
                  key={index}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br ${engine.color} flex flex-col items-center justify-center p-2 text-center shadow-lg`}
                  style={engine.style}
                >
                  <engine.icon className="w-6 h-6 text-white mb-1" />
                  <span className="text-xs font-medium text-white leading-tight">{engine.title}</span>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Optimization Engine Ecosystem</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  The TeraOps SmartScale system employs six specialized engines that continuously monitor and optimize every aspect of your cloud infrastructure. These engines work synergistically to identify inefficiencies and implement optimizations in real-time.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-2">
                        <ArrowUp className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-white font-medium">Performance</span>
                    </div>
                    <p className="text-gray-400 text-sm">Maintain optimal resource utilization while reducing costs</p>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-white font-medium">Cost Savings</span>
                    </div>
                    <p className="text-gray-400 text-sm">Average 35%+ reduction in cloud spending</p>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-white text-sm">Continuous Optimization</span>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-2 h-2 bg-blue-500 rounded-full mx-0.5"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Results & Success Stories */}

      <section id="results" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Results That Enable Efficient Growth</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              TeraOps SmartScale helps teams uncover hidden savings and drive cost-efficient operations across their cloud environments.
            </p>
          </div>

          {/* Centered Metrics Panel */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Business Impact Visualization</h3>

            {/* Static Bar Chart */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Cloud Optimization Focus</h4>
              <div className="flex space-x-12 items-end justify-center">
                {/* EBITDA */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-20 h-28 bg-gradient-to-t from-cyan-400 to-cyan-500 rounded-lg mb-2"></div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium">EBITDA</div>
                  </div>
                  <p className="text-sm font-medium text-gray-700 mt-2">Before</p>
                </div>

                {/* Cloud Savings */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-20 h-36 bg-gradient-to-t from-green-400 to-green-500 rounded-lg mb-2"></div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium">Cloud Savings</div>
                  </div>
                  <p className="text-sm font-medium text-gray-700 mt-2">After</p>
                </div>
              </div>

              <div className="flex justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-cyan-500 rounded"></div>
                  <span className="text-sm text-gray-700">EBITDA Indicator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-700">Cloud Cost Savings</span>
                </div>
              </div>
            </div>

            {/* Expertise Summary */}
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-4 text-center">Expertise at Work</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-sm font-medium text-blue-600 mb-2">Certified Team</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Senior Cloud Engineers</li>
                    <li>• Certified Optimization Experts</li>
                    <li>• 100+ years of combined experience</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-blue-600 mb-2">Reliable Framework</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Real-world tested methodology</li>
                    <li>• Trusted by growth-stage teams</li>
                    <li>• Transparent savings insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Cloud Projects Analyzed", value: "100+" },
              { label: "Optimization Reports Delivered", value: "50+" },
              { label: "Average Engagement Time", value: "4–6 weeks" },
              { label: "Client Retention Rate", value: "93%" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-gray-500 mt-8">
            * The examples and metrics presented are generalized representations of optimization projects. Individual results may vary based on cloud usage, scale, and implementation.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* Testimonials Section */}
      <section className="py-24 bg-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Customer Success Stories</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hear from industry leaders who have transformed their cloud economics with TeraOps SmartScale and achieved remarkable results.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Start Optimizing Your Cloud Costs Today
            </h2>
            <p className="text-xl text-gray-600">
              Join leading companies that have transformed their cloud economics with TeraOps SmartScale. Get your comprehensive analysis and start seeing results in weeks, not months.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Optimization Analysis Request Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  Our cloud optimization specialists will analyze your infrastructure and contact you within 24 hours with a detailed savings projection and implementation roadmap that enables efficient growth.
                </p>
                <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 text-sm font-medium">Response guaranteed within 24 hours</span>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Free Cloud Optimization Analysis</h3>
                  <p className="text-gray-600 mb-6">
                    Our team will analyze your cloud spending patterns and infrastructure to identify specific optimization opportunities that enable efficient growth and improved unit economics.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Comprehensive cost reduction analysis with business impact</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Prioritized recommendations based on ROI potential</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Implementation roadmap with timeline and resource requirements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">30-minute strategy session with optimization experts</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-2" />
                      Connect With Our Team
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="text-sm text-gray-600">Email</div>
                          <a href="mailto:optimize@teraops.ai" className="text-blue-600 hover:text-blue-700 font-medium">
                            optimize@teraops.ai
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="text-sm text-gray-600">Phone</div>
                          <a href="tel:+1-855-TERAOPS" className="text-blue-600 hover:text-blue-700 font-medium">
                            +1 (855) TERAOPS
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Get Your Free Optimization Analysis</h4>
                    <p className="text-gray-600 text-sm">Secure process • Results in 24 hours • No commitment required</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="Alex Johnson"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="CTO, DevOps Lead, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="alex@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Monthly Cloud Spend *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    >
                      <option value="">Select cloud spending range</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-25k">$5,000 - $25,000</option>
                      <option value="25k-100k">$25,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Cloud Services Used
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Compute', 'Storage', 'Database', 'Analytics', 'AI/ML', 'Networking'].map((service) => (
                        <label key={service} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Biggest Cloud Cost Challenge (Optional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                      placeholder="e.g., Unpredictable costs, lack of visibility, difficulty optimizing across teams..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <span>Get My Free Optimization Analysis</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service. We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md">
                  <img src="/QSlogo.png" alt="TeraOps Logo" className="w-full h-full object-cover" />
                </div>

                <div className="text-2xl font-bold">TeraOps</div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Specialized in cloud cost optimization through advanced data analysis and proven algorithms. We help organizations reduce their cloud spending by 35%+ through detailed recommendations and implementation strategies.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'Cloud', certified: 'Expert Partner' },
                  { name: 'AI Optimization', certified: 'Certified' },
                  { name: 'Cost Reduction', certified: 'Specialist' }
                ].map((accreditation) => (
                  <div key={accreditation.name} className="bg-gray-800 px-3 py-2 rounded border border-gray-700">
                    <div className="text-white text-sm font-medium">{accreditation.name}</div>
                    <div className="text-gray-400 text-xs">{accreditation.certified}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  'Cloud Cost Analysis',
                  'SmartScale Optimization',
                  'Performance Monitoring',
                  'Resource Right-sizing',
                  'Cost Governance',
                  'Implementation Support'
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  'About TeraOps',
                  'Leadership Team',
                  'Careers',
                  'Partner Program',
                  'Press & Media',
                  'Contact Us'
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2025 TeraOps SmartScale Systems, Inc. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-gray-500 text-sm">
                <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Security</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 z-50 hover:shadow-xl ${scrollY > 500 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}