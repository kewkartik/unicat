import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import styles from './page.module.css'
import Project from '@/components/club/club';
import { LineChartHero } from "@/components/graph"
import Footer from "@/components/Footer";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import React from "react";
import { DonutChartHero } from "@/components/donuts";
import { DonutChartHeros } from "@/components/donutsother";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Mask from '@/components/mask/page';
import ZoomParallax from '@/components/zoomparallax/page';
import { BarListHero } from "@/components/barklist";
import ImageCard from "@/components/imagecard";
import ImageCardSecond from "@/components/imagecardsecond";
import ImageCardThird from "@/components/imagecardsthird";
export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };


const supabase = createClient();
const { data: notes } = await supabase.from('notes').select('id');

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-2 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
      <div>

    </div>
    <Mask/>
          <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-6xl px-3">
            <main className="flex-1 flex flex-col gap-6">
            <BentoGrid className="max-w-4xl mx-auto pb-80">
              {items.map((item : any, i : any) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
            <div className="py-2">
              <main className={styles.main}>
                <div className={styles.gallery}>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">College Clubs</p>
                    {
                      projects.map( project => {
                        return <Project project={project}/>
                      })
                    }
                </div>
              </main>
            </div>
            <div className="mt-[20px]">
              <main className={styles.main1}>
                <ZoomParallax />
              </main>
            </div>
            </main>
              {/* 
            <pre> 
            <p>Test data from the db</p>
            {notes && notes.map(note => (
              <div key={note.id}>{note.id}</div>
            ))}</pre>
            <LineChartHero /> 
           */}
          </div>
      <Footer />
    </div>
  );
}


const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "",
    header: <ImageCardThird />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Campus literally in Nature's lap",
    description: "",
    header: <ImageCardSecond />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "",
    description: "",
    header: <ImageCard />,
    icon: '',
  },
  {
    title: "College Expenditure",
    description:
      "",
    header: <LineChartHero />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Gender Ratio",
    description: "",
    header: <DonutChartHero/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "General Feeling of Students",
    description: "",
    header: <DonutChartHeros />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Computer Science",
    description: "Placements Statistics",
    header: <BarListHero />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

const projects = [
  {
    title1: "Media",
    title2: "Council",
    src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710597856/IIT%20HYD/IIT%20HYD%20MEDIA%20COUNCIL.png"
  },
  {
    title1: "Ce",
    title2: "Pheid",
    src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710597828/IIT%20HYD/IIT%20HYD%20CEPHEID.png"
  },
  {
    title1: "Electro",
    title2: "Nica",
    src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710597794/IIT%20HYD/IIT%20HYD%20ELEKTRONICA.png"
  },
  {
    title1: "GLI",
    title2: "TCH",
    src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710597767/IIT%20HYD/IIT%20HYD%20GLITCH.png"
  },
  {
    title1: "PRAK",
    title2: "RITI",
    src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710597750/IIT%20HYD/IIT%20HYD%20PRAKRITI.png"
  },
  {
    title1: "KLU",
    title2: "DGE",
    src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710597714/IIT%20HYD/IIT%20HYD%20KLUDGE.png"
  },
]