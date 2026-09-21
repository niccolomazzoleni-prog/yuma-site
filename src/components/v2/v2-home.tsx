import {
  V2BeforeAfter,
  V2Cta,
  V2Footer,
  V2Hero,
  V2Nav,
  V2Possibilities,
  V2Process,
  V2Products,
  V2Stats,
  V2Team,
} from "@/components/v2/sections"
import { WhatsAppBar } from "@/components/home/whatsapp-bar"

// Versione 2 della home: linguaggio visivo ispirato a privy.io (bande alternate
// chiaro/scuro, card squadrate, titoli stretti). La versione 1 resta invariata.
export default function V2Home() {
  return (
    <div className="v2 bg-white">
      <V2Nav />
      <main>
        <V2Hero />
        <V2Stats />
        <V2BeforeAfter />
        <V2Possibilities />
        <V2Products />
        <V2Process />
        <V2Team />
        <V2Cta />
      </main>
      <V2Footer />
      <WhatsAppBar />
    </div>
  )
}
