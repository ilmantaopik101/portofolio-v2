"use client";

import dynamic from 'next/dynamic';
import ProfileCard from '../components/ProfileCard';
import SplitText from '../components/SplitText';
import BlurText from '../components/BlurText';
import SmoothScroll from '../components/SmoothScroll';
import SpotlightCard from '../components/SpotlightCard';
import TiltedCard from '../components/TiltedCard'; 
import ScrambledText from '../components/ScrambledText';
import Antigravity from '../components/Antigravity'; // IMPORT ANTIGRAVITY BARU

// Load background secara dinamis tanpa SSR agar tidak error
const LightRays = dynamic(() => import('../components/background/LightRays'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-slate-950" />
});

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen w-full bg-slate-950 text-slate-100 selection:bg-blue-500/30 overflow-x-hidden">
        
        {/* Background Tetap Fixed dengan settingan warna Biru-mu */}
        <div className="fixed inset-0 z-0">
          <LightRays 
            raysOrigin="top-center"
            raysColor="#8003d3"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={2}
            fadeDistance={1}
            pulsating={true}
            followMouse={true}
            mouseInfluence={0.2}
          />
        </div>

        {/* --- HALAMAN 1 (HERO) --- */}
        <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center gap-12 w-full max-w-6xl mt-12 md:mt-0">
            <SplitText
              text="Welcome to My Portfolio"
              className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center"
              delay={60}
            />
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
              <ProfileCard
                name="Ilman Taopik"
                title="Computer Science"
                avatarUrl="/aing.jpeg"
                showUserInfo={false}
                enableTilt={true}
                behindGlowColor="rgba(62, 0, 133, 0.67)" // Settingan Ungu-mu
              />
              <div className="max-w-md text-center md:text-left">
                <BlurText
                  text="My name is Ilman Taopik, I am a computer engineering student at Persatuan Islam University, my skills are still limited to creating portfolios like this and I am quite proficient in databases. I am also learning how to use Linux, specifically Kali Linux, as I enjoy exploring things that pique my interest."
                  delay={100}
                  className="text-lg md:text-xl text-slate-300 leading-relaxed"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 animate-bounce opacity-50 text-xs font-mono uppercase tracking-widest text-white">
            Project?
          </div>
        </section>

        {/* --- HALAMAN 2 (PROJECTS BENTO) --- */}
        <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-start pt-32 px-4 bg-slate-900/40 backdrop-blur-sm">
          
          <div className="max-w-6xl w-full flex flex-col items-center text-center">
            
            <h2 className="text-4xl font-bold mb-16 text-white border-b border-blue-500 pb-2">
              My Project
            </h2>

            {/* Container Grid 3 Kolom Horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
              <SpotlightCard spotlightColor="rgba(225, 0, 255, 0.2)">
                <div className="flex flex-col gap-4">
                  <span className="text-4xl"></span>
                  <h3 className="text-2xl font-bold text-white">Portofolio-basic</h3>
                  <p className="text-slate-400"></p>
                </div>
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(255, 0, 255, 0.2)">
                <div className="flex flex-col gap-4">
                  <span className="text-4xl"></span>
                  <h3 className="text-2xl font-bold text-white">Backend-Training</h3>
                  <p className="text-slate-400"></p>
                </div>
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(255, 0, 255, 0.2)">
                <div className="flex flex-col gap-4">
                  <span className="text-4xl"></span>
                  <h3 className="text-2xl font-bold text-white">Portofolio-v2</h3>
                  <p className="text-slate-400"></p>
                </div>
              </SpotlightCard>
            </div>

            {/* --- TAMBAHAN TILTED CARD GEDE DI BAWAH KOTAK PROJECT --- */}
            <div className="mt-20 w-full flex justify-center pb-20 relative">
              
              {/* === PERBAIKAN SCRAMBLED TEXT === */}
              {/* Pakai -left-24 sampai -left-64 biar ditarik paksa ke pinggir kiri layar, dan dikasih w-[450px] biar teksnya ga patah */}
              <div className="hidden lg:flex absolute -left-10 lg:-left-24 xl:-left-64 top- flex-col items-start text-left w-[450px] pointer-events-none">
                <div className="pointer-events-auto">
                  <ScrambledText 
                    className="text-6xl xl:text-5xl font-extrabold text-white tracking-tight whitespace-nowrap"
                  >
                    GitHub Profile
                  </ScrambledText>
                  <p className="text-slate-400 text-base xl:text-lg leading-relaxed pr-10 transform translate-x-[50px] translate-y-[40px]">
                    Click the card to explore my repositories and contributions.
                  </p>
                </div>
              </div>
              {/* ============================== */}

              <a 
                href="https://github.com/ilmantaopik101" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer block"
              >
                <TiltedCard
                  imageSrc="/github-pp.jpg" 
                  altText="GitHub ilmantaopik101"
                  captionText="Visit My GitHub"
                  containerHeight="600px" 
                  containerWidth="600px"  
                  imageHeight="500px"     
                  imageWidth="500px"      
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true} 
                  overlayContent={
                    <p className="font-bold text-3xl md:text-4xl text-white bg-slate-900/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl">
                      @ilmantaopik101
                    </p>
                  }
                />
              </a>

              {/* === TAMBAHAN ANTIGRAVITY DI KANAN === */}
              <div className="hidden lg:flex absolute -right-10 lg:-right-24 xl:-right-64 top-1/2 -translate-y-1/2 w-[300px] h-[300px] xl:w-[450px] xl:h-[450px] pointer-events-none">
                <div className="w-full h-full pointer-events-auto">
                  <Antigravity 
                    color="#8003d3" 
                  />
                </div>
              </div>
              {/* ============================== */}

            </div>
            {/* --- SELESAI --- */}

          </div>
        </section>

      </main>
    </SmoothScroll>
  );
}