import {Dashboard, ContentCopy, People, Inventory, Analytics , AttachMoney,Receipt,Feed} from "@mui/icons-material";
import hero from "../src/Images/hero.png"
import panther from "../src/Images/panther.png"
import logo from "../src/Images/logo.png"



export const SidebarData = [
    {
        icon : Dashboard,
        heading : "Dashboard"
    },
    {
        icon : ContentCopy,
        heading : "Orders"
    },
    {
        icon : People,
        heading : "Customers"
    },
    {
        icon : Inventory,
        heading : "Products"
    },
    {
        icon : Analytics,
        heading : "Analytics"
    },
];


export const CardData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%) ",
            boxShadow: " 0px 10px 20px 0px #0093E9 ",
        },
        barValue: 75,
        value: "25,970",
        png:AttachMoney,
        series:[
            {
                name: "Sales",
                data: [31,40,28,51,42,100,118],
            },
        ],
    },

    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%) ",
            boxShadow: " 0px 10px 20px 0px #0093E9 ",
        },
        barValue: 89,
        value: "16,888",
        png:Receipt,
        series:[
            {
                name: "Revenue",
                data: [10,100,50,90,40,70,60],
            },
        ],
    },

    {
        title: "Expences",
        color: {
            backGround: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
            boxShadow: " 0px 10px 20px 0px #4158D0 ",
        },
        barValue: 60,
        value: "4,270",
        png:Feed,
        series:[
            {
                name: "Expences",
                data: [10,25,15,40,55,20,12],
            },
        ],
    },
]

export const UpdatesData = [
    {
        img: hero,
        name: "Abdul",
        noti: 'has ordered eclair',
        time: "15 minutes ago"
    },
    {
        img: panther,
        name: "Razak",
        noti: 'has recieved cupcake',
        time: "20 minutes ago"
    },{
        img: logo,
        name: "Saqib",
        noti: 'has cancelled order',
        time: "30 minutes ago"
    }
]