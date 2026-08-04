import { useEffect } from 'react';

export const useRipple = () => {
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const rippleElement = target.closest('.interactive-ripple') as HTMLElement;
      
      if (!rippleElement) return;

      const rect = rippleElement.getBoundingClientRect();
      const circle = document.createElement('span');
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add('ripple');

      const existingRipple = rippleElement.querySelector('.ripple');
      if (existingRipple) {
        existingRipple.remove();
      }

      rippleElement.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 600);
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);
};
