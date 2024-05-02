import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Strong, Button, Image, Section, Hr, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { IoIosPlanet } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaGithub, FaYoutube } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				OffGrid
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="80px 0 80px 0" quarkly-title="Hero-19">
			<Override slot="SectionContent" width="100%" flex-direction="row" max-width="100%" />
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				justify-content="space-around"
				lg-flex-direction="column"
				lg-overflow-y="hidden"
				lg-overflow-x="hidden"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="50%"
					lg-width="100%"
					lg-padding="0 50px 50px 50px"
					padding="0px 80px 0px 80px"
					sm-padding="0 15px 50px 15px"
				>
					<Icon
						category="io"
						icon={IoIosPlanet}
						size="70px"
						color="#3f24d8"
						margin="0px 0px 45px 0px"
					/>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						margin="0px 0px 30px 0px"
						border-radius="25px"
						border-color="--color-lightD2"
						sm-flex-direction="column"
						align-items="center"
						sm-align-items="flex-start"
					>
						<Text
							margin="0px 30px 0px 0px"
							color="#3f24d8"
							font="normal 400 16px/1.5 --fontFamily-sans"
							sm-margin="0px 0 15px 0px"
							background="#ece9ff"
							padding="5px 15px 5px 15px"
							border-radius="15px"
						>
							Support
						</Text>
						<Link href="#" color="#8b9197" font="normal 400 16px/1.5 --fontFamily-sans" text-decoration-line="initial">
							Read more
						</Link>
					</Box>
					<Text margin="0px 0px 20px 0px" font="normal 200 56px/1.2 --fontFamily-sans" sm-font="normal 700 42px/1.2 --fontFamily-sans">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							OffGrid is a SaaS video conferencing platform
						</Strong>
					</Text>
					<Text margin="0px 0px 50px 0px" font="--lead" color="#8b9197" lg-margin="0px 0px 30px 0px">
						Our platform offers a range of tools and services, including project management, collaboration, communication, and data analytics. With Cloudify Pro, businesses can streamline their workflows, reduce costs, and improve overall efficiency.
					</Text>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						sm-flex-direction="column"
						sm-align-items="stretch"
					>
						<Button
							margin="0px 15px 0px 0px"
							padding="12px 28px 12px 28px"
							background="#3f24d8"
							border-radius="8px"
							font="normal 400 17px/1.5 --fontFamily-sans"
							sm-margin="0px 0 15px 0px"
							transition="background-color 0.2s ease 0s"
							border-width="2px"
							border-style="solid"
							border-color="#3f24d8"
							hover-color="--darkL1"
							hover-background="rgba(63, 36, 216, 0)"
						>
							Launch app
						</Button>
						<Button
							margin="0px 15px 0px 0px"
							padding="12px 28px 12px 28px"
							background="#3f24d8"
							border-radius="8px"
							font="normal 400 17px/1.5 --fontFamily-sans"
							sm-margin="0px 0 15px 0px"
							transition="background-color 0.2s ease 0s"
							border-width="2px"
							border-style="solid"
							border-color="#3f24d8"
							hover-color="--darkL1"
							hover-background="rgba(63, 36, 216, 0)"
						>
							Sign Up Free
						</Button>
					</Box>
				</Box>
				<Image
					src="https://images.unsplash.com/photo-1616587896649-79b16d8b173d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					display="block"
					width="50%"
					object-fit="cover"
					lg-width="100%"
					object-position="0 0"
					padding="15px 0px 15px 15px"
					border-radius="25px 0 0 25px"
					background="--color-lightD1"
					sm-margin="0px 0px 0px 15px"
					lg-margin="0px 0px 0px 25px"
					srcSet="https://images.unsplash.com/photo-1616587896649-79b16d8b173d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1616587896649-79b16d8b173d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1616587896649-79b16d8b173d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1616587896649-79b16d8b173d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1616587896649-79b16d8b173d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1616587896649-79b16d8b173d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1616587896649-79b16d8b173d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Section padding="65px 0 65px 0" sm-padding="60px 0 60px 0" quarkly-title="Images-7">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				lg-width="100%"
				margin="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				sm-padding="0px 0px 0px 0px"
				sm-margin="0px 0px 30px 0px"
				flex-direction="column"
			>
				<Box
					overflow-x="hidden"
					transform="translateY(0px)"
					padding="0px 0px 100% 0px"
					width="100%"
					overflow-y="hidden"
					position="relative"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					height="auto"
				>
					<Image
						src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
						object-fit="cover"
						position="absolute"
						width="100%"
						bottom={0}
						display="block"
						top={0}
						left={0}
						right={0}
						min-height="100%"
						srcSet="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				flex-wrap="wrap"
				flex-direction="row"
				lg-align-items="center"
				padding="4px 4px 4px 4px"
				lg-order="1"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				display="flex"
				width="50%"
				lg-width="100%"
				lg-margin="0px 0px 0px 0px"
			>
				<Box width="50%" padding="12px 12px 12px 13px" display="flex">
					<Box
						width="100%"
						height="auto"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						margin="0px 0px 0px 0px"
						overflow-x="hidden"
						overflow-y="hidden"
						transform="translateY(0px)"
						hover-transform="translateY(-10px)"
						padding="0px 0px 100% 0px"
					>
						<Image
							top="auto"
							left={0}
							right={0}
							bottom="0px"
							display="block"
							object-fit="cover"
							position="absolute"
							width="100%"
							min-height="100%"
							src="https://images.unsplash.com/photo-1552055569-b7e1e45d5be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=954&q=80"
							srcSet="https://images.unsplash.com/photo-1552055569-b7e1e45d5be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1552055569-b7e1e45d5be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1552055569-b7e1e45d5be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1552055569-b7e1e45d5be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1552055569-b7e1e45d5be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1552055569-b7e1e45d5be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1552055569-b7e1e45d5be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</Box>
				<Box padding="12px 12px 12px 12px" display="flex" width="50%">
					<Box
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						position="relative"
						transform="translateY(0px)"
						overflow-x="hidden"
						overflow-y="hidden"
						margin="0px 0px 0px 0px"
						padding="0px 0px 100% 0px"
						width="100%"
						height="auto"
					>
						<Image
							bottom="0px"
							src="https://images.unsplash.com/photo-1578553951253-48c6eb50ae41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
							position="absolute"
							top="auto"
							left={0}
							min-height="100%"
							object-fit="cover"
							display="block"
							width="100%"
							right={0}
							srcSet="https://images.unsplash.com/photo-1578553951253-48c6eb50ae41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1578553951253-48c6eb50ae41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1578553951253-48c6eb50ae41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1578553951253-48c6eb50ae41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1578553951253-48c6eb50ae41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1578553951253-48c6eb50ae41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1578553951253-48c6eb50ae41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</Box>
				<Box width="50%" padding="12px 12px 12px 12px" display="flex">
					<Box
						margin="0px 0px 0px 0px"
						padding="0px 0px 100% 0px"
						transition="transform 0.2s ease-in-out 0s"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						transform="translateY(0px)"
						hover-transform="translateY(-10px)"
						width="100%"
					>
						<Image
							object-fit="cover"
							display="block"
							top="auto"
							right={0}
							bottom="0px"
							min-height="100%"
							src="https://images.unsplash.com/photo-1572293071277-ef1b3e761045?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1078&q=80"
							position="absolute"
							width="100%"
							left={0}
							srcSet="https://images.unsplash.com/photo-1572293071277-ef1b3e761045?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1572293071277-ef1b3e761045?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1572293071277-ef1b3e761045?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1572293071277-ef1b3e761045?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1572293071277-ef1b3e761045?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1572293071277-ef1b3e761045?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1572293071277-ef1b3e761045?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</Box>
				<Box width="50%" padding="12px 12px 12px 12px" display="flex">
					<Box
						position="relative"
						hover-transform="translateY(-10px)"
						padding="0px 0px 100% 0px"
						transform="translateY(0px)"
						transition="transform 0.2s ease-in-out 0s"
						margin="0px 0px 0px 0px"
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
					>
						<Image
							src="https://images.unsplash.com/photo-1514858609277-b16984ae938a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1068&q=80"
							position="absolute"
							display="block"
							top="auto"
							left={0}
							min-height="100%"
							object-fit="cover"
							width="100%"
							right={0}
							bottom="0px"
							srcSet="https://images.unsplash.com/photo-1514858609277-b16984ae938a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1514858609277-b16984ae938a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1514858609277-b16984ae938a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1514858609277-b16984ae938a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1514858609277-b16984ae938a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1514858609277-b16984ae938a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1514858609277-b16984ae938a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</Box>
			</Box>
			<Box
				width="100%"
				align-items="flex-start"
				lg-align-items="center"
				sm-margin="0px 0px 20px 0px"
				display="flex"
				flex-direction="column"
				lg-width="100%"
				lg-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				lg-padding="0px 16px 16px 16px"
			>
				<Text
					margin="0px 0px 0px 0px"
					color="--darkL2"
					font="--base"
					lg-text-align="center"
					width="60%"
					lg-width="100%"
					md-text-align="left"
				>
					The Road Ring is a national road in Iceland that runs around the island and connects most of the inhabited parts of the country. The total length of the road is 1,352 kilometres.
				</Text>
			</Box>
		</Section>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Section padding="100px 0 120px 0" sm-padding="80px 0 80px 0" quarkly-title="Statistics-6">
			<Box min-width="100px" min-height="100px" margin="0px 45% 0px 0px" lg-margin="0px 0 0px 0px">
				<Text margin="0px 0px 0px 0px" font="normal 700 40px/1.2 --fontFamily-sans" sm-font="normal 700 34px/1.2 --fontFamily-sans">
					Join us in our mission to transform lives and build stronger, more resilient communities for all
				</Text>
				<Text margin="15px 0px 0px 0px" font="normal 300 20px/1.5 --fontFamily-sansHelvetica" color="--greyD2">
					We are dedicated to providing exceptional customer service, building long-lasting relationships with our clients, and exceeding their expectations.{" "}
				</Text>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				margin="80px 0px 0px 0px"
				display="flex"
				align-items="flex-end"
				md-margin="50px 0px 0px 0px"
				md-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					padding="35px 35px 35px 35px"
					background="--color-lightD1"
					border-radius="25px"
					margin="0px 35px 0px 0px"
					width="25%"
					md-width="100%"
					md-margin="0px 0 30px 0px"
				>
					<Text margin="0px 0px 0px 0px" font="normal 600 34px/1.2 --fontFamily-sans" sm-font="normal 600 30px/1.2 --fontFamily-sans">
						250k
					</Text>
					<Text margin="25px 0px 0px 0px" font="normal 500 18px/1.2 --fontFamily-sans" md-margin="20px 0px 0px 0px">
						Users on the platform
					</Text>
					<Text margin="10px 0px 0px 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" border-color="--color-grey" color="--greyD2">
						Depending on the platform, users may also have different levels{" "}
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="35px 35px 35px 35px"
					background="#131836"
					border-radius="25px"
					margin="0px 35px 0px 0px"
					width="35%"
					md-width="100%"
					md-margin="0px 0 30px 0px"
				>
					<Text margin="0px 0px 0px 0px" font="normal 600 34px/1.2 --fontFamily-sans" color="--light" sm-font="normal 600 30px/1.2 --fontFamily-sans">
						$8.9 billion
					</Text>
					<Text margin="170px 0px 0px 0px" font="normal 500 18px/1.2 --fontFamily-sans" color="--light" md-margin="20px 0px 0px 0px">
						We're proud that our customers have
