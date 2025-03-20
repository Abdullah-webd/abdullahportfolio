import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { github } from "../assets";
const Footer = () => {
  const [copied, setCopied] = useState("");

  // Function to copy text
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000); // Reset after 2 sec
  };

  return (
    <footer className="bg-tertiary text-white !py-8 !px-6 mt-10">
      <div className="max-w-7xl !mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left - Branding */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-bold text-[#915EFF]">Abdullah's Portfolio</h2>
          <p className="text-gray-400 text-sm !mt-1">Frontend Developer | React | Next.js | Tailwind</p>
        </motion.div>

        {/* Middle - Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="!mt-4 md:!mt-0"
        >
          <p className="text-lg font-semibold text-white">Contact Me</p>
          <div className="mt-2 space-y-2">
            <p
              className="cursor-pointer text-gray-300 hover:text-[#915EFF] transition"
              onClick={() => handleCopy("+2347077402688")}
            >
              📞 +2347077402688 {copied === "+2347077402688" && <span className="text-green-400">✔ Copied!</span>}
            </p>
            <p
              className="cursor-pointer text-gray-300 hover:text-[#915EFF] transition"
              onClick={() => handleCopy("webmastersmma@gmail.com")}
            >
              📧 webmastersmma@gmail.com {copied === "webmastersmma@gmail.com" && <span className="text-green-400">✔ Copied!</span>}
            </p>
            <p
              className="cursor-pointer text-gray-300 hover:text-[#915EFF] transition"
              onClick={() => handleCopy("https://wa.me/07077402688")}
            >
              💬 WhatsApp: +2347077402688 {copied === "https://wa.me/07077402688" && <span className="text-green-400">✔ Copied!</span>}
            </p>
          </div>
        </motion.div>

        {/* Right - Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-5 !mt-6 md:!mt-0"
        >
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          {/* <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.svg" alt="Twitter" className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform" />
          </a> */}
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm !mt-6 border-t border-gray-700 !pt-4">
        © {new Date().getFullYear()} Abdullah. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer
