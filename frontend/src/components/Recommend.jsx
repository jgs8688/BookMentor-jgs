import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const Recommend = () => {
  const [input, setInput] = useState('');
  const [bookList, setBookList] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Load book titles for autocomplete
  useEffect(() => {
    fetch('http://localhost:5000/book_list')
      .then(res => res.json())
      .then(data => setBookList(data.books || []))
      .catch(err => {
        console.error('Failed to load book list:', err);
        setMessage('❌ Could not load book list.');
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRecommendedBooks([]);
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/recommend_books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_input: input }),
      });

      const data = await res.json();
      if (data.recommendations?.length) {
        setRecommendedBooks(data.recommendations);
      } else {
        setMessage(data.message || 'No recommendations found.');
      }
    } catch (err) {
      setMessage('⚠️ Failed to fetch recommendations.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="main-heading">Get Book Recommendations</h1>
      <form onSubmit={handleSubmit}>
        <input
          list="book_names"
          className="form-control"
          type="text"
          placeholder="Type book name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <datalist id="book_names">
          {bookList.map((title, i) => (
            <option key={i} value={title} />
          ))}
        </datalist>
        <button type="submit" className="btn btn-warning" disabled={loading}>
          {loading ? 'Loading...' : 'Recommend'}
        </button>
      </form>

      {message && <p className="error-msg">{message}</p>}

      {recommendedBooks.length > 0 && (
        <>
          <h3 className="section-title">Recommended Books:</h3>
          <div className="row">
            {recommendedBooks.map((book, i) => (
              <div key={i} className="col-md-3 card-box">
                <div className="card">
                  <img
                    src={book[2]}
                    alt="Book cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/200x300?text=No+Image';
                    }}
                  />
                  <p className="book-title">{book[0]}</p>
                  <h5 className="book-author">{book[1]}</h5>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Recommend;
