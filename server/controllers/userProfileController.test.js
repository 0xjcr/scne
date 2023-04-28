const express = require("express");
const router = require("../router/router");
const supertest = require("supertest");
const { Users } = require("../models/users");
const sequelize = require("../models");

describe("Intergration Tests", () => {
  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  beforeAll(async () => {
    await sequelize.sync();
  });

  afterEach(async () => {
    try {
      await Users.destroy({ where: {}, truncate: true, cascade: true });
    } catch (error) {
      console.log(error);
    }
  });

  it("should save a user to the database", async () => {
    const user = {
      firstName: "John",
      lastName: "Doe",
      city: "New York",
      ig: "johndoe",
      email: "johndoe@example.com",
      password: "abc",
      bio: "This is my bio",
    };

    await request.post("/join").send(user);

    const result = await Users.findOne({ user });
    expect(result.firstName).toBe("John");
    expect(result.lastName).toEqual("Doe");
    expect(result.city).toEqual("New York");
    expect(result.ig).toEqual("johndoe");
    expect(result.email).toEqual("johndoe@example.com");
    expect(result.bio).toEqual("This is my bio");
  });
  it("should return 201 if user is created", async () => {
    const user = {
      firstName: "John",
      lastName: "Doe",
      city: "New York",
      ig: "johndoe",
      email: "johndoe@example.com",
      password: "abc",
      bio: "This is my bio",
    };

    const res = await request.post("/join").send(user);

    expect(res.status).toBe(201);
    //expect(res.body.error).toBe(false);
    expect(res.body.message).toBe(user);
  });
});
