import styles from "./CreatePost.module.css";

import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image URL

    //criar o array de tags

    // checar todos os valores

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    <Navigate to="/" />;
  };

  const post = {
    title,
    image,
    body,
    tags,
  };

  const { insertDocument, response } = useInsertDocument("posts");

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título: </span>
          <input
            type="text"
            placeholder="Título do post"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            required
          />
        </label>
        <label>
          <span>URL da imagem: </span>
          <input
            type="text"
            placeholder="Cole o URL da imagem"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            name="imagem"
          />
        </label>
        <label>
          <span>Conteúdo: </span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags: </span>
          <input
            type="text"
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            name="tags"
            required
          />
        </label>
        {!response.loading && (
          <button
            className="btn"
            onClick={() => {
              console.log(post);
            }}
          >
            Postar
          </button>
        )}
        {response.loading && <button className="btn">Aguarde...</button>}
        {response.error && <p className="error">{response.error} </p>}
      </form>
    </div>
  );
};

export default CreatePost;
