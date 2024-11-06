import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ShadowDom = ({
  children,
  styles = [],
}: {
  children: React.ReactNode;
  styles?: string[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const shadow = ref.current.attachShadow({ mode: "open" });

    styles.forEach((style) => {
      const styleElement = document.createElement("style");
      styleElement.textContent = style;
      shadow.appendChild(styleElement);
    });

    setShadowRoot(shadow);
  }, [styles]);

  return (
    <div ref={ref}>{shadowRoot && createPortal(children, shadowRoot)}</div>
  );
};

export default ShadowDom;
