/**
 * Scroll to a section by id, aligned exactly under the fixed header.
 * Uses measured header height (not fixed rem) so it stays accurate on all screens.
 *
 * Re-applies scroll with behavior 'auto' after layout settles (images/fonts below the fold
 * change document height until loaded — without this, the first scroll target can be wrong).
 */
export function scrollToSection(sectionId) {
  const id = sectionId?.replace(/^#/, '');
  if (!id || typeof document === 'undefined') return;

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const gap = 6;

  const computeTargetY = () => {
    const el = document.getElementById(id);
    if (!el) return null;
    const header = document.querySelector('header');
    const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset ?? document.documentElement.scrollTop ?? 0;
    const elementTop = rect.top + scrollTop;
    return Math.max(0, elementTop - headerHeight - gap);
  };

  const scrollToTarget = (behavior) => {
    const targetY = computeTargetY();
    if (targetY === null) return;
    window.scrollTo({ top: targetY, left: 0, behavior });
  };

  scrollToTarget(prefersReduced ? 'auto' : 'smooth');

  if (!prefersReduced) {
    const snap = () => scrollToTarget('auto');
    [200, 500, 1200].forEach((ms) => window.setTimeout(snap, ms));
    if (document.readyState !== 'complete') {
      window.addEventListener('load', snap, { once: true });
    }
  }

  try {
    window.history.replaceState(null, '', `#${id}`);
  } catch {
    /* ignore */
  }
}
