import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { PainJournalIcon } from "../../../icons";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";
import { MenuIcon, UnreadMessageIcon } from "../../../icons";
import {
  WellnessCoach,
  ProfileSetup,
} from "../../today/components/small-daily-activities";
import { isAndroid, isIPad } from "../../../utils";

const DailyActivities = () => {
  return (
    <>
      <WellnessCoach />
      <ProfileSetup />
    </>
  );
};

export const tourObj = [
  {
    id: 1,
    text: "Welcome to PainNavigator! Here's a quick tutorial to get you started.",
    tourTextBubble: 250,
    tourComponentPlacement: null,
    component: null,
  },
  {
    id: 2,
    text: "To get the most out of the program, we recommend you log your pain score daily here.",
    tourTextBubble: 20,
    tourComponentPlacement: isAndroid ? 214 : isIPad ? 215 : 245,
    component: (
      <DailyActivitiesTile
        navigation={null}
        destination={null}
        title={"Log Your Daily Pain Score"}
        icon={<PainJournalIcon />}
      />
    ),
  },
  {
    id: 3,
    text: "Move daily or as often as you can! Daily recommended exercises are here.",
    tourTextBubble: isAndroid ? 130 : isIPad ? 160 : 190,
    tourComponentPlacement: 6,
    component: <MovementUnitCard />,
  },
  {
    id: 4,
    text: "Learn more about your pain and how to best manage it through the daily education videos here. Tap the first one to play the video!",
    tourTextBubble: isAndroid ? 325 : isIPad ? 310 : 367,
    tourComponentPlacement: 6,
    component: <EducationUnitCard />,
  },
  {
    id: 5,
    text: "You can chat with your wellness coach here! This is a great place to ask any questions.",
    tourTextBubble: 20,
    tourComponentPlacement: 0,
    component: <UnreadMessageIcon />,
  },
  {
    id: 6,
    text: "Any other activities will be updated automatically on the homepage. Just tap one to begin.",
    tourTextBubble: isAndroid ? 455 : isIPad ? 455 : 499,
    tourComponentPlacement: 6,
    component: <DailyActivities />,
  },
  {
    id: 7,
    text: "You can explore other features, update settings, and view your course progress in the menu.",
    tourTextBubble: 20,
    tourComponentPlacement: 0,
    component: <MenuIcon />,
  },
];
