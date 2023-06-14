import React from "react";
import { ScrollView } from 'react-native';
import { colors } from "../../../infrastructure/theme/colors";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme, Background } from "victory-native";
import styled from "styled-components/native";

const GraphWrapper = styled.View`
    margin-bottom: 16px;
    margin-top: 16px;
`;

export const DailyPainGraph = ({ graphData }) => {
    const graphWidth = graphData.length * 45
    
    return (
        <GraphWrapper>
            <ScrollView horizontal style={{ flexDirection: 'row' }}>
            <VictoryChart
                width={graphWidth}
                maxDomain={{ y: 11 }}
                minDomain={{ y: 0 }}
                padding={{ top: 0, bottom: 25, left: 25, right: 35 }}
                domainPadding={{ x: 40, y: 40 }}
                style={{
                    grid: { stroke: `${colors.bg.primary}` },
                    background: { fill: "white" }
                }}
                backgroundComponent={<Background y={0} height={275} />}
            >
                <VictoryAxis
                    style={{
                        grid: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 },
                    }}
                />
                <VictoryAxis dependentAxis crossAxis
                    width={100}
                    height={400}
                    domain={[0, 10]}
                    theme={VictoryTheme.material}
                    tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    standalone={false}
                    style={{
                        axis: { stroke: `${colors.bg.primary}`, strokeWidth: 2 },
                        grid: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 },
                    }}
                />
                <VictoryLine
                    style={{
                        data: { stroke: `${colors.brand.primary}` },
                        labels: { fontSize: 12, color: "#606C81", padding: 2 },
                        parent: { border: "2px solid #ccc"}
                    }}
                    data={graphData}
                    x="date"
                    y="score"
                />
            </VictoryChart>
            </ScrollView>
        </GraphWrapper>
    );
};