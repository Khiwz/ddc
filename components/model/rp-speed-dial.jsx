import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { DiIe } from "react-icons/di";
import { useRouter } from "next/router";

const actions = [
  {
    icon: <FaLinkedinIn fontSize={20} />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/phonesavan-rasabandith-5a63b155/",
  },
  {
    icon: <DiIe fontSize={28} />,
    name: "Website",
    link: "https://www.savan-npr.com/",
  },
  {
    icon: <FaWhatsapp fontSize={28} />,
    name: "Whatsapp",
    link: "https://wa.me/+8562093201117?text=ສະບາຍດີ",
  },
  {
    icon: <MdOutlineEmail fontSize={28} />,
    name: "Email me",
    link: "mailto:savanbandith@gmail.com",
  },
];

export default function RPSpeedDial() {
  const route = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = (action) => {
    // route.push(action.link);
    setOpen(false);
  };

  return (
    <Box
      sx={{
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{
          position: "absolute",
          bottom: 2,
          right: 5,
        }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => route.push(action.link)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
