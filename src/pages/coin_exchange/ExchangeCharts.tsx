import { createChart, ColorType } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { IChartData } from "../../interface/iExchangeChart";

const ChartComponent = (props: IChartData) => {
  const { data } = props.chartData;

  const chartContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    const chart = createChart(chartContainerRef.current!, {
      layout: {
        background: { type: ColorType.Solid, color: "#efefef" },
        textColor: "#000",
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.35,
          bottom: 0.2,
        },
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
      watermark: {
        color: "rgba(2, 2, 2, 1)",
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
      crosshair: {
        vertLine: {
          visible: true,
          color: "rgba(2, 2, 2, 0.7)",
        },
        horzLine: {
          visible: true,
          color: "rgba(2, 2, 2, 0.7)",
        },
      },
      width: chartContainerRef.current?.clientWidth ?? 0,
      height: 450,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      topColor: "rgba(19, 68, 193, 0.4)",
      bottomColor: "rgba(0, 120, 255, 0.0)",
      lineColor: "rgba(19, 40, 153, 1.0)",
      lineWidth: 3,
    });
    newSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (chartContainerRef.current) {
        chart.remove();
      }
    };
  }, [data]);

  return <div ref={chartContainerRef} />;
};

function ExchangeCharts(props: IChartData) {
  return <ChartComponent {...props} />;
}

export default ExchangeCharts;
