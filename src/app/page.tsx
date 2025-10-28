import Intro from "./components/Intro/Intro";
import IntroText from "./components/IntroText/IntroText";
import Advantages from "./components/Advantages/Advantages";
import Services from "./components/Services/Services";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

export default function Page() {
  return (
  <main>
    <Intro />
    <IntroText />
    <Services />
    <Advantages />
    <FeedbackForm />
  </main>
  );
}