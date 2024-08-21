import { Header } from "@/section/Header";
import { Footer } from "@/section/Footer";

export default function Page({ params}: {
  params: {id:string}
}) {
  return (
    <>
    <Header />  
    <section className="container px-0 lg:px-6 lg:max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-12 my-4 mb:my-8 lg:my-286">
      <div className="col-span-12 lg:col-span-8">
        <h1>ID: {params.id} </h1>
        <a href="/">back</a> 
      </div>
    </section>
    

    <Footer />
    </>
  );
}