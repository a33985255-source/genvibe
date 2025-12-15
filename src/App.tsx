import React, { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Zap, Shield, Globe, TrendingUp, Check, ArrowRight, Star, ChevronDown } from 'lucide-react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Blazing fast performance with optimized infrastructure that scales with your needs.'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Enterprise-grade security with end-to-end encryption and compliance certifications.'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Distributed worldwide with 99.99% uptime guarantee and edge caching.'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Real-time insights and detailed reporting to grow your business smarter.'
    }
  ]

  const plans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for small teams getting started',
      features: ['Up to 10 team members', '100GB storage', 'Basic analytics', 'Email support', '99.9% uptime SLA']
    },
    {
      name: 'Professional',
      price: '79',
      description: 'For growing teams that need more',
      features: ['Up to 50 team members', '1TB storage', 'Advanced analytics', 'Priority support', '99.99% uptime SLA', 'Custom integrations'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '199',
      description: 'For large organizations at scale',
      features: ['Unlimited team members', 'Unlimited storage', 'Custom analytics', '24/7 dedicated support', '99.99% uptime SLA', 'Custom integrations', 'Advanced security', 'SLA guarantee']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO at TechFlow',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      content: 'This platform transformed how we work. The performance gains alone paid for itself in the first month.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder at StartupHub',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      content: 'Incredible product with outstanding support. Our team productivity increased by 40% after switching.'
    },
    {
      name: 'Emily Watson',
      role: 'Product Lead at InnovateCo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      content: 'The best investment we made this year. Intuitive, powerful, and the analytics are game-changing.'
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">FlowSync</span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
                <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
                <a href="#testimonials" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Testimonials</a>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                  Get Started
                </button>
              </div>

              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <div className="px-4 py-4 space-y-3">
                <a href="#features" className="block py-2 text-slate-600 dark:text-slate-300">Features</a>
                <a href="#pricing" className="block py-2 text-slate-600 dark:text-slate-300">Pricing</a>
                <a href="#testimonials" className="block py-2 text-slate-600 dark:text-slate-300">Testimonials</a>
                <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 -z-10"></div>
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 [mask-image:linear-gradient(0deg,transparent,black)] -z-10"></div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Trusted by 10,000+ teams worldwide</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  Scale your business{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    faster than ever
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  The all-in-one platform that helps modern teams collaborate, automate workflows, and deliver exceptional results at scale.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                    Watch Demo
                  </button>
                </div>
                
                <div className="flex items-center space-x-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.99%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Uptime SLA</div>
                  </div>
                  <div className="h-12 w-px bg-slate-300 dark:bg-slate-700"></div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10k+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
                  </div>
                  <div className="h-12 w-px bg-slate-300 dark:bg-slate-700"></div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">4.9/5</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">User Rating</div>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl blur-3xl opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop" 
                  alt="Team collaboration" 
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-slate-400" />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold">Powerful features for modern teams</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Everything you need to streamline workflows and boost productivity
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-5xl font-bold">50M+</div>
                <div className="text-blue-100">API Calls Daily</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">150+</div>
                <div className="text-blue-100">Countries Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">99.99%</div>
                <div className="text-blue-100">Uptime Guarantee</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">24/7</div>
                <div className="text-blue-100">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold">Simple, transparent pricing</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Choose the perfect plan for your team. Always know what you'll pay.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative p-8 rounded-2xl ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl scale-105' 
                      : 'bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl'
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-slate-900 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 ${!plan.popular && 'text-slate-900 dark:text-white'}`}>
                        {plan.name}
                      </h3>
                      <p className={!plan.popular ? 'text-slate-600 dark:text-slate-300' : 'text-blue-100'}>
                        {plan.description}
                      </p>
                    </div>
                    
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold">${plan.price}</span>
                      <span className={`ml-2 ${!plan.popular ? 'text-slate-600 dark:text-slate-300' : 'text-blue-100'}`}>/month</span>
                    </div>
                    
                    <button className={`w-full py-3 rounded-lg font-medium transition-all ${
                      plan.popular 
                        ? 'bg-white text-blue-600 hover:bg-blue-50' 
                        : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg'
                    }`}>
                      Get Started
                    </button>
                    
                    <div className="space-y-3 pt-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                          <span className={!plan.popular ? 'text-slate-600 dark:text-slate-300' : 'text-blue-50'}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold">Loved by teams worldwide</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                See what our customers have to say about FlowSync
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 sm:p-16 shadow-2xl">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to transform your workflow?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of teams already using FlowSync to achieve more together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-400 transition-colors">
                  Schedule Demo
                </button>
              </div>
              <p className="text-blue-100 text-sm mt-6">No credit card required • 14-day free trial</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">FlowSync</span>
                </div>
                <p className="text-sm">
                  Empowering teams to achieve extraordinary results through seamless collaboration.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 text-center text-sm">
              <p>© 2024 FlowSync. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
