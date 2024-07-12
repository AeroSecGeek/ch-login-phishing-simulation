import Grid from "@mui/material/Unstable_Grid2";
import agov from "../../assets/Button_AGOVLogin.svg";
import edaLogin from "../../assets/Button_EDALogin.svg";
import switchEdu from "../../assets/Button_eduIdLogin.svg";
import beLogin from "../../assets/Button_BELogin.svg";
import geLogin from "../../assets/Button_GELogin.svg";
import shLogin from "../../assets/Button_SHLogin.svg";
import eZug from "../../assets/Button_EZugLogin.svg";
import zgLogin from "../../assets/Button_ZGLogin.svg";

import { LoginCard } from "./LoginCard";

export function OtherLogins() {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        maxWidth: "640px",
        mt: 1,
      }}
    >
      {data.map((login) => (
        <Grid xs={6} md={3}>
          <LoginCard picture={login.picture} title={login.title} />
        </Grid>
      ))}
    </Grid>
  );
}

const data = [
  { picture: agov, title: "AGOV" },
  { picture: edaLogin, title: "#edaLogin" },
  { picture: switchEdu, title: "SWITCH edu-ID" },
  { picture: beLogin, title: "BE eID" },
  { picture: geLogin, title: "GE eID" },
  { picture: shLogin, title: "SH eID + (SH eID+)" },
  { picture: eZug, title: "eZug" },
  { picture: zgLogin, title: "ZG eID" },
];
