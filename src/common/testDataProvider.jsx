import { ALL_BY_GROUP, multiSelectClearAll, multiSelectSelectAll } from './utils';
import { ClearAllFilterOption, SelectAllByGroupIDFilterOption, MultiSelectFilterGroup, Person } from './recordDefinitions';

export const specialOptions = [
	new ClearAllFilterOption(multiSelectClearAll, "id"),
	//new SelectAllByGroupIDFilterOption(ALL_BY_GROUP("Female", `All Female`), "gender"),
];


export const departments = [
	{
		departmentID: 1,
		name: "Economics"
	},{
		departmentID: 2,
		name: "Mathematics"
	},{
		departmentID: 3,
		name: "Ag Science"
	},{
		departmentID: 4,
		name: "Athletics"
	},{
		departmentID: 5,
		name: "Geology"
	},{
		departmentID: 6,
		name: "IT"
	},
	
];

export const testData = [
	new Person({
	  "id": 1,
	  "first_name": "Arabel",
	  "last_name": "Cornewell",
	  "email": "acornewell0@unicef.org",
	  "gender": "Female",
	  "ip_address": "40.92.185.84",
	  "departmentID": 1
	}), new Person({
	  "id": 2,
	  "first_name": "Forrester",
	  "last_name": "Pigott",
	  "email": "fpigott1@cyberchimps.com",
	  "gender": "Male",
	  "ip_address": "26.134.188.249",
	  "departmentID": 1
	}), new Person({
	  "id": 3,
	  "first_name": "Babb",
	  "last_name": "Boyat",
	  "email": "bboyat2@scientificamerican.com",
	  "gender": "Female",
	  "ip_address": "73.202.228.13",
	  "departmentID": 1
	}), new Person({
	  "id": 4,
	  "first_name": "Lissa",
	  "last_name": "Harbour",
	  "email": "lharbour3@reddit.com",
	  "gender": "Female",
	  "ip_address": "20.201.152.172",
	  "departmentID": 1
	}), new Person({
	  "id": 5,
	  "first_name": "Hattie",
	  "last_name": "Mixworthy",
	  "email": "hmixworthy4@dot.gov",
	  "gender": "Female",
	  "ip_address": "115.228.165.54",
	  "departmentID": 4
	}), new Person({
	  "id": 6,
	  "first_name": "Peter",
	  "last_name": "Carmo",
	  "email": "pcarmo5@ask.com",
	  "gender": "Male",
	  "ip_address": "188.128.232.36",
	  "departmentID": 4
	}), new Person({
	  "id": 7,
	  "first_name": "Deb",
	  "last_name": "Davidman",
	  "email": "ddavidman6@ft.com",
	  "gender": "Female",
	  "ip_address": "99.211.128.77",
	  "departmentID": 4
	}), new Person({
	  "id": 8,
	  "first_name": "Orlando",
	  "last_name": "Phoenix",
	  "email": "ophoenix7@yandex.ru",
	  "gender": "Male",
	  "ip_address": "97.200.151.179",
	  "departmentID": 1
	}), new Person({
	  "id": 9,
	  "first_name": "Rochella",
	  "last_name": "Gildersleeve",
	  "email": "rgildersleeve8@unc.edu",
	  "gender": "Female",
	  "ip_address": "25.112.101.237",
	  "departmentID": 3
	}), new Person({
	  "id": 10,
	  "first_name": "Laurent",
	  "last_name": "Sugge",
	  "email": "lsugge9@answers.com",
	  "gender": "Male",
	  "ip_address": "50.181.63.103",
	  "departmentID": 1
	}), new Person({
	  "id": 11,
	  "first_name": "Sheffy",
	  "last_name": "Hamlyn",
	  "email": "shamlyna@nydailynews.com",
	  "gender": "Male",
	  "ip_address": "14.216.200.194",
	  "departmentID": 1
	}), new Person({
	  "id": 12,
	  "first_name": "Tracey",
	  "last_name": "Downes",
	  "email": "tdownesb@cisco.com",
	  "gender": "Female",
	  "ip_address": "126.65.129.34",
	  "departmentID": 5
	}), new Person({
	  "id": 13,
	  "first_name": "Monah",
	  "last_name": "Callis",
	  "email": "mcallisc@discuz.net",
	  "gender": "Female",
	  "ip_address": "94.174.190.61",
	  "departmentID": 1
	}), new Person({
	  "id": 14,
	  "first_name": "Marcellina",
	  "last_name": "Uden",
	  "email": "mudend@w3.org",
	  "gender": "Female",
	  "ip_address": "243.157.222.61",
	  "departmentID": 5
	}), new Person({
	  "id": 15,
	  "first_name": "Shayne",
	  "last_name": "Foote",
	  "email": "sfootee@businessinsider.com",
	  "gender": "Male",
	  "ip_address": "42.251.140.141",
	  "departmentID": 1
	}), new Person({
	  "id": 16,
	  "first_name": "Gussy",
	  "last_name": "Croisdall",
	  "email": "gcroisdallf@google.cn",
	  "gender": "Female",
	  "ip_address": "104.101.121.48",
	  "departmentID": 1
	}), new Person({
	  "id": 17,
	  "first_name": "Dillon",
	  "last_name": "Colley",
	  "email": "dcolleyg@aol.com",
	  "gender": "Male",
	  "ip_address": "54.52.227.72",
	  "departmentID": 2
	}), new Person({
	  "id": 18,
	  "first_name": "Brenden",
	  "last_name": "Fielder",
	  "email": "bfielderh@clickbank.net",
	  "gender": "Male",
	  "ip_address": "223.127.226.55",
	  "departmentID": 2
	}), new Person({
	  "id": 19,
	  "first_name": "Lorant",
	  "last_name": "Puden",
	  "email": "lpudeni@ehow.com",
	  "gender": "Male",
	  "ip_address": "73.73.34.107",
	  "departmentID": 1
	}), new Person({
	  "id": 20,
	  "first_name": "Bordie",
	  "last_name": "Loughren",
	  "email": "bloughrenj@phoca.cz",
	  "gender": "Male",
	  "ip_address": "103.117.144.130",
	  "departmentID": 1
	}), new Person({
	  "id": 21,
	  "first_name": "Abrahan",
	  "last_name": "Van den Velde",
	  "email": "avandenveldek@weather.com",
	  "gender": "Male",
	  "ip_address": "126.200.58.252",
	  "departmentID": 1
	}), new Person({
	  "id": 22,
	  "first_name": "Orton",
	  "last_name": "McAloren",
	  "email": "omcalorenl@paginegialle.it",
	  "gender": "Male",
	  "ip_address": "110.2.231.147",
	  "departmentID": 1
	}), new Person({
	  "id": 23,
	  "first_name": "Raleigh",
	  "last_name": "St. Paul",
	  "email": "rstpaulm@typepad.com",
	  "gender": "Male",
	  "ip_address": "143.168.58.77",
	  "departmentID": 2
	}), new Person({
	  "id": 24,
	  "first_name": "Gusti",
	  "last_name": "Georges",
	  "email": "ggeorgesn@google.com.br",
	  "gender": "Female",
	  "ip_address": "100.211.124.140",
	  "departmentID": 1
	}), new Person({
	  "id": 25,
	  "first_name": "Bellina",
	  "last_name": "Pope",
	  "email": "bpopeo@ucsd.edu",
	  "gender": "Female",
	  "ip_address": "154.60.113.22",
	  "departmentID": 1
	}), new Person({
	  "id": 26,
	  "first_name": "Ganny",
	  "last_name": "Tamburi",
	  "email": "gtamburip@bloglines.com",
	  "gender": "Male",
	  "ip_address": "47.217.51.140",
	  "departmentID": 2
	}), new Person({
	  "id": 27,
	  "first_name": "Konstanze",
	  "last_name": "Izakson",
	  "email": "kizaksonq@parallels.com",
	  "gender": "Female",
	  "ip_address": "92.34.60.32",
	  "departmentID": 2
	}), new Person({
	  "id": 28,
	  "first_name": "Nikola",
	  "last_name": "De Bruijne",
	  "email": "ndebruijner@github.io",
	  "gender": "Male",
	  "ip_address": "108.145.41.133",
	  "departmentID": 1
	}), new Person({
	  "id": 29,
	  "first_name": "Vivianna",
	  "last_name": "Bonnier",
	  "email": "vbonniers@ftc.gov",
	  "gender": "Female",
	  "ip_address": "31.251.250.158",
	  "departmentID": 1
	}), new Person({
	  "id": 30,
	  "first_name": "Helenka",
	  "last_name": "MacGillespie",
	  "email": "hmacgillespiet@wired.com",
	  "gender": "Female",
	  "ip_address": "70.242.193.58",
	  "departmentID": 1
	})
]