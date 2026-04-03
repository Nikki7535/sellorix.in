import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 pt-16 pb-8 px-6 md:px-12 bg-dark-bg mt-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <div className="text-3xl font-bold tracking-tighter flex items-center gap-1 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-lg font-bold">
              S
            </div>
            <span>Sellorix</span>
          </div>
          <p className="text-gray-400 max-w-sm">
            Scaling brands with precision through data-driven strategy and e-commerce mastery.
          </p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-4 text-sm">
            <h5 className="font-semibold text-white tracking-wide uppercase text-xs mb-1">Services</h5>
            <Link to="/services/full-service-management" className="text-gray-400 hover:text-primary-400 transition-colors">Management</Link>
            <Link to="/services/ppc-management" className="text-gray-400 hover:text-primary-400 transition-colors">Advertising</Link>
            <Link to="/services/amazon-seo" className="text-gray-400 hover:text-primary-400 transition-colors">Amazon SEO</Link>
            <Link to="/services/amazon-audit" className="text-gray-400 hover:text-primary-400 transition-colors">Account Audit</Link>
            <Link to="/services/sops" className="text-gray-400 hover:text-primary-400 transition-colors">SOPs</Link>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <h5 className="font-semibold text-white tracking-wide uppercase text-xs mb-1">Company</h5>
            <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link>
            <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <h5 className="font-semibold text-white tracking-wide uppercase text-xs mb-1">Legal</h5>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Sellorix Consultancy. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary-400 transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
