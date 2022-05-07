import React from "react";
import { colors } from "../../../infrastructure/theme/colors";
import { VictoryAxis, VictoryChart, VictoryScatter, VictoryLine, VictoryTheme, Background } from "victory-native";

export const PainGraph = () => {
    return (
        <VictoryChart
            maxDomain={{ y: 11 }}
            minDomain={{ y: 0 }}
            padding={{ top: 0, bottom: 25, left: 35, right: 20 }}
            domainPadding={{ x: 40, y: 40 }}
            style={{
                grid: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 },
                background: { fill: "white" },
                tickLabels: { color: "blue" }
              }}
            backgroundComponent={<Background y={0} height={275} />}
        >
            <VictoryAxis
                style={{
                    grid: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 },
                    tickLabels: { fontFamily: "", fontSize: 12, padding: 8 }
                }}
            />
            <VictoryAxis dependentAxis crossAxis
                width={400}
                height={400}
                domain={[0, 10]}
                theme={VictoryTheme.material}
                tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                standalone={false}
                style={{
                    axis: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 },
                    grid: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 },
                    tickLabels: { fontFamily: "", fontSize: 12 }
                }}
            />
             <VictoryLine
                style={{
                    data: { stroke: `${colors.brand.primary}` },
                    labels: { fontSize: 12, color: "#606C81" },
                    parent: { border: "2px solid #ccc"}
                }}
                data={[
                    { x: "Feb", y: 10 },
                    { x: "Mar", y: 7 },
                    { x: "Apr", y: 8 },
                    { x: "Jun", y: 2 }
                ]}
            />
            <VictoryScatter
                style={{
                    parent: { backgroundColor: "#FFFFFF" },
                    data: { fill: `${colors.brand.primary}`, stroke: `${colors.brand.primary}`, strokeWidth: 2 },
                    labels: { fontSize: 12, color: "#606C81" },
                }}
                data={[
                    { x: "Jun", y: 2 }
                ]}
                size={6}
            />
            <VictoryScatter
                style={{
                    data: { fill: `white`, stroke: `${colors.brand.primary}`, strokeWidth: 2},
                    labels: { fontSize: 12, color: "#606C81" },
                }}
                data={[
                    { x: "Feb", y: 10 },
                    { x: "Mar", y: 7 },
                    { x: "Apr", y: 8 },
                ]}
                size={6}
            />
        </VictoryChart>

    );
};