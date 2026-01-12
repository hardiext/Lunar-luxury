
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
const testimonials = [
    {
        quote: "Kualitas yang luar biasa. Setiap detail menunjukkan craftsmanship yang sempurna.",
        author: "Alexandra Chen",
        role: "Creative Director",
    },
    {
        quote: "NOIRE mengubah cara saya melihat luxury fashion. Timeless dan sophisticated.",
        author: "Michael Rodriguez",
        role: "Entrepreneur",
    },
    {
        quote: "Pelayanan personal yang exceptional. Mereka benar-benar memahami kebutuhan saya.",
        author: "Sarah Johnson",
        role: "Fashion Editor",
    },
];
const TestimonialSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    return (

        <section ref={containerRef} className="py-32 lg:py-48 bg-white">
            <div className="lg:max-w-450 mx-auto px-8 lg:px-0">

                <div className="mb-24 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex items-end justify-center"
                    >
                        <div className="max-w-3xl text-center">
                            <span className="block text-[13px] tracking-[0.2em] text-black/40 uppercase mb-6">
                                Testimonial
                            </span>
                            <h2 className="text-[64px] lg:text-[80px] leading-[0.95] tracking-[-0.04em] text-black">
                                Trusted by Discerning Clients
                            </h2>
                        </div>

                    </motion.div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="border-t border-black/10 pt-8"
                        >
                            <p className="text-[20px] leading-[1.6] tracking-[-0.01em] text-black mb-12">
                                "{testimonial.quote}"
                            </p>
                            <div>
                                <div className="text-[16px] tracking-[-0.01em] text-black mb-1">
                                    {testimonial.author}
                                </div>
                                <div className="text-[13px] tracking-widests text-black/40 uppercase">
                                    {testimonial.role}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-32 pt-16 border-t border-black/10"
                >
                    {[
                        { value: "4.9", label: "Average Rating", suffix: "/5" },
                        { value: "12K+", label: "Reviews", suffix: "" },
                        { value: "98%", label: "Satisfaction", suffix: "" },
                        { value: "47K+", label: "Happy Clients", suffix: "" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="text-center lg:text-left"
                        >
                            <div className="text-[48px] lg:text-[56px] tracking-[-0.03em] text-black mb-2">
                                {stat.value}
                                {stat.suffix && <span className="text-[32px] text-black/40">{stat.suffix}</span>}
                            </div>
                            <div className="text-[13px] tracking-widests text-black/40 uppercase">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
export default TestimonialSection;