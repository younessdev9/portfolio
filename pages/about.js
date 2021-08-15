import SEO from "components/SEO";
import About from "components/About";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        pageDescription="Hi there! I’m Youness Hassani a Full-stack JavaScript/TypeScript developer,I love solving real-life problems with software"
        image="/homeFrame.png"
      />
      <About />
    </>
  );
}
