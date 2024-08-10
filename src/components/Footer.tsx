"use client";
import React from "react";

type Props = {};

function Footer({}: Props) {
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
    <footer
      className={`w-full relative flex items-center justify-center  ${
        windowWidth < 540 ? "px-6" : windowWidth < 1439 ? "px-14" : "px-24"
      } py-8 text-white bg-[#06437E] z-10`}
    >
      CNPJ 56.280.260/0001-12
    </footer>
  );
}

export default Footer;
