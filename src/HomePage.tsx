import { FC } from "react";

interface HomePageProps {
  firstName: string;
  price?: number;
  score: number;
}

const HomePage: FC<HomePageProps> = ({ firstName, price, score }) => {
  return (
    <div>
      {firstName}
      {price}
      {score}
    </div>
  );
};

export default HomePage;
