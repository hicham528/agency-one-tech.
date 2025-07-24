import demoImg from '../../assets/demo.png';

import { Link } from "react-router-dom"
function Demo() {
  return (
    <div className="bg-[#f0f8fa] py-12 px-6 md:px-16 rounded-2xl shadow-lg my-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* Demo image or video */}
        <div className="lg:w-1/2 w-full">
          <img
            src={demoImg}
            alt="Product Demo"
            className="rounded-xl shadow-md w-full"
          />
        </div>


        {/* Text and features */}
        <div className="lg:w-1/2 w-full space-y-6">
          <h2 className="text-3xl font-bold text-[#0184a0]">Explore the Demo</h2>

          <p className="text-gray-700 text-sm leading-relaxed">
            Discover how our platform can streamline your workflow, reduce operational friction,
            and deliver a better experience for your users. Whether you're a developer, manager, or entrepreneur,
            our tools are built to adapt to your needs.
          </p>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>✅ Easy-to-use dashboard with intuitive navigation</li>
            <li>✅ Fully responsive design compatible with all devices</li>
            <li>✅ Real-time analytics and performance tracking</li>
            <li>✅ Integration-ready with popular APIs & tools</li>
            <li>✅ Secure and GDPR-compliant user data handling</li>
            <li>✅ Customizable interface for teams and individuals</li>
          </ul>

          <div className="pt-4 space-y-2">
            <button className="bg-[#0184a0] text-white px-6 py-2 rounded-full hover:bg-[#026a83] transition">
              <Link to="/">Try Now</Link>
            </button>
            <p className="text-xs text-gray-500">
              No sign-up required. Instant access to all core features.
            </p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Demo
