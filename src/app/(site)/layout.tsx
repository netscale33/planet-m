"use client";
 
import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import GrainOverlay from "@/components/GrainOverlay";
import BackToTop from "@/components/BackToTop";
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";
 
gsap.registerPlugin(ScrollTrigger);
 
export default function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const rafId = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    });

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value as number, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    const observer = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });
    observer.observe(document.body);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Recalculate page height and scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      // Short timeout to allow Next.js DOM render to complete before resizing
      setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.resize();
        }
        ScrollTrigger.refresh();
      }, 150);
    } else {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    }
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      <GrainOverlay />
      <Preloader />
      <Navbar />
      <main style={{ flex: 1, paddingTop: 80 }}>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
