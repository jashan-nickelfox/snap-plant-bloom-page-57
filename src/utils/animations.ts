
export function setupScrollRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, 100);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((el) => {
    observer.observe(el);
  });
  
  return () => {
    revealElements.forEach((el) => {
      observer.unobserve(el);
    });
  };
}
