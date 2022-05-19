import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import { getQuizById, getAllQuizzesHandler } from "./backend/controllers/QuizController"
import { users } from "./backend/db/users";
import { quizzes } from "./backend/db/quizzes";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      user: Model,
      quizzes: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      quizzes.forEach((item) => {
        server.create("quiz", { ...item });
      });
      users.forEach((item) =>
        server.create("user", { ...item })
      );
    },

    routes() {
      this.namespace = "api";

      //auth routes
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      //quiz routes
      this.get("/quizzes", getAllQuizzesHandler.bind(this));
      this.get("/quiz/:quizId", getQuizById.bind(this));
    },
  });
}
