import { useContext } from "react";
import { AvgPainPreStart } from "../components/avg-pain-pre-start.component";
import { EnjoymentOfLife } from "../../../components/onboard-coutcome/enjoyment-of-life.component";
import { ActivityInterference } from "../../../components/onboard-coutcome/activity-interference.component";
import { HopeToAchieve } from "../components/hope-to-achieve.component";
import { Anxious } from "../../../components/onboard-coutcome/anxious"
import { UnableToStopWorrying } from "../../../components/onboard-coutcome/unable-to-stop-worrying"
import { LittleInterestOrPleasure } from "../../../components/onboard-coutcome/little-interest-or-pleasure"
import { Depressed } from "../../../components/onboard-coutcome/depressed"
import { TypeOfPain } from "../components/type-of-pain";
import { Other } from "../components/other";
import { PainInjections } from "../components/pain-injections";
import { SpineSurgery } from "../components/spine-surgery";
import { AlmostThere } from "../components/almost-there.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const { changeOnboardEntry, educationProgram } = useContext(AuthenticationContext)

pages = [
  { component: <AvgPainPreStart />, disabled: false },
  {
    component: (
      <EnjoymentOfLife
        onValueChange={changeOnboardEntry}
        data={onboardingData}
      />
    ),
    disabled: false,
  },
  {
    component: (
      <ActivityInterference
        onValueChange={changeOnboardEntry}
        data={onboardingData}
      />
    ),
    disabled: false,
  },
  {
    component: (
      <Anxious onValueChange={changeOnboardEntry} data={onboardingData} />
    ),
    disabled: onboardingData.anxious ? false : true,
  },
  {
    component: (
      <UnableToStopWorrying
        onValueChange={changeOnboardEntry}
        data={onboardingData}
      />
    ),
    disabled: onboardingData.unableToStopWorrying ? false : true,
  },
  {
    component: (
      <LittleInterestOrPleasure
        onValueChange={changeOnboardEntry}
        data={onboardingData}
      />
    ),
    disabled: onboardingData.littleInterestOrPleasure ? false : true,
  },
  {
    component: (
      <Depressed onValueChange={changeOnboardEntry} data={onboardingData} />
    ),
    disabled: onboardingData.depressed ? false : true,
  },
  { component: <AlmostThere />, disabled: false },
  {
    component: (
      <TypeOfPain onValueChange={changeOnboardEntry} data={onboardingData} />
    ),
    disabled: onboardingData.typeOfPain ? false : true,
  },
  {
    component: <HopeToAchieve />,
    disabled: onboardingData.hopesToAchieve.length > 0 ? false : true,
  },
  {
    component: (
      <PainInjections
        onValueChange={changeOnboardEntry}
        data={onboardingData}
      />
    ),
    disabled: onboardingData.painInjections ? false : true,
  },
  {
    component: (
      <SpineSurgery onValueChange={changeOnboardEntry} data={onboardingData} />
    ),
    disabled: onboardingData.spineSurgery ? false : true,
  },
  {
    component: (
      <Other onValueChange={changeOnboardEntry} data={onboardingData} />
    ),
    disabled: onboardingData.typeOfPain ? false : true,
  },
];
