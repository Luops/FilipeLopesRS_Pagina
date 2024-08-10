"use client";

import React from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";

// Icons
import { CalendarCheck, Home, Menu, X } from "lucide-react";

// Images
import Logo from "../app/assets/Logo.png";

type Props = {};

function Header({}: Props) {
  // State para ver se foi clicado em alguma opção do Header
  const [clicked, setClicked] = React.useState<string>("");

  const handleNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setClicked(sectionId);
  };

  // Abrir e fechar o aside
  const [isWideAside, setIsWideAside] = React.useState(false);
  // Função para abrir e fechar o aside
  const toggleAsideWidth = () => {
    setIsWideAside(!isWideAside);
  };

  // Resolução da tela
  const [windowWidth, setWindowWidth] = React.useState(0);
  // Função para atualizar o state com a largura atual da janela em pixels
  const updateWindowWidth = () => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  };

  // Atualizar a largura da janela quando a janela for redimensionada
  React.useEffect(() => {
    // Verifica se o código está sendo executado no navegador antes de adicionar o listener
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth); // Define o valor inicial
      window.addEventListener("resize", updateWindowWidth); // Adiciona um listener de evento de redimensionamento da janela
    }

    return () => {
      // Remove o listener de evento de redimensionamento da janela quando o componente for desmontado
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateWindowWidth);
      }
    };
  }, []);
  return (
    <header
      className={`fixed w-full flex justify-between items-center z-[50] bg-[#06437E] ${
        windowWidth > 560 ? "px-[6rem]" : "px-[2rem]"
      } shadow-md`}
    >
      <picture className="py-1">
        <Image
          src={Logo}
          alt="Logo"
          className={`self-center ${
            windowWidth < 861 ? "w-[90px]" : "w-[120px]"
          } object-contain`}
        />
      </picture>
      {/* navigation desktop */}
      <nav
        className={`w-full z-[50] text-white ${
          windowWidth < 861 ? "hidden" : "flex"
        }`}
      >
        <ul
          className={`w-full flex items-center justify-end text-base drop-shadow-lg tracking-widest py-3`}
        >
          <li className={`px-4`}>
            <button
              onClick={() => handleNavigation("sobre")}
              className="hover:border-b-4 font-bold hover:border-white transition-all ease-in-out"
            >
              Sobre
            </button>
          </li>
          <li className={`px-4`}>
            <button
              onClick={() => handleNavigation("compromissos")}
              className="hover:border-b-4 font-bold hover:border-white transition-all ease-in-out"
            >
              Compromissos
            </button>
          </li>
          <li className={`px-4`}>
            <button
              onClick={() => handleNavigation("eventos")}
              className="hover:border-b-4 font-bold hover:border-white transition-all ease-in-out"
            >
              Eventos
            </button>
          </li>
          <li className={`px-4`}>
            <button
              onClick={() => handleNavigation("contato")}
              className="hover:border-b-4 font-bold hover:border-white transition-all ease-in-out"
            >
              Contato
            </button>
          </li>
        </ul>
      </nav>
      {/* navigation mobile */}
      <nav className={`${windowWidth < 861 ? "flex" : "hidden"}`}>
        <Button
          onClick={toggleAsideWidth}
          className={`top-6 right-4 ${
            windowWidth < 861
              ? isWideAside
                ? "fixed text-xl z-[51]"
                : "absolute text-xl z-[51]"
              : "hidden"
          }`}
        >
          {isWideAside ? <X size={25} /> : <Menu size={25} />}
        </Button>
        <ul
          className={`transition-all duration-500 ease-in-out z-[50] fixed text-white right-0 top-0 py-16 h-screen flex flex-col justify-start drop-shadow-lg tracking-widest gap-5 bg-slate-800 ${
            isWideAside ? "w-[80%]" : "w-[0%] transition-all translate-x-full"
          } `}
        >
          <li className={`px-4`}>
            <button
              onClick={() => {handleNavigation("sobre"); toggleAsideWidth();}}
              className="hover:border-b-4 font-bold hover:border-white transition-all ease-in-out"
            >
              Sobre
            </button>
          </li>

          <li className={`px-4`}>
            <button
              onClick={() => {handleNavigation("compromissos"); toggleAsideWidth();}}
              className="hover:border-b-4 font-bold hover:border-white transition-all ease-in-out"
            >
              Compromissos
            </button>
          </li>

          <li className={`px-4`}>
            <button
              onClick={() => {handleNavigation("eventos"); toggleAsideWidth();}}
              className="hover:border-b-4 font-bold hover:border-white transition-all ease-in-out"
            >
              Eventos
            </button>
          </li>

          <li className={`px-4`}>
            <button
              onClick={() => {handleNavigation("contato"); toggleAsideWidth();}}
              className="hover:border-b-4 font-bold hover:border-white transition-all ease-in-out"
            >
              Contatos
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
