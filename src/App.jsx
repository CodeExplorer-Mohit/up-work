// App.js
import BrowseTalentCategory from "./components/BrowseTalentCategory/BrowseTalentCategory";
import EnterpriseSuit from "./components/EnterpriseSuit";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HowToHire from "./components/HowToHire/HowToHire";
import Navbar from "./components/Navbar"; // Importing Navbar from the components directory
import SupportUkraine from "./components/SupportUkraine/SupportUkraine";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowToHire />
      <BrowseTalentCategory />
      <EnterpriseSuit />
      <SupportUkraine />
      <Footer />
    </div>
  );
};

export default App;
