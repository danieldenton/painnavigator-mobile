import React, { useEffect, useState, createContext } from "react";
import { destroyGoal, postSmartGoal, postSmartGoalUpdate } from "./smart-goal.service";
import { sampleSmartGoal } from "./smart-goal-data.json";
import { finishedGoalData } from "./finished-smart-goals.data.json";

export const SmartGoalContext = createContext();

export const SmartGoalContextProvider = ({ children }) => {
    const [activeGoal, setActiveGoal] = useState(null);
    const [changes, setChanges] = useState("");
    const [reviewGoal, setReviewGoal] = useState(null);
    const [finishedGoals, setFinishedGoals] = useState(finishedGoalData);
    const [smartGoal, setSmartGoal] = useState({
        goal: "",
        steps: "",
        reward: ""    
    });
    const [smartGoalUpdate, setNewSmartGoalUpdate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setReviewGoal(activeGoal);
    }, [activeGoal])

    const cancelEdits = () => {
        setReviewGoal(activeGoal);
        setChanges("");
    };

    const changeSmartGoal = (change, state) => {
        setSmartGoal(prevGoal => ({
            ...prevGoal,
            [state]: change
        }));
    };

    const changeUpdate = (change) => {
        setNewSmartGoalUpdate(change);
    };

    const createSmartGoal = () => {
        postSmartGoal(smartGoal, setActiveGoal);
    };

    const createSmartGoalUpdate = () => {
        const id = activeGoal.id;
        const updateWithId = {
            smart_goal_id: parseInt(id),
            goal_update: smartGoalUpdate
        };
        postSmartGoalUpdate(id, updateWithId, setActiveGoal);
        setNewSmartGoalUpdate("");
    };

    const deleteGoal = () => {
        destroyGoal(activeGoal.id);
        setActiveGoal(null);
    };

    const editGoal = (change, state) => {
        setReviewGoal(prevGoal => ({
            ...prevGoal,
            attributes: {
                ...prevGoal.attributes,
                [state]: change
            }
        }));
        setChanges(change);
    };

    const editGoalUpdate = (change, updateId) => {
        setReviewGoal(prevGoal => ({
            ...prevGoal,
            attributes: {
                ...prevGoal.attributes,
                smart_goal_updates: prevGoal.attributes.smart_goal_updates.map(
                    update => update.id === updateId ?
                        {
                            ...update,
                            goal_update: change
                        }
                    :
                        update
                )
            }
        }));
    };
    
    const finishGoal = () => {

    };

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const previousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const resetSmartGoal = () => {
        setSmartGoal({
            goal: "",
            steps: "",
            reward: ""
        });
        setCurrentPage(1);
    };

    const saveEdits = () => {
        setActiveGoal(reviewGoal);
        setChanges("");
    };

    return (
        <SmartGoalContext.Provider
            value={{
                activeGoal,
                changes,
                changeUpdate,
                cancelEdits,
                deleteGoal,
                editGoal,
                editGoalUpdate,
                changeSmartGoal,
                createSmartGoal,
                createSmartGoalUpdate,
                currentPage,
                finishedGoals,
                nextPage,
                previousPage,
                saveEdits,
                smartGoalUpdate,
                smartGoal,
                resetSmartGoal,
                reviewGoal
            }}
        >
            {children}
        </SmartGoalContext.Provider>
    );
};