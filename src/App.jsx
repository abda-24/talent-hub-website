import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, Users, Briefcase, TrendingUp, ArrowRight, Download, Smartphone, Globe, Shield, Zap } from 'lucide-react'
import './App.css'
import logoInitial from './assets/talent_hub_logo_initial.png'
import logoBW from './assets/talent_hub_logo_bw.png'
import logoIcon from './assets/talent_hub_logo_icon.png'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Smart Matching",
      description: "AI-powered algorithm connects talents with perfect job opportunities based on skills, experience, and preferences."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-600" />,
      title: "Career Growth",
      description: "Track your professional journey with personalized career paths and skill development recommendations."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "Market Insights",
      description: "Real-time industry trends and salary insights to help you make informed career decisions."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Network",
      description: "Connect with professionals and opportunities worldwide through our extensive network."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security and privacy controls."
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Instant Notifications",
      description: "Get real-time alerts for new opportunities that match your profile and preferences."
    }
  ]

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "10K+", label: "Job Opportunities" },
    { number: "500+", label: "Partner Companies" },
    { number: "95%", label: "Success Rate" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={logoIcon} alt="Talent Hub" className="h-10 w-10" />
              <span className="text-xl font-bold text-gray-900">Talent Hub</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Download App
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  🚀 Now Available on Mobile
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Connect Your
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Talent </span>
                  with Perfect
                  <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent"> Opportunities</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover your next career move with our AI-powered platform that matches your skills 
                  with the right opportunities. Join thousands of professionals who found their dream jobs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-6">
                  <Download className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-gray-50">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 from 10,000+ reviews</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={logoInitial} 
                  alt="Talent Hub Logo" 
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
              ✨ Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Why Choose Talent Hub?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with human insight to deliver 
              the most effective talent-opportunity matching experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30">
                🎯 Our Mission
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold">
                Revolutionizing How Talent Meets Opportunity
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                At Talent Hub, we believe everyone deserves to find work they love. Our AI-powered 
                platform eliminates the friction in job searching and hiring, creating meaningful 
                connections that drive careers and businesses forward.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-blue-100">Advanced AI matching algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-blue-100">Real-time market insights and trends</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-blue-100">Personalized career development paths</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={logoBW} 
                alt="Talent Hub Black & White Logo" 
                className="w-full max-w-md mx-auto opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Ready to Find Your Next Opportunity?
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of professionals who have already discovered their dream careers through Talent Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={logoIcon} alt="Talent Hub" className="h-8 w-8" />
                <span className="text-xl font-bold">Talent Hub</span>
              </div>
              <p className="text-gray-400">
                Connecting talent with opportunities through innovative technology and human insight.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Features</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">API</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Talent Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

