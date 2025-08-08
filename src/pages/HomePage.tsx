import React from 'react';
import { Link } from 'react-router-dom';
import {
  ClipboardList,
  ArrowRight,
  CircleCheck,
  Users,
  CalendarDays,
} from 'lucide-react';

const HomePage: React.FC = () => {
  const primaryColor = 'text-sky-500';
  const primaryBgColor = 'bg-sky-500';
  const primaryBgHoverColor = 'hover:bg-sky-600';
  
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 ">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="flex items-center gap-1 text-xl font-bold">
            <ClipboardList className={primaryColor} />
            <span className={primaryColor}>TaskHub</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/signin" className='font-semibold text-slate-600 px-4 py-2 rounded-md hover:border-1 hover:border-sky-500'>
              Sign In
            </Link>
            <Link
              to="/signup"
              className={`${primaryBgColor} ${primaryBgHoverColor} text-white px-4 py-2 rounded-md font-semibold`}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="text-center py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900">
              Stay on Task,
              <span className={`font-normal ${primaryColor}`}> Stay Ahead</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Streamline your workflow, collaborate with your team, and deliver projects
              on time. TaskHub makes task and project management simple and efficient.
            </p>
            <div className="mt-8">
              <Link
                to="/get-started"
                className={`${primaryBgColor} ${primaryBgHoverColor} text-white font-semibold py-3 px-6 rounded-md inline-flex items-center gap-2 transition-colors`}
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <CircleCheck size={48} className={`${primaryColor} mb-4`} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-slate-800">
                  Task Management
                </h3>
                <p className="mt-2 text-slate-600">
                  Create, assign, and track tasks with ease. Never miss a deadline again.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Users size={48} className={`${primaryColor} mb-4`} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-slate-800">
                  Team Collaboration
                </h3>
                <p className="mt-2 text-slate-600">
                  Work together seamlessly with real-time updates and communication.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <CalendarDays size={48} className={`${primaryColor} mb-4`} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-slate-800">
                  Project Timeline
                </h3>
                <p className="mt-2 text-slate-600">
                  Visualize project progress and stay on track with intuitive timelines.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-1 border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Link to="/" className="flex items-center gap-1 text-lg font-bold mb-2">
                <ClipboardList className={primaryColor} />
                <span className={primaryColor}>TaskHub</span>
              </Link>
              <p className="text-slate-600 max-w-sm">
                The ultimate task and project management solution for teams of all sizes.
                Stay on task, stay ahead of your goals.
              </p>
            </div>

            {/* <div className="lg:col-span-2 lg:col-start-7">
              <h5 className="font-semibold text-slate-900 mb-3">Product</h5>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-slate-600 hover:text-sky-500">Features</Link></li>
                <li><Link to="/pricing" className="text-slate-600 hover:text-sky-500">Pricing</Link></li>
                <li><Link to="/integrations" className="text-slate-600 hover:text-sky-500">Integrations</Link></li>
                <li><Link to="/api" className="text-slate-600 hover:text-sky-500">API</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h5 className="font-semibold text-slate-900 mb-3">Company</h5>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-slate-600 hover:text-sky-500">About</Link></li>
                <li><Link to="/blog" className="text-slate-600 hover:text-sky-500">Blog</Link></li>
                <li><Link to="/careers" className="text-slate-600 hover:text-sky-500">Careers</Link></li>
                <li><Link to="/contact" className="text-slate-600 hover:text-sky-500">Contact</Link></li>
              </ul>
            </div> */}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500">
            <p>&copy; 2025 TaskHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;