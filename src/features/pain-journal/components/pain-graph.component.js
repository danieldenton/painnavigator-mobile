import React from "react";
import { ScrollView } from 'react-native';
import { colors } from "../../../infrastructure/theme/colors";
import { VictoryChart, VictoryTheme, Background, VictoryAxis,  VictoryBar, VictoryGroup } from "victory-native";
import styled from "styled-components/native";

const GraphWrapper = styled.View`
    margin-bottom: 16px;
    margin-top: 20px;
`;

export const PainGraph = ({ graphData, graphDataAfter }) => {

    const score = graphData.map((bar) => {
        return  <VictoryBar data={[{ x: bar.date, y: bar.score }]} barWidth={10} />
    })
    const scoreAfter = graphDataAfter.map((bar) => {
        return  <VictoryBar data={[{ x: bar.date, y: bar.score }]} barWidth={10} />
    })

    const graphWidth = score.length * 40
    
    return (
        <GraphWrapper>
            <ScrollView horizontal style={{ flexDirection: 'row' }}>
                <VictoryChart 
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                      }}
                      width={graphWidth < 350 ? 350 : graphData}
                      domainPadding={20}
                      theme={VictoryTheme.material}
                      backgroundComponent={<Background/>}
                >
                    <VictoryGroup colorScale={"warm"}>
                        <VictoryBar data={graphData} y="score" x="date" />
                        <VictoryBar data={graphDataAfter} y="score" x="date" />
                       {/* {score}
                       {scoreAfter} */}
                    </VictoryGroup>
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