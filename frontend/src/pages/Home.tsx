import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";

function Home() {
  return (
    <Layout>
      <Sidebar />
       <Hero
        title="Transformando ideias em tecnologia."
        subtitle="Da eletrônica ao software, da pesquisa ao produto."
      />
    </Layout>
  );
}

export default Home;