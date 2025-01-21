import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PublicLayout from "./layout/PublicLayout";

function App() {
  const [count, setCount] = useState(0);

  return <PublicLayout>Giris sayfasi</PublicLayout>;
}

export default App;
