import "./App.css";
import { Suspense, lazy, useEffect, useState } from "react";
// import Modal from "./Components/Modal/Modal";
const Modal = lazy(() => import("./Components/Modal/Modal"));
// import Date from "./Components/Calendar/Calendar";
const Date = lazy(() => import("./Components/Calendar/Calendar"));
// import Shortcuts from "./Components/Shortcuts/Shortcuts";
const Shortcuts = lazy(() => import("./Components/Shortcuts/Shortcuts"));
import Background from "./Components/Background/Background";

function App() {
  const [modal, showModal] = useState(false);

  return (
    <div className="App">
      <Background />

      {modal && (
        <Suspense fallback={<div />}>
          <Modal showModal={showModal} />
        </Suspense>
      )}

      <Suspense fallback={<div />}>
        <Shortcuts showModal={showModal} />
      </Suspense>

      <Suspense fallback={<div />}>
        <Date />
      </Suspense>
    </div>
  );
}

export default App;
