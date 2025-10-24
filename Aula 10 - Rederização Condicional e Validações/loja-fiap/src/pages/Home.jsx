import { useState, useEffect } from "react";
import SectionContainer from "../components/SectionContainer";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [allproducts, setAllProducts] = useState([])
  const [isloading, setIsloading] = useState(false)

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setIsloading(true)

    fetch(`${API_URL}/category/electronics`)
      .then((res) => res.json())
      .then((data) => setElectronics(data));

    fetch(`${API_URL}/category/jewelery`)
      .then((res) => res.json())
      .then((data) => setJewelery(data));

    fetch(`${API_URL}/category/men's clothing`)
      .then((res) => res.json())
      .then((data) => setMensClothing(data));

    fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((data) => setAllProducts(data))
    .finally(() => setIsloading(false))
  }, []);

  const filtrados = allproducts
        .filter( produto => produto.title.includes("jacket") || produto.title.includes("coat") || produto.description.includes("jacket") || produto.description.includes("coat"))

  if(isloading){
    return <p>Loading...</p>
  }

  return (
    <div>
      <SectionContainer title="Eletrônicos">
        {electronics.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Joias">
        {jewelery.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Roupas Masculinas">
        {mensClothing.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Queridinhos do seguimores">

        {allproducts
        .filter(pegaItem => pegaItem.rating.rate >= 4)
        .sort((a, b) => b.rating.rate - a.rating.rate || b.price - a.price)
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Achados">
        {allproducts
        .filter(produto => produto.price <= 100 && produto.price > 50)
        .sort((a,b) => b.price - a.price)
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Jaquetas e Casacos">
        { filtrados.length > 0 ?
        filtrados
        .sort((a,b) => a.price - b.price)
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
        
        :
        <p>Carregando produtos seu animal</p>
      }
      </SectionContainer>
    </div>
  );
}
