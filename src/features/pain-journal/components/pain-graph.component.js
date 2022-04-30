import React from "react";
import { colors } from "../../../infrastructure/theme/colors";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from "victory-native";

export const PainGraph = () => {
    return (
        <VictoryChart
            maxDomain={{ y: 10 }}
            minDomain={{ y: 0 }}
            theme={VictoryTheme.material}
            padding={40}
            style={{ 
                parent: { backgroundColor: "#FFFFFF" },
                labels: { fontSize: 12, color: "#606C81", backgroundColor: "#FFFFFF" } 
            }}
        >
            <VictoryAxis
                style={{
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
                    { x: "Jun", y: 5 }
                ]}
            />
        </VictoryChart>

    );
};