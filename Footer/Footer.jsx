import TokenIcon from '@mui/icons-material/Token';

function Footer() {
    return (
        <div className='flex flex-col gap-4 p-4 bg-[#b4d8e4]'>
            {/* =============header footer============== */}
            <div className='flex flex-wrap xl:gap-0 gap-2 justify-between items-start'>
                {/* ====logo====== */}
                <div className='flex flex-col gap-4 xl:w-1/5 w-1/2'>
                    <h1 className="capitalize font-bold flex justify-center items-center xl:text-xl text-xs">
                        <span style={{ color: "#0184a0" }}>
                            <TokenIcon /> codeOne
                        </span>{' '}
                        technologies
                    </h1>

                    <p className="text-center text-[#5a5a5a] text-sm xl:text-sm leading-relaxed">
                        We specialize in building modern, reliable health and business applications.
                    </p>

                </div>
                {/* catogories */}
                <div className='flex flex-col gap-4 xl:w-1/5 w-1/3'>
                    <h1 className="text-lg font-semibold text-[#252525] capitalize">Categories</h1>
                    <ul className="space-y-2 text-sm text-[#5a5a5a]">
                        <li className="hover:text-[#0184a0] cursor-pointer">UI/UX Design</li>
                        <li className="hover:text-[#0184a0] cursor-pointer">Web Development</li>
                        <li className="hover:text-[#0184a0] cursor-pointer">Mobile Apps</li>
                        <li className="hover:text-[#0184a0] cursor-pointer">Health Platforms</li>
                    </ul>
                </div>
                {/* services */}
                <div className='flex flex-col gap-4 xl:w-1/5 w-1/2'>
                    <h1 className="text-lg font-semibold text-[#252525] capitalize">Services</h1>
                    <ul className="space-y-2 text-sm text-[#5a5a5a]">
                        <li className="hover:text-[#0184a0] cursor-pointer">Online Consultation</li>
                        <li className="hover:text-[#0184a0] cursor-pointer">Appointment Booking</li>
                        <li className="hover:text-[#0184a0] cursor-pointer">Medical Records Access</li>
                        <li className="hover:text-[#0184a0] cursor-pointer">Prescription Management</li>
                    </ul>
                </div>
                {/* contact */}
                <div className='flex flex-col gap-4 xl:w-1/5 w-full'>
                    <h1 className="text-lg font-semibold text-[#252525] capitalize">Contact</h1>
                    <ul className="space-y-2 text-sm text-[#5a5a5a]">
                        <li className="hover:text-[#0184a0]  cursor-pointer">📍 123 Avenue Hassan II, Casablanca</li>
                        <li className="hover:text-[#0184a0] cursor-pointer">📞 +212 6 12 34 56 78</li>
                        <li className="hover:text-[#0184a0] cursor-pointer">✉️ contact@codeone.ma</li>
                        <li className="hover:text-[#0184a0] cursor-pointer">🕒 Mon - Fri: 9:00 - 18:00</li>
                    </ul>
                </div>

            </div>
            <hr />
            <div className="text-start text-sm text-[#5a5a5a] ">
                Developed by <span className="font-semibold text-[#0184a0]">Hicham Drakech</span> © {new Date().getFullYear()}
            </div>

        </div>
    )
}

export default Footer
