import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 py-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left - Brand & Description */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            PayPath
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            The most secure and fast payment solution.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Quick Links
          </h3>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Services
          </h3>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Payment Processing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Fraud Protection
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Recurring Billing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Analytics
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Subscribe & Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Subscribe to Our Newsletter
          </h3>
          <div className="flex items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-black dark:border-gray-300"
            />
            <Button>Subscribe</Button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:underline text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:underline text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:underline text-xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} PayPath. All rights reserved.
      </div>
    </footer>
  );
}
