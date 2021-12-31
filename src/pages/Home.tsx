import illustration from "../assets/images/illustration.svg";
import logImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon-light.svg";

import "../styles/auth.scss";

import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const history = useNavigate();
  const {user, signInWithGoogle} = useAuth();

  async function handleCreateRoom() {
    if(!user){
      await signInWithGoogle()
    }

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
