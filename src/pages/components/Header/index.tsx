import Image from "next/image"
import logo from "../../../../public/imagens/header.svg"
import * as S from "./styles"

export function Header(){
  return(

    <S.Container className="w-full bg-gray-900 h-52 pt-11 px-3">
   
      <header className="container flex mx-auto h-12 justify-between">
        <Image 
          src={logo.src} 
          alt="Logo DT Money"
          width={172}
          height={41}
        />
        <button className="
          bg-green-500 
            w-40 
            h-12 
            px-5 
            py-3 
            rounded-md 
            text-xs 
            font-bold
            text-write
          ">
           Nova transação
        </button>
      </header>

    </S.Container>

  )
}

export default Header