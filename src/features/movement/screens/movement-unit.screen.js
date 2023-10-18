import React, { useContext, useEffect } from "react";
import { MovementUnit } from "../components/movement-unit.component";
import { CompletionScreen } from "../components/completion-screen.component";
import { MovementContext } from "../../../services/movement/movement.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";

export const MovementUnitScreen = ({ navigation }) => {
    const { moduleComplete, resetModule, setIsMovement } = useContext(MovementContext);

    useEffect(() => {
        setIsMovement(true)
    }, [])

    function finishModule() {
        navigation.navigate("Today");
        resetModule();
    }

    return(
        <SafeView>
            <NavigationBarLeft 
                screen={"Movement"} 
                navigation={navigation} 
                destination={"MovementPlaylist"} 
                previousPage={moduleComplete ? finishModule : null}
            />
            {moduleComplete ? (
                <CompletionScreen navigation={navigation} /> 
                ) : (
                <MovementUnit />
            )}
        </SafeView>
    );
};