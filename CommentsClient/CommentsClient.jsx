import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';
import avatr1 from '../../assets/avatr1.jpeg';
import avatr2 from '../../assets/avatr2.jpeg';
import avatr3 from '../../assets/avatr3.jpeg';
import avatr4 from '../../assets/avatr4.jpeg';
import avatr5 from '../../assets/avatr5.jpeg';
import avatr6 from '../../assets/avatr6.jpeg';
import avatr7 from '../../assets/avatr7.jpeg';
import avatr8 from '../../assets/avatr8.jpeg';

function CommentsClient() {
 const dataComment = [
  {
    id: 1,
    img: avatr1,
    name: 'Omar Chraibi',
    poste: 'Software Engineer',
    reviews: '5.0',
    comment: 'Very user-friendly platform. I booked a consultation in less than 2 minutes. Excellent service!'
  },
  {
    id: 2,
    img: avatr2,
    name: 'Youssef Benali',
    poste: 'University Professor',
    reviews: '5.0',
    comment: 'The medical articles are well-researched and trustworthy. I always check this site first.'
  },
  {
    id: 3,
    img: avatr3,
    name: 'Mohamed Laaroussi',
    poste: 'General Practitioner',
    reviews: '5.0',
    comment: 'As a doctor, I appreciate how this platform helps patients connect with the right specialists easily.'
  },
  {
    id: 4,
    img: avatr4,
    name: 'Driss Hamzaoui',
    poste: 'Pharmacist',
    reviews: '5.0',
    comment: 'The medication reminders and health tracking tools are incredibly helpful for chronic patients.'
  },
  {
    id: 5,
    img: avatr5,
    name: 'Karim Meziane',
    poste: 'Civil Engineer',
    reviews: '5.0',
    comment: 'I used this site during a work trip abroad and got quick access to reliable online consultations.'
  },
  {
    id: 6,
    img: avatr6,
    name: 'Anas El Amrani',
    poste: 'Entrepreneur',
    reviews: '5.0',
    comment: 'The interface is clean and modern. I found everything I needed without wasting time.'
  },
  {
    id: 7,
    img: avatr7,
    name: 'Tariq Bouziane',
    poste: 'High School Teacher',
    reviews: '5.0',
    comment: 'The mental health section is amazing — professional support and clear guidance for everyone.'
  },
  {
    id: 8,
    img: avatr8,
    name: 'Sami Rahmani',
    poste: 'Fitness Coach',
    reviews: '5.0',
    comment: 'I often recommend this site to my clients for its accurate health tips and trusted resources.'
  }
];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="flex flex-col gap-8 p-4">
            {/* Header */}
            <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl text-[#252525] capitalize font-semibold leading-tight">
                        <span className="bg-[#b4d8e4] rounded-xl px-2 py-1">why</span> our customers<br />
                        think <span className="bg-[#b4d8e4] rounded-xl px-2 py-1">we are best</span>
                    </h1>
                    <Button variant="outlined" className="w-[100px] border-[#252525] text-[#0184a0]">
                        <ArrowForwardIcon />
                    </Button>
                </div>

                <p className="text-[#5a5a5a] text-md max-w-xl leading-relaxed font-semibold">
                    We are committed to delivering high-quality digital solutions tailored to your business goals.
                    From UI/UX design and web development to accounting automation, we combine innovation with precision to help you grow and succeed.
                </p>
            </div>

            {/* Slider */}
            <div className="slider-container mt-4" style={{ minHeight: "350px", overflow: "hidden" }}>
                <Slider {...settings} className='flex gap-4'>
                    {dataComment.map((com) => (
                        <div key={com.id} className="bg-[#ffff]   rounded-xl shadow-md p-6 ml-4 flex flex-col justify-between h-[230PX]" >
                            {/* User info */}
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <img
                                        src={com.img}
                                        alt={`Avatar of ${com.name}`}
                                        className="w-[70px] h-[70px] rounded-full object-cover"
                                    />
                                    <div>
                                        <h2 className="text-sm text-[#0184a0] font-semibold">{com.name}</h2>
                                        <p className="text-sm text-[#252525]">{com.poste}</p>
                                    </div>
                                </div>
                                <div className="flex xl:flex-row flex-col items-center gap-2">
                                    <span className="font-bold">{com.reviews}</span>
                                 <div className='flex'>
                                       {[...Array(Math.round(Number(com.reviews)))].map((_, i) => (
                                        <StarIcon key={i} className="text-yellow-500" fontSize="small" />
                                    ))}
                                 </div>
                                </div>
                            </div>

                            {/* Comment */}
                            <p className="mt-4 text-sm text-[#444] leading-relaxed">
                                {com.comment}
                            </p>

                            {/* Button */}
                            <div className="mt-4 text-right">
                                <Button variant="contained" className="rounded-full" size="small">
                                    <ArrowOutwardIcon />
                                </Button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default CommentsClient;
