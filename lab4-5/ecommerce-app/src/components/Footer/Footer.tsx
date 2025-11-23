import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="flex justify-between items-center">
        
        <div className="text-center md:text-left">
          <h3 className="uppercase text-sm font-bold tracking-widest mb-2 flex gap-1"> Get in Touch</h3>
          <p className="text-gray-400 text-xs flex gap-2 mx-1 py-1"><MdEmail />m.ahmed141@hotmail.com</p>
          <p className="text-gray-400 text-xs flex gap-2 mx-1 py-1"><MdPhone />+1 234 567 890</p>
        </div>

        <div>
          <button className="border border-white px-6 py-2 text-xs uppercase hover:bg-white hover:text-black transition flex gap-1">
            <FaFacebookF/>Contact Me
          </button>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition mx-1 py-1"><FaFacebookF/>FB</a>
          <a href="#" className="text-gray-400 hover:text-white transition mx-1 py-1"><FaTwitter/>TW</a>
          <a href="#" className="text-gray-400 hover:text-white transition mx-1 py-1"><FaLinkedinIn/>LN</a>
        </div>

      </div>

      <div className="text-center mt-8 pt-8 border-t border-gray-800 text-xs text-gray-600">
        Copyright © 2025 Mohamed Ahmed
      </div>
    </footer>
  )
}

export default Footer