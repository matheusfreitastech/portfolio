import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <Layout>
      <Sidebar />

      <main className="flex-1 p-10">
        <h1 className="text-5xl font-bold">
          Home
        </h1>
      </main>
    </Layout>
  );
}

export default Home;