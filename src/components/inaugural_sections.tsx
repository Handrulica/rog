import React from "react";
import Exchange from "src/sections/exchange";
import Forge from "src/sections/forge";
import Pandora from "src/sections/pandora";
import Separator from "./separator";
import Shrine from "./shrine";
import { useNftsContext } from "src/providers/nfts";

const InauguralSections: React.FC = () => {
  const { isNftSelected } = useNftsContext();
  return (
    <React.Fragment>
      <div id="shrine">
        {isNftSelected("shrine") && (
          <>
            <Separator size="small" className="mt-24 mb-3" />
            <Shrine />
          </>
        )}
      </div>
      <div id="hephaestus">
        {isNftSelected("hephaestus") && (
          <>
            <Separator size="small" className="mt-24 mb-3" />
            <Forge />
          </>
        )}
      </div>
      <div id="hermes">
        {isNftSelected("hermes") && (
          <>
            <Separator size="small" className="mt-24 sm:mt-32 mb-3" />
            <Exchange />
          </>
        )}
      </div>
      <div id="pandora">
        {isNftSelected("pandora") && (
          <>
            <Separator size="small" className="mt-12 mb-3" />
            <Pandora />
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default InauguralSections;
