# Homepage animation integration

`src/components/home/HomeMotion.tsx` owns the GSAP/ScrollTrigger lifecycle for the homepage. The page and its children remain server-rendered; this boundary supplies only animation behavior.

- Import GSAP and ScrollTrigger dynamically after mount.
- Scope selectors using the root ref and `gsap.matchMedia`.
- Revert the match-media context on unmount and motion-preference changes.
- Keep server HTML visible without JavaScript; never hide reveal content in CSS.
- Honour reduced motion and pause ambient movement on user request, when the hero leaves the viewport and when the document is hidden.
- Start ambient movement only once the entrance completes to avoid competing transform tweens.
- Future real numeric counters should use verified config values. Current stats are placeholders and have no counter animation.

See the official [ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) for integration details. There is no scroll hijacking, pinning, carousel or page transition system.
