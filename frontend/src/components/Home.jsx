import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/popular_books')
      .then(res => res.json())
      .then(data => setPopularBooks(data.books))
      .catch(err => console.error("Failed to fetch popular books:", err));
  }, []);

  return (
    <div className="container">
      <h1 className="main-heading">📚 Top 50 Popular Books</h1>
      <div className="row">
        {popularBooks.map((book, i) => (
          <div key={i} className="col-md-3 card-box">
            <div className="card">
              <img
                src={book.image}
                alt="Book Cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/200x300?text=No+Image';
                }}
              />
              <p className="book-title">{book.title}</p>
              <h5 className="book-author">{book.author}</h5>
              <p className="book-rating">⭐ {book.rating} ({book.votes} votes)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
