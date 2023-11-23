import React from "react";
import StepperIndicator, {
  StepperContent,
  StepperTitle,
} from "src/components/stepper";
import TeamData from "public/assets/team/assets.json";
import linkedinIcon from "public/assets/team/linkedin.svg";
import twitterIcon from "public/assets/team/twitter.svg";
import useScreenSize from "src/hooks/useScreenSize";
import { cn } from "src/lib/utils";

interface TeamMemberProps {
  role: string;
  name: string;
  image: string;
  description: string;
  linkedin: string;
  twitter: string;
}

const TeamMember: React.FC<TeamMemberProps & { index: number }> = (props) => {
  const { role, name, image, description, linkedin, twitter, index } = props;
  const screenSize = useScreenSize();
  switch (screenSize) {
  case "xs":
    return (
      <React.Fragment>
        <div className="flex items-center -my-5">
          <StepperIndicator variant="blue" />
          <StepperTitle variant="blue">{role}</StepperTitle>
        </div>
        <StepperContent variant="blue">
          <h3 className="text-primary-90 font-bold heading-md mb-5">
            {name}
          </h3>
          <div className="w-[8.56rem] h-[9rem] relative">
            <img src={image} alt="profile_photo" className="w-full h-full" />
            <div className="absolute z-30 gradient-three w-full h-[50%] bottom-[0px]" />
          </div>
          <p className="text-primary-90 body-xs pr-12 mt-5">{description}</p>
          <div className="flex space-x-5 mt-3 mb-10">
            <a href={linkedin} target="_blank">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href={twitter} target="_blank">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </StepperContent>
      </React.Fragment>
    );
  default:
    return (
      <div className="flex-col w-fit mx-auto">
        <div className="flex items-center -my-5 w-fit">
          <StepperIndicator variant="blue" />
        </div>
        <StepperContent variant="blue">
          <div
            className={cn(
              "-ml-5 xl:ml-10 xl:w-[70rem]",
              index % 2 === 1 ? "flex flex-row-reverse" : "flex"
            )}
          >
            <div className="w-[14.56rem] h-[14.25rem] xl:w-[27.81rem] xl:h-[29.18rem]  shrink-0 relative">
              <img
                src={image}
                alt="profile_photo"
                className="w-full h-full"
              />
              <div className="absolute z-30 gradient-three w-full h-[50%] bottom-[0px]" />
            </div>
            <div className="ml-8 xl:ml-16 flex flex-col w-fit mt-5 xl:mt-16">
              <span className="heading-2xxs xl:heading-2md font-bold text-blue-80">
                {role}
              </span>
              <h3 className="text-primary-90 font-bold heading-md xl:heading-3lg">
                {name}
              </h3>
              <p className="text-primary-90 body-sm mt-5 md:mt-6 mb-5 max-w-sm md:max-w-md pr-10">
                {description}
              </p>
              <div
                className={cn(
                  "flex space-x-5 mt-auto xl:mt-32 pb-16 sm:pb-20 xl:pb-[14rem]",
                  index === Object.entries(TeamData).length - 1 && "pb-0"
                )}
              >
                <a href={linkedin} target="_blank">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href={twitter} target="_blank">
                  <img src={twitterIcon} alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </StepperContent>
      </div>
    );
  }
};

const Team = () => {
  return (
    <div id="team_section" className="mt-24">
      <span className="block text-center text-neutrals-100 font-bold heading-xxs lg:heading-xs xl:heading-sm">
        Realms of glory
      </span>
      <h1 className="heading-md lg:heading-2lg xl:heading-3lg font-bold text-primary-85 text-center mb-16 xl:mb-32">
        Meet our team
      </h1>
      {Object.entries(TeamData).map(([, member], index) => (
        <TeamMember key={index} index={index} {...member} />
      ))}
    </div>
  );
};

export default Team;
