import projectsData from "./projectsData";
import { Link } from "react-router-dom";
import Nav from "./Nav";
function Home() {
  const projects = projectsData.slice(0, 4);

  return (
    <div className="px-5 md:px-14 lg:px-32">
      {/* nav */}
      <Nav />
      {/* Main */}
      <div className="sm:h-screen flex items-center justify-center ">
        <div className=" text-center">
          <p className="text-sm pb-5">Full Stack Software Engineer</p>
          <h1 className="text-6xl font-light font-zonapro">
            Carl Justine Mosquida
          </h1>
          <div className="md:px-18 xl:px-52 pt-6">
            <p className="md:px-14 xl:px-10">
              I specialize in crafting software solutions. Let us transform your
              ideas into seamless, user-friendly digital experiences that leave
              a lasting impression.
            </p>

            <div className="flex justify-center pt-10 gap-5">
              <a
                href="#"
                className="text-xs border-blue-500 border px-6 py-4 rounded-full
              bg-blue-500 text-white hover:bg-white hover:border-white hover:text-black transition duration-300 ease-in-out
              "
              >
                {/* Get in Touch */}
                Connect with me
              </a>
              <a
                href="#"
                className="text-xs border-gray-600 border px-6 py-4 rounded-full
              hover:bg-blue-500 hover:border-blue-500 transition duration-300 ease-in-out
              "
              >
                Explore Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* use case */}
      <div className="xl:px-10">
        <p className="text-2xl font-medium pb-12">Case Studies and Projects</p>

        <div className="md:grid grid-cols-2 gap-24">
          {projects.map((item) => (
            <>
              <div className="pt-10">
                <div className="flex gap-5 items-center">
                  <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                  <div>
                    <p className="text-xs font-light">
                      API Integration Development
                    </p>
                    <p className=" text-2xl font-medium">{item.title}</p>
                  </div>
                </div>
                <p className="text-sm pt-4 pb-10">{item.description}</p>

                <a
                  href="#"
                  className="text-xs border-gray-600 border px-6 py-4 rounded-full
               hover:bg-blue-500 hover:border-blue-500 transition duration-300 ease-in-out
               "
                >
                  View Case Study
                </a>
              </div>
              {/* <div className="flex justify-center">
                <img src="/bis.png" className="" alt="" />
              </div> */}
            </>
          ))}
        </div>
        <div className="text-center font-light pt-10">
          Explore All Studies and Projects
          <Link to="/projects">
            <a
              href=""
              className=" text-orange-500 font-medium flex justify-center items-center gap-2"
            >
              View Now
              <span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 11H37V29"
                    stroke="#ff6b00"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.5439 36.4559L36.9997 11"
                    stroke="#ff6b00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>
          </Link>
        </div>
      </div>

      {/* Contacts */}
      <div id="contact" className="pb-20 pt-40">
        <p className="text-2xl font-medium pb-10">Get in Touch</p>

        <div className="md:grid grid-cols-2">
          <div
            className="pr-10"
            data-aos="fade-left"
            // data-aos-delay="500"
            data-aos-duration="1500"
          >
            <p className="text-sm leading-7">
              I am currently available for new professional opportunities.
              Please feel free to get in touch with me to discuss potential
              collaborations.
            </p>
          </div>
          <div className="text-sm pl-10 border-gray-300 border-l">
            <a
              href="mailto:mosquidacarljustine@gmail.com"
              className="flex gap-2 transform"
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
            >
              mosquidacarljustine@gmail.com
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </i>
            </a>

            <a
              href="https://linkedin.com/in/carl-justine-mosquida"
              className="flex gap-2 pt-8"
              data-aos="fade-left"
              data-aos-delay="1200"
              data-aos-duration="1500"
            >
              linkedin.com/in/carl-justine-mosquida
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </i>
            </a>

            <a
              href="https://github.com/mosquida"
              className="flex gap-2 pt-8"
              data-aos="fade-left"
              data-aos-delay="1400"
              data-aos-duration="1500"
            >
              github.com/mosquida
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
