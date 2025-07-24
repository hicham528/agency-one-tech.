import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function ContactSec() {
    return (
        <div className='flex justify-center items-center p-4'>
            <div className="flex justify-center items-center flex-col p-8 rounded-xl xl:w-[80%] w-[100%] bg-[#b4d8e4] text-center gap-4">
                <h1 className="xl:text-3xl text-lg font-bold text-[#252525] capitalize">
                    Let’s make something great together!
                </h1>

                <p className="text-[#444] max-w-xl xl:text-md text-xs font-medium leading-relaxed">
                    Reach out to us for medical consultations, health advice, or to collaborate on healthcare solutions. Your well-being is our top priority.
                </p>

                <h3 className="xl:text-lg text-sm text-[#333] font-semibold">
                    We’re just one message away from supporting your health journey.
                </h3>

                {/* Buttons */}
                <div className="flex gap-4 xl:flex-row flex-col mt-4">
                    <Button variant="contained" className='bg-black text-white firstbutton'>
                   <Link to="/demo">Book Appointment</Link>     
                    </Button>
                    <Button variant="contained" className='bg-white text-[#0184a0] secondbutton'>
                     <Link to='/Sign-up'>Contact Us</Link>   
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default ContactSec
