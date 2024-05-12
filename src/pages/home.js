import { Header } from "../component/header.js";
import Carousel  from "../component/Carousel.js";
import Items from "../component/items.js"

export default function Home() {
  return ( 
    <div>
      <Header />
      <Carousel />
      <Items />
      <h1 class='text-danger'> This is Home Page</h1>
    </div>
  );
}
