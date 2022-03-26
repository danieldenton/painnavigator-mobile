import React, { useContext } from "react";
import { SmallSpacer } from "../../../components/spacer.component";
import { Slider } from "../../../components/slider.component";
import { Button } from "../../../components/button.component";
import { ProfileContext } from "../../../services/profile/profile-context";

export const AvgPainPreStart = () => {
    const { programPaceGoal, setProgramPaceGoal, nextQuestion } = useContext(ProfileContext);

    return(
        <>
            <Slider 
                value={programPaceGoal} 
                onValueChange={setProgramPaceGoal}
                min={0}
                max={2}
                step={1}
                variant={"ProgramPace"}    
            />
            <SmallSpacer>
                <Button onPress={nextQuestion}>
                    Next
                </Button>
            </SmallSpacer>
        </> 
    );
};