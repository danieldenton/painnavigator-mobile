import React from "react";
import { ScrollView } from 'react-native';
import { colors } from "../../../infrastructure/theme/colors";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme, Background, VictoryScatter } from "victory-native";
import styled from "styled-components/native";

const GraphWrapper = styled.View`
    margin-bottom: 16px;
    margin-top: 20px;
`;

export const PainGraph = ({ graphData }) => {
    const graphWidth = graphData.length * 45
    
    return (
        <GraphWrapper>
            <ScrollView horizontal style={{ flexDirection: 'row' }}>
            <VictoryChart
                width={graphWidth > 400 ? graphWidth : 400}
                height={300}
                maxDomain={{ y: 11 }}
                minDomain={{ y: 0 }}
                padding={{ top: 0, bottom: 35, left: 25, right: 55 }}
                domainPadding={{ x: 40, y: 40 }}
                style={{
                    background: { fill: "white" }
                }}
                theme={VictoryTheme.material}
                // backgroundComponent={<Background y={0} height={275} />} 
            >
                <VictoryAxis
                    style={{
                        grid: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 }
                    }}
                />
                <VictoryAxis dependentAxis 
                    tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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
                 <VictoryScatter
                    style={{
                        parent: { backgroundColor: "#FFFFFF" },
                        data: { fill: `${colors.brand.primary}`, stroke: `${colors.brand.primary}`, strokeWidth: 2 },
                        labels: { fontSize: 12, color: "#606C81" },
                    }}
                    data={graphData}
                    x="date"
                    y="score"
                    size={3}
                />
            </VictoryChart>
            </ScrollView>
        </GraphWrapper>
    );
};