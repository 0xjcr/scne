const express = require("express");
const router = require("../router/router");
const supertest = require("supertest");
const { Users } = require("../models/users");
const { Bizs } = require("../models/businesses");
const sequelize = require("../models");
const { logout } = require("./userProfile");
const { updateProfileAlt } = require("./userProfile");
// const { getProfile } = require("./userProfile");

describe("/joinbiz endpoint", () => {
  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  beforeAll(async () => {
    await sequelize.sync();
  });

  afterEach(async () => {
    try {
      await Bizs.destroy({ where: {}, truncate: true, cascade: true });
    } catch (error) {
      console.log(error);
    }
  });

  it("should save a business to the database", async () => {
    const biz = {
      name: "Test Business",
      city: "Test City",
      postcode: "12345",
      address: "Test Address",
      phone: "123-456-7890",
      scene: "Test Scene",
      ig: "test_ig",
      email: "test@test.com",
      password: "testpassword",
      photo: "test.jpg",
      bio: "Test bio",
    };

    await request.post("/joinbiz").send(biz);

    const result = await Bizs.findAll();
    expect(result.name).toBe("Test Business");
    expect(result.city).toEqual("Test City");
    expect(result.postcode).toEqual("12345");
    expect(result.address).toEqual("Test Address");
    expect(result.phone).toEqual("123-456-7890");
    expect(result.scene).toEqual("Test Scene");
    expect(result.ig).toEqual("test_ig");
    expect(result.email).toEqual("test@test.com");
    expect(result.photo).toEqual("test.jpg");
    expect(result.bio).toEqual("Test bio");
  });
  it("should return 201 if business is created", async () => {
    const biz = {
      name: "Test Business",
      city: "Test City",
      postcode: "12345",
      address: "Test Address",
      phone: "123-456-7890",
      scene: "Test Scene",
      ig: "test_ig",
      email: "test@test.com",
      password: "testpassword",
      photo: "test.jpg",
      bio: "Test bio",
    };

    const res = await request.post("/join").send(biz);

    expect(res.status).toBe(201);
  });
  it("should not return the password in the response", async () => {
    const biz = {
      name: "Test Business",
      city: "Test City",
      postcode: "12345",
      address: "Test Address",
      phone: "123-456-7890",
      scene: "Test Scene",
      ig: "test_ig",
      email: "test@test.com",
      password: "testpassword",
      photo: "test.jpg",
      bio: "Test bio",
    };

    const res = await request.post("/join").send(biz);

    expect(res.body.password).toBe(undefined);
  });
});
