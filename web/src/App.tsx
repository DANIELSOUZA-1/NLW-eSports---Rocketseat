import "./styles/main.css";
import logoImg from "./assets/img/logo-nlw.svg"
import { MagnifyingGlassPlus } from 'phosphor-react'
import { GameBanner } from "./components/GameBanner";

function App() {
  return (
    <div className="flex flex-col max-w-[1344px] mx-auto items-center my-20">

      <img src={logoImg} alt="logo" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner></GameBanner>


      </div>


      <div className="self-stretch pt-1 mt-8 bg-nlw-gradient  rounded-lg overflow-hidden" >
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="font-black text-2xl text-white block">Não encontrou seu duo ?</h1>
            <span className="block text-zinc-400 text-[16px]">Publique um anúncio para encontrar novos players</span>
          </div>
          <button className="flex gap-3 py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded">
            <MagnifyingGlassPlus size={24}></MagnifyingGlassPlus>
            Publicar anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
