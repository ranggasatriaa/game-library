// import Message from './Message';
import ListGroup from "./components/ListGroup";
import { Fragment } from "react";

function App() {
  let items = ["Jakarta", "Bandung", "Semarang", "Yogyakarta", "Surabaya"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Kota" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
