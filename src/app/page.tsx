import Intro from "./components/Intro/Intro";
import IntroText from "./components/IntroText/IntroText";
import Advantages from "./components/Advantages/Advantages";
import Services from "./components/Services/Services";

export default function Page() {
  return (
  <main>
    <Intro />
    <IntroText />
    <Services />
    <Advantages />
  </main>
  );
}