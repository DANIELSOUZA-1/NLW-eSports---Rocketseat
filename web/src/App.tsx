import "./styles/main.css";
import logoImg from "./assets/img/logo-nlw.svg"
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import * as Dialog from '@radix-ui/react-dialog';

import { useEffect, useState } from "react";
import { GameController } from "phosphor-react";
import { Input } from "./components/form/Input";

interface Game {
  id: String;
  title: String;
  bannerUrl: String;
  _count: {
    ads: number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (
    <div className="flex flex-col max-w-[1344px] mx-auto items-center my-20">

      <img src={logoImg} alt="logo" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads} />

          )
        })}

      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] shadow-lg shadow-black/25" >
            <Dialog.Title className="text-3xl text-white font-black">Publique um anúncio</Dialog.Title>

            <form className="mt-8 flex flex-col gap-4">

              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="game">Qual o game?</label>
                <Input
                  id="game"
                  type="text"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quantos anos</label>
                  <Input
                    id="yearsPlaying"
                    type="number"
                    placeholder="Tudo bem ser ZERO ;D" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu discord ?</label>
                  <Input id="discord" type="text" placeholder="Usuario#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                  <div>
                    <button title="Domingo">D</button>
                    <button title="Segunda">S</button>
                    <button title="Terça">T</button>
                    <button title="Quarta">Q</button>
                    <button title="Quinta">Q</button>
                    <button title="Sexta">S</button>
                    <button title="Sábado">S</button>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Qual horário do dia</label>

                  <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="De" />
                    <Input id="hourEnd" type="time" placeholder="Até" />
                  </div>
                </div>

              </div>
              
              <div>
                <Input type="checkbox" />
                Costume me conectar ao chat de voz
              </div>
              <footer>
                <button>Cancelar</button>
                <button type="submit">
                  <GameController></GameController>
                  Encontrar duo
                </button>
              </footer>

            </form>

          </Dialog.Content>

        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}

export default App
