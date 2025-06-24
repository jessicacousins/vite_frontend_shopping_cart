import { Parallax } from "react-scroll-parallax";
import "./ParallaxSection.css";

export default function ParallaxSection({
  imageUrl,
  height = "60vh",
  children,
}) {
  return (
    <Parallax speed={-20}>
      <section
        className="parallax-section"
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: height,
        }}
      >
        <div className="parallax-overlay"></div>
        <div className="parallax-content">{children}</div>
      </section>
    </Parallax>
  );
}
