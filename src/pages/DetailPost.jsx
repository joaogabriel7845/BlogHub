import { ArrowLeft, StepBack } from "lucide-react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function DetailPost() {
  const { state } = useLocation();
  const post = state.post;

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full min-h-screen p-10 flex flex-col gap-5 ${theme.bg} ${theme.text}`}
    >
      <Link to={"/"}>
        <ArrowLeft />
      </Link>
      <div
        className={`w-full flex flex-1 flex-col gap-5 p-10 border ${theme.borderDetailPost} shadow`}
      >
        <h1 className="font-[Lora] text-center text-3xl">{post.title}</h1>
        <div className="flex flex-1 flex-wrap gap-5">
          <img
            className="flex-1 object-cover rounded-md" src={post.img} alt=""/>
          <div
            className={`flex-1 flex flex-col gap-5 p-5 border ${theme.borderDetailPost}`}
          >
            <p className="">Usuário: {post.description}</p>
            <p className="text-xl font-[Lora]">{post.context}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPost;
