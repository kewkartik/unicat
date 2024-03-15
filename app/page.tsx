import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { LineChartHero } from "@/components/graph"
import Footer from "@/components/Footer";
import { Globe } from "@/components/globe";

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
          <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-6xl px-3">
            <Header />
            <Globe />
            <main className="flex-1 flex flex-col gap-6">
              <h2 className="font-bold text-4xl mb-4">Next steps</h2>
              {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
            </main>
            <pre>  
            <p>Test data from the db</p>
            {notes && notes.map(note => (
              <div key={note.id}>{note.id}</div>
            ))}</pre>
           {/* <LineChartHero /> */}
          </div>
      <Footer />
    </div>
  );
}


