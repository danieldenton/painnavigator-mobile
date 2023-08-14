import { DailyPainScore } from "../components/daily-activities.component";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";
import { MenuIcon, UnreadMessageIcon } from "../../../icons";
import { WellnessCoach, ProfileSetup } from "../components/small-daily-activities";
import { isAndroid } from "../../../utils";

const DailyActivities = () => {
    return (
        <>
            <WellnessCoach />
            <ProfileSetup />
        </>
    )
}

export const tourObj = [
    { 
        text: "Welcome to PainNavigator! Here's a quick tutorial to get you started.", 
        tourTextBubble: 250,
        tourComponentPlacement: null,
        component: null
    }, 
    { 
        text: "To get the most out of the program, we recommend you log your pain score daily here.",
        tourTextBubble: 20,
        tourComponentPlacement: isAndroid ? 214 : 230,
        component: <DailyPainScore />
    },
    { 
        text: "Learn more about your pain and how to best manage it through the daily education videos here. Tap the first one to play the video!",
        tourTextBubble: isAndroid ? 159 : 200,
        tourComponentPlacement: 6, 
        component: <EducationUnitCard />
    },
    { 
        text: "Move daily or as often as you can! Daily recommended exercises are here.",
        tourTextBubble: isAndroid ? 338 : 348,
        tourComponentPlacement: 6,
        component: <MovementUnitCard /> 
    },
    { 
        text: "You can chat with your wellness coach here! This is a great place to ask any questions.",
        tourTextBubble: 20,
        tourComponentPlacement: 0,
        component: <UnreadMessageIcon /> 
     },
    { 
        text: "Any other activities will be updated automatically on the homepage. Just tap one to begin.",
        tourTextBubble: isAndroid ? 455 : 495,
        tourComponentPlacement: 6,
        component: <DailyActivities />
    },
    { 
        text: "You can explore other features, update settings, and view your course progress in the menu.",
        tourTextBubble: 20,
        tourComponentPlacement: 0,
        component: <MenuIcon /> 
    }
]