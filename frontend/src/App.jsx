// import React, { useState, useEffect } from 'react';
// import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';
// import Home from './components/Home.jsx';

// function App() {
//   const [recommendedBooks, setRecommendedBooks] = useState([]);
//   const [message, setMessage] = useState('');
//   const [bookList, setBookList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch book titles from backend on initial load
//   useEffect(() => {
//     fetch('http://localhost:5000/book_list')
//       .then((res) => res.json())
//       .then((data) => {
//         setBookList(data.books || []);
//       })
//       .catch((err) => {
//         console.error('Failed to load book list:', err);
//         setMessage('❌ Could not load book list.');
//       });
//   }, []);

//   // Submit recommendation request
//   const handleRecommend = async (input) => {
//     setLoading(true);
//     try {
//       const res = await fetch('http://localhost:5000/recommend_books', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ user_input: input }),
//       });

//       const data = await res.json();
//       if (data.recommendations?.length) {
//         setRecommendedBooks(data.recommendations);
//         setMessage('');
//       } else {
//         setRecommendedBooks([]);
//         setMessage(data.message || 'No recommendations found.');
//       }
//     } catch (error) {
//       setRecommendedBooks([]);
//       setMessage('⚠️ Failed to connect to backend.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <Home
//         bookList={bookList}
//         onSubmit={handleRecommend}
//         recommendedBooks={recommendedBooks}
//         message={message}
//         loading={loading}
//       />
//       <Footer />
//     </>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Recommend from './components/Recommend.jsx';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
