import Link from "next/link";
import Image from "next/image";
import styles from "./Post.module.css";
import CheckIcon from "@mui/icons-material/Check";
import { supabase } from "../../services/supabaseClient";

interface PostData {
  id: number;
  author: string;
  title: string;
  content: string;
  answer_count: number;
  views: number;
  author_pfp: string;
  tags: string;
  downvoters: string[];
  upvoters: string[];
}

function NumberPanel({ data }) {
  const rating = data.upvoters.length - data.downvoters.length;
  let answerStyles;
  if (data.answer_count === 0) answerStyles = styles.answersZero;
  else if (data.is_resolved) answerStyles = styles.answersResolved;
  else answerStyles = styles.answersSome;

  return (
    <div className={styles.numberPanel}>
      <p className={styles.rating}>{`${rating} ${
        rating === 1 ? "balss" : "balsis"
      }`}</p>
      <p className={answerStyles}>
        {data.is_resolved && <CheckIcon sx={{ fontSize: 14 }} />}
        {`${data.answer_count} ${
          data.answer_count === 1 ? "atbilde" : "atbildes"
        }`}
      </p>
      <p className={styles.views}>{`${data.views} ${
        data.views === 1 ? "skatījums" : "skatījumi"
      }`}</p>
    </div>
  );
}

export default function Post(params: any) {
  const data: PostData = params.data;

  async function add_view() {
    const a = await supabase.rpc("questions_add_view", {
      x: 1,
      row_id: data.id,
    });
    params.onClick(true);
  }

  return (
    <div className={styles.cardPost}>
      <NumberPanel data={data} />
      <div>
        <p className={`${styles.fontMedium} ${styles.colorAccent}`}>
          <Link onClick={add_view} href={`questions/${data.id}`}>
            {data.title}
          </Link>
        </p>
        <p>
          {data.content.slice(0, 300) +
            (data.content.length > 300 ? "..." : "")}
        </p>
        {data.tags && (
          <div style={{ display: "flex", gap: "4px", marginTop: "-5px" }}>
            {data.tags.split(" ").map((tag, index) => {
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
        {data.author_pfp && (
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <Image
              style={{ borderRadius: "9999px" }}
              alt="Author picture"
              width="20"
              height="20"
              src={data.author_pfp}
            ></Image>
            <p>{data.author}</p>
          </div>
        )}
      </div>
    </div>
  );
}
