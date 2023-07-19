import React from "react";
import { ScrollView } from 'react-native';
import { VictoryChart, VictoryTheme, VictoryBar, VictoryGroup } from "victory-native";
import styled from "styled-components/native";

const GraphWrapper = styled.View`
  padding-right: 8px;
  padding-lefy: 8px;
`;

const HelpTextColoredWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
  `;

const HelpTextColored = styled.Text`
    font-family: Inter_500Medium;
    font-size: 12px;
    flex: 1
    text-align: center;
`;

export const PainGraph = ({ graphData, graphDataAfter }) => {

    const score = graphData.map((bar) => {
        return  <VictoryBar data={[{ x: bar.date, y: bar.score }]} barWidth={10} />
    })
    const scoreAfter = graphDataAfter.map((bar) => {
        return  <VictoryBar data={[{ x: bar.date, y: bar.score }]} barWidth={10} />
    })

    const graphWidth = score.length 
    const yTickValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    return (
        <GraphWrapper>
            <HelpTextColoredWrapper>
              <HelpTextColored style={{ color: '#344D5B', marginLeft: 12 }}>intensity score</HelpTextColored>
              <HelpTextColored style={{ color: '#4AB19E'}}>intensity score after</HelpTextColored>
            </HelpTextColoredWrapper>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
                <VictoryChart 
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                      }}
                      marginTop={0}
                      width={graphWidth < 400 ? 400 : graphData}
                      height={300}
                      maxDomain={{y: 11}}
                      minDomain={{y: 0}}
                      domainPadding={40}
                      theme={VictoryTheme.material}
                >
                    <VictoryGroup colorScale={"qualitative"} offset={12}>
                        <VictoryBar data={graphData} y="score" x="date" barWidth={12}/>
                        <VictoryBar data={graphDataAfter} y="score" x="date" barWidth={12}/>
                    </VictoryGroup>
                </VictoryChart>
            </ScrollView>
            
        </GraphWrapper>
    );
};