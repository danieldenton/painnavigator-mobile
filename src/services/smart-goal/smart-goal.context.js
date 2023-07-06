import React, { useEffect, useState, createContext, useContext } from "react";
import { destroyGoal, patchSmartGoal, patchSmartGoalUpdate, postSmartGoal, postSmartGoalUpdate } from "./smart-goal.service";
import { AuthenticationContext } from "../authentication/authentication.context";
import { formatDate } from "../../utils";

export const SmartGoalContext = createContext();

export const SmartGoalContextProvider = ({ children }) => {
    const [activeGoal, setActiveGoal] = useState(null);
    const [changes, setChanges] = useState("");
    const [reviewGoal, setReviewGoal] = useState(null);
    const [finishedGoals, setFinishedGoals] = useState([]);
    const [smartGoal, setSmartGoal] = useState({
        goal: "",
        steps: "",
        reward: ""
    });
    const [smartGoalUpdate, setNewSmartGoalUpdate] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const { user } = useContext(AuthenticationContext);

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
        postSmartGoal(user.user.uid, smartGoal, setActiveGoal);
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
        setActiveGoal(null)
    };

    const editGoal = (change, state) => {
        setReviewGoal(prevGoal => (
            {
                ...prevGoal,
                [state]: change
            }
        ));
    };

    const editGoalUpdate = (change, idx) => {
        setReviewGoal(prevGoal => (
            {
                ...prevGoal,
                goalUpdates: prevGoal.goal_updates[idx].goal_update = change 
            }   
        ))
    };

    const saveEdits = () => {
        setActiveGoal(reviewGoal);
        patchSmartGoal(reviewGoal)
        for (let i = 0; i < reviewGoal.goal_updates.length; i++) {
            patchSmartGoalUpdate(reviewGoal.goal_updates[i])
        }
    };

    const endJournalDate = () => {
        const date = formatDate(Date.now())
        setReviewGoal(prevState => ({
            ...prevState,
            end_date: date,
            status: "finished"
        }))

    }

    const finishGoal = () => {
        setFinishedGoals(prevGoals => [reviewGoal, ...prevGoals]);
        patchSmartGoal(reviewGoal)
        setActiveGoal(null), 10000
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
        setCurrentPage(0);
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
                setCurrentPage,
                finishGoal,
                finishedGoals,
                nextPage,
                previousPage,
                saveEdits,
                smartGoalUpdate,
                smartGoal,
                resetSmartGoal,
                reviewGoal,
                endJournalDate,
                setFinishedGoals, 
                setActiveGoal
            }}
        >
            {children}
        </SmartGoalContext.Provider>
    );
};