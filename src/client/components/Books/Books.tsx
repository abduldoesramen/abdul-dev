import { Grid, Typography } from "@mui/material";
import Layout from "../Layout/Layout.js";
import beforeCoffeeGetsCold from "../../assets/beforeCoffeeGetsCold.jpg";
import musashi from "../../assets/musashi.jpg";
import { useEffect, useState } from "react";
import "./Books.css";
import Header from "../Layout/Header.js";

// interface Book {
//   title: string;
//   description: string;
//   imageLinks: {
//     thumbnail: string;
//   };
// }

const Books = () => {
  // const [books, setBooks] = useState<Book[]>([]);
  // const fetchArray = [
  //   "https://www.googleapis.com/books/v1/volumes/UxBz0AEACAAJ",
  //   "https://www.googleapis.com/books/v1/volumes/kl4qDwAAQBAJ",
  //   "https://www.googleapis.com/books/v1/volumes/ueg6zQEACAAJ",
  // ];

  // Gets three books that I am currently reading
  useEffect(() => {
    // fetchArray.forEach(async (url) => {
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   setBooks([...books, data.volumeInfo]);
    // });
  }, []);

  // console.log(books);

  return (
    <Layout>
      {/* Seperate Container for heading  */}
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Header title="Here's what I've been reading..." />
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        marginBottom="3rem"
        textAlign="center"
      >
        <Grid>
          <div
            className="book-grid"
            onClick={() =>
              window.open(
                "https://www.goodreads.com/book/show/102030.Musashi",
                "_blank"
              )
            }
          >
            <img src={musashi} alt="logo" width={300} height={400} />
            <p>Musashi</p>
          </div>
        </Grid>
        <Grid>
          <div
            className="book-grid"
            onClick={() =>
              window.open(
                "https://www.goodreads.com/book/show/44421460-before-the-coffee-gets-cold",
                "_blank"
              )
            }
          >
            <img
              src={beforeCoffeeGetsCold}
              alt="logo"
              width={300}
              height={400}
            />
            <p>Before The Coffee Gets Cold</p>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        marginBottom="3rem"
      >
        <p>
          You can find out more about books I'm reading by visiting my{" "}
          <a
            href="https://www.goodreads.com/user/show/121333711-abdul-ramen"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "beige" }}
          >
            Good Reads page!
          </a>
        </p>
      </Grid>
    </Layout>
  );
};

export default Books;
