

import HeaderPokeball404 from "../components/layout/HeaderPokeball404"

export const Page404 = () => {
  return (
    <main className="  grid relative     " >
      <HeaderPokeball404 />
      <div className="h-[80vh]  bg-[url(/images/bg-dia.gif)] dark:bg-[url(/images/page404.gif)] bg-no-repeat bg-cover bg-center "  >
      {/* <img  className="w-screen h-screen" src="/images/page404.gif" alt="" /> */}
      
    </div>
    <div className="  absolute top-[70px] text-center left-1/2 -translate-x-1/2">
      <img className="w-[screen] h-[200px]" src="/img404.png" alt="" />
    </div>
    
    </main>
  )
}