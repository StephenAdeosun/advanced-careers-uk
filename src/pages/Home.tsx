import WeekLesson from "../components/WeekLesson";
import WorkObjective from "../components/WorkObjective";
import RelatedCourses from "../components/RelatedCourses";
import Footer from "../components/footer";

function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <WeekLesson />
        <WorkObjective />
      </div>
      <RelatedCourses />
      <Footer />
    </div>
  );
}

export default Home;
