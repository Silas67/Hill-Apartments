import { useEffect } from "react";
import Lenis from "lenis";

// Module-level handle to the live instance. Lenis drives scrolling itself, so
// `overflow: hidden` on <body> does not stop it — anything that needs to lock
// the page (the mobile menu) has to talk to the instance directly.
let instance = null;

export const stopScroll = () => instance?.stop();
export const startScroll = () => instance?.start();

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, duration: 2 });
    instance = lenis;

    // Keep the frame id so the loop can actually be cancelled. Previously this
    // re-scheduled itself unconditionally and cleanup only destroyed the Lenis
    // instance, so every navigation left another loop running forever against
    // a destroyed object.
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      if (instance === lenis) instance = null;
    };
  }, []);
};

export default useLenis;
