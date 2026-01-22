import { useState } from "react";

type ItemProps = {
  title: string;
  image: string;
};

function Item({ title, image }: ItemProps) {
  const [big, setBig] = useState(false);

  return (
    <div style={{ marginBottom: 30 }}>
      <h2>{title}</h2>

      <img
        src={image}
        alt={title}
        width={big ? 550 : 100}
        style={{ display: "block", marginBottom: 10 }}
      />

      <button onClick={() => setBig(!big)}>
        Show Big Picture
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <Item
        title="A - Apple - Fruit"
        image="https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
      />

      <Item
        title="L - Lion - Wild Animal"
        image="https://images.unsplash.com/photo-1546182990-dffeafbe841d"
      />

      <Item
        title="C - Cat - Animal"
        image="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
      />
    </div>
  );
}
