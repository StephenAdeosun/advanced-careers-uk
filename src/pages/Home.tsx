import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideBar";
import WeekLesson from "../components/WeekLesson";
import WorkObjective from "../components/WorkObjective";
import RelatedCourses from "../components/RelatedCourses";
import Footer from "../components/footer";

function Home() {
  return (
    <div>
      <Nav />
      <Navbar />
      <Topbar />
      <SearchBar />
      <div className="flex flex-col gap-[40px] md:flex-row">
        <Sidebar />
        <WeekLesson />
        <WorkObjective />
      </div>
      <RelatedCourses />
      <Footer />
    </div>
  );
}

export default Home;
