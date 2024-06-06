import  { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ProductViewsChart = () => {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"line", number[], string> | null>(null);
  

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    if (chartContainer.current !== null) {
      const ctx = chartContainer.current?.getContext("2d") as CanvasRenderingContext2D | null;

      chartInstance.current = new Chart(ctx!, {

        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [{
            label: "Product Views",
            data: [500, 1000, 750, 1250, 800, 1500],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
    
  }, []);

  return <canvas ref={chartContainer} />;
};

export default ProductViewsChart;
