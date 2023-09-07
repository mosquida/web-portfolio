import projects from "./projectsData";
import { Link } from "react-router-dom";
import Nav from "./Nav";
function Projects() {
  return (
    <div id="home" className="px-5 md:px-14 lg:px-32">
      {/* nav */}
      <Nav />
      {/* use case */}
      <div id="cases" className="px-10 pt-40">
        <p className="text-2xl font-medium pb-16 text-center">
          Case Studies and Projects
        </p>

        <div className="md:grid grid-cols-2 gap-24">
          {/* 1st */}
          {/* <div>
            <p className="text-xs font-light pt-20">
              API Integration Development
            </p>
            <p className=" text-2xl font-medium">Sample web app</p>
            <p className="text-sm pt-4 pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              incidunt, provident id dignissimos distinctio similique optio!
            </p>
            <a
              href="#"
              className="text-xs border-gray-600 border px-6 py-4 rounded-full
              hover:bg-blue-500 hover:border-blue-500 transition duration-300 ease-in-out
              "
            >
              View Case Study
            </a>
          </div>
          <div>
            <img src="/sample.png" className="h-4/5" alt="" />
          </div> */}

          {/* 2nd */}
          {/* <div className="pt-20">asa</div>
          <div>zd</div> */}

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

                <Link to={`/projects/${item.id}`}>
                  <a
                    href="#"
                    className="text-xs border-gray-600 border px-6 py-4 rounded-full
               hover:bg-blue-500 hover:border-blue-500 transition duration-300 ease-in-out
               "
                  >
                    View Case Study
                  </a>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
