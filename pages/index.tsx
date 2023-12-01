import type { NextPage } from "next";
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import PerchDesktop from "../assets/PerchDesktop.png";
import EdugatorDesktop from "../assets/EdugatorDesktop.png";
import PathmasterDesktop from "../assets/PathmasterDesktop.png";
import LumaDesktop from "../assets/LumaDesktop.png";
import ResqDesktop from "../assets/ResqDesktop.png";
import TacopediaDesktop from "../assets/TacopediaDesktop.png";
import UFCircle from "../assets/UFCircle.png";
import DKCircle from "../assets/DKCircle.png";
import NameTag from "../components/NameTag";
import { SocialIcon } from "react-social-icons";
import { ArrowRightIcon } from "@heroicons/react/outline";
import AnimateInView from "../components/AnimateInView";
import PostItNote from "../components/PostItNote";
import Twemoji from "../components/Twemoji";

const SOCIAL_CLASSNAME =
  "opacity-80 transition hover:opacity-100 hover:-translate-y-[3px]";
const SOCIAL_STYLE = { height: 40, width: 40 };

const Home: NextPage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start bg-slate-50 pb-20">
      <div className="flex h-[90vh] w-full max-w-4xl flex-col items-center justify-center px-10">
        <AnimateInView delay={0}>
          <NameTag />
        </AnimateInView>
        <AnimateInView className="flex flex-col items-center" delay={0.5}>
          <h1 className="font-inter px-6 text-center text-gray-500 sm:px-0 sm:text-lg">
            Creative developer, wannabe nomad, and taco enthusiast.
          </h1>
        </AnimateInView>
        <AnimateInView delay={1} className="mt-6 flex flex-row space-x-4">
          <AnimateInView delay={1.2}>
            <SocialIcon
              network="github"
              url="https://github.com/digitdustin"
              className={SOCIAL_CLASSNAME}
              style={SOCIAL_STYLE}
            />
          </AnimateInView>
          <AnimateInView delay={0.9}>
            <SocialIcon
              network="linkedin"
              url="https://linkedin.com/in/dustinkarp"
              className={SOCIAL_CLASSNAME}
              style={SOCIAL_STYLE}
            />
          </AnimateInView>
          <AnimateInView delay={0.6}>
            <SocialIcon
              network="twitter"
              url="https://twitter.com/dkarpart"
              className={SOCIAL_CLASSNAME}
              style={SOCIAL_STYLE}
            />
          </AnimateInView>
          <AnimateInView delay={0.9}>
            <SocialIcon
              network="youtube"
              url="https://youtube.com/channel/UC8yGvmSxpuglOAnE6gF4LwA"
              className={SOCIAL_CLASSNAME}
              style={SOCIAL_STYLE}
            />
          </AnimateInView>
          <AnimateInView delay={1.2}>
            <SocialIcon
              network="email"
              url="mailto:dustinkarp52@gmail.com"
              className={SOCIAL_CLASSNAME}
              style={SOCIAL_STYLE}
            />
          </AnimateInView>
        </AnimateInView>
      </div>
      <AnimateInView className="flex h-auto w-full max-w-4xl flex-col items-center justify-start space-y-7 bg-slate-50 px-4 pt-10 pb-5">
        <div className="flex w-full flex-col sm:flex-row">
          <div className="space-y-4">
            <h2 className="w-full text-xl font-semibold sm:text-2xl">
              About Me
            </h2>
            <h3 className="w-full sm:text-lg">
              <div className="flex flex-row items-center">
                <div className="mr-3 h-8 w-8 sm:h-10 sm:w-10">
                  <Twemoji emoji="🎓" />
                </div>
                I go to school at 
                <a
                  className="font-semibold underline"
                  href="https://www.ufl.edu"
                >
                  University of Florida
                </a>
              </div>
            </h3>
            <h3 className="w-full sm:text-lg">
              <div className="flex flex-row items-center">
                <div className="mr-3 h-8 w-8 sm:h-10 sm:w-10">
                  <Twemoji emoji="👑" />
                </div>
                I currently work at 
                <a
                  className="font-semibold underline"
                  href="https://www.marketplace.draftkings.com"
                >
                  DraftKings
                </a>
              </div>
            </h3>
            <h3 className="w-full sm:text-lg">
              <div className="flex flex-row items-center">
                <div className="mr-3 h-8 w-8 sm:h-10 sm:w-10">
                  <Twemoji emoji="✍️" />
                </div>
                Currently Building: 
                <a
                  className="font-semibold underline"
                  href="https://www.getperch.io"
                >
                  Perch
                </a>
              </div>
            </h3>
            <h3 className="w-full sm:text-lg">
              <div className="flex flex-row items-center">
                <div className="mr-3 h-8 w-8 sm:h-10 sm:w-10">
                  <Twemoji emoji="📚" />
                </div>
                Currently Reading: 
                <a
                  className="font-semibold underline"
                  href="https://read.amazon.com/kp/embed?asin=B079WM7KLS&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_T1ZSVW23Z8PRMGRN94PC"
                >
                  21 Lessons
                </a>
              </div>
            </h3>
          </div>
          <div className="flex w-full flex-1 flex-col space-y-4 sm:items-end sm:text-lg">
            <h2 className="mt-10 w-full text-xl font-semibold sm:mt-0 sm:text-right sm:text-2xl">
              My Hobbies
            </h2>
            <div className="flex flex-row items-center">
              • Magic
              <div className="ml-3 h-8 w-8 sm:h-10 sm:w-10">
                <Twemoji emoji="🃏" />
              </div>
            </div>
            <div className="flex flex-row items-center">
              • Fitness
              <div className="ml-3 h-8 w-8 sm:h-10 sm:w-10">
                <Twemoji emoji="🏋️" />
              </div>
            </div>
            <div className="flex flex-row items-center">
              • Cooking
              <div className="ml-3 h-8 w-8 sm:h-10 sm:w-10">
                <Twemoji emoji="🍳" />
              </div>
            </div>
            <div className="flex flex-row items-center">
              • Videography
              <div className="ml-3 h-8 w-8 sm:h-10 sm:w-10">
                <Twemoji emoji="📹" />
              </div>
            </div>
          </div>
        </div>
      </AnimateInView>
      <AnimateInView
        threshold={0.05}
        className="flex h-auto w-full max-w-4xl flex-col items-center justify-start space-y-7 bg-slate-50 px-4 py-10"
      >
        <h2 className="w-full text-xl font-semibold sm:text-2xl">Projects</h2>
        <ProjectCard
          title="LUMA"
          description="Screen syncing for smartbulbs"
          backgroundColor="#282732"
          link="https://www.lifxluma.com"
          image={LumaDesktop}
        />
        <ProjectCard
          title="Edugator"
          description="Code submission & learning platform"
          backgroundColor="#1A2D77"
          link="https://www.edugator.app"
          image={EdugatorDesktop}
        />
        <ProjectCard
          title="Perch"
          description="Event parking, democratized"
          backgroundColor="#3D7EF6"
          link="https://www.getperch.io"
          image={PerchDesktop}
        />
        <ProjectCard
          title="resQ"
          description="Safety assistant in the palm of your hand"
          backgroundColor="#23A196"
          link="https://devpost.com/software/resq-3tng2a"
          image={ResqDesktop}
        />
        <ProjectCard
          title="Pathmaster"
          description="Pathfinding for grandmasters"
          color="#2E291D"
          backgroundColor="#FBD34C"
          link="https://www.pathmaster.rocks"
          image={PathmasterDesktop}
        />
        <ProjectCard
          title="Tacopedia"
          description="One bite... let's taco bout it"
          backgroundColor="#FF705D"
          link="#0"
          image={TacopediaDesktop}
          comingSoon={true}
        />
      </AnimateInView>
      <AnimateInView className="flex h-auto w-full max-w-4xl flex-col items-center justify-start space-y-7 bg-slate-50 px-4 pt-10 pb-5">
        <h2 className="w-full text-xl font-semibold sm:text-2xl">Contact</h2>
        <h3 className="w-full sm:text-lg">
          You can reach me 
          <a className="font-semibold" href="mailto:dustinkarp52@gmail.com">
            here
          </a>
          , but if it is urgent you can reach me 
          <a
            className="font-semibold"
            target={"_blank"}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            rel="noreferrer"
          >
            here
          </a>
        </h3>
      </AnimateInView>
      <AnimateInView className="relative flex w-full max-w-4xl items-center justify-center py-10">
        <div className="rotate-6">
          <PostItNote />
        </div>
      </AnimateInView>
    </div>
  );
};

export default Home;
