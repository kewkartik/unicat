import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { HeroScroll } from "@/components/home-scroll";
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
          </div>
          {/*}
            <main className="flex-1 flex flex-col gap-6">
              <h2 className="font-bold text-4xl mb-4">Next steps</h2>
              {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
            </main>
          
            <pre>  
            <p>Test data from the db</p>
            {notes && notes.map(note => (
              <div key={note.id}>{note.id}</div>
            ))}</pre>
           */}
           <HeroScroll />

           <blockquote className="text-xl italic font-semibold text-gray-900 max-w-3xl pb-32">
              <svg className="w-8 h-8 text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>
              <a href="/colleges/iiith">"Checkout the live page for IIIT Hyderabad, Click here"</a>
          </blockquote>

      <Footer />
    </div>
  );
}


