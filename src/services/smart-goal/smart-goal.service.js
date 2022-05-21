import axios from 'axios';
import { baseUrl } from '../../infrastructure/config';

export const destroyGoal = (goalId) => {
    axios.delete(`${baseUrl}/api/v1/smart_goals/${goalId}`)
    .then((response) => {
        console.log(response);
    });
};

export const postSmartGoal = (smartGoal, setActiveGoal) => {
    axios.post(`${baseUrl}/api/v1/smart_goals`, { smart_goal: smartGoal })
    .then((response) => {
        console.log(response.data.data);
        setActiveGoal(response.data.data);
    });
};

export const postSmartGoalUpdate = (id, smartGoalUpdate, setActiveGoal) => {
    axios.post(`${baseUrl}/api/v1/smart_goal_updates`, 
        {   smart_goal_id: id, 
            smart_goal_update: smartGoalUpdate 
        }
    )
    .then((response) => {
        console.log(response.data.data);
        setActiveGoal(response.data.data);
    });
};