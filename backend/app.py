from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)  # Allow React frontend to access this backend

# Load precomputed data
popular_df = pickle.load(open('popular.pkl', 'rb'))
books = pickle.load(open('books.pkl', 'rb'))
similarity_scores = pickle.load(open('similarity_scores.pkl', 'rb'))

@app.route('/')
def home():
    return jsonify(message="📘 Book Recommender API is running.")

# ✅ Endpoint to return top 50 popular books
@app.route('/popular_books', methods=['GET'])
def get_popular_books():
    top_books = popular_df.head(50)
    books_data = [
        {
            "title": row['title'],
            "author": row['author'],
            "image": row['coverImg'],
            "votes": row['numRatings'],
            "rating": row['rating']
        }
        for _, row in top_books.iterrows()
    ]
    return jsonify(books=books_data)

# ✅ Endpoint for autocomplete dropdown
@app.route('/book_list', methods=['GET'])
def get_book_list():
    return jsonify(books=list(books['title'].values))

# ✅ Endpoint for book recommendations
@app.route('/recommend_books', methods=['POST'])
def recommend_books():
    data = request.get_json()
    user_input = data.get("user_input", "").strip()

    # Validate input
    matching_index = books[books['title'] == user_input].index
    if matching_index.empty:
        return jsonify(recommendations=[], message="❌ Book not found. Please select from suggestions.")

    index = matching_index[0]
    similar_items = sorted(
        list(enumerate(similarity_scores[index])),
        key=lambda x: x[1],
        reverse=True
    )[1:6]

    recommendations = [
        [
            books.iloc[i[0]]['title'],
            books.iloc[i[0]]['author'],
            books.iloc[i[0]]['coverImg']
        ]
        for i in similar_items
    ]

    return jsonify(recommendations=recommendations, message="✅ Success")

if __name__ == '__main__':
    app.run(debug=True)
