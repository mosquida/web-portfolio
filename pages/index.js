import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="px-4 lg:px-0 py-2.5 pt-5 container mx-auto text-sm leading-6 tracking-wide">
        <div className="pt-20 lg:w-1/2 relative mx-auto">
          <h1 className="text-4xl leading-[3rem] font-light tracking-wider pr-4 z-10">
            Hello! I'm Carl Justine Mosquida a fullstack software engineer from
            Philippines
          </h1>
          <div className="absolute -top-32 -right-52 -z-10">
            <img src="/gradient.png" alt="" />
          </div>
          <p className="text-sm pt-10 leading-6 tracking-wide font-light">
            HI!. I'm a software developer and designer for web applications with
            emphasize on backend development using modern approaches and
            technologies. I designed, developed and test RESTful API endpoints,
            dockerization and orchestration of application as well as web3
            development such as blockchain contract in solidity. On my free time
            I enjoys participating in competitions hackathons.
          </p>
          <div className="pt-10"></div>
          <a
            href=""
            className="mt-40 bg-black text-white tracking-wide text-xs px-5 py-3 rounded-md"
          >
            view resume
          </a>
        </div>

        <div className="pt-20 px-20 grid grid-cols-2 gap-5 font-light">
          <div className="col-span-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              vitae earum unde, voluptatem hic commodi sit ratione facere
              dignissimos repellat in eligendi, quod deserunt numquam dicta
              necessitatibus quae laboriosam inventore.
            </p>
          </div>
          <div className="col-span-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              vitae earum unde, voluptatem hic commodi sit ratione facere
              dignissimos repellat in eligendi, quod deserunt numquam dicta
              necessitatibus quae laboriosam inventore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
