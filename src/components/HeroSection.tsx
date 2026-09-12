"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { Globe, Mail, Briefcase, Settings } from 'lucide-react';

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
    <section className="relative w-full min-h-screen bg-[#FAF9F6] flex flex-col overflow-clip font-sans cursor-none selection:bg-[#F25A24] selection:text-white pb-32">

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
          className="bg-[#111111] text-white h-14 w-auto px-4 md:px-6 flex items-center justify-center"
          style={{ x: leftLogoX, opacity: leftLogoOpacity }}
        >
          <span
            className="text-2xl md:text-3xl uppercase tracking-tighter whitespace-nowrap"
            style={{ fontFamily: 'Impact, Arial, sans-serif' }}
          >
            CINDY NINDA
          </span>
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

          <button className="w-14 h-14 bg-white border border-[#1a1a1a] flex flex-col justify-center items-center gap-[6px] transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-8px_8px_0px_#1a1a1a] cursor-pointer">
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
          <div className="w-full flex flex-col items-start mt-20 md:mt-32 px-4 md:px-10 max-w-screen-2xl mx-auto">
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
          <div className="w-full mt-12 md:mt-20 flex flex-col md:grid md:grid-cols-[1fr_350px] lg:grid-cols-[1fr_400px] relative items-start">

            {/* Kolom Kiri: Daftar Proyek */}
            <div className="flex flex-col border-t border-l border-r-0 md:border-r border-[#1a1a1a] ml-4 md:ml-10 2xl:ml-[calc((100vw-1536px)/2+2.5rem)]">
              {/* Baris 1 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-[#1a1a1a] pl-4 md:pl-8 pr-4 md:pr-10 hover:bg-[#FAF9F6] transition-colors cursor-pointer group gap-4 md:gap-0 relative overflow-visible">
                {/* GAMBAR PREVIEW (Absolute Hover Overlay) */}
                {prismaImageSrc && (
                  <img
                    src={prismaImageSrc}
                    alt="Prisma Fotocopy"
                    className="absolute z-50 left-0 -translate-x-[110%] top-1/2 -translate-y-1/2 object-cover shadow-[8px_8px_0px_rgba(26,26,26,1)] border-2 border-[#1a1a1a] transition-all duration-300 ease-out origin-right opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 w-32 md:w-48 h-24 md:h-32"
                  />
                )}

                <div className="flex flex-row items-start gap-4 md:gap-8">
                  <span className="text-sm font-bold text-[#1a1a1a]/50 w-8 mt-2 md:mt-3 leading-none">01</span>
                  <div className="flex flex-col">
                    <h3 className="text-4xl md:text-5xl text-[#1a1a1a] tracking-tight group-hover:pl-2 transition-all duration-300" style={{ fontFamily: 'Impact, Arial, sans-serif' }}>
                      Prisma Fotocopy & eKatalog
                    </h3>
                    <span className="text-lg text-[#1a1a1a]/70 font-medium mt-1">
                      Mobile Redesign & UMKM E-Commerce
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

              {/* Baris 2 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-[#1a1a1a] pl-4 md:pl-8 pr-4 md:pr-10 hover:bg-[#FAF9F6] transition-colors cursor-pointer group gap-4 md:gap-0 relative overflow-visible">
                {/* GAMBAR PREVIEW (Absolute Hover Overlay) */}
                {cakraImageSrc && (
                  <img
                    src={cakraImageSrc}
                    alt="Cakra Muda"
                    className="absolute z-50 left-0 -translate-x-[110%] top-1/2 -translate-y-1/2 object-cover shadow-[8px_8px_0px_rgba(26,26,26,1)] border-2 border-[#1a1a1a] transition-all duration-300 ease-out origin-right opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 w-32 md:w-48 h-24 md:h-32"
                  />
                )}

                <div className="flex flex-row items-start gap-4 md:gap-8">
                  <span className="text-sm font-bold text-[#1a1a1a]/50 w-8 mt-2 md:mt-3 leading-none">02</span>
                  <div className="flex flex-col">
                    <h3 className="text-4xl md:text-5xl text-[#1a1a1a] tracking-tight group-hover:pl-2 transition-all duration-300" style={{ fontFamily: 'Impact, Arial, sans-serif' }}>
                      Cakra Muda
                    </h3>
                    <span className="text-lg text-[#1a1a1a]/70 font-medium mt-1">
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

            {/* --- KOLOM KANAN: KOTAK IMPACT DRIVEN --- */}
            <div className="relative w-full self-stretch border-t border-[#1a1a1a]">

              {/* Wrapper Absolut untuk 2 Ikon (Tidak Sticky, terikat pada atap wrapper) */}
              <div className="absolute -top-14 -left-28 flex flex-row z-20">
                {/* Kotak Tas (Menggantung di luar kiri) */}
                <div className="w-14 h-14 bg-white border border-[#1a1a1a] border-b-0 flex items-center justify-center">
                  <Briefcase className="text-[#1a1a1a] w-6 h-6" />
                </div>
                {/* Kotak Gerigi (Rata dengan ujung kiri kotak hitam) */}
                <div className="w-14 h-14 bg-[#1a1a1a] flex items-center justify-center">
                  <Settings className="text-white w-7 h-7 animate-spin" />
                </div>
              </div>

              {/* Kotak Gelap (Sticky) */}
              <div className="bg-[#1a1a1a] text-white p-6 md:p-8 pt-6 md:pt-8 sticky top-24 md:top-28 h-fit w-full -mt-14 z-10">
                {/* Teks Konten */}
                <h3
                  className="text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] mb-4"
                  style={{ fontFamily: 'Impact, Arial, sans-serif' }}
                >
                  IMPACT DRIVEN
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-snug max-w-[200px] md:max-w-[260px] text-justify">
                  Delivering highly performant & maintainable web solutions
                </p>
              </div>

            </div>

          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
