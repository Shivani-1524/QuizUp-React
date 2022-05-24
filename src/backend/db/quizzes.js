
import GenshinImg from '../../Assets/images/Genshin-Impact-Logo.jfif'
import ValorantImg from '../../Assets/images/valorant.png'
import MinecraftImg from '../../Assets/images/minecraft.jpg'
import { v4 as uuid } from 'uuid';

export const quizzes = [{
    _id: uuid(),
    quizName: "Riot Games: Valorant Quiz",
    quizImg: ValorantImg,
    questions: [
        {
            questionNumber: 1,
            question: "Who is the valorant agent thats also known as Sabine?",
            options: [
                "Reyna",
                "Viper",
                "Sage"
            ],
        },
        {
            questionNumber: 2,
            question: "Which Agents ultimate is spectre wthout the recoil?",
            options: [
                "Neon",
                "Sova",
                "Jett",
            ],
        },
        {
            questionNumber: 3,
            question: "What does Viper Not say ?",
            options: [
                "Don’t Get In My Way",
                "Welcome To My Zone",
                "They call me a monster. Shall I prove them right?"
            ],
        },
        {
            questionNumber: 4,
            question: "Which Signature Ability lasts the longest?",
            options: [
                "Omen - Dark Cover",
                "Brimstone - Sky Smoke",
                "Phoenix - Hot Hands",
            ],
        },
        {
            questionNumber: 5,
            question: "How much damage does each blast of Sova’s Ultimate ?",
            options: [
                100,
                120,
                80
            ],
        },
    ],
    quizAnswer: [1, 0, 1, 0, 2]
}, {
    _id: uuid(),
    quizName: "Mihoyo: Genshin Quiz",
    quizImg: GenshinImg,
    questions: [
        {
            questionNumber: 1,
            question: "How many Fatui Harbingers are there?",
            options: [
                8, 7, 11
            ],
        },
        {
            questionNumber: 2,
            question: " What is the Japanese name of Ningguang?",
            options: [
                "Gyoukou",
                "Kouhoy",
                "Waifu",
            ],
        },
        {
            questionNumber: 3,
            question: "What is the name of the Sea Monster that Beidou defeated?",
            options: [
                "Haishan",
                "Rumple",
                "Monstr"
            ],
        },
        {
            questionNumber: 4,
            question: " Who is Khazua's friend who lost to Kujou Sara?",
            options: [
                "Momio",
                "Tomo",
                "Grux",
            ],
        },
        {
            questionNumber: 5,
            question: "What is the name of the current Grand Master of the Knights of Favonius?",
            options: [
                "Varka",
                "Kraya",
                "Jean"
            ],
        },
    ],
    quizAnswer: [2, 0, 0, 1, 0]
},
{
    _id: uuid(),
    quizName: "Mojang: Minecraft",
    quizImg: MinecraftImg,
    questions: [
        {
            questionNumber: 1,
            question: "Which equipment must you utilize to mine stone and ores in 'Minecraft'?",
            options: [
                'Pickaxe', 'Shovel', 'Axe'
            ],
        },
        {
            questionNumber: 2,
            question: "How many slabs of iron ore are used to make one iron ingot?",
            options: [
                "One",
                "Three",
                "Six"
            ],
        },
        {
            questionNumber: 3,
            question: "Who is the Endermen's commander?",
            options: [
                "Captain Deren",
                "Flame Dragons",
                "Ender Dragon"
            ],
        },
        {
            questionNumber: 4,
            question: "What ore can you construct complex machines with?",
            options: [
                "Emerald",
                "Redstone",
                "Lapace Lazuli",
            ],
        },
        {
            questionNumber: 4,
            question: "What vegetable can you wield to make a night vision mixture?",
            options: [
                "Golden Beetroot",
                "Golden Apple",
                "Golden Carrot",
            ],
        },
    ],
    quizAnswer: [0, 0, 2, 1, 2]
},
]