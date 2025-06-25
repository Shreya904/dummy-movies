
## 🎬 MovieNest

**MovieNest** is a simple, responsive React app that displays a collection of movies and allows users to search through them. Built as part of an assignment, it simulates API interaction using a local JSON file, due to unavailability of the originally intended API.

---

### 🚀 Features

* 🔎 Search movies by name
* 🎞️ Displays movie posters, title, year, and rating
* 📱 Fully responsive design
* ⚡ Fast, clean UI with hover effects



### 🛠️ Technologies Used

* React (with Hooks)
* Vite
* CSS3 (custom styles)
* Local JSON data to simulate API responses

---

### 📁 Folder Structure

```
/public
  └── movies.json        // Mock movie data
/src
  ├── App.jsx            // Main application logic
  ├── movieCard.jsx      // Movie card component
  ├── App.css            // Styling
  └── main.jsx           // React DOM entry point
```

---

### 🔄 Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/your-username/movienest.git

# 2. Navigate into the folder
cd movienest

# 3. Install dependencies
npm install

# 4. Run the dev server
npm run dev
```

---

### 🌐 About the API

Originally, the project was meant to use:

```
https://dummyapi.online/api/movies
```

However, since the API was **down/unreachable**, I used a locally stored `movies.json` file located in the `/public` directory to simulate a similar response format.

---

### 📃 Sample JSON Structure

```json
{
  "id": 1,
  "movie": "Inception",
  "rating": "8.7",
  "year": "2010",
  "image": "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
  "url": "https://www.imdb.com/title/tt1375666/"
}
```

---

### 🙋‍♀️ Author

**Shreya Srivastava**

