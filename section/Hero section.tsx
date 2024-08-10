import starsBg from "@/assets/stars.png";

export const HeroSection = () => {
  return (
    <section
      className="pt-20 lg:pt-36 pb-20 inset-0 -z-10 w-full bg-repeat bg-right"
      style={{
        backgroundImage: `url(${starsBg.src})`,
      }}
    >
      <div className="container max-w-7xl py-5 px-4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between text-center lg:text-left">
          <div className="w-full lg:w-1/2 my-7">
            <h1 className="font-semibold mb-2 text-4xl lg:text-7xl bg-gradient-to-r text-slate-300 inline-block bg-clip-text p-1">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-cyan-200 to-violet-300">
                Code means{" "}
              </span>
              everything
            </h1>
            <p className="font-light text-white/70 text-xl mx-3">
              Tempat para pemrograman kompetitif menunjukan skill nya
            </p>
            <div className="mt-9 flex flex-row gap-4 mx-3 justify-center lg:justify-normal">
              <a
                href=""
                className="relative py-3 w-1/2 text-center rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]"
              >
                Mulai sekarang
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-auto mt-9 md:mt-3 lg:mt-7 lg:mt-0 order-first lg:order-last">
            <img
              src="https://gradient.academy/_next/image?url=https%3A%2F%2Fassets.gradient.academy%2Fassets%2Flanding-unregistered-hero.png&w=2048&q=75"
              alt="Kodelify Hero section"
              className="mx-auto shadow-xl w-3/4 mt-5 lg:-mt-5 block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
