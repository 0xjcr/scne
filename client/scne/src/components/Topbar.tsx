import React from "react";
import { styled } from "@mui/material/styles";
import SpeedDial from "@mui/material/SpeedDial";
import { SpeedDialAction } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setScene } from "../redux/SceneSlice";


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

const Topbar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const scene = useSelector((state: RootState) => state.Scene);

  const handleChange = (value: string) => {
    dispatch(setScene(value));
  };

  const SceneArr: string[] = ["coffee", "wellness", "mixology"];

  return (
    <>
      <div className="topbar" data-testid="topbar">
        <StyledSpeedDial
         id="topbar-speed-dial"
         aria-controls="topbar-speed-dial-actions"
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
        >
          {SceneArr.map((item) => {
            return (
              <SpeedDialAction
                key={item}
                icon={item}
                tooltipTitle={item}
                sx={{
                  fontSize: scene === item ? "2rem" : "1.rem",
                  color: "white",
                  border: "none",
                  width: "80px",
                  height: "40px",
                  minWidth: "80px",
                  selected: {
                    color: "white",
                  },
                }}
                onClick={() => handleChange(item)}
              />
            );
          })}
        </StyledSpeedDial>
      </div>
    </>
  );
};

export default Topbar;
