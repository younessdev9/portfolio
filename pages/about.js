import SEO from "components/SEO";
import About from "components/About";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        pageDescription="Hi there! I’m Youness Hassani a self-taught Full-stack JavaScript/TypeScript developer"
        image="/homeFrame.png"
      />
      <About />
    </>
  );
}
