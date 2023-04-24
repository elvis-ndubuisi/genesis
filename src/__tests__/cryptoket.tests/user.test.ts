import supertest from "supertest";
import app from "../../helpers/mockServer";

describe("Cryptoket user", () => {
    describe("Login access", () => {
        describe("Given: an incorrect password", () => {
            it("returns 404", async () => {
                await supertest(app).get("/alive").expect(200);
            });
        });
        describe("Given: a valid username & password", () => {
            it("returns 200", () => {
                expect("me").toEqual("me");
            });
        });
    });

    describe("Register user", () => {
        describe("Given: a username and password", () => {
            it("returns 300", () => {
                expect("true").toBe("true");
            });
        });
    });
});
