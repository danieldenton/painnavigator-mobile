import React, { useContext } from "react";
import { IntensitySlider } from "../../../components/slider.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { JournalQuestion } from "../../../components/journal-question.component";

export const Commitment = () => {
    const { commitment, setCommitment } = useContext(ProfileContext);

    return (
        <>
            <JournalQuestion 
                question={"How commited are to redefining your relationship with pain?"}
                helpText={"0 is not commited at all, 10 is you will dedicate yourself to doing whatever you need to do to accomplish your goals"}
            />
            <IntensitySlider value={commitment} onValueChange={setCommitment} />
        </> 
    );
};