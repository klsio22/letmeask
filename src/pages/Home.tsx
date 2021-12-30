import illustration from "../assets/images/illustration.svg";
import logImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon-light.svg";

import { firebase, auth } from "../services/firebase";

import "../styles/auth.scss";

import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { TestContext } from "../App";

//webpack (snowpack,vite, ...) é um empacotador de módulo JavaScript de código aberto

export function Home() {
  const history = useNavigate();


  function handleCreateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
    });

    history("/rooms/new");
  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o google
          </button>

          <div className="separator"> ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o codigo da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
