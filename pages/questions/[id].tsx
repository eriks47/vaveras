import VotePanel from "../../components/common/votePanel";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { remark } from "remark";
import html from "remark-html";
import { supabase } from "../../services/supabaseClient";
import sanitizeHtml from "sanitize-html";
import NewQuestionForm from "../../components/common/new-question-form";
import NavBar from "../../components/nav/nav";
import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import AltNavBar from "../../components/NavBar/NavBar";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// Use get server side props because we need to run this dynamically
export async function getServerSideProps({ params }) {
  let { data, error, status } = await supabase
    .from("questions")
    .select("*")
    .eq("id", Number(params.id));
  const questionData = data[0];

  // Here we also sneek in markdown proccesing since we need
  // to do it on server side (this function runs server-side
  // as opposed to client-side)
  const processedContent = await remark()
    .use(html)
    .process(questionData.content);
  const questionHtml = sanitizeHtml(processedContent.toString());

  const answerData = await supabase
    .from("answers")
    .select("*")
    .eq("questionId", Number(params.id));
  const answerPromises = answerData.data.map(async (answer) => {
    const processedContent = await remark().use(html).process(answer.content);
    const contentHtml = sanitizeHtml(processedContent.toString());
    return contentHtml;
  });
  const answerHtml = await Promise.all(answerPromises);
  return {
    props: {
      questionData,
      questionHtml,
      answerData: answerData.data.sort((a, b): number => {
        const aRating = a.upvoters.length - a.downvoters.length;
        const bRating = b.upvoters.length - b.downvoters.length;
        return aRating < bRating ? 1 : -1;
      }),
      answerHtml,
    },
  };
}

export default function Question({
  questionData,
  questionHtml,
  answerData,
  answerHtml,
}) {
  const [posts, setPosts, preserve, setPreserve] =
    useContext(PostsContext).value;
  const router = useRouter();

  questionData.isQuestion = true;
  answerData.map((answer) => ({ ...answer, isQuestion: false }));

  return (
    <>
      <Head>
        <title>{questionData.title}</title>
      </Head>
      <AltNavBar
        changePosts={(p) => {
          router.push("/");
          setPosts(p);
          setPreserve(true);
        }}
      />
      <div style={{ padding: "0px 2rem" }}>
        <h1 style={{ fontWeight: "normal" }}>{questionData.title}</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <VotePanel data={questionData} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div dangerouslySetInnerHTML={{ __html: questionHtml }} />
            {questionData.tags && (
              <div style={{ display: "flex", gap: "4px", marginTop: "-5px" }}>
                {questionData.tags.split(" ").map((tag, index) => {
                  return (
                    <p
                      key={index}
                      style={{
                        padding: "4px 6px",
                        fontSize: "12px",
                        backgroundColor: "#e1ecf4",
                        borderRadius: "3px",
                        color: "#39739d",
                      }}
                    >
                      {tag}
                    </p>
                  );
                })}
              </div>
            )}
            {questionData.author_pfp && (
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginTop: "-10px",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ borderRadius: "9999px" }}
                  alt="Author picture"
                  width="20"
                  height="20"
                  src={questionData.author_pfp}
                ></Image>
                <p style={{ color: "#3b4045" }}>{questionData.author}</p>
              </div>
            )}
          </div>
        </div>
        <h1 style={{ fontWeight: "normal" }}>
          {`${questionData.answer_count} ${
            questionData.answer_count === 1 ? "Atblide" : "Atbildes"
          }`}
        </h1>
        <Stack direction="column" spacing={3}>
          {answerHtml.map((html: string, index: number) => (
            <div
              key={index}
              style={{
                border: "1px solid hsl(210, 8%, 90%)",
                borderRadius: "6px",
                padding: "5px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <VotePanel data={answerData[index]} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                {answerData[index].author_pfp && (
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginTop: "-10px",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ borderRadius: "9999px" }}
                      alt="Author picture"
                      width="20"
                      height="20"
                      src={answerData[index].author_pfp}
                    ></Image>
                    <p style={{ color: "#3b4045" }}>
                      {answerData[index].author}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
          <h1 style={{ fontWeight: "normal" }}>Tava atblide</h1>
          <NewQuestionForm isQuestion={false} questionId={questionData.id} />
        </Stack>
      </div>
    </>
  );
}
