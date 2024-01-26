import "./App.css";
import Separator from "./components/separator";
import BattlePack from "./sections/battlepack";
import Landing from "./sections/landing";
import Arena from "./sections/arena";
import BattleCard from "./sections/battlecard";
import BattleDeck from "./sections/battledeck";
import Oracle from "./sections/oracle";
import Enchancement from "./sections/enchantment";
import Treasure from "./sections/treasure";
import Nfts from "./sections/nfts";
import Inaugural from "./sections/inaugural";
import Tournament from "./sections/tournament";
import Roadmap from "./sections/roadmap";
import Faq from "./sections/faq";
import Footer from "./sections/footer";
import { NftsProvider } from "./providers/nfts";
import InauguralSections from "./components/inaugural_sections";
import TeamV2 from "./sections/teamv2";
import TermsConditions from "./sections/terms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./sections/privacy";
import Copyright from "./sections/copyright";

function App() {
  return (
    <NftsProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Landing />
                <Separator size="small" className="mt-20 md:mt-24 mb-3 md:mb-16 xl:mt-64" />
                <BattlePack />
                <Separator size="small" className="mt-8 md:mt-24 mb-3 md:mb-16" />
                <BattleCard />
                <Separator size="small" className="mt-8 md:mt-24 mb-3 md:mb-16" />
                <BattleDeck />
                <Separator size="small" className="mt-8 md:mt-24 mb-3 md:mb-16" />
                <Oracle />
                <Separator size="small" className="mt-8 md:mt-24 mb-3 md:mb-16" />
                <Enchancement />
                <Separator size="small" className="mt-12 md:mt-24 mb-3 md:mb-16" />
                <Arena />
                <Separator size="small" className="mt-20 md:mt-24 mb-3 md:mb-16" />
                <Tournament />
                <Separator size="small" className="mt-20 md:mt-24 mb-3 md:mb-16" />
                <Treasure />
                <Separator size="small" className="mt-8 mb-3" />
                <Nfts />
                <InauguralSections />
                <Separator size="small" className="mt-32 md:mt-24 mb-3 md:mb-16" />
                <Inaugural />
                <Separator size="small" className="mt-20 md:mt-24 mb-3 md:mb-16" />
                <Roadmap />
                <Separator size="small" className="mt-16 md:mt-24 mb-3 md:mb-16" />
                <TeamV2 />
                <Separator size="small" className="mt-8 md:mt-24 mb-3 md:mb-16" />
                <Faq />
                <Footer />
              </div>
            }
          ></Route>
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/copyright" element={<Copyright />}></Route>
        </Routes>
      </Router>
    </NftsProvider>
  );
}

export default App;
