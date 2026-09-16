"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { Globe, Mail, Briefcase, Settings, Code, Layers, Database, Smile, FolderOpen, FileText, Send, BookOpen } from 'lucide-react';
import Image from 'next/image';
import catSvg from '../assets/cat for portfolio.svg.svg';

// Komponen Pembantu SVG Tech Stack Resmi
const TechIcon = ({ name }: { name: string }) => {
  let path = "";
  if (name === "Laravel") path = "M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z";
  if (name === "PHP") path = "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z";
  if (name === "Next.js") path = "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z";
  if (name === "TypeScript") path = "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z";
  if (name === "CSS") path = "M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63";
  if (name === "JavaScript") path = "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z";

  if (name === "Blade") {
    // Ikon Blade alternatif (karena tidak ada di simple-icons)
    return (
      <div className="group relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7 hover:-translate-y-1 transition-transform cursor-default">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-[#F25A24]">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 17h-2V7h4c1.657 0 3 1.343 3 3 0 1.157-.655 2.161-1.611 2.645C14.73 13.313 16 14.508 16 16c0 1.657-1.343 3-3 3h-3v-2zm0-4h2c.552 0 1-.448 1-1s-.448-1-1-1h-2v2zm0 4h3c.552 0 1-.448 1-1s-.448-1-1-1h-3v2z" />
        </svg>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
          <div className="bg-[#1a1a1a] text-white font-medium text-[10px] md:text-xs px-2 py-1 rounded-[2px] whitespace-nowrap">
            {name}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7 hover:-translate-y-1 transition-transform cursor-default">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-[#F25A24]">
        <path d={path} />
      </svg>
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        <div className="bg-[#1a1a1a] text-white font-medium text-[10px] md:text-xs px-2 py-1 rounded-[2px] whitespace-nowrap">
          {name}
        </div>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  // --- CUSTOM CURSOR LOGIC ---
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring config untuk pergerakan kursor yang mulus (smooth) tanpa delay berlebih
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Variabel penampung sumber gambar (kosongkan sementara sampai ada aset foto)
  const prismaImageSrc = "";
  const cakraImageSrc = "";

  // State untuk Filter Kategori
  const [activeCategory, setActiveCategory] = useState('All');

  // State untuk Menu Overlay
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State untuk Hover Project Bawah (Image Preview)
  const [hoveredProject, setHoveredProject] = useState<string>('01');

  // State untuk Form Contact Me
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleSendMessage = () => {
    if (!contactEmail && !contactMessage) return;
    const subject = encodeURIComponent(`Pesan Portofolio dari ${contactEmail || 'Seseorang'}`);
    const body = encodeURIComponent(contactMessage);
    window.location.href = `mailto:cindyninda66@gmail.com?subject=${subject}&body=${body}`;
  };

  // Data Proyek Terpusat
  const projectsData = [
    { id: '01', title: 'SuraJa', desc: 'Administrative Governance', category: 'Full-Stack' },
    { id: '02', title: 'UniTrack', desc: 'Alumni & Career Platform', category: 'Backend' },
    { id: '03', title: 'Sport On Website', desc: 'FYEP Capstone Project', category: 'Frontend' },
    { id: '04', title: 'Cindyninda', desc: 'Personal Portfolio', category: 'Frontend' }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  useEffect(() => {
    // Sinkronisasi: Pilih card pertama yang muncul setelah filter, atau kosongkan
    if (filteredProjects.length > 0) {
      setHoveredProject(filteredProjects[0].id);
    }
  }, [activeCategory]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset -24 agar pusat kursor (lingkaran 48px) tepat berada di ujung panah mouse asli
      cursorX.set(e.clientX - 24);
      cursorY.set(e.clientY - 24);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  // Efek bayangan isometrik bertumpuk serong ke kiri bawah (10 layer)
  const baseIsometricShadow = '-1px 1px 0px #111111, -2px 2px 0px #111111, -3px 3px 0px #111111, -4px 4px 0px #111111, -5px 5px 0px #111111, -6px 6px 0px #111111, -7px 7px 0px #111111, -8px 8px 0px #111111, -9px 9px 0px #111111, -10px 10px 0px #111111';

  // Efek bayangan isometrik saat di-hover (memanjang hingga 16 layer)
  const hoverIsometricShadow = '-1px 1px 0px #111111, -2px 2px 0px #111111, -3px 3px 0px #111111, -4px 4px 0px #111111, -5px 5px 0px #111111, -6px 6px 0px #111111, -7px 7px 0px #111111, -8px 8px 0px #111111, -9px 9px 0px #111111, -10px 10px 0px #111111, -11px 11px 0px #111111, -12px 12px 0px #111111, -13px 13px 0px #111111, -14px 14px 0px #111111, -15px 15px 0px #111111, -16px 16px 0px #111111';

  // --- SCROLL ANIMATIONS ---
  const { scrollY } = useScroll();
  const leftLogoOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const leftLogoX = useTransform(scrollY, [0, 100], [0, -100]);

  const rightLogoOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const rightLogoX = useTransform(scrollY, [0, 80], [30, 0]);

  // Helper render per karakter untuk efek 'Mechanical Pop'
  const renderInteractiveWord = (word: string, is3D: boolean, customClasses: string) => {
    return word.split('').map((char, index) => {
      if (char === ' ') {
        return (
          <span key={index} className={`inline-block ${customClasses}`}>
            &nbsp;
          </span>
        );
      }
      return (
        <motion.span
          key={index}
          className={`inline-block ${customClasses} cursor-none`}
          style={is3D ? { WebkitTextStroke: '3px #1a1a1a' } : undefined}
          initial={is3D ? { textShadow: baseIsometricShadow } : {}}
          whileHover={{
            y: -20,
            scale: 1.05,
            ...(is3D ? { textShadow: hoverIsometricShadow } : {})
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {char}
        </motion.span>
      );
    });
  };

  return (
    // Tambahkan cursor-none untuk menyembunyikan kursor bawaan pada area hero ini
    <section id="about-me" className="relative w-full min-h-screen bg-[#FAF9F6] flex flex-col overflow-clip font-sans cursor-none selection:bg-[#F25A24] selection:text-white">

      {/* CUSTOM CURSOR ELEMENT */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-[3px] border-[#F25A24] rounded-full pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />

      {/* Background Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 divide-x divide-gray-200/80 z-0">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* --- HEADER / NAVBAR --- */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 md:top-10 left-0 right-0 z-50 flex justify-between items-center transition-all duration-300 px-4 md:px-10"
      >
        <motion.div
          className="h-12 md:h-16 overflow-hidden flex items-start justify-center"
          style={{ x: leftLogoX, opacity: leftLogoOpacity }}
        >
          <Image
            src={catSvg}
            alt="Cat Logo"
            className="h-[140%] w-auto object-contain object-top pointer-events-none [transform:scaleX(-1)] drop-shadow-md"
          />
        </motion.div>

        <div className="flex flex-row items-center">
          <motion.div
            className="bg-[#1a1a1a] text-white w-14 h-14 flex items-center justify-center font-black text-xl md:text-2xl"
            style={{ opacity: rightLogoOpacity, x: rightLogoX }}
          >
            <span style={{ fontFamily: 'Impact, Arial, sans-serif' }}>
              CN
            </span>
          </motion.div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-14 h-14 bg-white border border-[#1a1a1a] flex flex-col justify-center items-center gap-[6px] transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-8px_8px_0px_#1a1a1a] cursor-pointer"
          >
            <span className="w-6 h-[2px] bg-[#F25A24]"></span>
            <span className="w-6 h-[2px] bg-[#F25A24]"></span>
            <span className="w-6 h-[2px] bg-[#F25A24]"></span>
          </button>
        </div>
      </motion.header>

      {/* --- MAIN HERO CONTENT --- */}
      <main className="relative z-10 w-full px-4 md:px-10">

        {/* BLOK VIEWPORT 1: ABOVE THE FOLD */}
        <div className="w-full min-h-screen flex flex-col items-center justify-center pt-[100px] md:pt-[120px]">
          {/* Subtitle / Role */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-10"
          >
            <span className="text-sm md:text-xl font-bold tracking-[0.25em] text-[#1a1a1a]/70">
              FRONTEND
            </span>
            <Globe className="text-[#F25A24] w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            <span className="text-sm md:text-xl font-bold tracking-[0.25em] text-[#1a1a1a]/70">
              DEVELOPER
            </span>
          </motion.div>

          {/* Huge Typography */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 70, damping: 15, delay: 0.5 }}
            className="text-center flex flex-col items-center justify-center w-full"
          >
            {/* Baris Pertama: HELLO (PUTIH 3D INTERAKTIF) & THERE (SOLID FLAT STATIS) */}
            <h2
              className="font-black uppercase leading-[0.85] tracking-tighter flex flex-row items-baseline justify-center gap-2 md:gap-4"
              style={{ fontFamily: 'Impact, Arial, sans-serif' }}
            >
              <div className="flex flex-row">
                {renderInteractiveWord("HELLO,", true, "text-[14vw] md:text-[110px] lg:text-[150px] text-white")}
              </div>

              <span className="text-[11vw] md:text-[90px] lg:text-[120px] text-[#1a1a1a]">
                THERE!
              </span>
            </h2>

            {/* Baris Kedua: I'M (SOLID FLAT STATIS) & CINDY NINDA (PUTIH 3D INTERAKTIF) */}
            <h2
              className="font-black uppercase leading-[0.85] tracking-tighter mt-8 md:mt-12 flex flex-row items-baseline justify-center gap-2 md:gap-4"
              style={{ fontFamily: 'Impact, Arial, sans-serif' }}
            >
              <span className="text-[11vw] md:text-[90px] lg:text-[120px] text-[#1a1a1a]">
                I&apos;M
              </span>

              <div className="flex flex-row">
                {renderInteractiveWord("CINDY NINDA", true, "text-[14vw] md:text-[110px] lg:text-[150px] text-white")}
              </div>
            </h2>
          </motion.div>
        </div>

        {/* BLOK VIEWPORT 2: BELOW THE FOLD */}
        <div className="w-full flex flex-col items-center pt-10 pb-20">
          {/* Subtitle Paragraf Terpersonalisasi */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-[#1a1a1a]/70 font-medium text-base md:text-xl text-center max-w-2xl mx-auto"
          >
            Aspiring Frontend Developer passionate about crafting fluid web interfaces, responsive logic, and future-proof digital solutions.
          </motion.p>

          {/* Social Media Links (Border Collapse) */}
          <div className="w-full flex justify-end mt-12 md:mt-16">
            <div className="flex flex-row">
              <a href="https://www.instagram.com/indyndaa/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-[#1a1a1a] bg-white hover:bg-[#FAF9F6] transition-colors -ml-[1px] first:ml-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F25A24] w-6 h-6">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="mailto:cindyninda66@gmail.com" className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-[#1a1a1a] bg-white hover:bg-[#FAF9F6] transition-colors -ml-[1px] first:ml-0">
                <Mail className="text-[#F25A24] w-6 h-6" />
              </a>
              <a href="https://github.com/Justindya" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-[#1a1a1a] bg-white hover:bg-[#FAF9F6] transition-colors -ml-[1px] first:ml-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F25A24] w-6 h-6">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/cindy-ninda-526b36292/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-[#1a1a1a] bg-white hover:bg-[#FAF9F6] transition-colors -ml-[1px] first:ml-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F25A24] w-6 h-6">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* --- EXPERIENCES SECTION HEADER --- */}
          <div id="experiences" className="w-full flex flex-col items-start mt-20 md:mt-32 px-4 md:px-10 max-w-screen-2xl mx-auto">
            <h2
              className="text-[10vw] md:text-[90px] lg:text-[130px] leading-none text-[#1a1a1a] uppercase tracking-tighter"
              style={{ fontFamily: 'Impact, Arial, sans-serif' }}
            >
              PROFESSIONAL
            </h2>
            <h2
              className="text-[10vw] md:text-[90px] lg:text-[130px] leading-none uppercase tracking-tighter flex flex-row mt-2 md:mt-4 lg:mt-6"
              style={{ fontFamily: 'Impact, Arial, sans-serif' }}
            >
              {"EXPERIENCES".split('').map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block text-white cursor-none"
                  style={{ WebkitTextStroke: '3px #1a1a1a' }}
                  initial={{
                    textShadow: '1px 1px 0px #1a1a1a, 2px 2px 0px #1a1a1a, 3px 3px 0px #1a1a1a, 4px 4px 0px #1a1a1a, 5px 5px 0px #1a1a1a, 6px 6px 0px #1a1a1a, 7px 7px 0px #1a1a1a, 8px 8px 0px #1a1a1a'
                  }}
                  whileHover={{
                    y: -15,
                    scale: 1.05,
                    textShadow: '1px 1px 0px #1a1a1a, 2px 2px 0px #1a1a1a, 3px 3px 0px #1a1a1a, 4px 4px 0px #1a1a1a, 5px 5px 0px #1a1a1a, 6px 6px 0px #1a1a1a, 7px 7px 0px #1a1a1a, 8px 8px 0px #1a1a1a, 9px 9px 0px #1a1a1a, 10px 10px 0px #1a1a1a, 11px 11px 0px #1a1a1a, 12px 12px 0px #1a1a1a, 13px 13px 0px #1a1a1a, 14px 14px 0px #1a1a1a, 15px 15px 0px #1a1a1a'
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {char}
                </motion.span>
              ))}
            </h2>
            <p className="mt-6 md:mt-8 text-[#1a1a1a]/70 text-lg md:text-xl font-medium max-w-xl">
              A look back at my journey in frontend development and IT solutions.
            </p>
          </div>

          {/* PROJECT LIST GRID */}
          <div className="w-full mt-12 md:mt-20 flex flex-col md:grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] relative items-stretch">

            {/* Kolom Kiri: Daftar Proyek */}
            <div className="flex flex-col border-t border-l border-r-0 md:border-r border-[#1a1a1a] ml-4 md:ml-10 2xl:ml-[calc((100vw-1536px)/2+2.5rem)] min-w-0">
              {/* Baris 1 */}
              <div className="p-6 md:p-8 bg-transparent hover:bg-white border border-transparent border-b-[#1a1a1a] hover:border-[#1a1a1a] hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-10px_10px_0px_#1a1a1a] hover:z-50 transition-all duration-300 ease-out cursor-pointer group relative min-w-0 overflow-hidden md:overflow-visible">

                {/* GAMBAR PREVIEW (Absolute Hover Overlay - Reveal) */}
                <div className="absolute z-50 left-6 top-1/2 -translate-y-1/2 opacity-0 scale-95 w-0 overflow-hidden pointer-events-none group-hover:w-32 group-hover:md:w-48 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out origin-left flex shrink-0">
                  {prismaImageSrc ? (
                    <img
                      src={prismaImageSrc}
                      alt="Prisma Fotocopy"
                      className="w-32 md:w-48 h-20 md:h-28 object-cover border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] shrink-0 min-w-[8rem] md:min-w-[12rem]"
                    />
                  ) : (
                    <div className="w-32 md:w-48 h-20 md:h-28 border-2 border-[#1a1a1a] bg-[#FAF9F6] flex items-center justify-center shadow-[4px_4px_0px_#1a1a1a] shrink-0 min-w-[8rem] md:min-w-[12rem]">
                      <span className="text-xs font-bold text-[#1a1a1a]/50">TBD</span>
                    </div>
                  )}
                </div>

                {/* MAIN CONTENT WRAPPER */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 w-full">
                  {/* TEXT WRAPPER (Structural padding shift to trigger truncate without overlap) */}
                  <div className="flex flex-row items-start gap-4 flex-1 min-w-0 transition-all duration-300 ease-out group-hover:pl-40 group-hover:md:pl-56">
                    <span className="text-sm font-bold text-[#1a1a1a]/50 w-6 leading-none shrink-0 transition-all duration-300">01</span>
                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight transition-all duration-300 truncate whitespace-nowrap" style={{ fontFamily: 'Impact, Arial, sans-serif' }}>
                        Prisma Fotocopy
                      </h3>
                      <span className="text-base md:text-lg text-[#1a1a1a]/70 font-medium mt-1 transition-all duration-300 truncate whitespace-nowrap">
                        Mobile design & UMKM E-Commerce
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 md:gap-6 flex-nowrap shrink-0 md:justify-end ml-12 md:ml-0 items-center">
                    {/* Next.js Logo */}
                    <div className="relative group/icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#F25A24" className="w-8 h-8 md:w-10 md:h-10 transform group-hover/icon:scale-110 transition-transform"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.834 14.394L10.334 9.123v7.27H8.84V7.606h1.666l5.5 7.271V7.606h1.493v8.788h-1.665z" /></svg>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 whitespace-nowrap pointer-events-none">Next.js</span>
                    </div>
                    {/* React Logo */}
                    <div className="relative group/icon">
                      <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 md:w-10 md:h-10 transform group-hover/icon:scale-110 transition-transform"><circle cx="0" cy="0" r="2.05" fill="#F25A24" /><g stroke="#F25A24" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 whitespace-nowrap pointer-events-none">React</span>
                    </div>
                    {/* Tailwind Logo */}
                    <div className="relative group/icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#F25A24" className="w-8 h-8 md:w-10 md:h-10 transform group-hover/icon:scale-110 transition-transform"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" /></svg>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 whitespace-nowrap pointer-events-none">Tailwind CSS</span>
                    </div>
                    {/* TypeScript Logo */}
                    <div className="relative group/icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#F25A24" className="w-8 h-8 md:w-10 md:h-10 transform group-hover/icon:scale-110 transition-transform"><path d="M21 3V21H3V3H21ZM13.88 17.58C13.88 15.7 15.35 15.34 16.5 14.86C17.65 14.38 17.9 14.16 17.9 13.62C17.9 13.04 17.3 12.82 16.7 12.82C15.68 12.82 15.22 13.48 15.2 13.5L14.04 12.38C14.06 12.36 14.78 11.2 16.7 11.2C18.66 11.2 19.64 12.28 19.64 13.64C19.64 15.54 18.06 16.02 16.94 16.48C15.82 16.94 15.58 17.18 15.58 17.7C15.58 18.28 16.14 18.64 16.96 18.64C18.16 18.64 18.84 17.84 18.86 17.82L20.08 19C20.06 19.04 19.12 20.24 16.98 20.24C14.88 20.24 13.88 19.12 13.88 17.58ZM11.4 11.42H6.38V12.92H8.08V20.06H9.72V12.92H11.4V11.42Z" /></svg>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 whitespace-nowrap pointer-events-none">TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Baris 2 */}
              <div className="p-6 md:p-8 bg-transparent hover:bg-white border border-transparent border-b-[#1a1a1a] hover:border-[#1a1a1a] hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-10px_10px_0px_#1a1a1a] hover:z-50 transition-all duration-300 ease-out cursor-pointer group relative min-w-0 overflow-hidden md:overflow-visible">

                {/* GAMBAR PREVIEW (Absolute Hover Overlay - Reveal) */}
                <div className="absolute z-50 left-6 top-1/2 -translate-y-1/2 opacity-0 scale-95 w-0 overflow-hidden pointer-events-none group-hover:w-32 group-hover:md:w-48 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out origin-left flex shrink-0">
                  {cakraImageSrc ? (
                    <img
                      src={cakraImageSrc}
                      alt="Cakra Muda"
                      className="w-32 md:w-48 h-20 md:h-28 object-cover border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] shrink-0 min-w-[8rem] md:min-w-[12rem]"
                    />
                  ) : (
                    <div className="w-32 md:w-48 h-20 md:h-28 border-2 border-[#1a1a1a] bg-[#FAF9F6] flex items-center justify-center shadow-[4px_4px_0px_#1a1a1a] shrink-0 min-w-[8rem] md:min-w-[12rem]">
                      <span className="text-xs font-bold text-[#1a1a1a]/50">TBD</span>
                    </div>
                  )}
                </div>

                {/* MAIN CONTENT WRAPPER */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 w-full">
                  {/* TEXT WRAPPER (Structural padding shift to trigger truncate without overlap) */}
                  <div className="flex flex-row items-start gap-4 flex-1 min-w-0 transition-all duration-300 ease-out group-hover:pl-40 group-hover:md:pl-56">
                    <span className="text-sm font-bold text-[#1a1a1a]/50 w-6 leading-none shrink-0 transition-all duration-300">02</span>
                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight transition-all duration-300 truncate whitespace-nowrap" style={{ fontFamily: 'Impact, Arial, sans-serif' }}>
                        Cakra Muda
                      </h3>
                      <span className="text-base md:text-lg text-[#1a1a1a]/70 font-medium mt-1 transition-all duration-300 truncate whitespace-nowrap">
                        Organization Landing Page & System Integration
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 md:gap-6 flex-nowrap shrink-0 md:justify-end ml-12 md:ml-0 items-center">
                    {/* Next.js Logo */}
                    <div className="relative group/icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#F25A24" className="w-8 h-8 md:w-10 md:h-10 transform group-hover/icon:scale-110 transition-transform"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.834 14.394L10.334 9.123v7.27H8.84V7.606h1.666l5.5 7.271V7.606h1.493v8.788h-1.665z" /></svg>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 whitespace-nowrap pointer-events-none">Next.js</span>
                    </div>
                    {/* React Logo */}
                    <div className="relative group/icon">
                      <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 md:w-10 md:h-10 transform group-hover/icon:scale-110 transition-transform"><circle cx="0" cy="0" r="2.05" fill="#F25A24" /><g stroke="#F25A24" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 whitespace-nowrap pointer-events-none">React</span>
                    </div>
                    {/* Tailwind Logo */}
                    <div className="relative group/icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#F25A24" className="w-8 h-8 md:w-10 md:h-10 transform group-hover/icon:scale-110 transition-transform"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" /></svg>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 whitespace-nowrap pointer-events-none">Tailwind CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- KOLOM KANAN: KOTAK IMPACT DRIVEN --- */}
            <div className="relative w-full h-full">

              {/* Wrapper Absolut untuk 2 Ikon (TETAP DI ATAS, TIDAK IKUT SCROLL) */}
              <div className="absolute -top-14 -left-28 flex flex-row z-20">
                {/* Kotak Tas (Menggantung di luar kiri) */}
                <div className="w-14 h-14 bg-transparent border border-[#1a1a1a] border-b-0 flex items-center justify-center">
                  <Briefcase className="text-[#1a1a1a] w-6 h-6" />
                </div>
                {/* Kotak Gerigi (Rata dengan ujung kiri kotak hitam) */}
                <div className="w-14 h-14 bg-[#1a1a1a] flex items-center justify-center">
                  <Settings className="text-white w-7 h-7 animate-spin" />
                </div>
              </div>

              {/* STICKY GROUP (Hanya Kotak Hitam yang Meluncur Turun) */}
              <div className="sticky top-12 md:top-24 w-full h-fit -mt-14 z-10">
                {/* Kotak Gelap */}
                <div className="bg-[#1a1a1a] text-white px-6 md:px-8 py-4 md:py-6 h-fit w-full relative z-10 flex flex-col items-start justify-start">
                  {/* Teks Konten */}
                  <h3
                    className="text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] mb-4"
                    style={{ fontFamily: 'Impact, Arial, sans-serif' }}
                  >
                    IMPACT DRIVEN
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed text-left">
                    Delivering highly<br />
                    performant &<br />
                    maintainable<br />
                    web solutions
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* SECTION HEADER: SELECTED PROJECTS (Di Bawah Proyek) */}
          <div id="projects" className="w-full mt-32 md:mt-48 flex flex-col items-center justify-center text-center">
            {/* 1. Judul Utama */}
            <div className="flex flex-col items-center justify-center w-full">
              <h2
                className="text-[10vw] md:text-[90px] lg:text-[130px] leading-none text-[#1a1a1a] uppercase tracking-tighter relative -left-4 md:-left-12"
                style={{ fontFamily: 'Impact, Arial, sans-serif' }}
              >
                SELECTED
              </h2>
              <h2
                className="text-[10vw] md:text-[90px] lg:text-[130px] leading-none uppercase tracking-tighter text-white relative left-4 md:left-12 mt-2 md:mt-4 lg:mt-6 flex flex-row"
                style={{ fontFamily: 'Impact, Arial, sans-serif' }}
              >
                {"PROJECTS".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block text-white cursor-none"
                    style={{ WebkitTextStroke: '3px #1a1a1a' }}
                    initial={{
                      textShadow: '1px 1px 0px #1a1a1a, 2px 2px 0px #1a1a1a, 3px 3px 0px #1a1a1a, 4px 4px 0px #1a1a1a, 5px 5px 0px #1a1a1a, 6px 6px 0px #1a1a1a, 7px 7px 0px #1a1a1a, 8px 8px 0px #1a1a1a'
                    }}
                    whileHover={{
                      y: -15,
                      scale: 1.05,
                      textShadow: '1px 1px 0px #1a1a1a, 2px 2px 0px #1a1a1a, 3px 3px 0px #1a1a1a, 4px 4px 0px #1a1a1a, 5px 5px 0px #1a1a1a, 6px 6px 0px #1a1a1a, 7px 7px 0px #1a1a1a, 8px 8px 0px #1a1a1a, 9px 9px 0px #1a1a1a, 10px 10px 0px #1a1a1a, 11px 11px 0px #1a1a1a, 12px 12px 0px #1a1a1a, 13px 13px 0px #1a1a1a, 14px 14px 0px #1a1a1a, 15px 15px 0px #1a1a1a'
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h2>
            </div>

            {/* 2. Subtitle */}
            <p className="text-lg md:text-xl text-[#1a1a1a]/70 font-medium max-w-2xl mt-6 md:mt-8 px-4">
              Projects I&apos;ve enjoyed working on—built, tweaked, and learned from.
            </p>
          </div>
          {/* KATEGORI FILTER (Di Bawah Proyek) */}
          {/* KATEGORI FILTER (Di Bawah Proyek) */}
          <div className="w-full mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] grid-rows-[auto_1fr] pl-4 md:pl-10 2xl:pl-[calc((100vw-1536px)/2+2.5rem)] pr-4 md:pr-10 2xl:pr-[calc((100vw-1536px)/2+2.5rem)]">

            {/* Primary Filter Group Container (Kolom auto kanan, menempel sempurna di batas margin) */}
            <div className="lg:col-start-2 lg:row-start-1 flex flex-row items-stretch border border-[#1a1a1a] bg-white relative z-10 w-fit justify-self-end lg:justify-self-auto">

              {/* Tab All */}
              <button
                onClick={() => setActiveCategory('All')}
                className={`relative shrink-0 px-6 md:px-8 py-3 md:py-4 font-bold text-sm md:text-base uppercase tracking-wider border-r border-[#1a1a1a] transition-all duration-300 group ${activeCategory === 'All'
                  ? 'bg-transparent text-white z-0'
                  : 'bg-white text-[#1a1a1a] z-0 hover:-translate-y-1.5 hover:translate-x-1.5 hover:shadow-[-6px_6px_0px_#2b2b2b] hover:z-20 hover:border hover:border-[#1a1a1a] hover:-mt-[1px] hover:-mb-[1px] hover:-ml-[1px]'
                  }`}
              >
                <div className={`absolute inset-0 bg-[#1a1a1a] origin-center transition-transform duration-300 ease-out ${activeCategory === 'All' ? 'scale-x-100' : 'scale-x-0'}`} />
                <span className="relative z-10 flex items-center justify-center">All</span>
              </button>

              {/* Tab Frontend */}
              <button
                onClick={() => setActiveCategory('Frontend')}
                className={`relative shrink-0 px-5 md:px-7 py-3 md:py-4 font-bold text-sm md:text-base uppercase tracking-wider border-r border-[#1a1a1a] transition-all duration-300 group ${activeCategory === 'Frontend'
                  ? 'bg-transparent text-white z-0'
                  : 'bg-white text-[#1a1a1a] z-0 hover:-translate-y-1.5 hover:translate-x-1.5 hover:shadow-[-6px_6px_0px_#2b2b2b] hover:z-20 hover:border hover:border-[#1a1a1a] hover:-mt-[1px] hover:-mb-[1px] hover:-ml-[1px]'
                  }`}
              >
                <div className={`absolute inset-0 bg-[#1a1a1a] origin-center transition-transform duration-300 ease-out ${activeCategory === 'Frontend' ? 'scale-x-100' : 'scale-x-0'}`} />
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  Frontend
                  <Code className={`w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110 ${activeCategory === 'Frontend' ? 'text-white' : 'text-[#F25A24]'}`} strokeWidth={2.5} />
                </span>
              </button>

              {/* Tab Full-Stack */}
              <button
                onClick={() => setActiveCategory('Full-Stack')}
                className={`relative shrink-0 px-5 md:px-7 py-3 md:py-4 font-bold text-sm md:text-base uppercase tracking-wider border-r border-[#1a1a1a] transition-all duration-300 group ${activeCategory === 'Full-Stack'
                  ? 'bg-transparent text-white z-0'
                  : 'bg-white text-[#1a1a1a] z-0 hover:-translate-y-1.5 hover:translate-x-1.5 hover:shadow-[-6px_6px_0px_#2b2b2b] hover:z-20 hover:border hover:border-[#1a1a1a] hover:-mt-[1px] hover:-mb-[1px] hover:-ml-[1px]'
                  }`}
              >
                <div className={`absolute inset-0 bg-[#1a1a1a] origin-center transition-transform duration-300 ease-out ${activeCategory === 'Full-Stack' ? 'scale-x-100' : 'scale-x-0'}`} />
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  Full-Stack
                  <Layers className={`w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110 ${activeCategory === 'Full-Stack' ? 'text-white' : 'text-[#F25A24]'}`} strokeWidth={2.5} />
                </span>
              </button>

              {/* Tab Backend */}
              <button
                onClick={() => setActiveCategory('Backend')}
                className={`relative shrink-0 px-5 md:px-7 py-3 md:py-4 font-bold text-sm md:text-base uppercase tracking-wider transition-all duration-300 group ${activeCategory === 'Backend'
                  ? 'bg-transparent text-white z-0'
                  : 'bg-white text-[#1a1a1a] z-0 hover:-translate-y-1.5 hover:translate-x-1.5 hover:shadow-[-6px_6px_0px_#2b2b2b] hover:z-20 hover:border hover:border-[#1a1a1a] hover:-m-[1px]'
                  }`}
              >
                <div className={`absolute inset-0 bg-[#1a1a1a] origin-center transition-transform duration-300 ease-out ${activeCategory === 'Backend' ? 'scale-x-100' : 'scale-x-0'}`} />
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  Backend
                  <Database className={`w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110 ${activeCategory === 'Backend' ? 'text-white' : 'text-[#F25A24]'}`} strokeWidth={2.5} />
                </span>
              </button>
            </div>

            {/* KOLOM KIRI: IMAGE PREVIEW (1fr, Otomatis Mengisi Ruang Kiri hingga Margin Kiri!) */}
            <div className="hidden lg:flex flex-col lg:col-start-1 lg:row-start-2 relative z-10 transition-all duration-500 ease-out -mt-[1px] h-full min-h-[520px] xl:min-h-[550px]">
              <div className="w-full h-[75%] border border-[#1a1a1a] bg-[#FAF9F6] flex flex-col relative overflow-hidden">
                {/* Placeholder Dynamic Content */}
                <div className="flex-1 flex items-center justify-center bg-[#1a1a1a]/5 transition-opacity duration-300 relative min-h-0">
                  <span className="font-bold text-xl xl:text-2xl text-[#1a1a1a]/30 uppercase tracking-widest text-center px-4 mb-8">
                    {hoveredProject === '01' ? 'SuraJa Preview' :
                      hoveredProject === '02' ? 'UniTrack Preview' :
                        hoveredProject === '03' ? 'Sport On Preview' :
                          hoveredProject === '04' ? 'Portfolio Preview' : 'Preview'}
                  </span>
                </div>

                {/* Area Bawah Panel Preview Dinamis (Fleksibel menampung 2 Baris Vertikal) */}
                <div className="w-full border-t border-[#1a1a1a] bg-[#FAF9F6] z-20 flex flex-col shrink-0">

                  {/* Baris Atas: Area Nama Proyek & Tech Stack */}
                  <div className="flex-1 flex items-center justify-between px-6 md:px-10 py-5 lg:py-7 min-w-0">
                    {/* Teks Nama Proyek Dinamis (Kiri) */}
                    <span className="text-xl md:text-2xl lg:text-3xl text-[#1a1a1a] tracking-tight transition-all duration-300 min-w-0 truncate" style={{ fontFamily: 'Impact, Arial, sans-serif' }}>
                      {hoveredProject === '01' ? 'SuraJa' :
                        hoveredProject === '02' ? 'UniTrack' :
                          hoveredProject === '03' ? 'Sport On Website' :
                            hoveredProject === '04' ? 'Cindyninda' : 'Project'}
                    </span>

                    {/* Tech Stack Logo Badges Dinamis (Kanan) */}
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      {hoveredProject === '01' && (
                        <>
                          <TechIcon name="Laravel" />
                          <TechIcon name="Blade" />
                          <TechIcon name="CSS" />
                          <TechIcon name="JavaScript" />
                        </>
                      )}
                      {hoveredProject === '02' && (
                        <>
                          <TechIcon name="Laravel" />
                          <TechIcon name="Blade" />
                        </>
                      )}
                      {hoveredProject === '03' && (
                        <>
                          <TechIcon name="Next.js" />
                          <TechIcon name="TypeScript" />
                        </>
                      )}
                      {hoveredProject === '04' && (
                        <>
                          <TechIcon name="Next.js" />
                          <TechIcon name="TypeScript" />
                          <TechIcon name="JavaScript" />
                          <TechIcon name="CSS" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Baris Bawah Tambahan: Kotak Label Kategori (Melampaui batas h-[75%] secara natural) */}
              <div className="flex w-fit border-t border-b border-l border-[#1a1a1a] shrink-0 bg-[#FAF9F6] -mt-[1px] relative z-20">
                <div className="px-5 md:px-7 py-3 md:py-4 flex items-center justify-center gap-2 md:gap-3 border-r border-[#1a1a1a] bg-white shrink-0">
                  <Code className="w-4 h-4 md:w-5 md:h-5 text-[#F25A24] shrink-0" strokeWidth={2.5} />
                  <span className="font-bold text-[#1a1a1a] text-sm md:text-base uppercase tracking-wider truncate">
                    {hoveredProject === '01' ? 'Full-Stack' :
                      hoveredProject === '02' ? 'Backend' :
                        hoveredProject === '03' ? 'Frontend' :
                          hoveredProject === '04' ? 'Frontend' : 'Category'}
                  </span>
                </div>
              </div>
            </div>

            {/* KOLOM KANAN: DAFTAR CARD PROYEK LIST (Auto, lebarnya mengunci selebar filter di atasnya) */}
            <div className="lg:col-start-2 lg:row-start-2 flex flex-col w-full min-w-0 border-x border-[#1a1a1a] bg-[#FAF9F6] relative z-0 -mt-[1px] -ml-[1px] group/list self-start">

              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  className="h-[130px] xl:h-[137.5px] flex items-center px-6 md:px-8 bg-transparent hover:bg-white border border-transparent border-b-[#1a1a1a] hover:border-[#1a1a1a] hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-10px_10px_0px_#1a1a1a] hover:z-50 transition-all duration-300 ease-out cursor-pointer group relative min-w-0 group-hover/list:opacity-40 group-hover/list:bg-black/5 hover:!opacity-100 hover:!bg-white"
                >
                  <div className="flex flex-row items-start gap-4 flex-1 min-w-0">
                    <span className="text-sm font-bold text-[#1a1a1a]/50 w-6 leading-none shrink-0 transition-all duration-300">{project.id}</span>
                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight transition-all duration-300 truncate whitespace-nowrap" style={{ fontFamily: 'Impact, Arial, sans-serif' }}>
                        {project.title}
                      </h3>
                      <span className="text-base md:text-lg text-[#1a1a1a]/70 font-medium mt-1 transition-all duration-300 truncate whitespace-nowrap">
                        {project.desc}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 3 GRID: CONTACT ME & MENU (Symmetrical 50/50) */}
          <div className="w-full mt-32 md:mt-48 grid grid-cols-1 lg:grid-cols-2 pl-4 md:pl-10 2xl:pl-[calc((100vw-1536px)/2+2.5rem)] pr-4 md:pr-10 2xl:pr-[calc((100vw-1536px)/2+2.5rem)] items-stretch">

            {/* KOLOM KIRI ROW 3: CONTACT ME */}
            <div className="hidden lg:flex flex-col relative z-10 border border-[#1a1a1a] bg-[#1a1a1a] p-6 md:p-8 lg:p-8 justify-center items-center w-full">
              <div className="flex flex-col items-center text-center gap-1">
                <div className="text-[#F25A24] mb-1 md:mb-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    <circle cx="12" cy="8" r="2.5" />
                    <path d="M8 15a4 4 0 0 1 8 0" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider uppercase mt-1" style={{ fontFamily: 'Impact, Arial, sans-serif' }}>
                  CONTACT ME
                </h2>
                <p className="text-white/90 text-sm md:text-base font-medium max-w-md mt-2">
                  Have a project in mind or just want to chat?<br />
                  Drop me a message—I&apos;d love to hear from you!
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-6 w-full max-w-sm md:max-w-md">
                <div className="relative w-full group">
                  <input
                    type="text"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Where can I reach you?"
                    className="w-full bg-white text-[#1a1a1a] font-medium text-sm md:text-base px-5 py-2.5 md:py-3 border border-transparent focus:border-[#F25A24] focus:outline-none placeholder:text-[#1a1a1a]/50 pr-12 rounded-none transition-colors"
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-[#F25A24] group-focus-within:scale-110 transition-transform" strokeWidth={2.5} />
                </div>

                <div className="relative w-full group">
                  <input
                    type="text"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Send me a message !"
                    className="w-full bg-white text-[#1a1a1a] font-medium text-sm md:text-base px-5 py-2.5 md:py-3 border border-transparent focus:border-[#F25A24] focus:outline-none placeholder:text-[#1a1a1a]/50 pr-12 rounded-none transition-colors"
                  />
                  <Send
                    onClick={handleSendMessage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-[#F25A24] group-focus-within:scale-110 group-hover:translate-x-1 transition-transform cursor-pointer"
                    strokeWidth={2.5}
                  />
                </div>
              </div>
            </div>

            {/* KOLOM KANAN ROW 3: MENU BAWAH */}
            <div className="flex flex-col w-full relative z-0 border-l border-[#1a1a1a] bg-[#FAF9F6] lg:-ml-[1px]">
              {/* Message Icon Box (Top Left) */}
              <div className="flex flex-row w-full border-b border-[#1a1a1a]">
                <div className="w-14 h-14 md:w-16 md:h-16 border-t border-r border-[#1a1a1a] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-[#1a1a1a]">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
              </div>

              {[
                { label: 'ABOUT ME', icon: <Smile className="w-5 h-5 md:w-6 md:h-6 text-[#F25A24]" strokeWidth={2.5} />, target: 'about-me' },
                { label: 'EXPERIENCES', icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-[#F25A24]" strokeWidth={2.5} />, target: 'experiences' },
                { label: 'PROJECTS', icon: <FolderOpen className="w-5 h-5 md:w-6 md:h-6 text-[#F25A24]" strokeWidth={2.5} />, target: 'projects' },
                { label: 'BLOG', icon: <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#F25A24]" strokeWidth={2.5} />, target: 'blog' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const el = document.getElementById(item.target);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="relative flex items-center justify-between px-6 md:px-8 py-5 md:py-6 bg-white border border-transparent border-b-[#1a1a1a] border-r-[#1a1a1a] hover:border-[#1a1a1a] transition-all duration-300 ease-out group flex-1 z-0 hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-10px_10px_0px_#1a1a1a] hover:z-50"
                >
                  <div className="flex items-center">
                    <span className="overflow-hidden whitespace-nowrap w-0 group-hover:w-7 md:group-hover:w-8 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 flex items-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-[#F25A24]"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </span>
                    <span className="font-bold text-[#1a1a1a] text-lg md:text-xl uppercase tracking-wider transition-all duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </div>
                  <div className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </button>
              ))}

              {/* Social Media Grid */}
              <div className="grid grid-cols-4 w-full bg-white border-b border-r border-[#1a1a1a] shrink-0">
                {[
                  { href: 'https://www.instagram.com/indyndaa/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#F25A24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> },
                  { href: 'mailto:cindyninda66@gmail.com', icon: <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#F25A24]" strokeWidth={2.5} /> },
                  { href: 'https://github.com/Justindya', icon: <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-[#F25A24]"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg> },
                  { href: 'https://www.linkedin.com/in/cindy-ninda-526b36292/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#F25A24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target={idx === 1 ? undefined : "_blank"}
                    rel={idx === 1 ? undefined : "noopener noreferrer"}
                    className={`relative flex items-center justify-center py-5 md:py-6 bg-white border border-transparent ${idx < 3 ? 'border-r-[#1a1a1a]' : ''} hover:border-[#1a1a1a] transition-all duration-300 ease-out group z-0 hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-8px_8px_0px_#1a1a1a] hover:z-50`}
                  >
                    <div className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FULL-WIDTH FOOTER: BACK TO TOP */}
      <footer
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="relative w-screen left-1/2 -translate-x-1/2 bg-[#FAF9F6] pt-8 md:pt-12 cursor-pointer group border-b-[4px] md:border-b-[6px] border-[#F25A24]"
      >
        <div className="w-full flex flex-col">
          {/* Footer Content Wrapper (Aligned left & right) */}
          <div className="relative w-full flex justify-between items-end px-4 md:px-10 2xl:px-[calc((100vw-1536px)/2+2.5rem)] z-0">

            {/* Credit Text (Kiri Bawah) */}
            <span className="text-[#1a1a1a] font-semibold tracking-wide text-[10px] md:text-xs mb-3 md:mb-5 ml-4 md:ml-10">
              Designed & Developed by Cindy Ninda &bull; 2026
            </span>

            {/* Karakter Cat & Teks Back To Top (Kanan Bawah) */}
            <div className="w-[50%] md:w-[40%] lg:w-[30%] flex flex-col items-center justify-end">

              {/* Teks Back To Top (Tepat di atas kepala kucing) */}
              <span
                className="text-[#1a1a1a] font-bold tracking-widest text-[10px] md:text-xs mb-1 md:mb-2 pl-4 md:pl-8 transition-transform duration-300 ease-out group-hover:-translate-y-2 z-10"
              >
                Back to top
              </span>

              {/* Cat Image (Static, no hover movement, precise bottom crop) */}
              <div className="w-full flex justify-center overflow-hidden">
                <Image
                  src={catSvg}
                  alt="Back to top"
                  className="w-full h-auto object-contain pointer-events-none -mb-[1.5%]"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* --- MOBILE NAVIGATION OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[100] flex justify-end items-start transition-all duration-500 ease-out ${isMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}
      >
        {/* Backdrop (Dark Overlay) */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-black/80 transition-opacity duration-500 ease-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Drawer Panel (Compact Vertical Box) */}
        <div
          className={`relative w-[85vw] sm:w-[350px] md:w-[400px] bg-[#FAF9F6] flex flex-col border border-[#1a1a1a] shadow-2xl transition-transform duration-500 ease-out mt-6 mr-4 md:mt-10 md:mr-10 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header Overlay */}
          <div className="relative flex justify-center items-center h-16 md:h-20 border-b border-[#1a1a1a] bg-[#111111]">
            <span className="text-white text-xl md:text-2xl font-bold uppercase tracking-widest" style={{ fontFamily: 'Impact, Arial, sans-serif' }}>
              MENU
            </span>

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-4 md:right-5 w-9 h-9 md:w-11 md:h-11 bg-[#1a1a1a] border border-[#333333] hover:border-[#F25A24] flex justify-center items-center text-white hover:text-[#F25A24] transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col w-full">
            {[
              { label: 'ABOUT ME', icon: <Smile className="w-5 h-5 md:w-6 md:h-6 text-[#F25A24]" strokeWidth={2.5} />, target: 'about-me' },
              { label: 'EXPERIENCES', icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-[#F25A24]" strokeWidth={2.5} />, target: 'experiences' },
              { label: 'PROJECTS', icon: <FolderOpen className="w-5 h-5 md:w-6 md:h-6 text-[#F25A24]" strokeWidth={2.5} />, target: 'projects' },
              { label: 'BLOG', icon: <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#F25A24]" strokeWidth={2.5} />, target: 'blog' },
            ].map((item, idx, arr) => (
              <button
                key={idx}
                onClick={() => {
                  setIsMenuOpen(false);
                  const el = document.getElementById(item.target);
                  if (el) {
                    setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300);
                  }
                }}
                className={`w-full flex items-center justify-between px-6 py-5 md:py-6 bg-white ${idx !== arr.length - 1 ? 'border-b border-[#1a1a1a]' : ''} hover:bg-[#FAF9F6] transition-colors group cursor-pointer`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center">
                    {/* Animated Arrow */}
                    <div className="absolute left-0 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[#F25A24]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>

                    {/* Text Label */}
                    <span className="font-black text-[#1a1a1a] text-xl md:text-2xl uppercase tracking-wider transition-transform duration-300 group-hover:translate-x-8 md:group-hover:translate-x-10">
                      {item.label}
                    </span>
                  </div>
                </div>
                <div className="transition-transform duration-300 group-hover:-translate-x-2">
                  {item.icon}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
