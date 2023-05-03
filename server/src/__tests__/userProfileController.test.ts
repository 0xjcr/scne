import express from "express";
import router from "../router/router";
import supertest from "supertest";
import { Users } from "../models/users";
import sequelize from "../models";
import { UserType } from "../Types/types";

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
    const user: UserType = {
      firstName: "Nobody",
      lastName: "CoolGuy",
      city: "The Moon",
      ig: "ig",
      email: "nobody@themoon.com",
      password: "password",
      bio: "this is my moon",
    };

    await request.post("/join").send(user);

    const result = (await (Users.findAll() as unknown)) as UserType[];
    expect(result[0].firstName).toBe("Nobody");
    expect(result[0].lastName).toBe("CoolGuy");
    expect(result[0].city).toBe("The Moon");
    expect(result[0].ig).toBe("ig");
    expect(result[0].email).toBe("nobody@themoon.com");
    expect(result[0].bio).toBe("this is my moon");
  });
  it("should return 201 if user is created", async () => {
    const user: UserType = {
      firstName: "Nobody",
      lastName: "CoolGuy",
      city: "The Moon",
      ig: "ig",
      email: "nobody@themoon.com",
      password: "password",
      bio: "this is my moon",
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

describe("update profile", () => {
  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  beforeAll(async () => {
    await sequelize.sync();

    const user: UserType = {
      firstName: "Nobody",
      lastName: "CoolGuy",
      city: "The Moon",
      ig: "ig",
      email: "nobody@themoon.com",
      password: "password",
      bio: "this is my moon",
    };

    await request.post("/join").send(user);
  });

  afterEach(async () => {
    try {
      await Users.destroy({ where: {}, truncate: true, cascade: true });
    } catch (error) {
      console.log(error);
    }
  });

  it("it should allow a user to update their profile", async () => {
    const user = (await Users.findOne({
      where: { firstName: "Nobody" },
    })) as unknown as UserType;

    const newProfile = {
      photo: "new_photo.jpg",
      bio: "new_bio",
      ig: "new_ig",
    };

    const res = await request.put(`/editprofile/${user.id}`).send(newProfile);

    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe("Nobody");
    expect(res.body.lastName).toBe("CoolGuy");
    expect(res.body.photo).toBe("new_photo.jpg");
    expect(res.body.ig).toBe("new_ig");
    expect(res.body.bio).toBe("new_bio");
  });

  it("should return 400 if profile id is invalid", async () => {
    const user = { id: 10000 };

    const newProfile = {
      photo: "this shouldn't work",
      bio: "this shouldn't work",
      ig: "this shouldn't work",
    };

    const res = await request.put(`/editprofile/${user.id}`).send(newProfile);

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });
});

describe("get User profile", () => {
  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  beforeAll(async () => {
    await sequelize.sync();

    const user: UserType = {
      firstName: "Name",
      lastName: "Sunshine",
      city: "Jupiter",
      ig: "ig",
      email: "sunshine@Jupiter.com",
      password: "password",
      bio: "this is my hairbrush",
    };

    await request.post("/join").send(user);
  });

  afterEach(async () => {
    try {
      await Users.destroy({ where: {}, truncate: true, cascade: true });
    } catch (error) {
      console.log(error);
    }
  });

  it("it should get the user profile", async () => {
    const user = (await Users.findOne({
      where: { firstName: "Name" },
    })) as unknown as UserType;

    const res = await request.get(`/profile/${user.id}`);

    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe("Name");
    expect(res.body.lastName).toBe("Sunshine");
  });

  it("should return error message if profile id is invalid", async () => {
    const res = await request.get(`/profile/abc`);

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });
});
