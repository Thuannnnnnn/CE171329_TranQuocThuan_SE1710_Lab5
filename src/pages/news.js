import { Header } from "../component/header.js";
import Card from "../component/card.js"


export default function Home() {
  return ( 
    <div>
      <Header />
      <h1 class='text-danger'> News Category</h1>
      <Card />
    </div>
  );
}
