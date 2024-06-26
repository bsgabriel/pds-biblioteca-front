import React, { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa"; // Import the image icon from react-icons
import "../styles/BookForm.css";

const BookForm = ({ book, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    year: "",
    imageBook: "",
  });

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        imageBook: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="book-form-container">
      <form onSubmit={handleSubmit} className="book-form">
        <div>
          <label>Título</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Autor</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Editora</label>
          <input
            type="text"
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ano</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
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
        {formData.imageBook ? (
          <img
            src={formData.imageBook}
            alt="Preview"
            className="image-preview"
          />
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
