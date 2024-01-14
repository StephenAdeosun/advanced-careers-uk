import Prerequisite from "../assets/Primary fill.svg";
import Video from "../assets/Video.svg";
function WeekLesson() {
  return (
    <div>
      <div className="mx-[24px] md:mx-0 ">
        <h1 className="text-[#000] text-[14px] font-[400]">Week 1</h1>
        <h1 className="text-[#000] text-[30px] font-[700]">Lesson One</h1>
        <img src={Video} alt="" />
      </div>

      <div className="max-w-[628px] mx-[24px] md:mx-0  mt-[26px] min-h-[1090px]">
        <div>
          <h1 className="text-[16px] font-[600] text-[#8C9196]">
            Lesson Overview
          </h1>
          <h1 className="text-[24px] font-[700] mt-[12px] text-[#202223]">
            Lesson one Objectives
          </h1>
          <h2 className="text-[20px] font-[600] mt-[12px] text-[#202223]">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-[14px] font-[400] mt-[12px] text-[#6D7175] max-w-[538px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <div className="mt-[94px]">
          <h1 className="text-[16px] font-[600] text-[#8C9196]">
            Outcome of the lesson
          </h1>
          <h1 className="text-[24px] font-[700] mt-[12px] text-[#202223]">
            Lesson one outcome
          </h1>

          <div className="flex gap-[30px] flex-col">
            {/* Align naming */}
            <div>
              <h2 className="text-[20px] font-[600] mt-[12px] text-[#202223]">
                Align naming with React component
              </h2>
              <p className="text-[14px] font-[400] mt-[12px] text-[#202223] max-w-[538px]">
                Align naming with the corresponding property or component in the
                Polaris React repo. Doing this helps designers and developers
                speak the same language and removes barriers to collaboration.
              </p>
            </div>

            {/* Save to version history */}
            <div className="c">
              <h2 className="text-[20px] font-[600]  text-[#202223]">
                Save to version history
              </h2>
              <p className="text-[14px] font-[400] mt-[12px] text-[#202223] max-w-[538px]">
                Use &ldquo;File -&gt; Save to Version History&rdquo; to keep
                track of what you have done. Using this feature allows you to
                hard save your work at a specific moment and add notes about
                what has changed. This takes the guess work out of remember
                things and gives you a safe spot to revert back to if something
                goes wrong later on.
              </p>
            </div>

            {/* Prerequisite */}

            <div className="bg-[#EAF3FF] flex gap-[16px] items-start max-w-[620px] min-h-[112px] rounded-[4px] p-[16px]">
              <div className="c">
                <img src={Prerequisite} alt="" />
              </div>
              <div className="c">
                <h1 className="text-[#202223] text-[14px] font-[400]">
                  Prerequisite
                </h1>
                <p className="text-[#202223] text-[14px] font-[400] mt-[8px]">
                  Changing some of the overrides is also a good idea. This way
                  if a channge you make is going to break a component you will
                  see it happen.
                </p>
              </div>
            </div>

            {/* Save to version history */}
            <div className="c">
              <h2 className="text-[20px] font-[600]  text-[#202223]">
                Follow formatting conventions
              </h2>
              <p className="text-[14px] font-[400] mt-[12px] text-[#202223] max-w-[538px]">
                Do your best to follow the layout and labeling conventions
                already in the UI Kit. This makes it easier to maintain over
                time and keeps our quality standards high.
              </p>
            </div>

            {/* Save to version history */}
            <div className="c">
              <h2 className="text-[20px] font-[600]  text-[#202223]">
              Test your changes
              </h2>
              <p className="text-[14px] font-[400] mt-[12px] text-[#202223] max-w-[538px]">
                It isn’t always clear how an component change will effect an
                existing component instance in someones file. One way to get a
                better sense of this is to drag out a few instances to the side
                of your canvas before you start working. Changing some of the
                overrides is also a good idea. This way if a channge you make is
                going to break a component you will see it happen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeekLesson;
