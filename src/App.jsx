import React, { useState } from "react";
import "./App.css";

const FavMovie = () => {
  const [favMovie, setFavMovie] = useState([]);

  const handleMovieCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setFavMovie((prevMovie) => [...prevMovie, value]);
    } else {
      setFavMovie((prevMovie) => prevMovie.filter((movie) => movie !== value));
    }
  };

  const displaySelectedMovie = () => {
    if (favMovie.length === 0) {
      return "";
    } else {
      return `Selected Movies: ${favMovie.join(", ")}`;
    }
  };

  return (
    <div>
      <label>Choose your favorite movies:</label>
      <br />
      <input
        type="checkbox"
        value="Action"
        onChange={handleMovieCheckbox}
      />{" "}
      Action
      <br />
      <input
        type="checkbox"
        value="Comedy"
        onChange={handleMovieCheckbox}
      />{" "}
      Comedy
      <br />
      <input
        type="checkbox"
        value="Drama"
        onChange={handleMovieCheckbox}
      />{" "}
      Drama
      <br />
      <p>{displaySelectedMovie()}</p>
    </div>
  );
};

const FavFruit = () => {
  const [selectedFruit, setSelectedFruit] = useState([]);
  const handleFruitCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedFruit((preFruit) => [...preFruit, value]);
    } else {
      setSelectedFruit((preFruit) =>
        preFruit.filter((fruit) => fruit != value),
      );
    }
  };

  const displaySelectedFruits = () => {
    if (selectedFruit.length === 0) {
      return "";
    } else {
      return `Selected Fruits: ${selectedFruit.join(", ")}`;
    }
  };

  return (
    <div>
      <label>Choose your favourite fruits:</label> <br />
      <input
        type="checkbox"
        value="Apple"
        onChange={handleFruitCheckbox}
      />{" "}
      Apple <br />
      <input
        type="checkbox"
        value="Banana"
        onChange={handleFruitCheckbox}
      />{" "}
      Banana <br />
      <input
        type="checkbox"
        value="Orange"
        onChange={handleFruitCheckbox}
      />{" "}
      Orange <br />
      <p>{displaySelectedFruits()}</p>
    </div>
  );
};

const FavDrink = () => {
  const [selectedDrink, setSelectedDrink] = useState([]);
  const handleDrinkCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedDrink((preDrink) => [...preDrink, value]);
    } else {
      setSelectedDrink((preDrink) =>
        preDrink.filter((drink) => drink != value),
      );
    }
  };

  const displaySelectedDrinks = () => {
    if (selectedDrink.length === 0) {
      return "";
    } else {
      return `Selected Drinks: ${selectedDrink.join(", ")}`;
    }
  };

  return (
    <div>
      <label>Choose your favourite drinks:</label> <br />
      <input
        type="checkbox"
        value="Coffee"
        onChange={handleDrinkCheckbox}
      />{" "}
      Coffee <br />
      <input
        type="checkbox"
        value="Tea"
        onChange={handleDrinkCheckbox}
      />{" "}
      Tea <br />
      <input
        type="checkbox"
        value="Juice"
        onChange={handleDrinkCheckbox}
      />{" "}
      Juice <br />
      <p>{displaySelectedDrinks()}</p>
    </div>
  );
};

const FavDessert= () => {
  const [selectedDessert, setSelectedDessert] = useState([]);
  const handleDessertCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedDessert((preDessert) => [...preDessert, value]);
    } else {
      setSelectedDessert((preDessert) =>
        preDessert.filter((dessert) => dessert != value),
      );
    }
  };

  const displaySelectedDesserts = () => {
    if (selectedDessert.length === 0) {
      return "";
    } else {
      return `Selected Desserts: ${selectedDessert.join(", ")}`;
    }
  };

  return (
    <div>
      <label>Choose your favourite desserts:</label> <br />
      <input
        type="checkbox"
        value="Cake"
        onChange={handleDessertCheckbox}
      />{" "}
      Cake <br />
      <input
        type="checkbox"
        value="Ice Cream"
        onChange={handleDessertCheckbox}
      />{" "}
      Ice Cream <br />
      <input
        type="checkbox"
        value="Pie"
        onChange={handleDessertCheckbox}
      />{" "}
      Pie <br />
      <p>{displaySelectedDesserts()}</p>
    </div>
  );
};

const BookGenre= () => {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const handleGenreCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedGenre((preGenre) => [...preGenre, value]);
    } else {
      setSelectedGenre((preGenre) =>
        preGenre.filter((genre) => genre != value),
      );
    }
  };

  const displaySelectedGenres = () => {
    if (selectedGenre.length === 0) {
      return "";
    } else {
      return `Selected Genres: ${selectedGenre.join(", ")}`;
    }
  };

  return (
    <div>
      <label>Choose your favourite book genres:</label> <br />
      <input
        type="checkbox"
        value="Fiction"
        onChange={handleGenreCheckbox}
      />{" "}
      Fiction <br />
      <input
        type="checkbox"
        value="Mystery"
        onChange={handleGenreCheckbox}
      />{" "}
      Mystery <br />
      <input
        type="checkbox"
        value="Biography"
        onChange={handleGenreCheckbox}
      />{" "}
      Biography <br />
      <p>{displaySelectedGenres()}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <FavMovie />
      <FavFruit />
      <FavDrink />
      <FavDessert />
      <BookGenre />
    </main>
  );
}
