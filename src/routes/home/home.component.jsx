import { Fragment, useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { Outlet } from "react-router-dom";
import { HomeContainer } from "./home.styles";

const getRandomDrinks = async () => {
  const ingredients = [
    "vodka",
    "tequila",
    "whiskey",
    "lime",
    "lemon",
    "mint",
    "Gin",
  ];
  let randomDrinks = [];

  for (let i = 0; i < 10; i++) {
    const randomIngredient = Math.floor(Math.random() * ingredients.length);
    // const url =
    //   `https://api.api-ninjas.com/v1/cocktail?name=` +
    //   ingredients[randomIngredient];
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-Api-Key": "LvRchmoyZcW2aX630PW9Mw==kkPC0Yswnrph4bRe",
    //   },
    // };

    const url =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
      ingredients[randomIngredient];

    console.log(url);
    const response = await fetch(url);
    console.log(response);
    const drinks = await response.json();
    console.log(drinks);
    const randomDrink = Math.floor(Math.random() * drinks.drinks.length);
    randomDrinks.push(drinks.drinks[randomDrink]);
  }
  console.log(randomDrinks);
};

const Home = () => {
  return (
    <Fragment>
      <HomeContainer>
        <Container>
          <Button
            as="input"
            type="button"
            value="Random Drinks"
            variant="primary"
            size="lg"
            onClick={getRandomDrinks}
          />
        </Container>
      </HomeContainer>
    </Fragment>
  );
};

export default Home;
