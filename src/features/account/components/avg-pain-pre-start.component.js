import React, { useContext } from "react";
import { SmallSpacer } from "../../../components/spacer.component";
import { Slider } from "../../../components/slider.component";
import { Button } from "../../../components/button.component";
import { ProfileContext } from "../../../services/profile/profile-context";

export const AvgPainPreStart = () => {
    const { avgPainPreStart, setAvgPainPreStart, nextQuestion } = useContext(ProfileContext);

    return (
        <>
            <Slider value={avgPainPreStart} onValueChange={setAvgPainPreStart} />
            <SmallSpacer>
                <Button onPress={nextQuestion}>
                    Next
                </Button>
            </SmallSpacer>
        </> 
    );
};