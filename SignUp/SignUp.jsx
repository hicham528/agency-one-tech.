import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import signupImg from '../../assets/pexels-kindelmedia-7054503.jpg';
import googleLogo from '../../assets/google.png';
import appleLogo from '../../assets/appel.png';

function SignUp() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const dataConectButton = [
  {
    id: 1,
    src: googleLogo,
    text: 'Google',
  },
  {
    id: 2,
    src: appleLogo,
    text: 'Apple',
  },
];

    return (
        <div className='flex p-8  justify-center items-center'>
            <div className='flex xl:p-0 p-4 gap-4 xl:flex-row flex-col w-full rounded-xl shadow-2xl bg-[#252525]'>
                <img
                    src={signupImg}
                    className="xl:w-1/3 xl:block hidden w-full rounded-xl"
                    alt="sign up img"
                />

                {/* =======sign up============ */}
                <div className='flex justify-center items-center w-full'>
                    <div className='flex flex-col gap-4 justify-center items-start'>
                        <h1 className="xl:text-4xl text-xl text-white capitalize font-bold">create an account</h1>
                        {/* user name */}
                        <div className="flex xl:flex-row flex-col  gap-4">
                            <input type="text" placeholder="First Name" className="rounded-2xl textField" />
                            <input type="text" placeholder="First Name" className="rounded-2xl textField" />
                        </div>
                        <input type="email" placeholder="Email" className="rounded-xl text-white h-[40PX] w-full bg-[#fbfbfb6b] p-2 placeholder:text-white outline-none focus:border-[#0184a0]" />
                        <input type="password" placeholder="passworde" className="rounded-xl  text-white bg-[#fbfbfb6b] w-full p-2 placeholder:text-white outline-none  focus:border-[#0184a0]" />

                        <p className='text-center text-white capitalize '> <Checkbox {...label} defaultChecked /> i agree to the <span className='text-[#0184a0]'>terms&conditions</span></p>
                        <Button variant="contained" className='cr-button'>create account</Button>
                        {/* coonect server button */}
                        <div className='flex gap-4 w-full'>
                            {dataConectButton.map((butt, index) => (
                                <button key={index} className='bg-[#fbfbfb6b] text-white capitalize font-bold flex items-center p-2 justify-center gap-4 rounded-xl w-[50%]'>
                                    <img src={butt.src} className='h-[40px]' alt={butt.text} />
                                    {butt.text}
                                </button>
                            ))}
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp
