import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar";
import Hero from "../components/Hero/Hero";
import HeroStats from "../components/Hero/HeroStats";

function Home() {
  return (
    <Layout>
      <Sidebar />
       <Hero
       title="Título"
       subtitle="Subtitulo"
      />
    </Layout>
  );
}

export default Home;