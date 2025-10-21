// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return <img src={dogImage} alt="A Random Dog" />;
}

export default App;
