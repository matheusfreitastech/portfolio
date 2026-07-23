import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar";
import Hero from "../components/Hero/HeroGrid";
import ProjectGrid from "../components/FeaturedProjects/ProjectGrid";

function Home() {
  return (
    <Layout>
      <main className="flex">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-y-auto">
        <Hero
          title="Matheus Freitas"
          subtitle="Engenheiro de Software & Pesquisador"
        />
        <section className="flex flex-1 flex-col overflow-y-auto">
          <ProjectGrid />
        </section>
        </div>
      </main>
    </Layout>
  );
}

export default Home;