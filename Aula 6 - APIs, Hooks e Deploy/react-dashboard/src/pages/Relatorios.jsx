import { GraficoBarras } from "@/components/GraficoBarras";
import { GraficoPizza } from "@/components/GraficoPizza";
import { Button } from "@/components/ui/button"

export default function Relatorios() {
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Relatórios</h1>
      <Button className="cursor-pointer">Click me</Button>
      <div className="flex">
        <GraficoBarras titulo="Gráfico de Barras"></GraficoBarras>
        <GraficoBarras titulo="Gráfico de Barras menos legal"></GraficoBarras>
        <GraficoPizza></GraficoPizza>
      </div>
    </div>
  );
}
