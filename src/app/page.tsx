import Hero from "../../components/hero"
import AboutMission from "../../components/aboutmission"
import Categorysect from "../../components/category"
export default function App() {
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <AboutMission />
      {/* @ts-expect-error Async Server Component */}
      <Categorysect />
    </main>
  )
}
