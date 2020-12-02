import React, { Component } from "react";
import ReactDOM from "react-dom";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "column2d",
    width: 600,
    height: 400,
    dataFormat: "json",
    dataSource: data,
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
