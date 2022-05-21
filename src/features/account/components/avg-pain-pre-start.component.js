import React, { useContext } from "react";
import { SmallSpacer } from "../../../components/spacer.component";
import { IntensitySlider } from "../../../components/slider.component";
import { JournalButton } from "../../../components/button.component";
import { ProfileContext } from "../../../services/profile/profile-context";

export const AvgPainPreStart = () => {
    const { avgPainPreStart, setAvgPainPreStart, nextQuestion } = useContext(ProfileContext);

    return (
        <>
            <IntensitySlider value={avgPainPreStart} onValueChange={setAvgPainPreStart} />
            <SmallSpacer>
                <JournalButton title={"Next"} onPress={nextQuestion} />
            </SmallSpacer>
        </> 
    );
};