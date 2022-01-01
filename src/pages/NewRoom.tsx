import illustration from "../assets/images/illustration.svg";
import logImg from "../assets/images/logo.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";

import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

export function NewRoom() {
  const { user } = useAuth();
  const history = useNavigate();
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    //console.log(newRoom);

    if (newRoom.trim() === "") return;
  
    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history(`/rooms/${firebaseRoom.key}`);
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da Sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
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
