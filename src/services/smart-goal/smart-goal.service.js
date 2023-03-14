import axios from 'axios';
import { API_URL } from "@env"

export const destroyGoal = (goalId) => {
    axios.delete(`${API_URL}/api/v1/smart_goals/${goalId}`)
    .then((response) => {
    });
};

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

export async function postSmartGoalFinish(id, smartGoal, setFinishedGoals) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/complete_smart_goals`, { 
            smart_goal: id, 
            complete_smart_goal: smartGoal  
        })
        const data = response.data.data.attributes;
        setFinishedGoals(data);
    } catch (error) {
        console.error(error);
    }
};