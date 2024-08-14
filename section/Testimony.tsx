import immanuel from "@/assets/Immanuel.jpg";
import fauzan from "@/assets/Fauzan.jpg";
import NoProfile from "@/assets/NoProfile.jpg";

const testimonials = [
  {
    name: "Immanuel Rey Usmin Sinaga",
    institution: "Institut Teknologi Bandung",
    testimony: "Pengalaman saya make Kodelify sangat bagus ya. Cakupan materinya luas dan dalam, penyampaiannya juga menarik. Susah menemukan penjelasan dan penyampaian materi kalkulus yg bagus di luaran, bahkan di kampus sekalipun. Semoga Kodelify bisa mencakup lebih banyak user lagi dan materinya juga lebih beragam.",
    imageSrc: immanuel,
  },
  {
    name: "Fauzan Al-anshori",
    institution: "Institut Teknologi Sepuluh Nopember",
    testimony: "Materi yang diajarkan di Kodelify sangat relevan dan mudah dimengerti. Pengajar-pengajarnya memiliki skill yang sesuai dan berkelas! Pengalaman menggunakan Kodelify juga sangat unik dan eksklusif. Pokoknya nyaman banget dan emang se-worth it itu!",
    imageSrc: fauzan,
  },
  {
    name: "Muhammad Nur Azis",
    institution: "Universitas Gajah Mada",
    testimony: "Untuk materi di Kodelify saya apresiasi karena berorientasi ke konsep yang disertai visualisasi yang membantu.Untuk itu, saya ingin berterima kasih kepada Kodelify karena telah membuka akses materi-materi yang biasanya diajarkan di perguruan tinggi kepada masyarakat luas, semoga kedepannya tetap semangat untuk mencerdaskan bangsa 🙏",
    imageSrc: NoProfile,
  },
  
  
];


export const Testimony = () => {
  return (
    <>
      <section id="testimony" className="bg-[#101010] flex flex-col gap-5 py-9 md:py-16">
        <h2 className="font-sans text-xl font-bold text-center">Kata mereka yang belajar bersama Kodelify</h2>
        <div className="overflow-hidden flex group">
          <div className="flex gap-5 md:gap-6 px-[10px] md:px-3 animate-slide-left">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[245px] md:w-[422px] p-6 bg-gradient-to-t from-[#FFFFFF00] to-[#FFFFFF0D] border-[1px] border-[#2D2D2D] rounded-[24px]"
              >
                <div className="flex gap-4 items-center pb-6 border-b-[1px] border-[#2D2D2D]">
                  <div className="w-10 h-10 overflow-hidden rounded-full">
                    <img src={testimonial.imageSrc.src} alt={testimonial.name} />
                  </div>
                  <div className="flex flex-col md:gap-[6px]">
                    <span className="inline-block text-xs font-extrabold">{testimonial.name}</span>
                    <span className="inline-block font-body text-[10px] text-neutral-400">{testimonial.institution}</span>
                  </div>
                </div>
                <article>
                  <p className="pt-6 text-xs font-body md:text-sm">
                    {testimonial.testimony}
                  </p>
                </article>
              </div>
            ))}
          </div>
          <div className="flex gap-5 md:gap-6 px-[10px] md:px-3 animate-slide-left">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[245px] md:w-[422px] p-6 bg-gradient-to-t from-[#FFFFFF00] to-[#FFFFFF0D] border-[1px] border-[#2D2D2D] rounded-[24px]"
              >
                <div className="flex gap-4 items-center pb-6 border-b-[1px] border-[#2D2D2D]">
                  <div className="w-10 h-10 overflow-hidden rounded-full">
                    <img src={testimonial.imageSrc.src} alt={testimonial.name} />
                  </div>
                  <div className="flex flex-col md:gap-[6px]">
                    <span className="inline-block text-xs font-extrabold">{testimonial.name}</span>
                    <span className="inline-block font-body text-[10px] text-neutral-400">{testimonial.institution}</span>
                  </div>
                </div>
                <article>
                  <p className="pt-6 text-xs font-body md:text-sm">
                    {testimonial.testimony}
                  </p>
                </article>
              </div>
            ))}
          </div>
          <div className="flex gap-5 md:gap-6 px-[10px] md:px-3 animate-slide-left">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[245px] md:w-[422px] p-6 bg-gradient-to-t from-[#FFFFFF00] to-[#FFFFFF0D] border-[1px] border-[#2D2D2D] rounded-[24px]"
              >
                <div className="flex gap-4 items-center pb-6 border-b-[1px] border-[#2D2D2D]">
                  <div className="w-10 h-10 overflow-hidden rounded-full">
                    <img src={testimonial.imageSrc.src} alt={testimonial.name} />
                  </div>
                  <div className="flex flex-col md:gap-[6px]">
                    <span className="inline-block text-xs font-extrabold">{testimonial.name}</span>
                    <span className="inline-block font-body text-[10px] text-neutral-400">{testimonial.institution}</span>
                  </div>
                </div>
                <article>
                  <p className="pt-6 text-xs font-body md:text-sm">
                    {testimonial.testimony}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}