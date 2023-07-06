import axios from 'axios';
import { API_URL } from "@env"

export const destroyGoal = (goalId) => {
    axios.delete(`${API_URL}/api/v1/smart_goals/${goalId}`)
    .then((response) => {
    });
};

export const getSmartGoals = async (userUid, setActiveGoal, setFinishedGoals, finishedGoals) => {
    try {
        const response = await axios.get(`${API_URL}/api/v2/smart_goals`, { uid: userUid })
        const data = response.data.data
        for (let i = 0; i < data.length; i++) {
            if (data[i].status === "active") {
                setActiveGoal(data[i])
            } else {
                setFinishedGoals(...finishedGoals, data[i])
            }
        }
    } catch (error) {
        console.error(error);
    }
}

// export const getSmartGoalUpdates = async (activeGoal, finishedGoals) => {
//     try {
//         const response = await axios.get(`${API_URL}/api/v1/smart_goal_updates/${uid}`)
//     } catch (error) {
//         console.error(error);
//     }
// }

export async function postSmartGoal(uid, smartGoal, setActiveGoal) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/smart_goals`, { smart_goal: smartGoal, uid: uid })
        const data = response.data.data.attributes;
        setActiveGoal(data);
    } catch (error) {
        console.error(error);
    }
};

export async function postSmartGoalUpdate(id, smartGoalUpdate, setActiveGoal) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/smart_goal_updates`, {   
            smart_goal_id: id, 
            smart_goal_update: smartGoalUpdate 
        })
        const data = response.data.data.attributes;
        setActiveGoal(data);
    } catch (error) {
        console.error(error);
    }
};

export async function patchSmartGoal(id, smartGoal, setFinishedGoals, finishedGoals) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/complete_smart_goals`, { 
            smart_goal: id, 
            complete_smart_goal: smartGoal  
        })
        const data = response.data.data.attributes;
        setFinishedGoals(...finishedGoals, data);
    } catch (error) {
        console.error(error);
    }
};