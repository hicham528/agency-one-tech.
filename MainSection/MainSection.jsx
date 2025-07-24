import Button from '@mui/material/Button';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import TokenIcon from '@mui/icons-material/Token';
import homePage from '../../assets/homePage.jpg';


function MainSection() {
    return (
        <div className='flex xl:flex-row flex-col p-8 gap-4 items-center justify-between h-[100vh] overflow-hidden'>
            {/* left side */}
            <div className='flex flex-col gap-4 xl:w-1/2 w-full'>
                <h1 className='xl:text-6xl text-3xl capitalize font-bold text-[#252525]'>stay ahead of the curve with our forward thinking</h1>
                <p className='text-md md:text-lg capitalize font-medium text-[#5a5a5a]'>
                    We build digital experiences that combine strategy, design, and technology to help your business thrive.
                </p>
                <Button variant="contained" style={{ background: "#0184A0", borderRadius: "20PX", width: "200PX" }} >explore more <SouthEastIcon /></Button>
                <p className='text-sm md:text-md uppercase font-semibold text-[#5a5a5a] tracking-wide'>
                    UI/UX Design &nbsp;•&nbsp; Web Development &nbsp;•&nbsp; Branding
                    &nbsp;•&nbsp; SEO &nbsp;•&nbsp; APP DEVELOPMENT &nbsp;•&nbsp; DIGITALE MARKETHING
                </p>
            </div>
            {/* rigth side */}

            <div className='flex flex-col xl:w-1/2 w-full p-4'>
                <div className="relative">
                    <img
                        src={homePage}
                        className="rounded-xl mt-8"
                        height={300}
                        width="100%"
                        alt="Homepage Banner"
                    />

                    <Button
                        variant="contained"
                        className="absolute right-0 bottom-10  flex justify-center items-center gap-2"
                        style={{
                            background: "#0184A0",
                            borderRadius: "20px",
                            width: "200px",
                        }}
                    >
                        watch tutorial <PlayCircleIcon />
                    </Button>
                </div>
                <div className='flex gap-4 -mt-6'>
                    <div className="flex flex-col gap-2 p-2 rounded-xl bg-[#0184a0] text-white shadow-md w-1/2">
                        <h1 className="text-4xl font-bold">+20</h1>
                        <h3 className="text-lg font-semibold">Successful Projects</h3>
                        <p className="text-sm textpar">  Delivered across different industries with cutting-edge solutions and satisfied clients worldwide.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 p-2 rounded-xl bg-[#252525] text-white shadow-md w-1/2">
                        <h1 className="text-6xl"><TokenIcon className=' icons' /></h1>
                        <h3 className="text-lg font-semibold">CodeOne</h3>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection
