import { JSX,useEffect, useState } from "react";
import HiddenGame from "./Components/HiddenGame";
import CorrectTags from "./Components/CorrectTags";
import FirstIncorrectTags from "./Components/InCorrectComponents/FirstInCorrectTags";
import SecondIncorrectTags from "./Components/InCorrectComponents/SecondInCorrectTags";
import ThirdIncorrectTags from "./Components/InCorrectComponents/ThirdInCorrectTags";
import FourthIncorrectTags from "./Components/InCorrectComponents/FourthInCorrectTags";

const shuffleArray = (array: JSX.Element[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const HiddenComponents: JSX.Element[] = [
  <CorrectTags key="correct" />,
  <FirstIncorrectTags key="first" />,
  <SecondIncorrectTags key="second" />,
  <ThirdIncorrectTags key="third" />,
  <FourthIncorrectTags key="fourth" />,
];

const App = () => {
  const [shuffledComponents, setShuffledComponents] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setShuffledComponents(shuffleArray(HiddenComponents));
  }, []);

  return (
    <>
      <HiddenGame />
      <div className="Find here">
      {shuffledComponents.map((component) => (
        <>{component}</>
      ))}
      </div>
    </>
  );
};

export default App;
