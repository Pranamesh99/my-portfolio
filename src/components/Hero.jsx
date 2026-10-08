import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/yash-hero.mp4';
import posterImage from '../assets/about/deepak-avatar.png';
import { usePortfolio } from '../context/PortfolioContext';

const Hero = () => {
  const { heroContent, personalInfo, statsData } = usePortfolio();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="top" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#1b0202] via-[#0d0101] to-black flex items-end">
      {/* Background Poster */}
      <img
        src={posterImage}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0 opacity-0 transition-opacity duration-1000 mix-blend-overlay opacity-30"
        onLoad={(e) => e.target.classList.remove('opacity-0')}
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10 pointer-events-none" />

      {/* Left Floating Contact Bar for Large Screens */}
      <div className="hidden lg:flex flex-col gap-5 fixed left-6 top-1/2 -translate-y-1/2 z-40 mix-blend-difference">
        <a
          href={`mailto:${personalInfo.emails.primary}`}
          className="text-white/70 hover:text-[#f50604] transition-all duration-300 transform hover:scale-125"
          aria-label="Email Yash"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        <a
          href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
          className="text-white/70 hover:text-[#f50604] transition-all duration-300 transform hover:scale-125"
          aria-label="Call Yash"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>

      {/* Content Container */}
      <div className="relative z-20 px-6 pt-32 pb-20 md:pb-[6%] md:px-12 lg:px-20 w-full flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left">
        {/* Left Side: Text, Stats, and Actions */}
        <div className="flex flex-col items-start text-left max-w-2xl lg:max-w-3xl w-full">

          {/* Academic Badge */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-red-500/40 backdrop-blur-md text-[11px] font-mono text-white/90 uppercase tracking-widest mb-4 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#f50604] animate-ping" />
            <span>{personalInfo.university.toUpperCase()} · {personalInfo.semester.toUpperCase()}</span>
          </div>

          {/* Mobile inline contacts */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center gap-4 mb-4 lg:hidden"
          >
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="text-white/80 hover:text-[#f50604] flex items-center gap-2 text-xs font-mono"
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{personalInfo.emails.primary}</span>
            </a>
          </div>

          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tight font-heading leading-tight drop-shadow-md"
          >
            {heroContent.greeting}, <br />
            <span className="font-editorial text-white font-normal tracking-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl mr-2">
              I build
            </span>
            <span className="text-[#f50604]">
              digital intelligence.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white/90 text-sm sm:text-base md:text-lg font-normal mb-6 max-w-xl leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
          >
            {heroContent.subtitle}
          </p>

          {/* Floating Fact Cards */}
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-xl mb-7"
          >
            {statsData.map((stat, i) => (
              <div
                key={i}
                className="bg-black/60 border border-white/15 backdrop-blur-md rounded-2xl p-3 flex flex-col justify-center hover:border-[#f50604]/50 transition-all duration-300"
              >
                <span className="text-xl sm:text-2xl font-black text-[#f50604] font-heading leading-tight">
                  {stat.num}
                </span>
                <span className="text-white text-[11px] font-bold tracking-wide mt-0.5">
                  {stat.label}
                </span>
                <span className="text-white/50 text-[9px] font-mono leading-tight">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <a
              href={heroContent.ctaPrimary.href}
              className="px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm rounded-full bg-[#f50604] text-white font-bold hover:bg-[#eb0803] transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(245,6,4,0.5)] uppercase tracking-wider font-mono"
            >
              {heroContent.ctaPrimary.text}
            </a>

            <a
              href={heroContent.ctaSecondary.href}
              className="px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm rounded-full bg-black/50 border border-white/30 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md uppercase tracking-wider font-mono"
            >
              {heroContent.ctaSecondary.text}
            </a>

            <a
              href={heroContent.ctaResume.href}
              download
              className="px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm rounded-full bg-transparent border border-white/40 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md flex items-center gap-2 font-mono"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>


      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
