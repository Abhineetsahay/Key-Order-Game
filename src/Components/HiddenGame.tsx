import { useEffect, useRef, useState } from "react";
import { HiddenStructure } from "../utils/HiddenStructure";

const HiddenGame = () => {
  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);
  const [shuffledOrder, setShuffledOrder] = useState<string[]>([]);

  const [isUserWon, setIsUserWon] = useState<boolean>(false);
  const [finalMessage, setFinalMessage] = useState<string>("");
  const [Password, setPassword] = useState<string>("");

  const shouldWarnRef = useRef<boolean>(true);

  const handleSelect = (tag: string) => {
    if (selectedOrder.length < HiddenStructure.length) {
      const newOrder = [...selectedOrder, tag];
      setSelectedOrder(newOrder);

      if (newOrder.length === HiddenStructure.length) {
        checkOrder(newOrder);
      }
    }
  };

  const checkOrder = (order: string[]) => {
    if (JSON.stringify(order) === JSON.stringify(HiddenStructure)) {
      setIsUserWon(true);
      setPassword("kFm41bnK");
      setFinalMessage("✅ Correct Order! Well done!");
    } else {
      setFinalMessage("❌ Wrong Order! Try Again.");
    }
  };

  useEffect(() => {
    setShuffledOrder([...HiddenStructure].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!shouldWarnRef.current) return;
      event.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [shouldWarnRef]);

  const handleRetry = () => {
    shouldWarnRef.current = false;
    location.reload();
  };

  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">
          Welcome to the Key-Order-Game
        </h1>
        <p className="max-w-lg text-gray-300">
          There is a hidden string inside the body element. Your goal is to
          discover the correct path to reveal the text:{" "}
          <span className="text-green-400 font-semibold">"Correct Answer"</span>
          .
        </p>
      </div>

      {selectedOrder.length < HiddenStructure.length ? (
        <>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {shuffledOrder.map((tag, index) => (
              <button
                className={`p-4 px-6 w-20  flex items-center justify-center font-semibold text-lg rounded-lg shadow-lg cursor-pointer transition-transform duration-300 transform
                ${
                  selectedOrder.includes(tag)
                    ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                    : "bg-white text-black hover:scale-110 active:scale-95"
                }
              `}
                onClick={() => handleSelect(tag)}
                key={index}
                disabled={selectedOrder.includes(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Your Selection:</h3>
            <div className="flex gap-2 mt-2">
              {selectedOrder.map((tag, index) => (
                <span
                  key={index}
                  className="w-20 p-5 flex items-center justify-center bg-green-600 rounded-md text-white font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt-6 text-2xl font-bold">{finalMessage}</div>
          {isUserWon ? (
            <p className="mt-4 text-lg font-semibold text-green-400">
              🎉 Congratulations! You win! The passkey for the next round is:{" "}
              <span className="font-bold text-white">{Password}</span>
            </p>
          ) : (
            <button
              onClick={handleRetry}
              className="mt-4 p-3 px-6 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
            >
              Retry
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default HiddenGame;
