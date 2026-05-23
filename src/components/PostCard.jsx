import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function PostCard({ post }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`border shadow ${theme.border} ${theme.text} flex flex-col gap-3 font-[Lora] font-light p-5`}
    >
      <h1 className="text-2xl">{post.title}</h1>
      <img src={post.img} alt="" />
      <p className="font-light">Usuário: {post.description}</p>
    </div>
  );
}

export default PostCard;
