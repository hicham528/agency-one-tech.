import Button from '@mui/material/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import homepageBanner from '../../assets/pexels-fauxels-3184416.jpg';

{/* =================accordion mui============ */ }
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Provider() {
    const dataAcordion = [
        {
            id: 1,
            number: "01",
            title: "UI/UX Design",
            firstTitle: "User-Centered Approach",
            firstParagraph:
                "We focus on designing interfaces that prioritize user experience, ensuring ease of navigation and interaction across all platforms.",
            secondTitle: "Responsive Layouts",
            secondParagraph:
                "Our designs adapt seamlessly to any screen size, delivering a consistent experience on mobile, tablet, and desktop devices.",
            therdTitle: "Design Systems",
            therdParagraph:
                "We build reusable UI components and design libraries to ensure brand consistency and faster development cycles.",
        },
        {
            id: 2,
            number: "02",
            title: "Web Development",
            firstTitle: "Modern Frameworks",
            firstParagraph:
                "We use powerful tools like React, Vite, and Tailwind CSS to develop fast, scalable, and maintainable websites.",
            secondTitle: "Performance Optimization",
            secondParagraph:
                "From lazy loading to code splitting, we optimize every line of code to ensure your site loads quickly and efficiently.",
            therdTitle: "Integration & APIs",
            therdParagraph:
                "We connect your site to external services like payment gateways, CRMs, or accounting tools to enhance functionality.",
        },
        {
            id: 3,
            number: "03",
            title: "Accounting Automation",
            firstTitle: "Custom Tools",
            firstParagraph:
                "We develop internal tools that automate recurring accounting tasks like invoice generation or budget tracking.",
            secondTitle: "Data Accuracy",
            secondParagraph:
                "Reduce manual errors with integrated validation and smart data processing features that keep records clean and compliant.",
            therdTitle: "Reports & Dashboards",
            therdParagraph:
                "Visual dashboards help you monitor KPIs, expenses, and tax reports in real-time using platforms like Google Sheets or custom UIs.",
        },
        {
            id: 4,
            number: "04",
            title: "Consulting & Strategy",
            firstTitle: "Business Analysis",
            firstParagraph:
                "We evaluate your current processes and identify key areas for digital improvement or automation.",
            secondTitle: "Tech Guidance",
            secondParagraph:
                "Not sure where to start? We advise on tools, stacks, and platforms tailored to your specific business model.",
            therdTitle: "Scalability Planning",
            therdParagraph:
                "Whether you're a startup or a growing company, we design strategies that scale with your goals and future vision.",
        },
    ];

    return (
        <div className="p-8 flex flex-col gap-4 ">
            {/* ===================header section======================== */}
            <div className="flex xl:flex-row flex-col justify-between items-center w-full">
                <div className="flex xl:flex-row flex-col justify-between items-center w-full gap-4">
                    <h1 className="text-4xl text-[#252525] capitalize font-semibold" style={{ lineHeight: "60PX" }}>we always <span className="bg-[#b4d8e4] rounded-xl p-2 "> provide<br /> best services </span>
                        <button className='rounded-full m-2' style={{ border: "solid #252525 2px ", width: "100PX" }}>
                            <ArrowForwardIcon className='text-[#0184a0] ArrowForwardIcon' />
                        </button>
                    </h1>

                    <p className="text-[#5a5a5a] text-md max-w-xl leading-relaxed font-semibold">
                        We are committed to delivering high-quality digital solutions tailored to your business goals.
                        From UI/UX design and web development to accounting automation, we combine innovation with precision to help you grow and succeed.
                    </p>
                </div>

            </div>
            {/* ====================bottom side====================== */}
            <div className='flex gap-4 xl:flex-row items-start flex-col w-full'>
                {/* ===============img side================= */}


                <div className=' flex flex-col xl:w-1/2 w-full xl:mt-8'>
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
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col'>
                                    <h1 className='font-bold text-[#252525] ml-8 capitalize'>{acc.firstTitle}</h1>
                                    <AccordionDetails className='text-gray-600 font-semibold'>
                                        {acc.firstParagraph}
                                    </AccordionDetails>
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='font-bold text-[#252525] ml-8 capitalize'>{acc.secondTitle}</h1>
                                    <AccordionDetails className='text-gray-600 font-semibold'>
                                        {acc.secondParagraph}
                                    </AccordionDetails>
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='font-bold text-[#252525] ml-8 capitalize'>{acc.therdTitle}</h1>
                                    <AccordionDetails className='text-gray-600 font-semibold'>
                                        {acc.therdParagraph}
                                    </AccordionDetails>
                                </div>
                            </div>
                        </Accordion>
                    ))}



                </div>
                <div className="relative xl:w-1/2 w-full">
                    <img
                        src={homepageBanner}
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
                        Get Started <ArrowForwardIcon />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Provider
