import React from "react";
import { Button, IconButton, SvgIcon } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// Add Grid items around all the buttons and icon to have a mobile friendly navbar

// // An attempt at creating a svg icon of the recycling symbol. Not sure why it's not working, will figure it out later.
// function NavIcon(props) {
// 	return (
// 		<SvgIcon {...props}>
// 			<path
// 				stroke="black"
// 				strokeWidth="3"
// 				d="M99.777,446.086c-6.699,12.031-12.031,30.133-12.031,41.539c0,2.648,0,6.016,0.656,10.688L4.676,354.32
// C1.996,349.648,0,342.945,0,336.906c0-6.047,1.996-13.398,4.676-18.078L44.871,248.5L0,223.07l146.016-2.703L217,348.281
// l-45.527-26.117L99.777,446.086z M164.09,40.227c12.715-22.125,33.496-34.18,58.926-34.18c27.48,0,48.918,12.742,64.312,38.828
// l22.777,38.172l-79.051,136.664l-127.914-74.352L164.09,40.227z M173.441,561.945c-38.172,0-69.645-31.477-69.645-69.648
// c0-10.719,4.703-28.82,11.402-40.195l21.41-38.172h158.758v148.016H173.441z M300.727,36.18
// C290.691,18.789,277.293,6.703,261.215,0h164.746c14.738,0,26.113,6.047,32.84,17.445l40.852,69.648l44.191-26.141
// l-71.016,127.281l-145.305-2.047l44.871-25.43L300.727,36.18z M554.59,415.273c20.07,0,36.832-5.359,50.887-16.055
// l-83.07,144.648c-6.699,11.375-18.73,18.078-32.789,18.078h-78.395v51.57l-75.004-125.234l75.004-125.266v52.258H554.59z
// M618.848,294.711c6.043,10.719,9.406,22.094,9.406,34.156c0,24.117-15.422,49.57-36.832,61.602
// c-10.062,5.391-24.145,8.75-38.172,8.75h-44.242l-79-136.664l127.918-73.008L618.848,294.711z"
// 			/>
// 		</SvgIcon>
// 	);
// }

const Nav = () => {
	return (
		<Grid
			container
			maxWidth="xl"
			sx={{
				margin: "auto",
				my: 3,
				direction: "column",
				alignItems: "center",
				justifyContent: "space-around",
				borderBottom: 2,
			}}
		>
			{/* TODO: Paper is here to see if the design looks better with elevation. Test more at some point */}
			{/* <Paper elevation={2}></Paper> */}
			<Button size="large" value="Home" name="Home">
				Home
			</Button>
			<Button size="large" value="News" name="News">
				News
			</Button>
			{/* Icon between buttons to stretch the nav bar across the page more, and provide aesthetic */}
			<IconButton>
				{/* <NavIcon /> */}
				<DeleteOutlineIcon fontSize="large" color="primary" />
			</IconButton>
			<Button size="large" value="theTeam" name="theTeam">
				The Team
			</Button>
			<Button
				size="20%"
				value="Apply"
				name="Apply"
				href="https://docs.google.com/forms/d/e/1FAIpQLSeZ0ntFKaEzTyz02NKS4pR5CbDoXLF-M0Sex7t4ztLjGLxkOQ/viewform"
				target="_blank"
				rel="noreferrer"
			>
				Apply
			</Button>
		</Grid>
	);
};

export default Nav;
