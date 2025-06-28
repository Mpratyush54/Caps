import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Nav_bar />
      <main className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p>Welcome to the CAPS Dashboard. This is a protected area.</p>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;