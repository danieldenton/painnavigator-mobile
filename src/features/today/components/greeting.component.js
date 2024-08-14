import React, { useEffect, useState, useContext } from "react";

import styled from "styled-components/native";
import { todaysDate, timeZone, isFocused } from "../../../utils";
import { ProfileContext } from "../../../services/profile/profile-context";

const GreetingWrapper = styled.View``;

const GreetingText = styled.Text`
  font-family: Poppins_500Medium;
  font-size: 31px;
`;

export const Greeting = () => {
  const { userInfo } = useContext(ProfileContext);
  const { first_name } = userInfo
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    let options = { hour: "numeric", hour12: false, timeZone: timeZone };
    const timeZoneDateNumber = new Intl.DateTimeFormat("en-US", options).format(
      todaysDate
    );
    const timeNumber = Number(timeZoneDateNumber);
    if (timeNumber < 12) {
      setGreeting("Good Morning");
    } else if ((timeNumber > 11) & (timeNumber < 17)) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, [isFocused]);

  return (
    <GreetingWrapper>
      <GreetingText>{greeting},</GreetingText>
      <GreetingText>{first_name}</GreetingText>
    </GreetingWrapper>
  );
};
