import { useState } from "react";

function App() {
  const movies = [
    { id: 1, name: "Avatar", image: "/images/Screenshot 2026-05-04 195029.png" },
    { id: 2, name: "Avengers", image: "/images/Screenshot 2026-05-04 195200.png" },
    { id: 3, name: "Batman", image: "/images/Screenshot 2026-05-04 195135.png" },
    { id: 4, name: "Spider Man", image: "/images/Screenshot 2026-05-04 195106.png" },
  ];

  const [page, setPage] = useState("movies");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const [bookingId, setBookingId] = useState("");

  const openMovie = (movie) => {
    setSelectedMovie(movie);
    setPage("details");
  };

  const submitForm = (e) => {
    e.preventDefault();
    setBookingId("BK" + Math.floor(Math.random() * 100000));
    setPage("success");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {page === "movies" && (
        <>
          <h2>Movie List</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {movies.map((movie) => (
              <div key={movie.id} onClick={() => openMovie(movie)}>
                
                {/* ✅ Image size fixed */}
                <img
                  src={movie.image}
                  alt={movie.name}
                  style={{
                    width: "150px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px"
                  }}
                />

                <h3>{movie.name}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {page === "details" && selectedMovie && (
        <>
          <h2>{selectedMovie.name}</h2>

          {/* ✅ Bigger image for details */}
          <img
            src={selectedMovie.image}
            alt={selectedMovie.name}
            style={{
              width: "250px",
              height: "320px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />

          <p>This is the movie details page.</p>

          <button onClick={() => setPage("form")}>Book Seat</button>
        </>
      )}

      {page === "form" && (
        <>
          <h2>Booking Form</h2>

          <form onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Enter name"
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <br /><br />

            <input
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <br /><br />

            <input
              type="text"
              placeholder="Enter mobile"
              required
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            />
            <br /><br />

            <button type="submit">Submit</button>
          </form>
        </>
      )}

      {page === "success" && (
        <>
          <h2>Seat Booked Successfully!</h2>
          <h3>Booking ID: {bookingId}</h3>

          <p>Name: {form.name}</p>
          <p>Email: {form.email}</p>
          <p>Mobile: {form.mobile}</p>
          <p>Movie: {selectedMovie.name}</p>
        </>
      )}
    </div>
  );
}

export default App;