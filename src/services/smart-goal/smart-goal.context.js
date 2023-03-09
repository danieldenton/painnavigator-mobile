import React, { useEffect, useState, createContext, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { destroyGoal, postSmartGoal, postSmartGoalUpdate } from "./smart-goal.service";
import { AuthenticationContext } from "../authentication/authentication.context";

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
        setTimeout(() => {setActiveGoal(null)}, 1000);
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
    };

    
    const finishGoal = () => {
        setFinishedGoals(prevGoals => [activeGoal, ...prevGoals]);
        setTimeout(() => {setActiveGoal(null)}, 1000);
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

    const saveActiveGoal = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@active_goal", jsonValue);
        } catch (e) {
          console.log("error storing smart goals", e);
        }
    };
    
    const loadActiveGoal = async () => {
        try {
            const value = await AsyncStorage.getItem("@active_goal");
            if (value !== null) {
                setActiveGoal(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading smart goals", e);
        }
    };

    const saveFinishedGoals = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@finished_goals", jsonValue);
        } catch (e) {
            console.log("error storing finished goals", e);
        }
    };

    const loadFinishedGoals = async () => {
        try {
            const value = await AsyncStorage.getItem("@finished_goals");
            if (value !== null) {
                setFinishedGoals(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading finished goals", e);
        }
    };

    useEffect(() => {
        loadActiveGoal();
        loadFinishedGoals();
    }, []);
    
    useEffect(() => {
        saveActiveGoal(activeGoal);
    }, [activeGoal]);

    useEffect(() => {
        saveFinishedGoals(finishedGoals);
    }, [finishedGoals]);

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
                finishGoal,
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