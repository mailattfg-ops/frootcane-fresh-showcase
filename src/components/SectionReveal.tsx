import { useEffect, useRef, useState, ReactNode, forwardRef } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
}

const SectionReveal = forwardRef<HTMLDivElement, SectionRevealProps>(
  ({ children, className = "" }, _ref) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.12 },
      );
      if (innerRef.current) observer.observe(innerRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={innerRef}
        className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
          visible
            ? "opacity-100 translate-y-0 blur-0"
            : "opacity-0 translate-y-6 blur-[2px]"
        } ${className}`}
      >
        {children}
      </div>
    );
  },
);

SectionReveal.displayName = "SectionReveal";

export default SectionReveal;
