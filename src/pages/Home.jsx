import { useDispatch, useSelector } from "react-redux";
import { FooterPokeball } from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";
import { getPokemonsById, joinPokemonTypes, randomIdPokemons } from "../services/pokemons";
import { useEffect, useState } from "react";
import { StatList } from "../components/pokedex/StatList";
import { ImageStylePokemonType, bgStylePokemonType, borderStylePokemonType, nameStylePokemon } from "../shared/pokemon";


export const Home = () => {
  const [homeIdPokemons, setHomeIdPokemons] = useState(null)
  const dispach = useDispatch()
  const navigate = useNavigate()
  //const trainer = useSelector(store => store.trainer)
  //console.log(trainer);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispach(loginTrainer(nameTrainer));
    navigate("/pokedex")
  };

  useEffect(() => {
    getPokemonsById(randomIdPokemons())
      .then((data) => setHomeIdPokemons(data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <main className="font-fira-roboto relative min-h-screen grid grid-rows-[1fr_auto] bg-[url(/bg-diaPng.gif)] dark:bg-[url(/bg-darkPng.gif)] bg-no-repeat bg-cover bg-left dark:bg-right  ">
      
      
      

      <section className="flex flex-col justify-center items-center mx-2 mb-8">
        <article>
          {/* seccion superior */}
          <div className="text-center mb-4 mt-4">
            <img src="/images/banner.png" alt="" />
          </div>

          <h2 className="text-red-500 text-center text-2xl">!Hello trainer!</h2>
          <p className="text-center text-lg mb-4 mt-4">To start give your name</p>
          <form onSubmit={handleSubmit} className=" flex justify-center items-center">
            <input
              className="px-3 py-3 rounded-lg  bg-white/50 text-black "
              placeholder="your name..."
              id="nameTrainer"
              type="text"
              required
            />
            <button className="px-3 py-3  rounded bg-red-500 hover:bg-red-600 text-white border-black">Start!</button>
          </form>
        </article>
      </section>


       {/* Card home */}
       <article className={`m-auto w-[220px] text-center capitalize border-[5px] rounded-md ${
        borderStylePokemonType[homeIdPokemons?.types[0]]
      } mb-10 hover:scale-105`}>
      <header
        className={`h-[100px] relative  ${
          bgStylePokemonType[homeIdPokemons?.types[0]]
        }`}
      >
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 h-[65px] aspect-square ">
          <img
            className="h-full w-full object-contain hover:scale-150"
            src={homeIdPokemons?.image}
            alt=""
          />
        </div>
      </header>
      <section className="bg-white/50">
        <h3 className={`text-lg font-bold ${nameStylePokemon[homeIdPokemons?.types[0]]}`}>{homeIdPokemons?.name}</h3>
        <h4>{joinPokemonTypes(homeIdPokemons?.types)}</h4>
        <h5 className="text-sm mb-2">Types</h5>
        <hr />
        <StatList stats={homeIdPokemons?.stats} />
      </section>
      </article> 

      {/* parte principal inferior*/}
      <img className="w-1h-14 h-14 absolute      left-1/2 -translate-x-1/2 bottom-[20px] z-50  rounded-full" src={ImageStylePokemonType[homeIdPokemons?.types[0]]} alt="Rounded avatar"></img>
      <FooterPokeball />
    </main>
    
    
  );
};