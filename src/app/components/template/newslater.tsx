import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-32 lg:py-48 bg-black text-white overflow-hidden">
      <div className="lg:max-w-450 mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[13px] tracking-[0.2em] text-white/40 uppercase mb-8">
              Stay Connected
            </span>
            
            <h2 className="text-[56px] lg:text-[80px] leading-[0.95] tracking-[-0.04em] text-white mb-8">
              First to<br />Know
            </h2>

            <p className="text-[18px] leading-[1.8] text-white/60 max-w-md mb-12">
              Dapatkan akses eksklusif ke koleksi terbaru, private sale,
              dan insight dari dunia fashion luxury.
            </p>

           
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-white/20 pb-4 text-[16px] text-white placeholder:text-white/30 focus:outline-none focus:border-white/60 transition-colors"
              />
              <motion.button
                className="absolute right-0 bottom-4 text-white/60 hover:text-white transition-colors"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-[13px] text-white/40 mt-6"
            >
              Dengan mendaftar, Anda setuju dengan Privacy Policy kami.
            </motion.p>
          </motion.div>

     
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12"
          >
            {[
              {
                number: "01",
                title: "Early Access",
                description: "Akses pertama ke koleksi dan sale eksklusif"
              },
              {
                number: "02",
                title: "Personal Styling",
                description: "Konsultasi gratis dengan style expert kami"
              },
              {
                number: "03",
                title: "Member Events",
                description: "Undangan ke private event dan fashion show"
              },
              {
                number: "04",
                title: "Special Offers",
                description: "Penawaran khusus dan birthday gifts"
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="border-t border-white/10 pt-8"
              >
                <span className="text-[11px] tracking-[0.2em] text-white/30 uppercase block mb-4">
                  {benefit.number}
                </span>
                <h3 className="text-[20px] tracking-[-0.01em] text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-white/50">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-3 gap-8 lg:gap-16 mt-32 pt-16 border-t border-white/10"
        >
          {[
            { value: "47K+", label: "Active Members" },
            { value: "250+", label: "Exclusive Pieces" },
            { value: "15", label: "Countries" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[40px] lg:text-[56px] tracking-[-0.03em] text-white mb-2">
                {stat.value}
              </div>
              <div className="text-[11px] tracking-[0.2em] text-white/40 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
