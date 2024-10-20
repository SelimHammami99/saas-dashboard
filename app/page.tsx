import LandingPage from "./landing-page";
import Footer from "./landing-page/footer";

export default function Home() {
  return (
    <main className="flex flex-col p-24 min-h-screen items-center justify-between">
      <LandingPage />
      <Footer />
    </main>
  );
}
