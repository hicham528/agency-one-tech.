import Button from '@mui/material/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import homeBanner from '../../assets/pexels-fauxels-3184669.jpg';

{/* =================accordion mui============ */ }
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function AboutAgency() {

    const dataAcordion = [
        {
            id: 1,
            number: "07",
            title: "years of experience",
            paragraph:
                "With over 7 years in the industry, we’ve built a solid reputation by delivering consistent results and adapting to evolving technologies.",
        },
        {
            id: 2,
            number: "90+",
            title: "project companies",
            paragraph:
                "We have successfully collaborated with more than 90 companies, ranging from startups to international enterprises, to bring their digital visions to life.",
        },
        {
            id: 3,
            number: "60+",
            title: "our clients",
            paragraph:
                "Over 60 satisfied clients have trusted us with their digital and financial solutions, building long-term partnerships based on results and innovation.",
        },
        {
            id: 4,
            number: "10+",
            title: "services providing",
            paragraph:
                "From UI/UX design and web development to accounting automation and digital strategy, we offer a diverse range of services tailored to your needs.",
        },
    ];


    return (
        <div className="p-8 flex flex-col gap-4 ">
            {/* ===================header section======================== */}
            <div className="flex xl:flex-row flex-col justify-between items-center w-full">
                <div className="flex xl:flex-row flex-col justify-between items-center w-full gap-4">
                    <h1 className="text-4xl text-[#252525] capitalize font-semibold" style={{ lineHeight: "60PX" }}>About <span className="bg-[#b4d8e4] rounded-xl p-2 "> our<br /> agency </span>
                        <button className='rounded-full m-2' style={{ border: "solid #252525 2px ", width: "100PX" }}>
                            <ArrowForwardIcon className='text-[#0184a0] ArrowForwardIcon' />
                        </button>
                    </h1>

                    <p className="text-[#5a5a5a] text-md max-w-xl leading-relaxed font-semibold">
                        We are a forward-thinking digital and accounting agency focused on merging
                        innovative web technologies with financial expertise. From UI/UX design to
                        building automation tools for accounting, our goal is to simplify and
                        modernize your workflow.
                    </p>
                </div>

            </div>
            {/* ====================bottom side====================== */}
            <div className='flex gap-4 xl:flex-row items-center flex-col w-full'>
                {/* ===============img side================= */}
                <div className="relative xl:w-1/2 w-full">
                    <img
                        src={homeBanner}
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

                <div className=' flex flex-col xl:w-1/2 w-full'>
                    {dataAcordion.map((acc, index) => (
                        <Accordion className='bg-[#fbfbfb] rounded-xl' key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='text-[#0184a0]' />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <div className='flex gap-2 items-center'>
                                    <Typography component="span" style={{ fontSize: "3rem" }} className='text-4xl font-bold text-[#0184a0]'>{acc.number}</Typography>
                                    <Typography component="span" style={{ fontWeight: "900" }} className='text-4xl font-bold text-[#0184a0]'>{acc.title}</Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className='text-gray-600 font-semibold'>
                                {acc.paragraph}
                            </AccordionDetails>
                        </Accordion>
                    ))}



                </div>
            </div>
        </div>
    )
}

export default AboutAgency
