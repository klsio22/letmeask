import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

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
    likes: Record<string, { authorId: string }>;
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
  likeCount: number;
  likeID: string | undefined;
};

export function useRoom(roomId: string) {
  const { user } = useAuth();
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
            likeCount: Object.values(value.likes ?? {}).length,
            likeID: Object.entries(value.likes ?? {}).find(
              ([key , like]) => like.authorId === user?.id
            )?.[0],
          };
        }
      );

      setTitle(databaseRomom.title);
      setQuestions(parsedQuestion);
      //console.log(parsedQuestion);
      //console.log(room.val());
    });

    return () => {
      roomRef.off("value");
    };
  }, [roomId, user?.id]);

  return { questions, title };
}
