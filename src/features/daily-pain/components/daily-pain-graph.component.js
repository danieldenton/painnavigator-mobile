import React from "react";
import { colors } from "../../../infrastructure/theme/colors";
import { VictoryZoomContainer, VictoryAxis, VictoryChart, VictoryScatter, VictoryLine, VictoryTheme, Background } from "victory-native";
import styled from "styled-components/native";

const GraphWrapper = styled.View`
    margin-bottom: 16px;
    margin-top: 16px;
`;

export const DailyPainGraph = ({ graphData }) => {
    
    return (
        <GraphWrapper>
            
            <VictoryChart
                // containerComponent={<VictoryZoomContainer/>}
                maxDomain={{ y: 11 }}
                minDomain={{ y: 0 }}
                padding={{ top: 0, bottom: 25, left: 25, right: 35 }}
                domainPadding={{ x: 40, y: 40 }}
                backgroundComponent={<Background y={0} height={275} />}
            >
                <VictoryAxis
                    style={{
                        grid: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 },
                        tickLabels: { fontFamily: "", fontSize: 12, padding: 8 }
                    }}
                    tickValues={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
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
                    data={graphData}
                    x="day"
                    y="score"
                />
                {/* <VictoryScatter
                    style={{
                        parent: { backgroundColor: "#FFFFFF" },
                        data: { fill: `${colors.brand.primary}`, stroke: `${colors.brand.primary}`, strokeWidth: 2 },
                        labels: { fontSize: 12, color: "#606C81" },
                    }}
                    data={graphData}
                    size={6}
                />
                <VictoryScatter
                    style={{
                        data: { fill: `white`, stroke: `${colors.brand.primary}`, strokeWidth: 2},
                        labels: { fontSize: 12, color: "#606C81" },
                    }}
                    data={graphData}
                    size={6}
                /> */}
            </VictoryChart>
        </GraphWrapper>
    );
};