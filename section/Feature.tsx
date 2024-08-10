import MathLogo from "@/assets/math.svg";
import CSLogo from "@/assets/processor.svg";
import CPLogo from "@/assets/brain.svg";
import DSLogo from "@/assets/data.svg";

export const Feature = () => {
  return (
    <>
    <div id="whatLearn" className="-mt-9 relative">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="bg-[#101010] p-5 rounded-3xl shadow-md shadow-white/20">
            <p className="block lg:hidden pb-3 font-semibold">Mau Belajar apa hari ini?</p>
            <div className="grid grid-cols-4 gap-4 ">  
              <div className="rounded-2xl px-3 py-4 bg-transparent border border-slate-200/20 hover:shadow-lg active:scale-95 transition-all active:shadow-sm sm:flex block items-center space-x-4 cursor-pointer">
                <div className="flex flex-col sm:flex-row w-full text-center justify-center items-center">
                  <span className="flex items-center justify-center p-2 rounded-md shadow-lg text-white">
                  <MathLogo className="w-7 h-7"/>
                  </span>
                <h3 className="text-[10px] text-xs md:text-base font-medium text-center mt-2 sm:mt-0 sm:ml-2">
                  Matematika
                </h3>
                </div>
              </div>
              <div className="rounded-2xl px-3 py-4 bg-transparent border border-slate-200/20 hover:shadow-lg active:scale-95 transition-all active:shadow-sm sm:flex block items-center space-x-4 cursor-pointer">
                <div className="flex flex-col sm:flex-row w-full text-center justify-center items-center">
                  <span className="flex items-center justify-center p-2 rounded-md shadow-lg text-white">
                  <CSLogo className="w-7 h-7"/>
                  </span>
                <h3 className="text-[10px] text-xs md:text-base font-medium text-center mt-2 sm:mt-0 sm:ml-2">
                  Computer Science
                </h3>
                </div>
              </div>
              <div className="rounded-2xl px-3 py-4 bg-transparent border border-slate-200/20 hover:shadow-lg active:scale-95 transition-all active:shadow-sm sm:flex block items-center space-x-4 cursor-pointer">
                <div className="flex flex-col sm:flex-row w-full text-center justify-center items-center">
                  <span className="flex items-center justify-center p-2 rounded-md shadow-lg text-white">
                  <CPLogo className="w-7 h-7"/>
                  </span>
                <h3 className="text-[10px] text-xs md:text-base font-medium text-center mt-2 sm:mt-0 sm:ml-2">
                  Competitive Programming
                </h3>
                </div>
              </div>
              <div className="rounded-2xl px-3 py-4 bg-transparent border border-slate-200/20 hover:shadow-lg active:scale-95 transition-all active:shadow-sm sm:flex block items-center space-x-4 cursor-pointer">
                <div className="flex flex-col sm:flex-row w-full text-center justify-center items-center">
                  <span className="flex items-center justify-center p-2 rounded-md shadow-lg text-white">
                  <DSLogo className="w-7 h-7"/>
                  </span>
                <h3 className="text-[10px] text-xs md:text-base font-medium text-center mt-2 sm:mt-0 sm:ml-2">
                  Data scinece
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