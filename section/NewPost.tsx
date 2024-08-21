export const NewPost = () => {
  return (
    <>
    <div className="inset-0 -z-10 w-full pb-4">
    <div className="container mx-auto px-4 max-w-7xl mt-36">
      <p className="font-bold uppercase text-[#9d64f2] text-sm mb-2">
      Update
      </p>
      <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2">Artikel Terupdate di Kodelify 🔥</h2>
      <p className="text-sm lg:text-lg mb-8 text-slate-300">
      Baca artikel terbaru yang masih fresh dan hangat.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="shadow-md p-6 rounded-2xl bg-slate-800 hover:shadow-lg hover:outline hover:outline-slate-600 hover:outline-1">
          <a href="blog/brute-force" className="mb-3 inline-block">
            <img src="https://www.petanikode.com/img/cover/go-redis-pub-sub.png" alt="" />
          </a>
          <h3 className="text-lg font-bold mb-2 tracking-tight line-clamp-2">
            <a href="">Algoritma brute force</a>
          </h3>
          <p className="text-sm text-slate-300 line-clamp-3">
          Step-by-step cara membuat sistem notifikasi secara realtime dengan Redis Pub/Sub di Golang
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};
