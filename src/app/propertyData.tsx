import React from "react";

type AgentTagType = {
	name: string;
	contact?: string;
	email?: string;
	icon?: JSX.Element;
};

interface PropertyCardProps {
	id: number;
	imageUrl: string[];
	tags?: string[];
	specs?: string[];
	title: string;
	agents?: AgentTagType[];
	description: string;
	address: string;
	opportunity: string;
	locationDetails: string;
	mapLocation: {
		latitude: string;
		longitude: string;
	};
	status: string[];
	totalPrice: number;
}

const propertyData: PropertyCardProps[] = [
	{
		id: 1,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["industrial", "retail", "office"],
		status: ["For Sale", "For Lease"],
		specs: ["11435 SF", "$27.83 / SF"],
		totalPrice: 1179850,
		title: "Property Title 1",
		agents: [
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
		],
		description: "Description for property 1. Description for property 1. ",
		address: "717 Random Street, City 1, Country",
		opportunity:
			"Opportunity text for property 1. Opportunity text for property 1. Opportunity text for property 1. ",
		locationDetails:
			"Location details for property 1. Location details for property 1. ",
		mapLocation: {
			latitude: "-29.685674808244073",
			longitude: "-113.90204067951431",
		},
	},
	{
		id: 2,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["investment", "land"],
		status: ["For Sale", "For Lease"],
		specs: ["15876 SF", "$15.68 / SF"],
		totalPrice: 3923200,
		title: "Property Title 2",
		agents: [
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description:
			"Description for property 2. Description for property 2. Description for property 2. ",
		address: "193 Random Street, City 2, Country",
		opportunity:
			"Opportunity text for property 2. Opportunity text for property 2. ",
		locationDetails:
			"Location details for property 2. Location details for property 2. ",
		mapLocation: {
			latitude: "39.45891002642523",
			longitude: "-148.89383008546986",
		},
	},
	{
		id: 3,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["retail", "investment", "industrial"],
		status: ["For Sale", "For Lease"],
		specs: ["46638 SF", "$10.25 / SF"],
		totalPrice: 2129161,
		title: "Property Title 3",
		agents: [
			{
				name: "Jamie Lee",
			},
		],
		description: "Description for property 3. ",
		address: "881 Random Street, City 3, Country",
		opportunity:
			"Opportunity text for property 3. Opportunity text for property 3. ",
		locationDetails:
			"Location details for property 3. Location details for property 3. Location details for property 3. ",
		mapLocation: {
			latitude: "-35.476819849396406",
			longitude: "-151.46874301065085",
		},
	},
	{
		id: 4,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["land", "office", "investment"],
		status: ["For Sale", "For Lease"],
		specs: ["27052 SF", "$27.45 / SF"],
		totalPrice: 2231660,
		title: "Property Title 4",
		agents: [
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
		],
		description: "Description for property 4. ",
		address: "161 Random Street, City 4, Country",
		opportunity:
			"Opportunity text for property 4. Opportunity text for property 4. ",
		locationDetails:
			"Location details for property 4. Location details for property 4. ",
		mapLocation: {
			latitude: "-12.020454540549508",
			longitude: "138.22631433068398",
		},
	},
	{
		id: 5,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["retail", "land", "investment"],
		status: ["For Sale", "For Lease"],
		specs: ["7198 SF", "$15.9 / SF"],
		totalPrice: 3665686,
		title: "Property Title 5",
		agents: [
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description: "Description for property 5. Description for property 5. ",
		address: "101 Random Street, City 5, Country",
		opportunity:
			"Opportunity text for property 5. Opportunity text for property 5. ",
		locationDetails:
			"Location details for property 5. Location details for property 5. ",
		mapLocation: {
			latitude: "27.278741179804314",
			longitude: "20.212166685727112",
		},
	},
	{
		id: 6,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["development"],
		status: ["For Sale", "For Lease"],
		specs: ["15127 SF", "$29.06 / SF"],
		totalPrice: 4900407,
		title: "Property Title 6",
		agents: [
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
			{
				name: "Ryan Barichello",
			},
		],
		description:
			"Description for property 6. Description for property 6. Description for property 6. ",
		address: "646 Random Street, City 6, Country",
		opportunity:
			"Opportunity text for property 6. Opportunity text for property 6. Opportunity text for property 6. ",
		locationDetails: "Location details for property 6. ",
		mapLocation: {
			latitude: "3.8501354336747937",
			longitude: "34.08030355232859",
		},
	},
	{
		id: 7,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["development", "investment"],
		status: ["For Sale", "For Lease"],
		specs: ["44266 SF", "$10.22 / SF"],
		totalPrice: 4171217,
		title: "Property Title 7",
		agents: [
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description:
			"Description for property 7. Description for property 7. Description for property 7. ",
		address: "352 Random Street, City 7, Country",
		opportunity: "Opportunity text for property 7. ",
		locationDetails:
			"Location details for property 7. Location details for property 7. ",
		mapLocation: {
			latitude: "84.56752792213709",
			longitude: "-103.68386969948274",
		},
	},
	{
		id: 8,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["investment", "retail"],
		status: ["For Sale", "For Lease"],
		specs: ["44830 SF", "$11.15 / SF"],
		totalPrice: 846379,
		title: "Property Title 8",
		agents: [
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
			{
				name: "Jamie Lee",
			},
		],
		description:
			"Description for property 8. Description for property 8. Description for property 8. ",
		address: "102 Random Street, City 8, Country",
		opportunity: "Opportunity text for property 8. ",
		locationDetails:
			"Location details for property 8. Location details for property 8. Location details for property 8. ",
		mapLocation: {
			latitude: "-31.82842306083414",
			longitude: "162.53519125363192",
		},
	},
	{
		id: 9,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["investment"],
		status: ["For Sale", "For Lease"],
		specs: ["19101 SF", "$23.26 / SF"],
		totalPrice: 4902508,
		title: "Property Title 9",
		agents: [
			{
				name: "Jamie Lee",
			},
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
		],
		description: "Description for property 9. ",
		address: "489 Random Street, City 9, Country",
		opportunity:
			"Opportunity text for property 9. Opportunity text for property 9. ",
		locationDetails: "Location details for property 9. ",
		mapLocation: {
			latitude: "54.75096403304741",
			longitude: "-14.481089261495612",
		},
	},
	{
		id: 10,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["office", "industrial"],
		status: ["For Sale", "For Lease"],
		specs: ["3053 SF", "$18.93 / SF"],
		totalPrice: 511055,
		title: "Property Title 10",
		agents: [
			{
				name: "Ryan Barichello",
			},
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
		],
		description:
			"Description for property 10. Description for property 10. Description for property 10. ",
		address: "600 Random Street, City 10, Country",
		opportunity: "Opportunity text for property 10. ",
		locationDetails: "Location details for property 10. ",
		mapLocation: {
			latitude: "-48.89404683258638",
			longitude: "153.9192768669497",
		},
	},
	{
		id: 11,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["retail", "office", "investment"],
		status: ["For Sale", "For Lease"],
		specs: ["36763 SF", "$28.98 / SF"],
		totalPrice: 4092308,
		title: "Property Title 11",
		agents: [
			{
				name: "Jamie Lee",
			},
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
		],
		description: "Description for property 11. ",
		address: "382 Random Street, City 11, Country",
		opportunity: "Opportunity text for property 11. ",
		locationDetails:
			"Location details for property 11. Location details for property 11. Location details for property 11. ",
		mapLocation: {
			latitude: "-16.529192111300105",
			longitude: "178.62994119995489",
		},
	},
	{
		id: 12,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["industrial"],
		status: ["For Sale", "For Lease"],
		specs: ["1040 SF", "$19.33 / SF"],
		totalPrice: 3021422,
		title: "Property Title 12",
		agents: [
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
		],
		description: "Description for property 12. ",
		address: "686 Random Street, City 12, Country",
		opportunity:
			"Opportunity text for property 12. Opportunity text for property 12. ",
		locationDetails:
			"Location details for property 12. Location details for property 12. ",
		mapLocation: {
			latitude: "84.27657601561825",
			longitude: "-25.164419084849015",
		},
	},
	{
		id: 13,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["land", "industrial", "development"],
		status: ["For Sale", "For Lease"],
		specs: ["37245 SF", "$28.11 / SF"],
		totalPrice: 3907243,
		title: "Property Title 13",
		agents: [
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description: "Description for property 13. Description for property 13. ",
		address: "998 Random Street, City 13, Country",
		opportunity:
			"Opportunity text for property 13. Opportunity text for property 13. ",
		locationDetails:
			"Location details for property 13. Location details for property 13. Location details for property 13. ",
		mapLocation: {
			latitude: "-37.70305302504541",
			longitude: "148.01311776678494",
		},
	},
	{
		id: 14,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["investment"],
		status: ["For Sale", "For Lease"],
		specs: ["26589 SF", "$20.82 / SF"],
		totalPrice: 4955004,
		title: "Property Title 14",
		agents: [
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
		],
		description:
			"Description for property 14. Description for property 14. Description for property 14. ",
		address: "214 Random Street, City 14, Country",
		opportunity: "Opportunity text for property 14. ",
		locationDetails:
			"Location details for property 14. Location details for property 14. ",
		mapLocation: {
			latitude: "67.02801507567946",
			longitude: "22.23331904379566",
		},
	},
	{
		id: 15,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["land"],
		status: ["For Sale", "For Lease"],
		specs: ["18410 SF", "$12.21 / SF"],
		totalPrice: 1028937,
		title: "Property Title 15",
		agents: [
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
			{
				name: "Jamie Lee",
			},
		],
		description: "Description for property 15. Description for property 15. ",
		address: "794 Random Street, City 15, Country",
		opportunity: "Opportunity text for property 15. ",
		locationDetails:
			"Location details for property 15. Location details for property 15. ",
		mapLocation: {
			latitude: "-10.646427824114738",
			longitude: "147.4802688873362",
		},
	},
	{
		id: 16,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["development", "office"],
		status: ["For Sale", "For Lease"],
		specs: ["14280 SF", "$28.04 / SF"],
		totalPrice: 4829915,
		title: "Property Title 16",
		agents: [
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
		],
		description: "Description for property 16. Description for property 16. ",
		address: "738 Random Street, City 16, Country",
		opportunity:
			"Opportunity text for property 16. Opportunity text for property 16. Opportunity text for property 16. ",
		locationDetails:
			"Location details for property 16. Location details for property 16. Location details for property 16. ",
		mapLocation: {
			latitude: "-52.86293174903791",
			longitude: "156.0405358539707",
		},
	},
	{
		id: 17,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["investment", "land"],
		status: ["For Sale", "For Lease"],
		specs: ["27455 SF", "$24.47 / SF"],
		totalPrice: 4609523,
		title: "Property Title 17",
		agents: [
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
			{
				name: "Ryan Barichello",
			},
		],
		description: "Description for property 17. Description for property 17. ",
		address: "535 Random Street, City 17, Country",
		opportunity: "Opportunity text for property 17. ",
		locationDetails: "Location details for property 17. ",
		mapLocation: {
			latitude: "-36.30221464425274",
			longitude: "-1.9913375890468785",
		},
	},
	{
		id: 18,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["industrial", "investment"],
		status: ["For Sale", "For Lease"],
		specs: ["7279 SF", "$22.9 / SF"],
		totalPrice: 1662675,
		title: "Property Title 18",
		agents: [
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description: "Description for property 18. ",
		address: "888 Random Street, City 18, Country",
		opportunity: "Opportunity text for property 18. ",
		locationDetails:
			"Location details for property 18. Location details for property 18. Location details for property 18. ",
		mapLocation: {
			latitude: "32.210124981392454",
			longitude: "45.21575650085114",
		},
	},
	{
		id: 19,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["investment", "retail"],
		status: ["For Sale", "For Lease"],
		specs: ["10906 SF", "$12.33 / SF"],
		totalPrice: 2410523,
		title: "Property Title 19",
		agents: [
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
		],
		description: "Description for property 19. ",
		address: "654 Random Street, City 19, Country",
		opportunity:
			"Opportunity text for property 19. Opportunity text for property 19. Opportunity text for property 19. ",
		locationDetails:
			"Location details for property 19. Location details for property 19. Location details for property 19. ",
		mapLocation: {
			latitude: "64.91949995190592",
			longitude: "66.15074721537056",
		},
	},
	{
		id: 20,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["industrial", "investment"],
		status: ["For Sale", "For Lease"],
		specs: ["45028 SF", "$23.57 / SF"],
		totalPrice: 2370250,
		title: "Property Title 20",
		agents: [
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description: "Description for property 20. Description for property 20. ",
		address: "790 Random Street, City 20, Country",
		opportunity: "Opportunity text for property 20. ",
		locationDetails:
			"Location details for property 20. Location details for property 20. Location details for property 20. ",
		mapLocation: {
			latitude: "7.577448767966629",
			longitude: "-90.10969816766863",
		},
	},
	{
		id: 21,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["land", "office", "retail"],
		status: ["For Sale", "For Lease"],
		specs: ["3050 SF", "$18.98 / SF"],
		totalPrice: 1537441,
		title: "Property Title 21",
		agents: [
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
		],
		description: "Description for property 21. ",
		address: "866 Random Street, City 21, Country",
		opportunity:
			"Opportunity text for property 21. Opportunity text for property 21. Opportunity text for property 21. ",
		locationDetails: "Location details for property 21. ",
		mapLocation: {
			latitude: "-46.79027220913491",
			longitude: "6.782309119154661",
		},
	},
	{
		id: 22,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["industrial", "development", "retail"],
		status: ["For Sale", "For Lease"],
		specs: ["21933 SF", "$12.38 / SF"],
		totalPrice: 2731900,
		title: "Property Title 22",
		agents: [
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
		],
		description:
			"Description for property 22. Description for property 22. Description for property 22. ",
		address: "753 Random Street, City 22, Country",
		opportunity:
			"Opportunity text for property 22. Opportunity text for property 22. Opportunity text for property 22. ",
		locationDetails: "Location details for property 22. ",
		mapLocation: {
			latitude: "-6.471898555757022",
			longitude: "168.27843682456887",
		},
	},
	{
		id: 23,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["retail", "development", "land"],
		status: ["For Sale", "For Lease"],
		specs: ["22865 SF", "$15.24 / SF"],
		totalPrice: 4109925,
		title: "Property Title 23",
		agents: [
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
			{
				name: "Ryan Barichello",
			},
		],
		description: "Description for property 23. Description for property 23. ",
		address: "845 Random Street, City 23, Country",
		opportunity: "Opportunity text for property 23. ",
		locationDetails:
			"Location details for property 23. Location details for property 23. ",
		mapLocation: {
			latitude: "-84.08484697758556",
			longitude: "162.84806133351884",
		},
	},
	{
		id: 24,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["land", "development"],
		status: ["For Sale", "For Lease"],
		specs: ["16848 SF", "$26.25 / SF"],
		totalPrice: 3248244,
		title: "Property Title 24",
		agents: [
			{
				name: "Ryan Barichello",
			},
		],
		description: "Description for property 24. Description for property 24. ",
		address: "454 Random Street, City 24, Country",
		opportunity:
			"Opportunity text for property 24. Opportunity text for property 24. Opportunity text for property 24. ",
		locationDetails:
			"Location details for property 24. Location details for property 24. ",
		mapLocation: {
			latitude: "68.5646643441055",
			longitude: "162.9431963456446",
		},
	},
	{
		id: 25,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["industrial", "land", "development"],
		status: ["For Sale", "For Lease"],
		specs: ["41053 SF", "$12.47 / SF"],
		totalPrice: 4784447,
		title: "Property Title 25",
		agents: [
			{
				name: "Jamie Lee",
			},
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description:
			"Description for property 25. Description for property 25. Description for property 25. ",
		address: "131 Random Street, City 25, Country",
		opportunity:
			"Opportunity text for property 25. Opportunity text for property 25. ",
		locationDetails:
			"Location details for property 25. Location details for property 25. Location details for property 25. ",
		mapLocation: {
			latitude: "12.611602994697478",
			longitude: "-145.88343588451846",
		},
	},
	{
		id: 26,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["development", "office", "land"],
		status: ["For Sale", "For Lease"],
		specs: ["17260 SF", "$19.3 / SF"],
		totalPrice: 3784940,
		title: "Property Title 26",
		agents: [
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
		],
		description: "Description for property 26. ",
		address: "858 Random Street, City 26, Country",
		opportunity: "Opportunity text for property 26. ",
		locationDetails: "Location details for property 26. ",
		mapLocation: {
			latitude: "-84.57553242204534",
			longitude: "-72.85608131537323",
		},
	},
	{
		id: 27,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["industrial", "office"],
		status: ["For Sale", "For Lease"],
		specs: ["27217 SF", "$19.95 / SF"],
		totalPrice: 2565784,
		title: "Property Title 27",
		agents: [
			{
				name: "Ryan Barichello",
			},
		],
		description: "Description for property 27. Description for property 27. ",
		address: "719 Random Street, City 27, Country",
		opportunity: "Opportunity text for property 27. ",
		locationDetails: "Location details for property 27. ",
		mapLocation: {
			latitude: "52.89281037170113",
			longitude: "-5.839631840891656",
		},
	},
	{
		id: 28,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["investment", "industrial"],
		status: ["For Sale", "For Lease"],
		specs: ["26792 SF", "$19.88 / SF"],
		totalPrice: 2154596,
		title: "Property Title 28",
		agents: [
			{
				name: "Jamie Lee",
			},
		],
		description: "Description for property 28. ",
		address: "790 Random Street, City 28, Country",
		opportunity:
			"Opportunity text for property 28. Opportunity text for property 28. ",
		locationDetails:
			"Location details for property 28. Location details for property 28. Location details for property 28. ",
		mapLocation: {
			latitude: "-47.485012052781165",
			longitude: "111.45842409665761",
		},
	},
	{
		id: 29,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["industrial", "retail", "development"],
		status: ["For Sale", "For Lease"],
		specs: ["22677 SF", "$25.05 / SF"],
		totalPrice: 1465091,
		title: "Property Title 29",
		agents: [
			{
				name: "Ryan Barichello",
			},
		],
		description: "Description for property 29. ",
		address: "670 Random Street, City 29, Country",
		opportunity:
			"Opportunity text for property 29. Opportunity text for property 29. Opportunity text for property 29. ",
		locationDetails:
			"Location details for property 29. Location details for property 29. ",
		mapLocation: {
			latitude: "50.71469489044122",
			longitude: "65.64001172596903",
		},
	},
	{
		id: 30,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["investment", "retail", "land"],
		status: ["For Sale", "For Lease"],
		specs: ["10616 SF", "$22.05 / SF"],
		totalPrice: 2435746,
		title: "Property Title 30",
		agents: [
			{
				name: "Ryan Barichello",
			},
			{
				name: "Jamie Lee",
			},
		],
		description: "Description for property 30. ",
		address: "699 Random Street, City 30, Country",
		opportunity:
			"Opportunity text for property 30. Opportunity text for property 30. ",
		locationDetails:
			"Location details for property 30. Location details for property 30. ",
		mapLocation: {
			latitude: "-81.74227396169238",
			longitude: "65.19458357346872",
		},
	},
	{
		id: 31,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["investment", "office", "development"],
		status: ["For Sale", "For Lease"],
		specs: ["26702 SF", "$18.79 / SF"],
		totalPrice: 756395,
		title: "Property Title 31",
		agents: [
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description: "Description for property 31. ",
		address: "661 Random Street, City 31, Country",
		opportunity: "Opportunity text for property 31. ",
		locationDetails:
			"Location details for property 31. Location details for property 31. ",
		mapLocation: {
			latitude: "46.21275840128774",
			longitude: "166.80281360801172",
		},
	},
	{
		id: 32,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["office"],
		status: ["For Sale", "For Lease"],
		specs: ["45559 SF", "$17.84 / SF"],
		totalPrice: 637934,
		title: "Property Title 32",
		agents: [
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
		],
		description: "Description for property 32. Description for property 32. ",
		address: "315 Random Street, City 32, Country",
		opportunity:
			"Opportunity text for property 32. Opportunity text for property 32. Opportunity text for property 32. ",
		locationDetails: "Location details for property 32. ",
		mapLocation: {
			latitude: "30.190582849052177",
			longitude: "-137.54600761751396",
		},
	},
	{
		id: 33,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["investment"],
		status: ["For Sale", "For Lease"],
		specs: ["44822 SF", "$22.44 / SF"],
		totalPrice: 4210824,
		title: "Property Title 33",
		agents: [
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
		],
		description: "Description for property 33. ",
		address: "779 Random Street, City 33, Country",
		opportunity: "Opportunity text for property 33. ",
		locationDetails:
			"Location details for property 33. Location details for property 33. ",
		mapLocation: {
			latitude: "2.1785570389549775",
			longitude: "37.71943343965211",
		},
	},
	{
		id: 34,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["land", "investment", "retail"],
		status: ["For Sale", "For Lease"],
		specs: ["23243 SF", "$22.37 / SF"],
		totalPrice: 4709431,
		title: "Property Title 34",
		agents: [
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description:
			"Description for property 34. Description for property 34. Description for property 34. ",
		address: "404 Random Street, City 34, Country",
		opportunity: "Opportunity text for property 34. ",
		locationDetails: "Location details for property 34. ",
		mapLocation: {
			latitude: "-85.66011898647477",
			longitude: "179.51925196607175",
		},
	},
	{
		id: 35,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["investment", "office", "industrial"],
		status: ["For Sale", "For Lease"],
		specs: ["17358 SF", "$12.3 / SF"],
		totalPrice: 4925463,
		title: "Property Title 35",
		agents: [
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description:
			"Description for property 35. Description for property 35. Description for property 35. ",
		address: "128 Random Street, City 35, Country",
		opportunity:
			"Opportunity text for property 35. Opportunity text for property 35. ",
		locationDetails:
			"Location details for property 35. Location details for property 35. Location details for property 35. ",
		mapLocation: {
			latitude: "77.70834564951787",
			longitude: "-176.48122660981943",
		},
	},
	{
		id: 36,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["investment", "industrial", "retail"],
		status: ["For Sale", "For Lease"],
		specs: ["28791 SF", "$14.79 / SF"],
		totalPrice: 1329171,
		title: "Property Title 36",
		agents: [
			{
				name: "Jamie Lee",
			},
		],
		description: "Description for property 36. Description for property 36. ",
		address: "741 Random Street, City 36, Country",
		opportunity:
			"Opportunity text for property 36. Opportunity text for property 36. Opportunity text for property 36. ",
		locationDetails:
			"Location details for property 36. Location details for property 36. Location details for property 36. ",
		mapLocation: {
			latitude: "78.32483193103036",
			longitude: "-88.49087146343052",
		},
	},
	{
		id: 37,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["retail", "investment", "office"],
		status: ["For Sale", "For Lease"],
		specs: ["12836 SF", "$20.18 / SF"],
		totalPrice: 2923287,
		title: "Property Title 37",
		agents: [
			{
				name: "Ryan Barichello",
			},
		],
		description: "Description for property 37. Description for property 37. ",
		address: "512 Random Street, City 37, Country",
		opportunity:
			"Opportunity text for property 37. Opportunity text for property 37. ",
		locationDetails:
			"Location details for property 37. Location details for property 37. Location details for property 37. ",
		mapLocation: {
			latitude: "-29.27645298514954",
			longitude: "-2.3503517026699967",
		},
	},
	{
		id: 38,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["industrial"],
		status: ["For Sale", "For Lease"],
		specs: ["30521 SF", "$18.92 / SF"],
		totalPrice: 4891191,
		title: "Property Title 38",
		agents: [
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description: "Description for property 38. Description for property 38. ",
		address: "554 Random Street, City 38, Country",
		opportunity:
			"Opportunity text for property 38. Opportunity text for property 38. Opportunity text for property 38. ",
		locationDetails:
			"Location details for property 38. Location details for property 38. ",
		mapLocation: {
			latitude: "86.36048598825687",
			longitude: "-4.32143568571243",
		},
	},
	{
		id: 39,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["retail"],
		status: ["For Sale", "For Lease"],
		specs: ["19983 SF", "$15.37 / SF"],
		totalPrice: 1514884,
		title: "Property Title 39",
		agents: [
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
			{
				name: "Jamie Lee",
			},
		],
		description: "Description for property 39. Description for property 39. ",
		address: "888 Random Street, City 39, Country",
		opportunity:
			"Opportunity text for property 39. Opportunity text for property 39. ",
		locationDetails:
			"Location details for property 39. Location details for property 39. ",
		mapLocation: {
			latitude: "47.42248340516946",
			longitude: "-99.68634715988874",
		},
	},
	{
		id: 40,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["retail", "investment", "development"],
		status: ["For Sale", "For Lease"],
		specs: ["25131 SF", "$14.51 / SF"],
		totalPrice: 715092,
		title: "Property Title 40",
		agents: [
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
		],
		description: "Description for property 40. Description for property 40. ",
		address: "387 Random Street, City 40, Country",
		opportunity:
			"Opportunity text for property 40. Opportunity text for property 40. Opportunity text for property 40. ",
		locationDetails:
			"Location details for property 40. Location details for property 40. Location details for property 40. ",
		mapLocation: {
			latitude: "-15.872548775944026",
			longitude: "65.52662885452747",
		},
	},
	{
		id: 41,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["office"],
		status: ["For Sale", "For Lease"],
		specs: ["47720 SF", "$19.27 / SF"],
		totalPrice: 2538037,
		title: "Property Title 41",
		agents: [
			{
				name: "Ryan Barichello",
			},
		],
		description: "Description for property 41. Description for property 41. ",
		address: "980 Random Street, City 41, Country",
		opportunity:
			"Opportunity text for property 41. Opportunity text for property 41. Opportunity text for property 41. ",
		locationDetails:
			"Location details for property 41. Location details for property 41. ",
		mapLocation: {
			latitude: "7.621803548837619",
			longitude: "18.779794109634082",
		},
	},
	{
		id: 42,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["land", "retail"],
		status: ["For Sale", "For Lease"],
		specs: ["39900 SF", "$16.18 / SF"],
		totalPrice: 2676567,
		title: "Property Title 42",
		agents: [
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
		],
		description:
			"Description for property 42. Description for property 42. Description for property 42. ",
		address: "162 Random Street, City 42, Country",
		opportunity:
			"Opportunity text for property 42. Opportunity text for property 42. ",
		locationDetails:
			"Location details for property 42. Location details for property 42. ",
		mapLocation: {
			latitude: "-89.24662989060796",
			longitude: "25.895027996439865",
		},
	},
	{
		id: 43,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["land", "investment", "office"],
		status: ["For Sale", "For Lease"],
		specs: ["31117 SF", "$14.08 / SF"],
		totalPrice: 1926730,
		title: "Property Title 43",
		agents: [
			{
				name: "Jamie Lee",
			},
		],
		description:
			"Description for property 43. Description for property 43. Description for property 43. ",
		address: "876 Random Street, City 43, Country",
		opportunity: "Opportunity text for property 43. ",
		locationDetails:
			"Location details for property 43. Location details for property 43. ",
		mapLocation: {
			latitude: "28.39732522257404",
			longitude: "-22.974352231713254",
		},
	},
	{
		id: 44,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["office", "investment", "industrial"],
		status: ["For Sale", "For Lease"],
		specs: ["9444 SF", "$26.11 / SF"],
		totalPrice: 1324156,
		title: "Property Title 44",
		agents: [
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
			{
				name: "Jamie Lee",
			},
		],
		description:
			"Description for property 44. Description for property 44. Description for property 44. ",
		address: "278 Random Street, City 44, Country",
		opportunity: "Opportunity text for property 44. ",
		locationDetails:
			"Location details for property 44. Location details for property 44. Location details for property 44. ",
		mapLocation: {
			latitude: "-46.420600521307314",
			longitude: "-110.02203018879362",
		},
	},
	{
		id: 45,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["industrial", "retail"],
		status: ["For Sale", "For Lease"],
		specs: ["47973 SF", "$27.16 / SF"],
		totalPrice: 1804233,
		title: "Property Title 45",
		agents: [
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
			{
				name: "Jamie Lee",
			},
		],
		description: "Description for property 45. ",
		address: "735 Random Street, City 45, Country",
		opportunity: "Opportunity text for property 45. ",
		locationDetails:
			"Location details for property 45. Location details for property 45. Location details for property 45. ",
		mapLocation: {
			latitude: "70.42299695463626",
			longitude: "-170.96111828640306",
		},
	},
	{
		id: 46,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["development", "investment"],
		status: ["For Sale", "For Lease"],
		specs: ["2564 SF", "$29.73 / SF"],
		totalPrice: 4170263,
		title: "Property Title 46",
		agents: [
			{
				name: "Jamie Lee",
			},
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description:
			"Description for property 46. Description for property 46. Description for property 46. ",
		address: "174 Random Street, City 46, Country",
		opportunity: "Opportunity text for property 46. ",
		locationDetails:
			"Location details for property 46. Location details for property 46. Location details for property 46. ",
		mapLocation: {
			latitude: "-64.75951166626118",
			longitude: "57.19833327612699",
		},
	},
	{
		id: 47,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["office", "land", "investment"],
		status: ["For Sale", "For Lease"],
		specs: ["48334 SF", "$29.51 / SF"],
		totalPrice: 3899987,
		title: "Property Title 47",
		agents: [
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
			{
				name: "Ryan Barichello",
			},
		],
		description:
			"Description for property 47. Description for property 47. Description for property 47. ",
		address: "697 Random Street, City 47, Country",
		opportunity:
			"Opportunity text for property 47. Opportunity text for property 47. ",
		locationDetails:
			"Location details for property 47. Location details for property 47. Location details for property 47. ",
		mapLocation: {
			latitude: "25.95067691961256",
			longitude: "114.80844199269148",
		},
	},
	{
		id: 48,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["retail", "development", "office"],
		status: ["For Sale", "For Lease"],
		specs: ["37257 SF", "$19.72 / SF"],
		totalPrice: 3940337,
		title: "Property Title 48",
		agents: [
			{
				name: "Sam Johnson",
				contact: "+1234567892",
			},
			{
				name: "Chris McIntyre",
				contact: "+1234567890",
				email: "johndoe@example.com",
			},
		],
		description: "Description for property 48. Description for property 48. ",
		address: "283 Random Street, City 48, Country",
		opportunity: "Opportunity text for property 48. ",
		locationDetails:
			"Location details for property 48. Location details for property 48. Location details for property 48. ",
		mapLocation: {
			latitude: "-32.06276106184052",
			longitude: "-45.52315482964693",
		},
	},
	{
		id: 49,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["retail"],
		status: ["For Sale", "For Lease"],
		specs: ["26025 SF", "$10.41 / SF"],
		totalPrice: 1920977,
		title: "Property Title 49",
		agents: [
			{
				name: "Ryan Barichello",
			},
		],
		description: "Description for property 49. ",
		address: "629 Random Street, City 49, Country",
		opportunity:
			"Opportunity text for property 49. Opportunity text for property 49. ",
		locationDetails:
			"Location details for property 49. Location details for property 49. Location details for property 49. ",
		mapLocation: {
			latitude: "80.90275513101159",
			longitude: "-97.02767443290708",
		},
	},
	{
		id: 50,
		imageUrl: [
			"https://leevancouver.com/wp-content/uploads/Antrim-Ave-6850_Mavis-St-5540-02-2024-1-labelled-scaled.jpg",
		],
		tags: ["industrial"],
		status: ["For Sale", "For Lease"],
		specs: ["28229 SF", "$16.21 / SF"],
		totalPrice: 1175221,
		title: "Property Title 50",
		agents: [
			{
				name: "Alex Smith",
				contact: "+1234567891",
				email: "alexsmith@example.com",
			},
		],
		description:
			"Description for property 50. Description for property 50. Description for property 50. ",
		address: "758 Random Street, City 50, Country",
		opportunity: "Opportunity text for property 50. ",
		locationDetails: "Location details for property 50. ",
		mapLocation: {
			latitude: "-46.218258052159705",
			longitude: "154.46324092447207",
		},
	},
];

export default propertyData;
