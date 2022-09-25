import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "./component.css";
import Image from "../assets/pictures/WoWScrnShot_051522_210632.jpg";
// NOTE: Container component centers the content inside horizontally
const Banner = () => {
	return (
		<Grid
			container
			maxWidth="xl"
			sx={{
				m: "auto",
				alignItems: "flex-end",
			}}
		>
			<Grid
				item
				xs={0}
				sm={12}
				sx={{
					backgroundImage: `url(${Image})`,
					backgroundPosition: "center",
					objectFit: "cover",
					height: 400,
					alignItems: "flex-end",
					objectPosition: "15% 30%",
					display: {
						sm: "none",
					},
				}}
			>
				<Typography variant="h1" color="yellow" component="h1">
					&lt;recycled&gt;
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Banner;
