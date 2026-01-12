import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import { ImageWithFallback } from "../molecules/fallback";
import { ArrowUpRight } from "lucide-react";
const categories = [
    {
        title: "Accessories",
        count: "78 Items",
        image: "https://images.unsplash.com/photo-1762232977931-2e3f5949b2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBkZXRhaWx8ZW58MXx8fHwxNzY4MTI4MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        title: "Jewelry",
        count: "124 Items",
        image: "https://images.unsplash.com/photo-1739591414031-edd27896c8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwamV3ZWxyeSUyMG1pbmltYWx8ZW58MXx8fHwxNzY4MTI4MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        title: "Leather Goods",
        count: "56 Items",
        image: "https://images.unsplash.com/photo-1716306886418-f84f6d4c2f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbGVhdGhlciUyMGdvb2RzfGVufDF8fHx8MTc2ODAyNzMyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
];
const CategorySection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    return (
        <section ref={containerRef} className="py-32 lg:py-48 bg-neutral-50">
            <div className="lg:max-w-450 mx-auto px-12 lg:px-16">
                <div className="mb-24 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex items-end justify-between"
                    >
                        <div className="max-w-3xl">
                            <span className="block text-[13px] tracking-[0.2em] text-black/40 uppercase mb-6">
                                Collection
                            </span>
                            <h2 className="text-[64px] lg:text-[80px] leading-[0.95] tracking-[-0.04em] text-black">
                                Shop by
                                Category

                            </h2>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:px-0 px-8">

                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="group cursor-pointer"
                    >
                       
                        <div className="relative h-[60vh] overflow-hidden bg-neutral-100 mb-6">
                            <ImageWithFallback
                                src={category.image}
                                alt={category.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                            
                            <motion.div
                                className="absolute top-8 right-8 w-12 h-12 bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                <ArrowUpRight className="w-5 h-5 text-black" strokeWidth={1.5} />
                            </motion.div>
                        </div>

                      
                        <div className="flex items-end justify-between">
                            <div>
                                <h3 className="text-[28px] tracking-[-0.02em] text-black mb-2">
                                    {category.title}
                                </h3>
                                <span className="text-[13px] tracking-widest text-black/40 uppercase">
                                    {category.count}
                                </span>
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
                    className="mt-24 text-center flex items-center justify-center"
                >
                    <motion.button
                        className="px-12 py-5 bg-black text-white text-[15px] tracking-[-0.01em] hover:bg-black/90 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Explore All Collections
                    </motion.button>
                </motion.div>
        </section>
    )
}
export default CategorySection;