made over $8 billion in total revenue.
					</Text>
					<Text margin="10px 0px 0px 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" color="--lightD2">
						The platform may also have a large and engaged user base
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="35px 35px 35px 35px"
					background="#5431e5"
					border-radius="25px"
					width="40%"
					md-width="100%"
				>
					<Text margin="0px 0px 0px 0px" font="normal 600 34px/1.2 --fontFamily-sans" color="--light" sm-font="normal 600 30px/1.2 --fontFamily-sans">
						401,093
					</Text>
					<Text margin="100px 0px 0px 0px" font="normal 500 18px/1.2 --fontFamily-sans" color="--light" md-margin="20px 0px 0px 0px">
						Transactions this year
					</Text>
					<Text margin="10px 0px 0px 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" color="--lightD2">
						The platform can drive traffic and sales for its customers.
					</Text>
				</Box>
			</Box>
		</Section>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Section padding="90px 0 120px 0" quarkly-title="Partners-2">
			<Text margin="0px 0px 20px 0px" text-align="center" font="normal 500 56px/1.2 --fontFamily-sans" color="--primary">
				Clients and partners
			</Text>
			<Text
				margin="0px 0px 70px 0px"
				text-align="center"
				font="normal 400 20px/1.5 --fontFamily-sansHelvetica"
				color="#606469"
				sm-margin="0px 0px 50px 0px"
			>
				Partnerships can help companies expand their reach, increase revenue, and access new markets.
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(6, 1fr)"
				grid-gap="0 54px"
				max-width="100%"
				align-items="center"
				width="100%"
				lg-grid-template-columns="repeat(3, 1fr)"
				lg-grid-gap="36px 72px"
				sm-grid-template-columns="repeat(2, 1fr)"
			>
				<Image
					src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt1.png?v=2023-05-07T13:28:36.263Z"
					display="block"
					width="100%"
					srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt1.png?v=2023-05-07T13%3A28%3A36.263Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt1.png?v=2023-05-07T13%3A28%3A36.263Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt1.png?v=2023-05-07T13%3A28%3A36.263Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt1.png?v=2023-05-07T13%3A28%3A36.263Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt1.png?v=2023-05-07T13%3A28%3A36.263Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt1.png?v=2023-05-07T13%3A28%3A36.263Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt1.png?v=2023-05-07T13%3A28%3A36.263Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Image
					src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt2.png?v=2023-05-07T13:30:33.614Z"
					display="block"
					width="100%"
					srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt2.png?v=2023-05-07T13%3A30%3A33.614Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt2.png?v=2023-05-07T13%3A30%3A33.614Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt2.png?v=2023-05-07T13%3A30%3A33.614Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt2.png?v=2023-05-07T13%3A30%3A33.614Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt2.png?v=2023-05-07T13%3A30%3A33.614Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt2.png?v=2023-05-07T13%3A30%3A33.614Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt2.png?v=2023-05-07T13%3A30%3A33.614Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Image
					src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt3.png?v=2023-05-07T13:30:51.710Z"
					display="block"
					width="100%"
					srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt3.png?v=2023-05-07T13%3A30%3A51.710Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt3.png?v=2023-05-07T13%3A30%3A51.710Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt3.png?v=2023-05-07T13%3A30%3A51.710Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt3.png?v=2023-05-07T13%3A30%3A51.710Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt3.png?v=2023-05-07T13%3A30%3A51.710Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt3.png?v=2023-05-07T13%3A30%3A51.710Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt3.png?v=2023-05-07T13%3A30%3A51.710Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Image
					src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt4.png?v=2023-05-07T13:31:08.519Z"
					display="block"
					width="100%"
					srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt4.png?v=2023-05-07T13%3A31%3A08.519Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt4.png?v=2023-05-07T13%3A31%3A08.519Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt4.png?v=2023-05-07T13%3A31%3A08.519Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt4.png?v=2023-05-07T13%3A31%3A08.519Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt4.png?v=2023-05-07T13%3A31%3A08.519Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt4.png?v=2023-05-07T13%3A31%3A08.519Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt4.png?v=2023-05-07T13%3A31%3A08.519Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Image
					src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/thebuilt-logo-3.png?v=2023-05-07T13:33:36.432Z"
					display="block"
					width="100%"
					srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/thebuilt-logo-3.png?v=2023-05-07T13%3A33%3A36.432Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/thebuilt-logo-3.png?v=2023-05-07T13%3A33%3A36.432Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/thebuilt-logo-3.png?v=2023-05-07T13%3A33%3A36.432Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/thebuilt-logo-3.png?v=2023-05-07T13%3A33%3A36.432Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/thebuilt-logo-3.png?v=2023-05-07T13%3A33%3A36.432Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/thebuilt-logo-3.png?v=2023-05-07T13%3A33%3A36.432Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/thebuilt-logo-3.png?v=2023-05-07T13%3A33%3A36.432Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Image
					src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt7.png?v=2023-05-07T13:31:44.956Z"
					display="block"
					width="100%"
					srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt7.png?v=2023-05-07T13%3A31%3A44.956Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt7.png?v=2023-05-07T13%3A31%3A44.956Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt7.png?v=2023-05-07T13%3A31%3A44.956Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt7.png?v=2023-05-07T13%3A31%3A44.956Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt7.png?v=2023-05-07T13%3A31%3A44.956Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt7.png?v=2023-05-07T13%3A31%3A44.956Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pt7.png?v=2023-05-07T13%3A31%3A44.956Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section
			padding="120px 0 130px 0"
			md-padding="80px 0 80px 0"
			background="--color-darkL1"
			color="--dark"
			quarkly-title="Reviews-14"
		>
			<Override slot="SectionContent" md-padding="0px 0 0px 0" grid-template-columns="repeat(3, 1fr)" grid-template-rows="auto" />
			<Text margin="0px 0px 15px 0px" color="--light" font="normal 600 46px/1.2 --fontFamily-sans" text-align="center">
				Testimonials
			</Text>
			<Text margin="0px 0px 50px 0px" color="#b2bcc3" font="normal 300 22px/1.5 --fontFamily-sansHelvetica" text-align="center">
				What customers say about us
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				border-radius="8px"
				margin="0px 20px 25px 20px"
				display="grid"
				flex-direction="row"
				justify-content="space-between"
				lg-margin="0px 0 25px 0px"
				md-flex-direction="column"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="auto"
				grid-gap="0 35px"
				md-grid-template-columns="1fr"
			>
				<Box
					min-width="100px"
					min-height="100px"
					border-color="#202757"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					md-width="100%"
					md-border-width="0 0 1px 0"
					md-margin="0px 0px 35px 0px"
				>
					<Box min-width="100px" min-height="100px" margin="0px 0px 26px 0px" md-margin="0px 0px 10px 0px">
						<Text margin="0px 0px 0 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" color="#b2bcc3">
							The organizers did a fantastic job of creating a welcoming and inclusive environment. As an introvert, I often feel uncomfortable at networking events, but I felt at ease and able to connect with others at this conference.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21:12:01.188Z"
							display="block"
							margin="0px 20px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							lg-width="68px"
							lg-height="68px"
							srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans" color="--light">
								Maria Davidson
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#b2bcc3">
								Operations Manager
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					md-width="100%"
					md-margin="0px 0px 35px 0px"
				>
					<Box min-width="100px" min-height="100px" margin="0px 0px 26px 0px" md-margin="0px 0px 15px 0px">
						<Text margin="0px 0px 0 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" color="#b2bcc3">
							Attending this conference was one of the best decisions I've made for my career. The networking opportunities were invaluable and I made some great connections that have led to new opportunities.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/7q.jpg?v=2023-04-18T18:56:53.857Z"
							display="block"
							margin="0px 20px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							lg-width="68px"
							lg-height="68px"
							srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/7q.jpg?v=2023-04-18T18%3A56%3A53.857Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/7q.jpg?v=2023-04-18T18%3A56%3A53.857Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/7q.jpg?v=2023-04-18T18%3A56%3A53.857Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/7q.jpg?v=2023-04-18T18%3A56%3A53.857Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/7q.jpg?v=2023-04-18T18%3A56%3A53.857Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/7q.jpg?v=2023-04-18T18%3A56%3A53.857Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/7q.jpg?v=2023-04-18T18%3A56%3A53.857Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans" color="--light">
								Tom Paul
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#b2bcc3">
								Event Planner
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					md-width="100%"
				>
					<Box min-width="100px" min-height="100px" margin="0px 0px 26px 0px" md-margin="0px 0px 15px 0px">
						<Text margin="0px 0px 0 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" color="#b2bcc3">
							The vendor expo was a great opportunity to learn about new products and services in my industry. I discovered some innovative solutions that I plan to implement in my company.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18:57:05.682Z"
							display="block"
							margin="0px 20px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							lg-width="68px"
							lg-height="68px"
							srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans" color="--light">
								Michael Lee
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#b2bcc3">
								IT Director
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="#0c1128" quarkly-title="Footer-7">
			<Box
				display="flex"
				lg-width="100%"
				flex-direction="row"
				lg-flex-direction="column"
				justify-content="space-between"
				width="100%"
				padding="0 0px 50px 0px"
				md-padding="0 0px 30px 0px"
				lg-padding="0 0px 40px 0px"
			>
				<Box
					lg-width="70%"
					width="70%"
					display="flex"
					lg-align-items="flex-start"
					lg-margin="0px 0px 35px 0px"
					md-margin="0px 0px 25px 0px"
					md-width="100%"
					sm-justify-content="center"
				>
					<Box
						min-width="100px"
						min-height="100px"
						display="grid"
						grid-template-columns="repeat(4, 1fr)"
						grid-gap="16px 24px"
						lg-align-items="start"
						md-grid-gap="36px 34px"
						sm-grid-template-columns="repeat(2, 1fr)"
						padding="0px 0 0px 0px"
						sm-width="100%"
						sm-grid-gap="36px 34px"
					>
						<Box
							align-items="flex-start"
							margin="0px 0px 0px 10px"
							lg-justify-content="start"
							lg-align-items="flex-start"
							justify-content="start"
							display="grid"
							lg-flex-direction="column"
							lg-margin="0px 0px 0px 0px"
							flex-direction="column"
							flex-wrap="wrap"
							align-content="start"
							grid-gap="8px 0"
							md-justify-content="start"
						>
							<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
								Solution
							</Text>
							<Link
								border-color="--color-primary"
								display="flex"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								margin="0px 0 0px 0"
								lg-border-width="0px 0px 0px 2px"
								href="#"
								text-decoration-line="initial"
								color="#c3c8d0"
								hover-color="#a78bfa"
							>
								Marketing
							</Link>
							<Link
								margin="0px 0 0px 0"
								display="flex"
								href="#"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								text-decoration-line="initial"
								color="#c3c8d0"
								hover-color="#a78bfa"
							>
								Analytics
							</Link>
							<Link
								margin="0px 0 0px 0"
								hover-color="#a78bfa"
								href="#"
								text-decoration-line="initial"
								color="#c3c8d0"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								display="flex"
							>
								Commerce
							</Link>
							<Link
								margin="0px 0 0px 0"
								hover-color="#a78bfa"
								href="#"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								text-decoration-line="initial"
								color="#c3c8d0"
								display="flex"
							>
								Insights
							</Link>
						</Box>
						<Box
							align-items="flex-start"
							margin="0px 0px 0px 10px"
							lg-justify-content="start"
							lg-align-items="flex-start"
							justify-content="start"
							display="grid"
							lg-flex-direction="column"
							lg-margin="0px 0px 0px 0px"
							flex-direction="column"
							flex-wrap="wrap"
							align-content="start"
							grid-gap="8px 0"
							md-justify-content="start"
						>
							<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
								Support
							</Text>
							<Link
								border-color="--color-primary"
								display="flex"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								margin="0px 0 0px 0"
								lg-border-width="0px 0px 0px 2px"
								href="#"
								text-decoration-line="initial"
								color="#c3c8d0"
								hover-color="#a78bfa"
							>
								Pricing
							</Link>
							<Link
								margin="0px 0 0px 0"
								display="flex"
								href="#"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								text-decoration-line="initial"
								color="#c3c8d0"
								hover-color="#a78bfa"
							>
								Documentation
							</Link>
							<Link
								margin="0px 0 0px 0"
								hover-color="#a78bfa"
								href="#"
								text-decoration-line="initial"
								color="#c3c8d0"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								display="flex"
							>
								Guides
							</Link>
							<Link
								margin="0px 0 0px 0"
								hover-color="#a78bfa"
								href="#"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								text-decoration-line="initial"
								color="#c3c8d0"
								display="flex"
							>
								API status
							</Link>
						</Box>
						<Box
							align-items="flex-start"
							margin="0px 0px 0px 10px"
							lg-justify-content="start"
							lg-align-items="flex-start"
							justify-content="start"
							display="grid"
							lg-flex-direction="column"
							lg-margin="0px 0px 0px 0px"
							flex-direction="column"
							flex-wrap="wrap"
							align-content="start"
							grid-gap="8px 0"
							md-justify-content="start"
						>
							<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
								Company
							</Text>
							<Link
								border-color="--color-primary"
								display="flex"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								margin="0px 0 0px 0"
								lg-border-width="0px 0px 0px 2px"
								href="#"
								text-decoration-line="initial"
								color="#c3c8d0"
								hover-color="#a78bfa"
							>
								About
							</Link>
							<Link
								margin="0px 0 0px 0"
								display="flex"
								href="#"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								text-decoration-line="initial"
								color="#c3c8d0"
								hover-color="#a78bfa"
							>
								Blog
							</Link>
							<Link
								margin="0px 0 0px 0"
								hover-color="#a78bfa"
								href="#"
								text-decoration-line="initial"
								color="#c3c8d0"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								display="flex"
							>
								Jobs
							</Link>
							<Link
								margin="0px 0 0px 0"
								hover-color="#a78bfa"
								href="#"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								text-decoration-line="initial"
								color="#c3c8d0"
								display="flex"
							>
								Press
							</Link>
							<Link
								margin="0px 0 0px 0"
								hover-color="#a78bfa"
								href="#"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								text-decoration-line="initial"
								color="#c3c8d0"
								display="flex"
							>
								Partners
							</Link>
						</Box>
						<Box
							align-items="flex-start"
							margin="0px 0px 0px 10px"
							lg-justify-content="start"
							lg-align-items="flex-start"
							justify-content="start"
							display="grid"
							lg-flex-direction="column"
							lg-margin="0px 0px 0px 0px"
							flex-direction="column"
							flex-wrap="wrap"
							align-content="start"
							grid-gap="8px 0"
							md-justify-content="start"
						>
							<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
								Legal
							</Text>
							<Link
								border-color="--color-primary"
								display="flex"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								margin="0px 0 0px 0"
								lg-border-width="0px 0px 0px 2px"
								href="#"
								text-decoration-line="initial"
								color="#c3c8d0"
								hover-color="#a78bfa"
							>
								Claim
							</Link>
							<Link
								margin="0px 0 0px 0"
								display="flex"
								href="#"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								text-decoration-line="initial"
								color="#c3c8d0"
								hover-color="#a78bfa"
							>
								Privacy
							</Link>
							<Link
								margin="0px 0 0px 0"
								hover-color="#a78bfa"
								href="#"
								text-decoration-line="initial"
								color="#c3c8d0"
								font="normal 400 16px/24px --fontFamily-googleRoboto"
								display="flex"
							>
								Terms
							</Link>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="0 0px 0 50px"
					display="flex"
					grid-template-columns="repeat(2, 1fr)"
					border-color="--color-lightD2"
					md-grid-template-columns="1fr"
					md-padding="20px 0px 20px 0px"
					flex-direction="column"
					lg-padding="0 0px 0 0"
				>
					<Box
						min-width="10px"
						min-height="10px"
						padding="0px 50px 0px 0px"
						md-padding="0px 0 0px 0px"
						md-margin="0px 0px 25px 0px"
						margin="0px 0px 35px 0px"
						lg-margin="0px 0px 25px 0px"
					>
						<Text margin="0px 0px 10px 0px" font="normal 500 20px/1.2 --fontFamily-sans" sm-text-align="center" color="--light">
							Subscribe to our newsletter
						</Text>
						<Text margin="0px 0px 0px 0px" font="--base" color="#c3c8d0" sm-text-align="center">
							The latest news, articles, and resources, sent to your inbox weekly.
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				justify-content="space-between"
				padding="50px 0px 0px 0px"
				border-width="1px 0 0 0"
				border-style="solid"
				border-color="#232a44"
				md-padding="30px 0px 0px 0px"
				md-flex-direction="column"
				lg-padding="40px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="#c3c8d0"
					md-margin="0px 0px 25px 0px"
					sm-text-align="center"
				>
					© 2023 Company, Inc. All rights reserved.
				</Text>
				<Box
					display="grid"
					grid-template-columns="repeat(5, 1fr)"
					grid-gap="16px 24px"
					md-align-self="flex-start"
					sm-align-self="center"
				>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaFacebook}
							size="24px"
							color="#c3c8d0"
							hover-color="#a78bfa"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaInstagram}
							size="24px"
							color="#c3c8d0"
							hover-color="#a78bfa"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaTwitterSquare}
							size="24px"
							color="#c3c8d0"
							hover-color="#a78bfa"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaGithub}
							size="24px"
							color="#c3c8d0"
							hover-color="#a78bfa"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaYoutube}
							size="24px"
							color="#c3c8d0"
							hover-color="#a78bfa"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
				</Box>
			</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6632cfc48d4a0c00202ee9a4"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});