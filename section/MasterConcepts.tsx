

export const MasterConcepts = () => {
  return (
    <>
<div className="bg-[#101010] p-10 items-center ">
  <div className="container max-w-3xl mx-auto">
    <div className="">
      <h1 className="font-bold text-2xl lg:text-3xl text-center tracking-wider">Master concepts in 15 minutes a day</h1>
      <p className="my-4 text-white/70 tracking-wide text-center font-light text-sm lg:text-base lg:mx-20">Whether you’re a complete beginner or ready to dive into machine learning and beyond, Brilliant makes it easy to level up fast with fun, bite-sized lessons.</p>
    </div>
    <div className="grid md:grid-cols-2 my-10">
      <div className="">
        <video muted loop autoPlay className="aspect-auto rounded-md" >
          <source src="https://brilliant.org/videos/homepage/hands-on-learning.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="lg:ml-5 my-8 items-center">
        <h2 className="text-center font-bold justify-center">Effective, Hands-on learning</h2>
        <p className="text-white/70 text-center">Visual, interactive lessons make concepts feel intuitive — so even complex ideas just click. Our real-time feedback and simple explanations make learning efficient.</p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 my-10">
      <div className="">
        <img src="https://brilliant.org/images/homepage/learn-at-your-level.svg" alt="" />
      </div>
      <div className="lg:ml-5 my-8 items-center">
        <h2 className="text-center font-bold justify-center">Stay motivated</h2>
        <p className="text-white/70 text-center">Form a real learning habit with fun content that’s always well-paced, game-like progress tracking, and friendly reminders.</p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 my-10">
      <div className="">
        <img src="https://brilliant.org/images/homepage/stay-motivated.svg" alt="" />
      </div>
      <div className="lg:ml-5 my-8 items-center">
        <h2 className="text-center font-bold justify-center">Effective, Hands-on learning</h2>
        <p className="text-white/70 text-center">Visual, interactive lessons make concepts feel intuitive — so even complex ideas just click. Our real-time feedback and simple explanations make learning efficient.</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
}