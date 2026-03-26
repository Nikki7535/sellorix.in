import React, { useEffect } from 'react';
import { ArrowRightCircle, ArrowUpRight, TrendingUp, BarChart3, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import amazonHero from '../assets/amazon_growth_hero_dark.png';

const CaseStudies = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-text-content > *', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
    
    tl.fromTo('.hero-image-container', 
      { opacity: 0, x: 50 }, 
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    );

    tl.fromTo('.trust-bar > div', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
      "-=0.4"
    );
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-white font-outfit overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 relative">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="w-full md:w-1/2 hero-text-content z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Transformative <br />
            <span className="heading-gradient">Amazon Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            We work hand in hand with brands to create tailor-made strategies that help drive growth and hit new heights on Amazon.
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3 text-white font-semibold group hover:text-primary-400 transition-colors">
              <ArrowRightCircle className="w-6 h-6 text-primary-500 fill-primary-500/10 group-hover:scale-110 transition-transform" />
              Brand case studies
            </a>
            <a href="#" className="flex items-center gap-3 text-white font-semibold group hover:text-primary-400 transition-colors">
              <ArrowRightCircle className="w-6 h-6 text-primary-500 fill-primary-500/10 group-hover:scale-110 transition-transform" />
              Performance success stories
            </a>
          </div>
        </div>

        {/* Hero Visual Area */}
        <div className="w-full md:w-1/2 relative hero-image-container">
          <div className="relative z-0 scale-110">
            <img 
              src={amazonHero} 
              alt="Amazon Growth Graph" 
              className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(249,91,7,0.2)]"
            />
          </div>

          {/* Floating UI Elements */}
          <div className="absolute top-0 right-1/4 bg-gray-900/80 backdrop-blur-md p-3 rounded-xl shadow-2xl border border-gray-800 flex items-center gap-3 animate-bounce-slow">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Account Health</p>
              <p className="text-sm font-bold text-green-400">Healthy</p>
            </div>
          </div>

          <div className="absolute top-1/4 right-[5%] bg-gray-900/80 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-gray-800 animate-float">
            <p className="text-xs text-gray-500 font-bold mb-1">Sales</p>
            <p className="text-2xl font-bold text-white">$172,208.98</p>
            <div className="mt-1 flex items-center gap-1 text-green-400 text-[10px] font-bold">
              <TrendingUp className="w-3 h-3" />
              +24% vs last mo
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="border-y border-gray-800/50 py-12 bg-dark-surface/30 trust-bar">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Inc 5000 Badge Style */}
          <div className="flex items-center gap-6 group">
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-1">
                <div className="w-3 h-1 bg-primary-500 rounded-full"></div>
                <div className="w-3 h-1 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-1 bg-blue-500 rounded-full"></div>
              </div>
              <p className="text-4xl font-black text-white tracking-tighter">334<sup className="text-lg text-primary-500">TH</sup></p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">IN USA</p>
            </div>
            <div className="h-16 w-[1px] bg-gray-800 hidden md:block"></div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Client growth = company growth</h3>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                We are honored to be recognized by Inc.com as one of the fastest growing companies in the USA.
              </p>
            </div>
          </div>

          <div className="h-[1px] w-full md:w-[1px] md:h-16 bg-gray-800"></div>

          {/* Testimonial Preview Style */}
          <div className="flex items-center gap-6 group">
            <div className="relative">
              <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg border border-gray-800 transform group-hover:rotate-3 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop" 
                  alt="Client" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white p-1.5 rounded-lg shadow-lg">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Get insights from our clients</h3>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                Get an inside look at what our clients have to say about their experience working with us.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Managed Spend', value: '$50M+', icon: BarChart3 },
              { label: 'Revenue Generated', value: '$250M+', icon: TrendingUp },
              { label: 'Active Brands', value: '120+', icon: ShieldCheck },
              { label: 'Success Rate', value: '98%', icon: ArrowUpRight },
            ].map((stat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-dark-surface/50 hover:bg-dark-surface hover:shadow-2xl hover:shadow-primary-500/5 transition-all border border-gray-800/50 group">
                <div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <stat.icon className="w-6 h-6 text-primary-500 group-hover:text-white" />
                </div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">{stat.label}</p>
                <h4 className="text-4xl font-bold text-white group-hover:text-primary-500 transition-colors">{stat.value}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Grid Section */}
      <section className="py-24 bg-dark-bg border-t border-gray-800/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Driving results across <span className="heading-gradient">diverse product lines</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how we helped Amazon sellers overcome setbacks, unlock growth, and outperform the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                brand: "Chirp",
                growth: "519%",
                label: "Growth to Date",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&h=400&auto=format&fit=crop",
                desc: "Sustained revenue increase since partnering with My Amazon Guy",
                color: "text-green-400"
              },
              {
                brand: "Stamp Hub",
                growth: "293%",
                label: "Higher Monthly Revenue",
                image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&h=400&auto=format&fit=crop",
                desc: "A huge jump in sales coming from a revamp of various creative assets and improved PPC ads.",
                color: "text-green-400"
              },
              {
                brand: "Tent and Table",
                growth: "167%",
                label: "Higher Revenue YoY",
                image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=600&h=400&auto=format&fit=crop",
                desc: "Year-over-year growth achieved in June 2022 compared to June 2021 under MAG management.",
                color: "text-green-400"
              },
              {
                brand: "Heavenly Hunks",
                growth: "60%",
                label: "Higher Sales",
                image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&h=400&auto=format&fit=crop",
                desc: "Notable growth compared to the same month in 2022 after MAG management",
                color: "text-green-400"
              },
              {
                brand: "Pillowflex",
                growth: "50%",
                label: "Sales Increase",
                image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600&h=400&auto=format&fit=crop",
                desc: "2023 sales volume show a notable rise from the previous year, reflecting huge growth.",
                color: "text-green-400"
              },
              {
                brand: "Chinook Seedery",
                growth: "215%",
                label: "Increase in Sales",
                image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=600&h=400&auto=format&fit=crop",
                desc: "Current average weekly sales are 215% higher compared to 2020.",
                color: "text-green-400"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-dark-surface rounded-3xl overflow-hidden border border-gray-800/50 group hover:border-primary-500/30 transition-all duration-500">
                <div className="h-48 overflow-hidden relative">
                  <img src={item.image} alt={item.brand} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-black text-white">{item.growth}</span>
                  </div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">{item.label}</p>
                  
                  <div className="border-t border-gray-800 pt-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.brand}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                      {item.desc}
                    </p>
                  </div>
                  
                  <a href="#" className="inline-flex items-center gap-2 text-primary-500 font-bold hover:text-primary-400 transition-colors uppercase tracking-wider text-xs">
                    <ArrowRightCircle className="w-5 h-5" />
                    Read case study
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;
