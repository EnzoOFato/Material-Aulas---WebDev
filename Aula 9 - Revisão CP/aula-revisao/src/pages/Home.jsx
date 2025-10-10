import { useEffect, useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Home() {
  
  const [reactRep, setReactRep] = useState([])
  const API = import.meta.env.VITE_GITHUB_API

  useEffect(() => {
    fetch(`${API}react&per_page=5`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setReactRep(data.items)})
  }, [])



  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Repositories Explorer</h1>
      <Section titulo="React">
        {
          reactRep.map(pegaItem => (
            <Card {...pegaItem}></Card>
          ))
        }
      </Section>
    </div>
  );
}
