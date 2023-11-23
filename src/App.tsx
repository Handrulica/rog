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

function App() {
  return (
    <div>
      <NftsProvider>
        <Landing />
        <Separator
          size="small"
          className="mt-16 sm:mt-20 md:mt-[9rem] mb-3 md:mb-6"
        />
        <BattlePack />
        <Separator size="small" className="mt-16 mb-3" />
        <Arena />
        <Separator size="small" className="mt-16 mb-3" />
        <BattleCard />
        <Separator size="small" className="mt-16 mb-3" />
        <BattleDeck />
        <Separator size="small" className="mt-32 mb-3" />
        <Oracle />
        <Separator size="small" className="mt-16 mb-3" />
        <Enchancement />
        <Separator size="small" className="mt-16 mb-3" />
        <Treasure />
        <Nfts />
        <Separator
          size="small"
          className="mt-16 mb-3 sm:mt-20 sm:mb-4 md:mt-24 md:mb-5"
        />
        <Inaugural />
        <InauguralSections />
        <Separator size="small" className="mt-24 mb-3" />
        <Tournament />
        <Separator size="small" className="mt-24 sm:mt-32 mb-3" />
        <Roadmap />
        <Separator size="small" className="mt-24 sm:mt-32 mb-3" />
        <TeamV2 />
        <Separator size="small" className="mt-24 sm:mt-32 mb-3" />
        <Faq />
        <Footer />
      </NftsProvider>
    </div>
  );
}

export default App;
