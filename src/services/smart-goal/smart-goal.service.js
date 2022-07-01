import axios from 'axios';
import { API_URL } from "@env"

export const destroyGoal = (goalId) => {
    axios.delete(`${API_URL}/api/v1/smart_goals/${goalId}`)
    .then((response) => {
    });
};

export const postSmartGoal = (uid, smartGoal, setActiveGoal) => {
    axios.post(`${API_URL}/api/v1/smart_goals`, { smart_goal: smartGoal, uid: uid })
    .then((response) => {
        const goal = response.data.data;
        setActiveGoal(goal.attributes);
    });
};

export const postSmartGoalUpdate = (id, smartGoalUpdate, setActiveGoal) => {
    axios.post(`${API_URL}/api/v1/smart_goal_updates`, 
        {   smart_goal_id: id, 
            smart_goal_update: smartGoalUpdate 
        }
    )
    .then((response) => {
        const goal = response.data.data;
        setActiveGoal(goal.attributes);
    });
};