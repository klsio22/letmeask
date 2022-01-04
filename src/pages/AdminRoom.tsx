import logImg from "../assets/images/logo.svg";
import "../styles/room.scss";

import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { useParams } from "react-router-dom";
//import { useAuth } from "../hooks/useAuth";
import { Question } from "../components/Question";
import { useRoom } from "../hooks/useRoom";

export function AdminRoom() {
  //const { user } = useAuth();

  const params = useParams();
  const roomId = params.id;

  const { questions, title } = useRoom(`${roomId}`);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logImg} alt="Letmeask" />

          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pegunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
