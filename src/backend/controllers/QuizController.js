import { Response } from "miragejs";

export const getQuizById = function (schema, request) {
    try {
        const quizId = request.params.quizId;
        const quiz = schema.quizzes.findBy({ _id: quizId }).attrs;
        return new Response(200, {}, { quiz });
    } catch (error) {
        console.log(error);
        return new Response(
            404,
            {},
            { errors: ["The quiz you request does not exist. Not Found error."] }
        );
    }
};

export const getAllQuizzesHandler = function () {
    return new Response(200, {}, { quizzes: this.db.quizzes });
};
