import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

// [{quizId:"", quizName: "", attemptedCount:"adaw", score:"dwa", quitCount: "33"}]


export const postUserQuizStats = function (schema, request) {
    console.log("in stattts")
    const userId = requiresAuth.call(this, request);
    const { quizStat } = JSON.parse(request.requestBody)
    console.log(quizStat, userId)
    try {
        if (!userId) {
            new Response(
                404,
                {},
                {
                    errors: ["The email you entered is not Registered. Not Found error"],
                }
            );
        }
        let userStats = schema.users.findBy({ _id: userId }).quizStats;
        if (userStats.some((item) => item.quizId === quizStat.quizId)) {
            const matchStat = userStats.find((item) => item.quizId === quizStat.quizId)
            console.log("MATCHHH", matchStat)
            let attemptedVal = parseInt(matchStat?.attemptCount)
            userStats = userStats.filter((item) => item.quizId !== quizStat.quizId)
            userStats.push({
                ...quizStat,
                attemptCount: attemptedVal + 1
            })
            this.db.users.update({ _id: userId }, { quizStats: userStats });
            return new Response(200, {}, { quizStats: userStats });
        } else {
            userStats.push({
                ...quizStat,
                attemptCount: 1
            })
            this.db.users.update({ _id: userId }, { quizStats: userStats });
            return new Response(200, {}, { quizStats: userStats });
        }

    } catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        );
    }
}



export const getuserQuizStats = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    if (!userId) {
        new Response(
            404,
            {},
            {
                errors: ["The email you entered is not Registered. Not Found error"],
            }
        );
    }
    const userStats = schema.users.findBy({ _id: userId }).quizStats;
    return new Response(200, {}, { userStats: userStats });
}