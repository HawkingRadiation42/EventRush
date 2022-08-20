import React from "react";
import "./OneirosComp.css";
import rectangle from "../assets/Rectangle.svg";
import sponsor1 from "../assets/Oneiros-Sponsors/image 1.svg";
import sponsor2 from "../assets/Oneiros-Sponsors/image 2.svg";
import sponsor3 from "../assets/Oneiros-Sponsors/image 3.svg";
import sponsor4 from "../assets/Oneiros-Sponsors/image 4.svg";
import sponsor5 from "../assets/Oneiros-Sponsors/image 5.svg";
import sponsor6 from "../assets/Oneiros-Sponsors/image 6.svg";
import poster from "../assets/Hack JKLU White Poster.svg";


const OneirosComp = () => {
  return (
    <div className="bg-gray-200">

      <div className="backDrop flex p-10">

        <div>
          <img src="{poster}" alt="" className="mt-12 h-11/12 poster z-20" />
        </div>
      </div>

    <div className="bg-white rounded-lg h-max w-11/12 m-10 mb-12 p-12 block">
          <h1 className="font-bold text-3xl">
            Overview
          </h1>
          <p className="mt-6">
          Oneiros is the annual cultural fest of Manipal University Jaipur. <br></br>
It is a 3 day long event which includes a DJ night on Day-1, stand-up comedy on Day-2 and live <br /> concert of renowned musicians on Day-3 the final day. 
          </p>
          <h1 className="font-bold text-3xl mt-6 mb-6">
            Rules and Regulations
          </h1>

          <p> <ul className="list-disc pl-8"> 
           <li> Proper dess code is compulsory. </li>
<li> No allowance to anyone who comes as an alcoholic. </li>
<li> Only the people with passes are allowed </li>
<li> No one is allowed to bring any undue substances to the fest. </li>
<li> Aggressiv behavious will not be tolerated. Anyone found doing so will be kicked out. </li>
<li> No one will be allowed in before the given time. </li>
<li> University students should carry their student ID with them. </li>
</ul>
</p>

<h1 className="font-bold text-3xl mt-6 mb-6">
            Events
          </h1>

          <div className="flex align-middle">
      <img src={rectangle} alt="title" className="max-w-xs" />
      <h2 className="ml-11 font-semibold text-2xl pt-2"> Day 1</h2>
            
          </div>
          <p> <ul className="list-disc pl-12 mt-6 mb-6">
         <li> The DJ night will be from 7:00p.m-11:00pm. On 16th October 2022. </li>
         <li>Nuclea will be the invited DJ. </li>
         <li>At the end everyone will get the Day-2 passes at the exit. </li>
          </ul>
          </p>

          <div className="flex align-middle">
      <img src={rectangle} alt="title" className="max-w-xs" />
      <h2 className="ml-11 font-semibold text-2xl pt-2"> Day 2</h2>
          </div>


          <p><ul className="list-disc pl-12 mt-6 mb-6">
     <li> The Stand-up Comedy night will be from 8:00p.m-10:00p.m. On 17th October 2022.</li>
     <li>Anhubhav Singh Bassi will be the invited Stand-Up Comadian. </li>
     <li>At the end everyone will get the Day-2 passes at the exit. </li>
        </ul>
      </p>


      <div className="flex align-middle">
      <img src={rectangle} alt="title" className="max-w-xs" />
      <h2 className="ml-11 font-semibold text-2xl pt-2"> Day 3</h2>
          </div>

          <p><ul className="list-disc pl-12 mt-6 mb-6">
          <li> The final Day will be the Live Concrt and will be from 9:00p.m-11:00p.m. On 18th October2022. </li>
          <li>Diljit Dosanjh will be the invited Artist for Live Concert.</li>
          <li>We hope you enjoyed the Event. </li>
        </ul>
      </p>


      <h1 className="font-bold text-3xl mt-6 mb-6">
            Our Partners
          </h1>
            
            <div className="flex">

            <img src={sponsor1} alt="title" className="w-2/12 h-2/12 p-2" />
            <img src={sponsor2} alt="title" className="w-2/12 h-2/12 p-2" />
            <img src={sponsor3} alt="title" className="w-2/12 h-2/12 p-2" />
            <img src={sponsor4} alt="title" className="w-2/12 h-2/12 p-2" />
            <img src={sponsor5} alt="title" className="w-2/12 h-2/12 p-2" />
            <img src={sponsor6} alt="title" className="w-2/12 h-2/12 p-2" />

            </div>
            
        </div>
    </div>
  );
};

export default OneirosComp;
