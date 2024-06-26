import React, { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa"; // Import the image icon from react-icons
import "../styles/BookForm.css";

const BookForm = ({ book, onSave }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setPublisher(book.publisher);
      setYear(book.year);
      setImage(book.image || "");
      setPreview(book.image ? `data:image/png;base64,${book.image}` : "");
    } else {
      setTitle("");
      setAuthor("");
      setPublisher("");
      setYear("");
      setImage("");
      setPreview("");
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: book ? book.id : null,
      title,
      author,
      publisher,
      year,
      image,
    };
    onSave(newBook);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result.split(",")[1]); // Save base64 without the prefix
        setPreview(reader.result); // This is the full base64 string, used for preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="book-form-container">
      <form onSubmit={handleSubmit} className="book-form">
        <div>
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Autor</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Editora</label>
          <input
            type="text"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ano</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div className="image-upload">
          <label>Upload de Imagem</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
      <div className="image-preview-container">
        {preview ? (
          <img src={preview} alt="Preview" className="image-preview" />
        ) : (
          <div className="image-placeholder">
            <FaImage size={64} color="#ccc" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookForm;
