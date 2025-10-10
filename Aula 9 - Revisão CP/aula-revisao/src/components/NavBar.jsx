import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">GitHub Explorer</h1>
      <nav className="space-x-4">
        <Link to="/About" className="hover:text-gray-300 transition duration-200 ease-in-out">Sobre nós</Link>
        <Link to="/Contact" className="hover:text-gray-300 transition duration-200 ease-in-out">Contato</Link>
        <Link to="/" className="hover:text-gray-300 transition duration-200 ease-in-out">Home</Link>
      </nav>
    </header>
  );
}
