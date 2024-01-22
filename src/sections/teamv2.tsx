import React from "react";
import TeamData from "public/assets/team/assets.json";
import { cn } from "src/lib/utils";
import linkedinIcon from "public/assets/team/linkedin.svg";
import twitterIcon from "public/assets/team/twitter.svg";
import ImageWithFallback from "src/components/image";

const TeamV2: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const teamMember = Object.values(TeamData)[selectedIndex];
  return (
    <div id="team_section">
      <span className="block text-center text-neutrals-100 font-bold heading-xxs lg:heading-xs lg:heading-sm">
        Realms of glory
      </span>
      <h1 className="heading-md lg:heading-2lg lg:heading-3lg font-bold text-primary-85 text-center mb-16 lg:mb-16">
        Meet our team
      </h1>
      <div className="px-8 lg:px-32">
        <div className="flex overflow-x-auto gap-x-16 mb-20">
          {Object.values(TeamData).map((member, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="w-[14rem] h-[19.75rem] bg-neutrals-1 cursor-pointer flex-none rounded"
              style={{ flex: "0 0 auto" }}
            >
              <ImageWithFallback
                src={member.image}
                alt="profile_photo"
                className={cn(
                  "w-full h-full rounded",
                  selectedIndex !== index && "grayscale"
                )}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-12">
          <div className="col-span-1 text-center md:text-left lg:col-span-3">
            <h3 className="text-green-30 font-bold heading-lg lg:heading-xl mb-5">
              {teamMember.name}
            </h3>
            <span className="text-left text-primary-90 heading-3xxs font-bold">
              {teamMember.role}
            </span>
          </div>
          <div className="col-span-1 mt-4 lg:col-start-6 lg:col-span-7">
            <p className="text-neutrals-70 body-md whitespace-pre-line">
              {teamMember.description}
            </p>
            <div className="flex space-x-5 mt-8 md:mt-2">
              <a href={teamMember.linkedin} target="_blank">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href={teamMember.twitter} target="_blank">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamV2;
