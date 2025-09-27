import { FAQ } from "./components/faq"
import { FeatureHighlight } from "./components/feature-highlight"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col items-center">
        <Hero />
        <FeatureHighlight />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
