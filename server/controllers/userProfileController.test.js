const express = require("express");
const router = require("../router/router");
const supertest = require("supertest");
const { Users } = require("../models/users");
const sequelize = require("../models");

describe("/join endpoint", () => {
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
  });
  it("should not return the password in the response", async () => {
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

    expect(res.body.password).toBe(undefined);
  });
});

describe("/ endpoint for login", () => {
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
  it("should search the db for the email adress", async () => {
    await request.post("/join").send({
      firstName: "John",
      lastName: "Doe",
      city: "New York",
      ig: "johndoe",
      email: "johndoe@example.com",
      password: "abc",
      bio: "This is my bio",
    });

    await request.post("/").send({
      email: "johndoe@example.com",
      password: "abc",
    });
    const user = await Users.findOne({
      where: { email: "johndoe@example.com" },
    });

    expect(user.email).toBe("johndoe@example.com");
  });
  it("should return 403 if email does not match", async () => {
    await request.post("/join").send({
      firstName: "John",
      lastName: "Doe",
      city: "New York",
      ig: "johndoe",
      email: "johndoe@example.com",
      password: "abc",
      bio: "This is my bio",
    });

    await request.post("/").send({
      email: "wrong@example.com",
      password: "abc",
    });
    const user = await Users.findOne({
      where: { email: "wrong@example.com" },
    });
    expect(request.status).toBe(404);
    expect(request.body.message).toBe("Email not found");
  });
  // it("should return 404 if username is not found", async () => {
  //   const res = await request.post("/").send({
  //     email: "johndoe@example.com",
  //     password: "abc",
  //   });
  //   const user = await Users.findOne({
  //     where: { email: "wrong@example.com" },
  //   });
  //   const bizs = await Bizs.findOne({ where: { email: "wrong@example.com" } });

  //   expect(res.status).toBe(404);
  //   expect(res.body.status).toBe(404);
  //   expect(res.body.data).toBe(null);
  //   expect(res.body.error).toStrictEqual({});
  //   expect(res.body.message).toBe("Email not found");
  // });
});
