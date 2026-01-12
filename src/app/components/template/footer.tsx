'use client';
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="lg:max-w-350 mx-auto px-8 lg:px-0">
   
        <div className="py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
          <div className="lg:col-span-4">
            <h3 className="text-[28px] tracking-[-0.03em] text-black mb-6">
              LUNAR
            </h3>
            <p className="text-[15px] leading-[1.7] text-black/50 max-w-sm mb-8">
              Redefining luxury fashion dengan kurasi eksklusif yang
              menggabungkan keahlian tradisional dan estetika kontemporer.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-black/40 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 text-black/60" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[13px] tracking-[0.2em] text-black/40 uppercase mb-8">
              Shop
            </h4>
            <ul className="space-y-4">
              {["New Arrivals", "Collections", "Sale", "Archive"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[15px] text-black/60 hover:text-black transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[13px] tracking-[0.2em] text-black/40 uppercase mb-8">
              About
            </h4>
            <ul className="space-y-4">
              {["Our Story", "Sustainability", "Careers", "Press"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[15px] text-black/60 hover:text-black transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[13px] tracking-[0.2em] text-black/40 uppercase mb-8">
              Support
            </h4>
            <ul className="space-y-4">
              {["Contact", "Shipping", "Returns", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[15px] text-black/60 hover:text-black transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[13px] tracking-[0.2em] text-black/40 uppercase mb-8">
              Connect
            </h4>
            <ul className="space-y-4">
              <li className="text-[15px] text-black/60">
                Jakarta, Indonesia
              </li>
              <li>
                <a
                  href="mailto:hello@lunar.com"
                  className="text-[15px] text-black/60 hover:text-black transition-colors"
                >
                  hello@lunar.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+628123456789"
                  className="text-[15px] text-black/60 hover:text-black transition-colors"
                >
                  +62 812 3456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="py-8 border-t border-black/10 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-black/40">
            © 2026 LUNAR. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-[13px] text-black/40 hover:text-black transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[13px] text-black/40 hover:text-black transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
