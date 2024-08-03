import Header from "../components/Header";
import bgIMG from "../assets/court.webp";
import west from "../assets/west-logo.png";
import east from "../assets/east-logo.png";

function HomePage() {
  return (
    <div>
      <section className="relative">
        <img src={bgIMG} className="w-screen relative" />
        <img src={west} className="w-96 absolute" />
        <img src={east} className="w-96 absolute" />
      </section>
    </div>
  );
}

export default HomePage;
