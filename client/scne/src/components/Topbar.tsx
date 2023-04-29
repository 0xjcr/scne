import React from "react";
import { styled } from "@mui/material/styles";
import SpeedDial from "@mui/material/SpeedDial";
import {SpeedDialAction,SpeedDialActionProps} from "@mui/material";
import Box from "@mui/material/Box";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  left: "0.1rem",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
  "& .MuiSpeedDial-fab": {
    backgroundColor: "transparent",
    borderRadius: "10%",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    "&:active": {},
  },
  "& .MuiSpeedDialAction-fab": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  "& .MuiSpeedDialAction-fab:active": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },

  "& .MuiSpeedDialAction-fab:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

interface Props {
  scene: string;
  onSceneChange: (value: string) => void;
}

interface CustomSpeedDialActionProps extends SpeedDialActionProps {
  isSelected: boolean;
}


const Topbar:React.FC<Props> = ({ scene, onSceneChange }) => {
  const handleChange = (value:string) => {
    onSceneChange(value);
  };

  return (
    <>
      <div className="topbar" data-testid="topbar">
        <StyledSpeedDial
          ariaLabel="SpeedDial"
          icon={
            <Box
              sx={{
                bgcolor: "transparent",
                p: 0.1,
                borderRadius: "10%",
                fontSize: "1.87rem",
              }}
            >
              SCNE
            </Box>
          }
          direction="left"
          onClose={() => handleChange(scene)}
          onOpen={() => handleChange(scene)}
        >
          <SpeedDialAction
            icon={"mixology"}
            tooltipTitle="mixology"
            sx={{
              fontSize: scene === "mixology" ? "2rem" : "1.rem",
              color: "white",
              border: "none",
              width: "80px",
              height: "40px",
              minWidth: "80px",
              selected: {
                color: "white",
              },
            }}
            onClick={() => handleChange("mixology")}
          />
          <SpeedDialAction
            icon={"wellness"}
            tooltipTitle="wellness"
            sx={{
              fontSize: scene === "wellness" ? "2rem" : "1.rem",
              color: "white",
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              width: "80px",
              height: "40px",
              minWidth: "80px",
              selected: {
                backgroundColor: "transparent",
                color: "white",
                boxShadow: "none",
              },
            }}
            onClick={() => handleChange("wellness")}
          />
          <SpeedDialAction
            icon={"coffee"}
            tooltipTitle="coffee"
            {...{ isSelected: scene === "coffee" } as CustomSpeedDialActionProps}
            sx={{
              fontSize: scene === "coffee" ? "2rem" : "1.rem",
              color: "white",
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              width: "80px",
              height: "40px",
              minWidth: "80px",
              selected: {
                backgroundColor: "transparent",
                color: "white",
                boxShadow: "none",
              },
            }}
            onClick={() => handleChange("coffee")}
          />
        </StyledSpeedDial>
      </div>
    </>
  );
};

export default Topbar;
