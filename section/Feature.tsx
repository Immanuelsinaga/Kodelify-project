import MathLogo from "@/assets/math.svg";
import CPPLogo from "@/assets/code.svg";
import Graph from "@/assets/graph.svg";
import DSLogo from "@/assets/data.svg";
import Other from "@/assets/apps.svg";

export const Feature = () => {
  return (
    <>
    <div id="whatLearn" className="bg-gradient-to-b from-black to-[#101010] relative">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="bg-[#101010] p-5 rounded-3xl shadow-md shadow-white/20">
            <p className="block lg:hidden pb-3 font-semibold">Mau Belajar apa hari ini?</p>
            <div className="grid lg:grid-cols-5 grid-cols-4 gap-4 ">  
              <div className="rounded-2xl px-3 py-4 bg-transparent lg:border lg:border-slate-200/20 hover:shadow-lg active:scale-95 transition-all active:shadow-sm sm:flex block items-center space-x-4 cursor-pointer">
                <div className="flex flex-col sm:flex-row w-full text-center justify-center items-center">
                  <span className="flex items-center justify-center p-2 rounded-md shadow-lg text-white">
                  <MathLogo className="w-7 h-7"/>
                  </span>
                <h3 className="text-[10px] text-xs md:text-base font-medium text-center mt-2 sm:mt-0 sm:ml-2">
                  Matematika
                </h3>
                </div>
              </div>
              <div className="rounded-2xl px-3 py-4 bg-transparent lg:border lg:border-slate-200/20 hover:shadow-lg active:scale-95 transition-all active:shadow-sm sm:flex block items-center space-x-4 cursor-pointer">
                <div className="flex flex-col sm:flex-row w-full text-center justify-center items-center">
                  <span className="flex items-center justify-center p-2 rounded-md shadow-lg text-white">
                  <CPPLogo className="w-7 h-7"/>
                  </span>
                <h3 className="text-[10px] text-xs md:text-base font-medium text-center mt-2 sm:mt-0 sm:ml-2">
                  Basic C++
                </h3>
                </div>
              </div>
              <div className="rounded-2xl px-3 py-4 bg-transparent lg:border lg:border-slate-200/20 hover:shadow-lg active:scale-95 transition-all active:shadow-sm sm:flex block items-center space-x-4 cursor-pointer">
                <div className="flex flex-col sm:flex-row w-full text-center justify-center items-center">
                  <span className="flex items-center justify-center p-2 rounded-md shadow-lg text-white">
                  <Graph className="w-7 h-7"/>
                  </span>
                <h3 className="text-[10px] text-xs md:text-base font-medium text-center mt-2 sm:mt-0 sm:ml-2">
                  Graph Algoritm
                </h3>
                </div>
              </div>
              <div className="hidden  md:hidden lg:block rounded-2xl px-3 py-4 bg-transparent lg:border lg:border-slate-200/20 hover:shadow-lg active:scale-95 transition-all active:shadow-sm sm:flex items-center space-x-4 cursor-pointer">
                <div className="flex flex-col sm:flex-row w-full text-center justify-center items-center">
                  <span className="flex items-center justify-center p-2 rounded-md shadow-lg text-white">
                  <DSLogo className="w-7 h-7"/>
                  </span>
                <h3 className="text-[10px] text-xs md:text-base font-medium text-center mt-2 sm:mt-0 sm:ml-2">
                  Dynamic Programming
                </h3>
                </div>
              </div>
              <div className="rounded-2xl px-3 py-4 bg-transparent lg:border lg:border-slate-200/20 hover:shadow-lg active:scale-95 transition-all active:shadow-sm sm:flex block items-center space-x-4 cursor-pointer">
                <div className="flex flex-col sm:flex-row w-full text-center justify-center items-center">
                  <span className="flex items-center justify-center p-2 rounded-md shadow-lg text-white">
                  <Other className="w-7 h-7"/>
                  </span>
                <h3 className="text-[10px] text-xs md:text-base font-medium text-center mt-2 sm:mt-0 sm:ml-2">
                  Lihat lainnya
                </h3>
                </div>
              </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}