import logImg from "../assets/images/logo.svg";
import "../styles/room.scss";

import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import { Question } from "../components/Question";

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };

    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  }
>;

type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };

  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

export function Room() {
  const { user } = useAuth();

  const params = useParams();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);
    roomRef.on("value", (room) => {
      const databaseRomom = room.val();
      const firebaseQuestions =
        (databaseRomom.questions as FirebaseQuestions) ?? {};

      const parsedQuestion = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            author: value.author,
            content: value.content,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
          };
        }
      );

      setTitle(databaseRomom.title);
      setQuestions(parsedQuestion);
      console.log(parsedQuestion);
      //console.log(room.val());
    });
  }, [roomId]);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") return;

    if (!user) throw new Error("You must be logged id");

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion("");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logImg} alt="Letmeask" />

          <RoomCode code={`${roomId}`} />
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pegunta(s)</span>}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta ,<button>faça seu login</button>.
              </span>
            )}

            <Button type="submit" disabled={!user}>
              envia pergunta
            </Button>
          </div>
        </form>

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
