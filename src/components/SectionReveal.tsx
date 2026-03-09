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
        { threshold: 0.12 }
      );
      if (innerRef.current) observer.observe(innerRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={innerRef}
        className={`transition-all duration-600 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } ${className}`}
      >
        {children}
      </div>
    );
  }
);

SectionReveal.displayName = "SectionReveal";

export default SectionReveal;
