import { Link } from "react-router-dom";

import illustration from "../assets/images/illustration.svg";
import logImg from "../assets/images/logo.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";

//webpack (snowpack,vite, ...) é um empacotador de módulo JavaScript de código aberto

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustration}
          alt="Ilustração simbolizando peguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiaencia em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da Sala" />
            <Button type="submit">Criar sala</Button>
            <p>
              Quer entrar em uma sala existente ?
              <Link to="/"> clique aqui!</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
