import supertest from "supertest";
import app from "../helpers/mockServer";

describe("Server", () => {
    describe("Given health check route", () => {
        it("returns 200", async () => {
            const { statusCode } = await supertest(app).get("/alive");
            expect(statusCode).toBe(200);
        });
    });

    describe("Given undefined get route", () => {
        it("return 404", async () => {
            const { statusCode, text } = await supertest(app).get("/undefined-route");
            expect(statusCode).toBe(400);
            expect(text).toBe("resource not found");
        });
    });
});
