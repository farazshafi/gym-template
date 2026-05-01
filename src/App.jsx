import { Toaster } from "@/components/ui/sonner";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {Hero} from "./components/sections/Hero";
import {About} from "./components/sections/About";
import {Stats} from "./components/sections/Stats";
import {Trainers} from "./components/sections/Trainers";
import {Equipment} from "./components/sections/Equipment";
import {Services} from "./components/sections/Services";
import {Pricing} from "./components/sections/Pricing";
import {Events} from "./components/sections/Events";
import {Gallery} from "./components/sections/Gallery";
import {Testimonials} from "./components/sections/Testimonials";
import {Contact} from "./components/sections/Contact";


const App = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Toaster theme="dark" position="top-center" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Trainers />
        <Equipment />
        <Services />
        <Pricing />
        <Events />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
