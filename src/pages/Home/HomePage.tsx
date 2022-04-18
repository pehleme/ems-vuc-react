import { useState } from "react";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="m-4">
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            className="bg-gradient-to-r from-green-400 to-blue-500
            text-white text-center italic
            px-4 py-2 rounded cursor-default
            transition-all duration-400
            hover:rounded-2xl
            dark:(from-teal-400 to-yellow-500)
            bg-tete"
            onClick={() => setCount((c) => c + 1)}
          >
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default HomePage;
