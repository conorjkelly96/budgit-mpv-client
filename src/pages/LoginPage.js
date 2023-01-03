import { useState } from "react";
import Container from "@mui/material/Container";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { mainContainer, pageHeader } from "../styles";
import { MenteeLoginForm } from "../../components/Login/MenteeLoginForm";
import { MentorLoginForm } from "../../components/Login/MentorLoginForm";

export const LoginPage = () => {
  const [userType, setUserType] = useState("mentor");

  const handleChange = (event, value) => {
    setUserType(value);
  };

  console.log(userType);

  return (
    <Container component="main" maxWidth="xs" sx={mainContainer}>
      <ToggleButtonGroup
        color="primary"
        value={userType}
        exclusive
        onChange={handleChange}
        sx={pageHeader}
      >
        <ToggleButton value="mentee">Mentee</ToggleButton>
        <ToggleButton value="mentor">Mentor</ToggleButton>
      </ToggleButtonGroup>
      {userType === "mentor" && <MentorLoginForm />}
      {userType === "mentee" && <MenteeLoginForm />}
    </Container>
  );
};
