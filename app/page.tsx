import Attributes from './_components/Attributes'
import Faq from './_components/Faq'
import Header from './_components/Header'
import Hero from './_components/Hero'
import Intro from './_components/Intro'
import Privacy from './_components/Privacy'
import Prizes from './_components/Prizes'
import Rules from './_components/Rules'
import Sponsors from './_components/Sponsors'
import Timeline from './_components/Timeline'


export default function Home() {
  return (
    <main className="">
      <Header/>
      <Hero/>
      <Intro/>
      <Rules/>
      <Attributes/>
      <Faq/>
      <Timeline/>
      <Prizes/>
      <Sponsors/>
      <Privacy/>
    </main>
  )
}
