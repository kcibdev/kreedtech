import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* <!-- Preloader --> */}
      <div id="preloader">
        <div className="loader"></div>
      </div>

      {/* <!-- Custom cursor --> */}
      <div className="custom-cursor hidden md:block"></div>

      {/* <!-- Navigation --> */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-10 backdrop-filter backdrop-blur-lg bg-opacity-20 bg-black border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-white font-bold text-2xl">Kreed<span className="gradient-text">Tech</span></span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a>
            <a href="#ecosystem" className="text-gray-300 hover:text-white transition-colors duration-300">Ecosystem</a>
            <a href="#waitlist" className="text-gray-300 hover:text-white transition-colors duration-300">Join Waitlist</a>
            <a href="#" className="btn-primary px-5 py-2 rounded-lg font-medium">Get Started</a>
          </div>

          <div className="hamburger md:hidden">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="mobile-menu md:hidden">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a>
            <a href="#ecosystem" className="text-gray-300 hover:text-white transition-colors duration-300">Ecosystem</a>
            <a href="#waitlist" className="text-gray-300 hover:text-white transition-colors duration-300">Join Waitlist</a>
            <a href="#" className="btn-primary px-5 py-2 rounded-lg font-medium mt-5">Get Started</a>
          </div>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
        <div className="mesh-grid"></div>
        <div className="hero-shape top-20 right-20"></div>
        <div className="hero-shape bottom-20 left-20"></div>

        <div className="container mx-auto z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Africa's First <span className="gradient-text">Learn-to-Earn</span> Tech Academy
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Combining practical digital skills training, a hiring marketplace, and Web3 rewards to turn learning into real-world opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#waitlist" className="btn-primary px-8 py-3 rounded-lg font-medium text-center">
                  Join the Waitlist
                </a>
                <a href="#about" className="bg-transparent border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-medium text-center transition-all duration-300">
                  Learn More
                </a>
              </div>
              <div className="mt-12 flex items-center">
                <p className="text-gray-400 mr-4">Powered by</p>
                <div className="flex items-center cardano-logo">
                  <img src="/api/placeholder/40/40" alt="Cardano" className="mr-2" />
                  <span className="text-gray-200">Cardano</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative glow" data-aos="fade-left" data-aos-duration="1200">
              <div className="relative">
                <img src="/api/placeholder/600/500" alt="KreedTech Platform" className="rounded-2xl shadow-2xl w-full blur-load" />
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-700 px-4 py-1 rounded-lg text-sm font-semibold">
                  Now in Beta
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section id="about" className="relative py-20 md:py-32 px-4">
        <div className="container mx-auto z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionizing Tech Education in Africa</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">KreedTech is bridging the gap between education and employment through blockchain innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="chain-icon">
                <i className="fas fa-graduation-cap text-2xl text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Practical Skills Training</h3>
              <p className="text-gray-300">Industry-focused curriculum designed to develop job-ready digital skills for the modern workforce.</p>
            </div>

            <div className="card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="chain-icon">
                <i className="fas fa-briefcase text-2xl text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Hiring Marketplace</h3>
              <p className="text-gray-300">Direct connections to employers seeking verified tech talent, streamlining the path from learning to earning.</p>
            </div>

            <div className="card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="chain-icon">
                <i className="fas fa-coins text-2xl text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Web3 Rewards</h3>
              <p className="text-gray-300">Earn cryptocurrency rewards for completing courses, achieving milestones, and contributing to the ecosystem.</p>
            </div>
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2" data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-300 mb-6">
                We're building a self-sustaining educational ecosystem that addresses Africa's tech skills gap while creating economic opportunities through blockchain technology.
              </p>
              <p className="text-gray-300">
                By combining education with incentives and employment pathways, we're transforming how tech skills are acquired, validated, and monetized across the continent.
              </p>
            </div>

            <div className="w-full md:w-1/2" data-aos="fade-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-xl"></div>
                <img src="/api/placeholder/500/300" alt="KreedTech Vision" className="rounded-xl w-full blur-load" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section id="features" className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-gray-900 to-gray-900/30">
        <div className="mesh-grid opacity-50"></div>
        <div className="container mx-auto z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Our innovative platform combines learning, earning, and career advancement in one ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 rounded-xl text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Learn</h3>
              <p className="text-gray-300">Access cutting-edge curriculum designed with industry partners to build relevant skills</p>
            </div>

            <div className="card p-6 rounded-xl text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Earn</h3>
              <p className="text-gray-300">Receive ADA tokens for completing modules, projects, and helping others learn</p>
            </div>

            <div className="card p-6 rounded-xl text-center" data-aos="zoom-in" data-aos-delay="300">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Build</h3>
              <p className="text-gray-300">Develop your portfolio with real-world projects and verifiable credentials</p>
            </div>

            <div className="card p-6 rounded-xl text-center" data-aos="zoom-in" data-aos-delay="400">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Connect</h3>
              <p className="text-gray-300">Get matched with hiring partners seeking your specific skill profile</p>
            </div>
          </div>

          <div className="mt-20" data-aos="fade-up">
            <div className="card p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Transparent Skill Verification</h3>
                  <p className="text-gray-300 mb-4">
                    Our blockchain-based verification system creates immutable records of your skills and achievements, allowing employers to trust your credentials instantly.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center mr-3">
                        <i className="fas fa-check text-green-400 text-sm"></i>
                      </span>
                      <span className="text-gray-300">On-chain skill credentials</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center mr-3">
                        <i className="fas fa-check text-green-400 text-sm"></i>
                      </span>
                      <span className="text-gray-300">Transparent achievement history</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center mr-3">
                        <i className="fas fa-check text-green-400 text-sm"></i>
                      </span>
                      <span className="text-gray-300">Peer-validated project assessments</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2">
                  <img src="/api/placeholder/500/300" alt="Blockchain Verification" className="rounded-xl w-full blur-load" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Ecosystem Section --> */}
      <section id="ecosystem" className="relative py-20 md:py-32 px-4">
        <div className="container mx-auto z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Cardano Advantage</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Leveraging Cardano's sustainable blockchain technology to power our educational ecosystem.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/5" data-aos="fade-right">
              <div className="relative p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-full"></div>
                <img src="/api/placeholder/400/400" alt="Cardano Blockchain" className="mx-auto cardano-logo" />
              </div>
            </div>

            <div className="w-full md:w-3/5" data-aos="fade-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Sustainable & Eco-friendly</h3>
                  <p className="text-gray-300">Cardano's proof-of-stake protocol consumes minimal energy, aligning with our commitment to sustainability.</p>
                </div>

                <div className="card p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Low Transaction Fees</h3>
                  <p className="text-gray-300">Affordable transaction costs make micro-rewards feasible, enabling our learn-to-earn model.</p>
                </div>

                <div className="card p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Smart Contracts</h3>
                  <p className="text-gray-300">Secure and transparent execution of educational milestones, achievements, and reward distribution.</p>
                </div>

                <div className="card p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Global Liquidity</h3>
                  <p className="text-gray-300">ADA tokens earned on our platform can be used globally, providing real economic value.</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-300">
                  <i className="fas fa-info-circle mr-2 text-green-400"></i>
                  KreedTech utilizes Cardano's native tokens and smart contracts to create a transparent, efficient, and accessible educational ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Skills Section --> */}
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-gray-900/30 to-gray-900">
        <div className="container mx-auto z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Skills for Tomorrow</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Our curriculum covers high-demand skills that drive Africa's digital economy forward.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card p-6 rounded-xl text-center" data-aos="flip-up" data-aos-delay="100">
              <div className="chain-icon mx-auto">
                <i className="fas fa-code text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Web Development</h3>
              <p className="text-gray-400 text-sm">Frontend, Backend, Full-stack</p>
            </div>

            <div className="card p-6 rounded-xl text-center" data-aos="flip-up" data-aos-delay="200">
              <div className="chain-icon mx-auto">
                <i className="fas fa-mobile-alt text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Mobile Apps</h3>
              <p className="text-gray-400 text-sm">Native & Cross-platform</p>
            </div>

            <div className="card p-6 rounded-xl text-center" data-aos="flip-up" data-aos-delay="300">
              <div className="chain-icon mx-auto">
                <i className="fas fa-chart-network text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Data Science</h3>
              <p className="text-gray-400 text-sm">Analysis & Visualization</p>
            </div>

            <div className="card p-6 rounded-xl text-center" data-aos="flip-up" data-aos-delay="400">
              <div className="chain-icon mx-auto">
                <i className="fas fa-link text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Blockchain</h3>
              <p className="text-gray-400 text-sm">DApps & Smart Contracts</p>
            </div>

            <div className="card p-6 rounded-xl text-center" data-aos="flip-up" data-aos-delay="500">
              <div className="chain-icon mx-auto">
                <i className="fas fa-robot text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">AI & ML</h3>
              <p className="text-gray-400 text-sm">Models & Applications</p>
            </div>

            <div className="card p-6 rounded-xl text-center" data-aos="flip-up" data-aos-delay="600">
              <div className="chain-icon mx-auto">
                <i className="fas fa-shield-alt text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Cybersecurity</h3>
              <p className="text-gray-400 text-sm">Protection & Compliance</p>
            </div>

            <div className="card p-6 rounded-xl text-center" data-aos="flip-up" data-aos-delay="700">
              <div className="chain-icon mx-auto">
                <i className="fas fa-cloud text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Cloud Computing</h3>
              <p className="text-gray-400 text-sm">DevOps & Infrastructure</p>
            </div>

            <div className="card p-6 rounded-xl text-center" data-aos="flip-up" data-aos-delay="800">
              <div className="chain-icon mx-auto">
                <i className="fas fa-bullhorn text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Digital Marketing</h3>
              <p className="text-gray-400 text-sm">SEO, SEM & Analytics</p>
            </div>
          </div>

          <div className="mt-16 text-center" data-aos="fade-up">
            <a href="#waitlist" className="btn-primary px-8 py-3 rounded-lg font-medium inline-block">
              Start Your Learning Journey
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials Section --> */}
      <section className="relative py-20 md:py-32 px-4">
        <div className="mesh-grid opacity-30"></div>
        <div className="container mx-auto z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Hear from our early adopters who have transformed their careers through KreedTech.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img src="/api/placeholder/56/56" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Adeola Johnson</h4>
                  <p className="text-sm text-gray-400">Web Developer, Lagos</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-300">
                "KreedTech's learn-to-earn model kept me motivated throughout my journey. I earned ADA tokens while building real-world projects, and landed a job within weeks of completing the program."
              </p>
            </div>

            <div className="card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img src="/api/placeholder/56/56" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Kwame Osei</h4>
                  <p className="text-sm text-gray-400">Data Analyst, Accra</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <p className="text-gray-300">
                "The blockchain-verified credentials made all the difference in my job search. Employers trusted my skills immediately, and the hiring marketplace connected me with opportunities I wouldn't have found elsewhere."
              </p>
            </div>

            <div className="card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img src="/api/placeholder/56/56" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Amina Diallo</h4>
                  <p className="text-sm text-gray-400">Mobile Developer, Nairobi</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-300">
                "From zero coding knowledge to building apps in months. The practical curriculum and reward system kept me engaged, and I even earned enough ADA to cover some of my living expenses during training."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Waitlist Section --> */}
      <section id="waitlist" className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-gray-900 to-gray-900/60">
        <div className="hero-shape -bottom-20 right-20"></div>
        <div className="container mx-auto z-10">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8 md:p-12 rounded-xl border border-gray-800" data-aos="zoom-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Waitlist</h2>
                <p className="text-lg text-gray-300">Be among the first to experience Africa's revolutionary learn-to-earn tech academy.</p>
              </div>

              <form id="waitlistForm" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="waitlist-input w-full px-4 py-3 rounded-lg focus:outline-none" placeholder="Your first name" required />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="waitlist-input w-full px-4 py-3 rounded-lg focus:outline-none" placeholder="Your last name" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" className="waitlist-input w-full px-4 py-3 rounded-lg focus:outline-none" placeholder="your.email@example.com" required />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">Area of Interest</label>
                  <select id="interest" name="interest" className="waitlist-input w-full px-4 py-3 rounded-lg focus:outline-none">
                    <option value="">Select your interest</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="data">Data Science</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="ai">AI & ML</option>
                    <option value="security">Cybersecurity</option>
                    <option value="cloud">Cloud Computing</option>
                    <option value="marketing">Digital Marketing</option>
                  </select>
                </div>

                <div>
                  <button type="submit" className="btn-primary w-full py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-[1.02]">
                    Join the Waitlist
                  </button>
                </div>

                <div className="text-center text-sm text-gray-400">
                  <p>By joining, you agree to receive updates about KreedTech. We respect your privacy.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Partners Section --> */}
      <section className="relative py-20 md:py-28 px-4">
        <div className="container mx-auto z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted Partners</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">We're backed by leading technology and education partners across Africa.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center" data-aos="fade-up">
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="/api/placeholder/128/64" alt="Partner Logo" className="max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="/api/placeholder/128/64" alt="Partner Logo" className="max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="/api/placeholder/128/64" alt="Partner Logo" className="max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="/api/placeholder/128/64" alt="Partner Logo" className="max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="/api/placeholder/128/64" alt="Partner Logo" className="max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="/api/placeholder/128/64" alt="Partner Logo" className="max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="relative py-12 md:py-16 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-white font-bold text-2xl">Kreed<span className="gradient-text">Tech</span></span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Building Africa's first learn-to-earn tech academy on the Cardano blockchain, transforming education and employment opportunities.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-green-700 hover:text-white transition-colors duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-green-700 hover:text-white transition-colors duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-green-700 hover:text-white transition-colors duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-green-700 hover:text-white transition-colors duration-300">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#ecosystem" className="text-gray-300 hover:text-white transition-colors duration-300">Ecosystem</a></li>
                <li><a href="#waitlist" className="text-gray-300 hover:text-white transition-colors duration-300">Join Waitlist</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-green-500"></i>
                  <a href="mailto:info@kreedtech.io" className="text-gray-300 hover:text-white transition-colors duration-300">info@kreedtech.io</a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-3 text-green-500"></i>
                  <span className="text-gray-300">Lagos, Nigeria</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-headset mr-3 text-green-500"></i>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Support Center</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2025 KreedTech. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- Back to top button --> */}
      <button id="backToTop" className="fixed bottom-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg transform scale-0 transition-all duration-300 z-50">
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* <!-- Success Modal --> */}
      <div id="successModal" className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 hidden">
        <div className="bg-gray-900 p-8 rounded-xl border border-green-600 max-w-md mx-4">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check-circle text-3xl text-green-500"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
            <p className="text-gray-300">Thank you for joining the KreedTech waitlist. We'll keep you updated on our launch and early access opportunities.</p>
          </div>
          <button id="closeModal" className="btn-primary w-full py-3 rounded-lg font-medium">
            Continue Exploring
          </button>
        </div>
      </div>
    </div>
  );
}
