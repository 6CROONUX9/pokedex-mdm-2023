import { useEffect, useState } from "react";

export const FooterPokeball = () => {
  //Dark
  const [eventsDarkFoter, setEventsDarkFoter] = useState(false);
  const [eventIconoFoter, setEventIconoFoter] = useState(null);
   //inicio de mi dark
  const handleChangeDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("dark");
      setEventsDarkFoter(false);
      setEventIconoFoter(<i className="bx bx-moon  text-blue-400 text-3xl "></i>);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark", true);
      setEventsDarkFoter(true);
      setEventIconoFoter(<i className="bx bx-sun  text-yellow-400 text-3xl "></i>);
    }
  };

  const savedInfo = localStorage.getItem("dark");


  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setEventIconoFoter(<i className="bx bx-moon  text-blue-400 text-3xl "></i>);
    } else {
      setEventIconoFoter(<i className="bx bx-sun  text-yellow-400 text-3xl "></i>);
    }
  }, []);
  return (
    <section>
        <div className="h-16 bg-red-600"></div>
        <div className="h-12 bg-black dark:bg-white relative">
            <div className="h-16 aspect-square bg-white rounded-full absolute left-1/2 -translate-x-1/2 -top-8 border-[8px] border-black after:block after:content-[''] after:h-8 after:aspect-square after:bg-slate-800 after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black"></div>
            {/* inicio de mi dark */}
          <button
            onClick={handleChangeDarkMode}
            className="mr-3  animate-bounce h-16 aspect-square bg-black  rounded-full absolute right-24 -translate-x-[100px] -top-8 border-[8px] border-white after:block after:content-[''] after:h-8 after:aspect-square after:bg-transparent after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black "
          >
            {eventIconoFoter}
          </button>
        </div>
    </section>
  )
}