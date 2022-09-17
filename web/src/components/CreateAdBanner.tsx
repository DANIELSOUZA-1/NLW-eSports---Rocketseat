import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <div className="self-stretch pt-1 mt-8 bg-nlw-gradient  rounded-lg overflow-hidden" >
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="font-black text-2xl text-white block">Não encontrou seu duo ?</h1>
            <span className="block text-zinc-400 text-[16px]">Publique um anúncio para encontrar novos players</span>
          </div>
          <Dialog.Trigger className="flex gap-3 py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded">
            <MagnifyingGlassPlus size={24}></MagnifyingGlassPlus>
            Publicar anúncio
          </Dialog.Trigger>
        </div>
      </div>
  )
}