import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import DetailPost from "../pages/DetailPost";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`border shadow ${theme.border} ${theme.text} justify-between flex flex-col gap-3 font-[Lora] font-light p-7`}
    >
      <h1 className="text-2xl">{post.title}</h1>
      <img src={post.img} alt="" />
      <p className="font-light">Usuário: {post.description}</p>
      <Link
        to={`/post/${post.id}`}
        state={{ post }}
        className={`p-2 border ${theme.border} text-center ${theme.bgHover}`}
      >
        Ver post
      </Link>
    </div>
  );
}

export default PostCard;
