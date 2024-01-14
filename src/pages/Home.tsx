

import Sidebar from "../components/SideBar";
import WeekLesson from "../components/WeekLesson";
import WorkObjective from "../components/WorkObjective";
import RelatedCourses from "../components/RelatedCourses";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
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
