import { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import { PartList } from "./components/PartList";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(2);
  const [hair, setHair] = useState(0);
  const [mouth, setMouth] = useState(2);
  const [eyebrows, setEyebrows] = useState(2);
  const [hat, setHat] = useState(0);
  const [glasses, setGlasses] = useState(2);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);

  // Khai báo và khỏi chạy khi nhấn vào nút ngẫu nhiên

  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setHat(Math.floor(Math.random() * total.hat));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  };

  //Hook useEffect sẽ khởi chạy randommize() lần đầu tiên và dừng lại
  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">TRẦN TIẾN DŨNG CUSTOMIZE</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
              mouth={mouth}
              eyebrow={eyebrows}
              hat={hat}
              glasses={glasses}
            />

            <div className="text-center">
              <button className="button" onClick={() => randomize()}>
                Randomize!
              </button>
            </div>

            <div className="list-section">
              <h2>Body</h2>
              <PartList
                total={total.body}
                path="character/body"
                set={setBody}
                selected={body}
              />{" "}
            </div>
            <div className="list-section">
              <h2>Eyes</h2>
              <PartList
                total={total.eyes}
                path="character/eyes"
                set={setEyes}
                selected={eyes}
                zoom={2.5}
                top="35px"
              />
            </div>
            <div className="list-section">
              <h2>Hair</h2>
              <PartList
                total={total.hair}
                path="character/hair"
                set={setHair}
                selected={hair}
              />
            </div>
            <div className="list-section">
              <h2>Mouth</h2>
              <PartList
                total={total.mouth}
                path="character/mouths"
                set={setMouth}
                selected={mouth}
                zoom={2}
              />
            </div>
            <div className="list-section">
              <h2>Eyebrows</h2>
              <PartList
                total={total.eyebrows}
                path="character/eyebrows"
                set={setEyebrows}
                selected={eyebrows}
              />{" "}
            </div>
            <div className="list-section">
              <h2>Hats</h2>
              <PartList
                total={total.hat}
                path="character/accessories/hats"
                set={setHat}
                selected={hat}
              />
            </div>
            <div className="list-section">
              <h2>Glasses</h2>
              <PartList
                total={total.glasses}
                path="character/accessories/glasses"
                set={setGlasses}
                selected={glasses}
              />
            </div>
            <div className="list-section">
              <h2>Clothing (L1)</h2>
              <PartList
                total={total.clothing1}
                path="character/clothes/layer_1"
                set={setClothing1}
                selected={clothing1}
              />
            </div>
            <div className="list-section">
              <h2>Clothing (L2)</h2>
              <PartList
                total={total.clothing2}
                path="character/clothes/layer_2"
                set={setClothing2}
                selected={clothing2}
              />
            </div>
            <div className="list-section">
              <h2>Clothing (L3)</h2>
              <PartList
                total={total.clothing3}
                path="character/clothes/layer_3"
                set={setClothing3}
                selected={clothing3}
                zoom={2}
                top="-15px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
