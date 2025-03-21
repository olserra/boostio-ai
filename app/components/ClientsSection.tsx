"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';

const ClientsSection = () => {
    const clients = [
        { src: "/roche.png", alt: "Roche" },
        { src: "/amyris.png", alt: "Amyris" },
        { src: "/farfetch.png", alt: "Farfetch" },
        { src: "/feegow.png", alt: "Feegow" },
        { src: "/openai.png", alt: "OpenAI" }
    ];

    // Quadruple the array for smoother infinite loop
    const duplicatedClients = [...clients, ...clients, ...clients, ...clients];
    const controls = useAnimationControls();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Get the total width of the content
        const logoWidth = 100; // logo width
        const gap = 80; // gap between logos
        const totalWidth = clients.length * (logoWidth + gap);
        setWidth(totalWidth);

        // Animate
        controls.start({
            x: -totalWidth,
            transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
            }
        });
    }, [clients.length, controls]);

    return (
        <div className="flex flex-col items-center mt-16">
            <h2 className="mb-12 text-2xl font-semibold text-gray-800">
                Meet some of our clients and partners
            </h2>
            <div className="relative w-full max-w-7xl overflow-hidden">
                <motion.div
                    className="flex items-center gap-20"
                    animate={controls}
                    style={{
                        width: 'fit-content',
                        paddingLeft: '20px'
                    }}
                >
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={`${client.alt}-${index}`}
                            className="flex-shrink-0 hover:scale-110 transition-transform duration-300 flex items-center justify-center h-[100px]"
                        >
                            <Image
                                className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-300 object-contain"
                                src={client.src}
                                width={100}
                                height={100}
                                alt={client.alt}
                                quality={90}
                            />
                        </div>
                    ))}
                </motion.div>
                {/* Add gradient masks for smooth fade effect */}
                <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </div>
        </div>
    );
};

export default ClientsSection; 