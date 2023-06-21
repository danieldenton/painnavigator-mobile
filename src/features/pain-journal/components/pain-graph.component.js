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
    const graphWidth = graphData.length * 50
    
    return (
        <GraphWrapper>
            <ScrollView horizontal style={{ flexDirection: 'row' }}>
            <VictoryChart
                width={graphWidth > 400 ? graphWidth : 400}
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
                        grid: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 }
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
                    size={6}
                />
                <VictoryScatter
                    style={{
                        data: { fill: `white`, stroke: `${colors.brand.primary}`, strokeWidth: 2},
                        labels: { fontSize: 12, color: "#606C81" },
                    }}
                    data={graphData}
                    x="date"
                    y="score"
                    size={6}
                />
            </VictoryChart>
            </ScrollView>
        </GraphWrapper>
    );
};



// import React from "react";
// import { colors } from "../../../infrastructure/theme/colors";
// import { VictoryAxis, VictoryChart, VictoryScatter, VictoryLine, VictoryTheme, Background } from "victory-native";
// import styled from "styled-components/native";

// const GraphWrapper = styled.View`
//     margin-bottom: 16px;
//     margin-top: 16px;
// `;

// export const PainGraph = ({ painGraphData }) => {
//     const sampleData = { line: { x: "Jun", y: 2 }, graph: { x: "Jun", y: 2 }, current: { x: "Jun", y: 2 }, xAxis: ["Jun"] };
//     const DATA = painGraphData ? painGraphData : sampleData;

//     return (
//         <GraphWrapper>
//             <VictoryChart
//                 maxDomain={{ y: 11 }}
//                 minDomain={{ y: 0 }}
//                 padding={{ top: 0, bottom: 25, left: 25, right: 35 }}
//                 domainPadding={{ x: 40, y: 40 }}
//                 style={{
//                     grid: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 },
//                     background: { fill: "white" },
//                     tickLabels: { color: "blue" }
//                 }}
//                 backgroundComponent={<Background y={0} height={275} />}
//             >
//                 <VictoryAxis
//                     style={{
//                         grid: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 },
//                         tickLabels: { fontFamily: "", fontSize: 12, padding: 8 }
//                     }}
//                     tickValues={DATA.xAxis}
//                 />
//                 <VictoryAxis dependentAxis crossAxis
//                     width={400}
//                     height={400}
//                     domain={[0, 10]}
//                     theme={VictoryTheme.material}
//                     tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
//                     standalone={false}
//                     style={{
//                         axis: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 },
//                         grid: { stroke: `${colors.bg.primary}`, strokeWidth: 5.5 },
//                         tickLabels: { fontFamily: "", fontSize: 12 }
//                     }}
//                 />
//                 <VictoryLine
//                     style={{
//                         data: { stroke: `${colors.brand.primary}` },
//                         labels: { fontSize: 12, color: "#606C81" },
//                         parent: { border: "2px solid #ccc"}
//                     }}
//                     data={DATA.line}
//                 />
//                 <VictoryScatter
//                     style={{
//                         parent: { backgroundColor: "#FFFFFF" },
//                         data: { fill: `${colors.brand.primary}`, stroke: `${colors.brand.primary}`, strokeWidth: 2 },
//                         labels: { fontSize: 12, color: "#606C81" },
//                     }}
//                     data={DATA.current}
//                     size={6}
//                 />
//                 <VictoryScatter
//                     style={{
//                         data: { fill: `white`, stroke: `${colors.brand.primary}`, strokeWidth: 2},
//                         labels: { fontSize: 12, color: "#606C81" },
//                     }}
//                     data={DATA.graph}
//                     size={6}
//                 />
//             </VictoryChart>
//         </GraphWrapper>
//     );
// };