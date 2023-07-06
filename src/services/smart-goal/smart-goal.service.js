import axios from 'axios';
import { API_URL } from "@env"


export const getSmartGoals = async (userUid, setActiveGoal, setFinishedGoals) => {
    try {
        const response = await axios.get(`${API_URL}/api/v1/smart_goals`, { params: { uid: userUid } })
        const data = response.data.data.map(goal => {
            return goal.attributes
        })
        const goal = data.find(goal => goal.status === "active")
        const finished = data.filter(goal => goal.status === "finished")
        setActiveGoal(goal)
        setFinishedGoals(finished)
    } catch (error) {
        console.error(error);
    }
}

export async function postSmartGoal(uid, smartGoal, setActiveGoal) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/smart_goals`, { smart_goal: smartGoal, uid: uid })
        const data = response.data.data.attributes;
        setActiveGoal(data);
    } catch (error) {
        console.error(error);
    }
};

export async function patchSmartGoal(smartGoal) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/smart_goals`, { 
            smart_goal: smartGoal  
        })
        const data = response.data.data.attributes;
    } catch (error) {
        console.error(error);
    }
};

export const destroyGoal = (goalId) => {
    axios.delete(`${API_URL}/api/v1/smart_goals/${goalId}`)
    .then((response) => {
    });
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

