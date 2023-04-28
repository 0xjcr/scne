const express = require("express");
const router = require("../router/router");
const supertest = require("supertest");
const { Users } = require("../models/users");
const { Bizs } = require("../models/businesses");
const sequelize = require("../models");
const { logout } = require("./userProfile");
const { updateProfileAlt } = require("./userProfile");
// const { getProfile } = require("./userProfile");
const { getAllProfiles } = require("./userProfile");

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
  it("should search the db for the email address", async () => {
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
  it("should return 400 if email is not found", async () => {
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
    await Users.findOne({
      where: { email: "wrong@example.com" },
    });

    await Bizs.findOne({
      where: { email: "wrong@example.com" },
    });
    expect(request.status).toBe(400);
    expect(request.body.message).toBe("Email not found");
  });
});

describe("/logout", () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      session: {
        destroy: jest.fn(),
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should respond with 200 and message "Logged out successfully" if session destroy succeeds', () => {
    logout(req, res);
    expect(req.session.destroy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Logged out successfully",
    });
  });

  it('should respond with 500 and message "Error logging out" if session destroy fails', () => {
    const error = new Error("test error");
    req.session.destroy.mockImplementationOnce((callback) => callback(error));

    logout(req, res);

    expect(req.session.destroy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Error logging out" });
  });
});

describe("updateProfile", () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      params: { id: 1 },
      body: {
        photo: "test-photo.jpg",
        bio: "test bio",
        ig: "test-ig",
        member: true,
        scene0: "test scene0",
        scene1: "test scene1",
        scene2: "test scene2",
        endorsed: true,
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should respond with status 400 and an error message if an error occurs", async () => {
    jest.spyOn(Users, "findByPk").mockImplementationOnce(() => {
      throw new Error("Test error");
    });

    await updateProfileAlt(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "Test error" });
  });
});
