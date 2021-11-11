import illustration from "../assets/images/illustration.svg";
import logImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon-light.svg";

import "../styles/auth.scss";

//webpack (snowpack,vite, ...) é um empacotador de módulo JavaScript de código aberto

export function Home() {
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
          <button className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o google
          </button>

          <div className="separator"> ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o codigo da sala" />
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
}
