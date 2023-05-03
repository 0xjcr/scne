// const express = require("express");
// const router = require("../../dist/router/router");
// const supertest = require("supertest");
// const { Bizs } = require("../models/businesses");
// const sequelize = require("../models");

import express from "express";
import router from "../router/router";
import supertest from "supertest";
import { Bizs } from "../models/businesses";
import sequelize from "../models";
import { BizType } from "../Types/types";

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

  it("should pass", () => {
    expect(true).toBe(true);
  });
  it("should save a business to the database", async () => {
    const biz: BizType = {
      name: "Test Business",
      city: "Test City",
      address: "Test Address",
      phone: "123-456-7890",
      reviewCount: "17",
      upvotes: "3",
      ig: "test_ig",
      email: "test@test.com",
      password: "password",
      scene: "Test Scene",
      bio: "Test bio",
      photo: "test.jpg",
    };

    await request.post("/joinbiz").send(biz);

    const result = (await (Bizs.findAll() as unknown)) as BizType[];
    expect(result[0].name).toBe("Test Business");
    expect(result[0].city).toEqual("Test City");
    expect(result[0].address).toEqual("Test Address");
    expect(result[0].phone).toEqual("123-456-7890");
    // expect(result[0].reviewCount).toEqual("17");
    expect(result[0].upvotes).toEqual(3);
    expect(result[0].ig).toEqual("test_ig");
    expect(result[0].email).toEqual("test@test.com");
    expect(result[0].scene).toEqual("Test Scene");
    expect(result[0].bio).toEqual("Test bio");
    expect(result[0].photo).toEqual("test.jpg");
  });
  // it("should return 201 if business is created", async () => {
  //   const biz = {
  //     name: "Test Business",
  //     city: "Test City",
  //     postcode: "12345",
  //     address: "Test Address",
  //     phone: "123-456-7890",
  //     scene: "Test Scene",
  //     ig: "test_ig",
  //     email: "test@test.com",
  //     password: "testpassword",
  //     photo: "test.jpg",
  //     bio: "Test bio",
  //   };

  //   const res = await request.post("/join").send(biz);

  //   expect(res.status).toBe(201);
  // });
  // it("should not return the password in the response", async () => {
  //   const biz = {
  //     name: "Test Business",
  //     city: "Test City",
  //     postcode: "12345",
  //     address: "Test Address",
  //     phone: "123-456-7890",
  //     scene: "Test Scene",
  //     ig: "test_ig",
  //     email: "test@test.com",
  //     password: "testpassword",
  //     photo: "test.jpg",
  //     bio: "Test bio",
  //   };

  //   const res = await request.post("/join").send(biz);

  //   expect(res.body.password).toBe(undefined);
  // });
});
