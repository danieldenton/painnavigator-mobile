// import axios from 'axios';
// import { API_URL } from "@env"
// import { months } from "../../features/pain-journal/data/months";

// export const getJournals = (setPainJournals, setMoodJournals, setFoodJournals, setPainGraphData) => {
//     axios.get(`${API_URL}/api/v1/journals`)
//     .then( resp => {
//         const profile = resp.data.data;
//         painGraphDataTransform((profile.attributes.pain_graph_data)); 
//     })
//     .then((result) => {
//         setPainGraphData(result);
//     })
//     //.catch(resp => console.log(resp))
// };

// export function painGraphDataTransform(data) {
//     const painDataArray = [];
//     const lineDataArray = [];
//     Object.entries(data).forEach(([key, value]) => {
//         painDataArray.push({ x: key, y: value === null ? value : Number(value) });
//         lineDataArray.push({ x: key, y: value === null ? value : Number(value) });
//     });
//     return { line: lineDataArray, graph: painDataArray, current: currentMonthArray, xAxis: fillMonths(lineDataArray) }
// };

// function fillMonths(data) {
//     const monthCount = Object.entries(data).length;
//     if(monthCount === 3) {
//         const firstMonth = data[0].x;
//         const secondMonth = data[1].x;
//         const thirdMonth = data[2].x; 
//         const xData = [`${firstMonth}`, `${secondMonth}`, `${thirdMonth}`];
//         return xData;
//     } else if (monthCount === 2) {
//         const firstMonth = data[0].x;
//         const secondMonth = data[1].x;
//         const secondMonthData = months.find(month => month.month === secondMonth);
//         const thirdMonthData = months.find(month => month.id === secondMonthData.id + 1);
//         const xData = new Array(firstMonth, secondMonth, thirdMonthData.month);
//         return xData;
//     } else if (monthCount === 1) {
//         const firstMonth = data[0].x;
//         const firstMonthData = months.find(month => month.month === firstMonth);
//         const secondMonthData = months.find(month => month.id === firstMonthData.id + 1);
//         const thirdMonthData = months.find(month => month.id === firstMonthData.id + 2);
//         const xData = new Array(firstMonth, secondMonthData.month, thirdMonthData.month);
//         return xData;
//     }
// };