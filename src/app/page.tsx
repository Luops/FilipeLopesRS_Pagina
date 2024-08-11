"use client";

import React from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Images
import Filipe from "../app/assets/DSC_3217 .png";
import Local from "../app/assets/Loca_exemplo.jpeg";

// Animations
import { motion } from "framer-motion";

// Icons
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
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
    <main className="flex pt-[7rem] min-h-screen flex-col items-center">
      {/*Sobre*/}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        id="sobre"
        className={`w-full flex justify-between items-center h-[87vh] text-gray-100 ${
          windowWidth < 1190 && windowWidth < 800 ? "mb-8" : "-mb-8"
        } ${windowWidth > 979 ? "px-14" : "px-[2%]"}`}
      >
        <div
          className={`relative flex flex-col gap-4 text-black ${
            windowWidth > 1439 && "absolute z-10"
          } ${windowWidth < 1190 && "absolute z-10"} ${
            windowWidth < 980
              ? windowWidth < 540
                ? "w-full items-center text-center px-0"
                : "w-full items-center text-center px-5"
              : ""
          } ${windowWidth > 980 && "w-1/2"}`}
        >
          <h4
            className={`${
              windowWidth < 980
                ? windowWidth < 540
                  ? "text-2xl w-full"
                  : "text-3xl w-full"
                : "text-2xl"
            } ${
              windowWidth > 1439 && "text-5xl"
            } font-bold font-quickSand -mb-4`}
          >
            Canditado a vereador
          </h4>
          <h3
            className={`${
              windowWidth < 980
                ? windowWidth < 540
                  ? windowWidth < 420
                    ? "w-full text-[2.6rem]"
                    : "text-6xl w-full"
                  : "text-7xl w-full"
                : "text-6xl"
            } ${
              windowWidth > 1439 && "text-8xl"
            } font-extrabold uppercase bg-gradient-to-r from-green-700  via-red-500 to-yellow-500 bg-clip-text text-transparent`}
          >
            Filipe Lopes
          </h3>
          <p
            className={`${
              windowWidth < 980
                ? windowWidth < 540
                  ? "w-full text-md text-justify"
                  : "w-full text-lg text-justify"
                : "text-md"
            } ${
              windowWidth > 1439
                ? "text-xl max-w-[650px]"
                : windowWidth > 979
                ? "max-w-[500px]"
                : "w-full"
            } font-quickSand`}
          >
            Sou o Filipe Lopes, morador a 30 anos da{" "}
            <strong>bom sucesso</strong>, que estudou até o ensino médio na
            escola <strong>Tuiuti</strong>, formado em gestão de{" "}
            <strong>RH</strong> pela <strong>ULBRA</strong>, consultor de
            recursos humanos a 12 anos. Durante muito tempo prestei serviços
            para diversas empresas no seu processo de recrutamento, seleção,
            treinamento e desenvolvimento. Tive a oportunidade de ser{" "}
            <strong>diretor de RH e gerente geral</strong> de indústria, e por
            esse motivo da experiência que tenho, quero levar políticas públicas
            para a Câmara de vereadores, assim ajudando a população para
            melhores oportunidades de empregos e qualificação profissional.
          </p>
          <Link
            href="https://www.queroapoiar.com.br/Filipe%20Lopes%20"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-fit ${
              windowWidth > 480 ? "text-2xl" : "text-lg self-center"
            } font-bold font-quickSand text-white px-6 py-4 mb-10 rounded-full bg-[#645CFB] hover:bg-[#00D796] hover:text-white transition-all ease-in-out duration-300 shadow-md shadow-slate-400`}
          >
            Aperte aqui para me apoiar
          </Link>
        </div>
        <picture
          className={`w-1/2 ${
            windowWidth < 1190 ? "absolute right-0" : "relative"
          } ${windowWidth < 980 && "hidden"} ${
            windowWidth > 979 && "absolute right-0"
          } self-end z-1`}
        >
          <Image
            src={Filipe}
            alt="Filipe Lopes"
            priority
            className={`block opacity-90 object-contain m-0 p-0 bg-transparent transform scale-x-[-1] ${
              windowWidth > 979 && "mb-8 h-[80vh]"
            }`}
          />
        </picture>
      </motion.section>
      {/*Compromissos*/}
      <section
        id="compromissos"
        className={`flex flex-col w-full ${
          windowWidth < 540 ? "px-6" : windowWidth < 1439 ? "px-14" : "px-24"
        } py-14 bg-slate-800 rounded-[20px] text-white gap-5 shadow-lg shadow-slate-400`}
      >
        <h4 className="text-start text-4xl uppercase font-extrabold">
          Compromissos
        </h4>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`flex flex-col gap-8 ${
            windowWidth < 540 ? "text-lg" : "text-2xl"
          } uppercase text-justify`}
        >
          <p className="min-h-[80px] font-quickSand border-l-8 pl-4">
            Propor a criação de um NOVO DISTRITO INDUSTRIAL, focado para
            empresas de 20 a 150 colaboradores
          </p>
          <p className="min-h-[80px] font-quickSand border-l-8 pl-4">
            Propor a CRIAÇÃO do SINE MUNICIPAL, e fazer a política de geração de
            EMPREGOS do município.
          </p>
          <p className="min-h-[80px] font-quickSand border-l-8 pl-4">
            Projeto que incentiva empresas a CONTRATAREM PESSOAS acima dos 50
            ANOS.
          </p>
          <p className="min-h-[80px] font-quickSand border-l-8 pl-4">
            PPP da EDUCAÇÃO TÉCNICA municipal.
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`${
            windowWidth < 540
              ? windowWidth < 360
                ? "text-md"
                : "text-lg text-justify"
              : "text-2xl text-center"
          } font-quickSand`}
        >
          Quero <strong>trabalhar</strong> muito para políticas públicas de
          geração de <strong>oportunidades</strong>,{" "}
          <strong>oportunidades de empregos e qualificação Técnica</strong>. Por
          isso{" "}
          <strong>
            vem comigo, vem com a oportunidade, vem com{" "}
            <strong className="font-roboto uppercase bg-gradient-to-r from-green-700  via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Filipe Lopes 45000
            </strong>
            .
          </strong>
        </motion.p>
      </section>
      {/*Eventos*/}
      <section
        id="eventos"
        className={`flex flex-col w-full  ${
          windowWidth < 540 ? "px-6" : windowWidth < 1439 ? "px-14" : "px-24"
        }
        } py-6 gap-5`}
      >
        <h4 className="text-start text-4xl uppercase font-extrabold">
          Eventos
        </h4>
        <article
          className={`relative flex ${
            windowWidth > 860 ? "flex-row" : "flex-col"
          } items-center justify-between`}
        >
          <div
            className={`${
              windowWidth > 860 ? "w-1/2" : "w-full"
            } font-quickSand self-start`}
          >
            <h5
              className={`${
                windowWidth > 1439 ? "text-4xl" : "text-2xl"
              } uppercase font-semibold`}
            >
              Reunião semanal
            </h5>
            <h6
              className={`${
                windowWidth > 1439
                  ? "text-2xl"
                  : windowWidth < 421
                  ? "text-md"
                  : "text-lg"
              }`}
            >
              Endereço: Av. Ely Corrêa, 735 Gravataí - RS 94190-31
            </h6>
            <h6 className={`${windowWidth > 1439 ? "text-2xl" : "text-lg"}`}>
              Data: 10/09/2024
            </h6>
            <p
              className={`mt-5 ${windowWidth < 861 && "text-justify"} ${
                windowWidth > 1439 ? "text-2xl" : "text-lg"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolore ad provident, similique, eum ullam placeat necessitatibus
              ratione culpa architecto vel incidunt reiciendis sint temporibus
              quae fuga voluptatem ea rerum.
            </p>
          </div>
          <picture className="relative overflow-hidden bg-center">
            <Image
              src={Local}
              alt="Evento"
              className={`w-[350px] ${
                windowWidth < 421 ? "h-[50vh]" : "h-[65vh]"
              } object-cover border-black/20 border-2 drop-shadow-xl drop-shadow-slate-400 bg-gradient-to-r from-green-700  via-red-500 to-yellow-500`}
            />
            <div
              className={`absolute top-0 left-0 w-[350px] ${
                windowWidth < 421 ? "h-[50vh]" : "h-[65vh]"
              } bg-gradient-to-r from-green-700  via-red-500 to-yellow-500 opacity-20`}
            ></div>
          </picture>
        </article>
      </section>
      {/*Contato*/}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        id="contato"
        className={`flex flex-col w-full  ${
          windowWidth < 540 ? "px-6" : windowWidth < 1439 ? "px-14" : "px-24"
        }
        } py-14 gap-5 bg-slate-800 text-white gap-5 shadow-lg shadow-slate-400`}
      >
        <h4 className="text-start text-4xl uppercase font-extrabold">
          Contatos
        </h4>
        <div
          className={`flex ${
            windowWidth > 760 ? "flex-wrap" : "flex-col"
          } items-center justify-center gap-10`}
        >
          <Link
            href="https://chat.whatsapp.com/F1VxdXraU8fFIY82v61f4s"
            target="_blank"
            className={`${
              windowWidth > 760 ? "w-[300px]" : "w-full"
            } flex items-center justify-center text-center gap-1 bg-[#3FE05C] hover:bg-[#33b14a] transition-all ease-in-out duration-300 p-5`}
          >
            <i className="self-start mt-1">
              <FaWhatsapp className="text-6xl" />
            </i>
            <h6 className="text-2xl uppercase font-bold">Grupo do WhatsApp</h6>
          </Link>
          <Link
            href="https://www.instagram.com/filipelopesrs?igsh=aWxodzFxaDY5czk2"
            target="_blank"
            className={`${
              windowWidth > 760 ? "w-[300px]" : "w-full"
            } flex items-center justify-center text-center gap-1 bg-gradient-to-r from-[#515bd4]  to-[#8134af] hover:from-[#7177be]  hover:to-[#9b44a3] transition-all ease-in-out duration-300 p-5`}
          >
            <i className="self-start mt-1">
              <FaInstagram className="text-6xl" />
            </i>
            <h6 className="text-2xl uppercase font-bold">Instragram</h6>
          </Link>
          <Link
            href="https://www.facebook.com/FilipeLopesRs1?mibextid=ZbWKwL"
            target="_blank"
            className={`${
              windowWidth > 760 ? "w-[300px]" : "w-full"
            } flex items-center justify-center text-center gap-1 bg-[#3b5998] hover:bg-[#517bd6] transition-all ease-in-out duration-300 p-5`}
          >
            <i className="self-start mt-1">
              <FaFacebook className="text-6xl" />
            </i>
            <h6 className="text-2xl uppercase font-bold">Facebook Pessoal</h6>
          </Link>
          <Link
            href="https://www.facebook.com/filipelopesrs?mibextid=ZbWKwL"
            target="_blank"
            className={`${
              windowWidth > 760 ? "w-[300px]" : "w-full"
            } flex items-center justify-center text-center gap-1 bg-[#3b5998] hover:bg-[#517bd6] transition-all ease-in-out duration-300 p-5`}
          >
            <i className="self-start mt-1">
              <FaFacebook className="text-6xl" />
            </i>
            <h6 className="text-2xl uppercase font-bold">
              Facebook Candidatura
            </h6>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
