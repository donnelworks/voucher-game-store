import { useEffect } from "react";
import AOS from "aos";
import {
  FeaturedGame,
  FeaturedStep,
  Footer,
  Header,
  NavBar,
  Reached,
  Story,
} from "../components/organisms";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <FeaturedStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
