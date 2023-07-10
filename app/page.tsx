import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen w-full max-w-[1440px] flex-col md:flex-row ">
      <div className=" flex w-full max-w-[800px] flex-col justify-between bg-white px-8 py-6">
        <div className="flex h-12 w-full max-w-[736px] flex-row items-center justify-between gap-8">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={155}
            height={32}
          />
          <div className="flex gap-6">
            <button>Unidades</button>
            <button>Trabalhe conosco</button>
            <button>Atendimento</button>
          </div>
          <button className="flex w-[155px] items-center gap-2 rounded-lg bg-gray-2 px-4 py-2">
            <Image
              src="/profile.png"
              alt="Picture of the author"
              width={24}
              height={24}
            />
            <p>Fazer Login</p>
          </button>
        </div>

        <div className="flex w-full flex-col items-center  gap-[56px]">
          <div className="flex h-[272px] w-full max-w-[488px] flex-col  rounded-[1rem] border border-solid border-separation shadow-lg">
            <div className="flex h-[104px] flex-row">
              <button className="flex h-[104px] w-full max-w-[162px] flex-col items-center gap-[4px] px-2 py-3 leading-tight  focus:outline-none  focus-visible:ring active:bg-colorButtonNoActive">
                <Image
                  src="/map-pin.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <p>Rastrear encomenda</p>
              </button>
              <button className="flex h-[104px] w-full max-w-[162px] flex-col items-center gap-[4px] border-b border-l border-solid  border-separation px-2 py-3 leading-tight focus:outline-none  focus:ring active:bg-colorButtonNoActive">
                <Image
                  src="/calculator.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <p>Cotação de frete</p>
              </button>
              <button className="flex h-[104px] w-full max-w-[162px] flex-col items-center gap-[4px] rounded-tr-lg border-b border-l border-solid border-separation  px-2 py-3 leading-tight focus:outline-none  focus:ring active:bg-colorButtonNoActive">
                <Image
                  src="/calendar-time.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <p>Agedar coleta</p>
              </button>
            </div>

            <div className="flex w-full flex-col gap-4 p-6">
              <input
                placeholder="CNPJ ou CPF"
                className="h-[56px] w-full rounded-[0.5rem] border border-solid border-inputSeparator px-4 py-2"
              />
              <button className="w-full rounded-[0.5rem] bg-colorButton px-4 py-2 text-white">
                Buscar encomenda
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-[32px] ">
            <h2 className="text-2xl font-medium">Mais ferramentas</h2>
            <div className="grid grid-cols-3 items-center gap-6 ">
              <button className="flex h-[106px] w-[128px] max-w-[128px] grow flex-col  items-center justify-center gap-[4px] rounded-[1rem] bg-colorButtonNoActive px-2 py-3 leading-tight ">
                <Image
                  src="/file-check.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <p>Comprovante de entrega</p>
              </button>
              <button className="flex h-[106px] w-[128px] max-w-[128px] grow  flex-col items-center justify-center gap-[4px] rounded-[1rem] bg-colorButtonNoActive px-2 py-3 leading-tight">
                <Image
                  src="/receipt-2.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <p>Faturas</p>
              </button>
              <button className="flex h-[106px] w-[128px] max-w-[128px] grow  flex-col items-center justify-center gap-[4px] rounded-[1rem] bg-colorButtonNoActive px-2 py-3 leading-tight">
                <Image
                  src="/calendar-time.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <p>Prazo de entrega</p>
              </button>
              <button className="flex h-[106px] w-[128px] max-w-[128px] grow  flex-col items-center justify-center gap-[4px] rounded-[1rem] bg-colorButtonNoActive px-2 py-3 leading-tight">
                <Image
                  src="/script-plus.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <p>Gerar declaração</p>
              </button>
              <button className="flex h-[106px] w-[128px] max-w-[128px] grow  flex-col items-center justify-center gap-[4px] rounded-[1rem] bg-colorButtonNoActive px-2 py-3 leading-tight">
                <Image
                  src="/alert-triangle.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <p>Clientes com TDE</p>
              </button>
              <button className="flex h-[106px] w-[128px] max-w-[128px] grow  flex-col items-center justify-center gap-[4px] rounded-[1rem] bg-colorButtonNoActive px-2 py-3 leading-tight">
                <Image
                  src="/clipboard-text.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <p>Documentação legal</p>
              </button>
            </div>
          </div>
        </div>

        <footer className="flex flex-row justify-between ">
          <div className="flex h-[16px] items-center justify-center gap-2">
            <a>Termos de uso</a>
            <Image
              src="/Ellipse.png"
              alt="Picture of the author"
              width={4}
              height={4}
            />
            <a>Políticas de privacidade</a>
          </div>
          <div className="flex h-[16px] items-center justify-center gap-2">
            <p>Backlog © 2023 - Todos os direitos reservados</p>
          </div>
        </footer>
      </div>

      <div className="flex w-full max-w-screen-sm">
        <div className=" relative w-full ">
          <Image
            src="/image.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}
