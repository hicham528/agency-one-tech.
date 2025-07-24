import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import mockup1 from '../../assets/mockup1.jpeg';
import mockup2 from '../../assets/mockup2.jpeg';
import mockup3 from '../../assets/mockup3.jpeg';

function Projects() {
  return (
    <div className='p-4 flex flex-col gap-4 justify-center items-center '>
      <h1 className="text-4xl font-bold capitalize text-[#252525]">
        our latest <span className="bg-[#b4d8e4] px-3 py-1 rounded-xl inline-block">project</span>
      </h1>
      <p className="text-[#5a5a5a] text-center mt-4 max-w-2xl mx-auto xl:text-md text-sm leading-relaxed font-medium">
        Discover some of the most recent projects we’ve worked on — combining design, technology, and innovation to bring ideas to life. Whether it's accounting tools, dashboards, or responsive websites, we build with precision and passion.
      </p>

      {/* mockups content */}
      <div className='flex xl:flex-row flex-col gap-8 justify-center items-center '>
        {/* First mockup */}
        <div className='xl:w-1/4 w-full'>
          <div className='relative'>
            <img src={mockup1} alt="CaraEcommerce" className='rounded-xl' />
            <Button
              variant="contained"
              className='bg-[#0184a0] absolute top-0 right-0 m-2 rounded-full shadow-md arrowbutton'
            >
              <ArrowOutwardIcon />
            </Button>
          </div>
          <h1 className="text-xl font-bold text-[#252525] capitalize">CaraEcommerce</h1>
          <p className="text-[#5a5a5a] mt-2 text-md leading-relaxed font-medium max-w-xl">
            CaraEcommerce is a modern and user-friendly platform designed to help you launch.
          </p>
        </div>

        {/* Second mockup */}
        <div className='xl:w-1/4 w-full'>
          <div className='relative'>
            <img src={mockup2} alt="Project Showcase" className='rounded-xl' />
            <Button
              variant="contained"
              className='absolute top-0 right-0 m-2 rounded-full shadow-md secarrowbutton'
            >
              see more
            </Button>
          </div>
        </div>

        {/* Third mockup */}
        <div className='xl:w-1/4 w-full'>
          <h1 className="text-xl font-bold text-[#252525] capitalize">HealthBridge</h1>
          <p className="text-[#5a5a5a] mt-2 text-md leading-relaxed font-medium max-w-xl">
            CareConnect is your trusted healthcare partner, offering virtual consultations.
          </p>
          <div className='relative'>
            <img src={mockup3} alt="HealthBridge" className='rounded-xl' />
            <Button
              variant="contained"
              className='bg-[#0184a0] absolute top-0 right-0 m-2 rounded-full shadow-md arrowbutton'
            >
              <ArrowOutwardIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;