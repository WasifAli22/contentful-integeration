import Hero from "../../components/hero"
import AboutMission from "../../components/aboutmission"
import Categorysect from "../../components/category"
import Started from "../../components/started"
import Author from "../../components/author"
import Teams from "../../components/team"
export default function App() {
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <AboutMission />
      {/* @ts-expect-error Async Server Component */}
      <Categorysect />
      {/* @ts-expect-error Async Server Component */}
      <Started />
      {/* @ts-expect-error Async Server Component */}
      <Author />
      <Teams />
    </main>
  )
}
