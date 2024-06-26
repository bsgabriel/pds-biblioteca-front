import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "../styles/BookForm.css";

const baseURL = "http://localhost:8080/book";

const BookForm = ({ onSave }) => {
  const { bookId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    year: "",
    imageBook: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${baseURL}/${bookId}`);
        console.log(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    if (bookId) {
      fetchBook();
    }
  }, [bookId]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (bookId) {
        await axios.put(`${baseURL}/${bookId}`, formData);
      } else {
        await axios.post(baseURL, formData);
      }
      onSave();
    } catch (error) {
      console.error("Error saving book:", error);
    }
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
