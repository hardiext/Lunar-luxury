'use client';
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "../molecules/fallback";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

function Counter({
    target,
    suffix = "",
    duration = 3500,
    start,
}: {
    target: number;
    suffix?: string;
    duration?: number;
    start: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let current = 0;
        const increment = target / (duration / 16);

        const animate = () => {
            current += increment;
            if (current < target) {
                setCount(Math.floor(current));
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(animate);
    }, [start, target, duration]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

export function HeroSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    const isInView = useInView(containerRef, {
        once: true,
        margin: "-100px",
    });
    const isMobile = useIsMobile();



    const data = [
  {
    value: isMobile ? 12 : 47,
    label: "CLIENTS",
    suffix: "K+",
  },
  {
    value: isMobile ? 120 : 250,
    label: "PIECES",
    suffix: "+",
  },
  {
    value: isMobile ? 95 : 98,
    label: "SATISFACTION",
    suffix: "%",
  },
];


    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative lg:px-0 px-8 z-0 min-h-screen bg-white overflow-hidden">
            <div className="lg:max-w-450 mx-auto">

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 min-h-[calc(100vh-96px)] items-center">

                    <motion.div
                        className="lg:col-span-5 pt-12 lg:pt-0"
                        style={{ opacity }}
                    >

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-12"
                        >
                            <span className="text-[13px] tracking-[0.2em] text-black/40 uppercase">
                                Winter Collection 2026
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-12"
                        >
                            <span className="block text-[72px] lg:text-[96px] leading-[0.9] tracking-[-0.04em] text-black mb-4">
                                Elegance
                            </span>
                            <span className="block text-[72px] lg:text-[96px] leading-[0.9] tracking-[-0.04em] text-black/30">
                                Redefined
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-[18px] leading-[1.8] text-black/50 max-w-md mb-16"
                        >
                            Kurasi eksklusif dari koleksi terbatas yang menggabungkan
                            keahlian tradisional dengan estetika kontemporer.
                        </motion.p>

                   
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex items-center gap-8"
                        >
                            <motion.button
                                className="group relative overflow-hidden px-12 py-5 bg-black text-white text-[15px] tracking-[-0.01em]"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Explore Now
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-black/80"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>

                            <motion.button
                                className="text-[15px] tracking-[-0.01em] text-black/60 hover:text-black transition-colors relative group"
                                whileHover={{ x: 4 }}
                            >
                                View Lookbook
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300" />
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex items-center gap-16 mt-24 pt-8 border-t border-black/10"
                        >
                            {data.map((item, i) => (
                                <div key={i}>
                                    <div className="lg:text-[32px] text-[24px] tracking-[-0.02em] text-black mb-1">
                                        <Counter
                                            target={item.value}
                                            suffix={item.suffix}
                                            start={isInView}
                                        />
                                    </div>
                                    <div className="text-[13px] tracking-widest text-black/40 uppercase">
                                        {item.label}
                                    </div>
                                </div>
                            ))}

                        </motion.div>

                    </motion.div>

                   
                    <motion.div
                        className="lg:col-span-7 relative h-[70vh] lg:h-[85vh]"
                        style={{ y }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative h-full"
                        >
                            <div className="relative h-full overflow-hidden">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1719518411339-5158cea86caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwZWRpdG9yaWFsfGVufDF8fHx8MTc2ODEyNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="Luxury Fashion"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Info Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                className="absolute bottom-12 left-0 lg:left-12 bg-white p-8 max-w-xs"
                            >
                                <div className="text-[13px] tracking-[0.2em] text-black/40 uppercase mb-3">
                                    Featured
                                </div>
                                <h3 className="text-[24px] tracking-[-0.02em] text-black mb-2">
                                    Cashmere Collection
                                </h3>
                                <p className="text-[15px] leading-[1.6] text-black/50 mb-4">
                                    Handcrafted from the finest materials
                                </p>
                                <div className="text-[20px] tracking-[-0.01em] text-black">
                                    From Rp 4.200.000
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                style={{ opacity }}
            >
                <span className="text-[11px] tracking-[0.2em] text-black/30 uppercase">Scroll</span>
                <motion.div
                    className="w-px h-16 bg-black/20"
                    animate={{ scaleY: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </section>
    );
}
