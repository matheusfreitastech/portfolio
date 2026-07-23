import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar";
import Hero from "../components/Hero/HeroGrid";
import ProjectCard from "../components/FeaturedProjects/ProjectCard";
import ProjectGrid from "../components/FeaturedProjects/ProjectGrid";

function Home() {
  return (
    <Layout>
      <Sidebar />
      <main className="flex flex-1 flex-col overflow-y-auto">
        <Hero
          title="Matheus Freitas"
          subtitle="Desenvolvedor Fullstack | Apaixonado por tecnologia e inovação"
        />
        <section className="flex flex-col gap-8 p-12">
          <ProjectGrid />
        </section>
      </main>
    </Layout>
  );
}

export default Home;