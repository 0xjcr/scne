import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Community from "../components/Community";
import { Provider } from "react-redux";
import { store } from "../redux/store";

test("renders user profiles with correct first name and sorted by endorsements", () => {
  const scene = "coffee";
  const profiles = [
    {
      id: 1,
      firstName: "Rosie",
      lastName: "Dyvig",
      city: "Barcelona",
      member: null,
      endorsed: null,
      reviewCount: null,
      press: null,
      ig: null,
      email: "rosie@rosie.com",
      password: "$2b$10$CGt0BvCMxGl/W3sXsNvJPOEWfVn0gDBJLq2Oxh9OitRwCMeHXd/wi",
      bio: null,
      photo: null,
      scene0: "coffee",
      scene1: null,
      scene2: null,
      createdAt: "2023-04-27T06:50:53.958Z",
      updatedAt: "2023-04-27T06:50:53.958Z",
    },
    {
      id: 2,
      firstName: "Logan",
      lastName: "Smith",
      city: "Barcelona",
      member: "4Marks",
      endorsed: null,
      reviewCount: null,
      press: null,
      ig: "@cooluser1",
      email: "ilovescne@scne.com",
      password: "$2b$10$.hRNC64GgHEo/cnuRTAI/OVe9nD4QR/cWCW.CATfigHmW6fsWv7Eq",
      bio: "Hey guys. Always glad to connect and discuss opportunities,",
      photo:
        "http://res.cloudinary.com/dqfsyl5rv/image/upload/v1682330446/11_mdach1.jpg",
      scene0: "coffee",
      scene1: null,
      scene2: null,
      createdAt: "2023-04-22T17:29:36.562Z",
      updatedAt: "2023-04-22T17:46:33.588Z",
    },
    {
      id: 3,
      firstName: "Ava",
      lastName: "Anderson",
      city: "Barcelona",
      member: "4Marks",
      endorsed: null,
      reviewCount: null,
      press: null,
      ig: "@greatuser2",
      email: "ilovescne@scne.com",
      password: "$2b$10$Zk8A5ZQvx3gqy7DylayIae70s6ntjwKAWwZubIEbo0a48kT17ccxa",
      bio: "Hiii. Passionate about coffee and yoga. Feel free to hit me up to grab a coffee.",
      photo:
        "http://res.cloudinary.com/dqfsyl5rv/image/upload/v1682185527/download-3_lyn0ag.jpg",
      scene0: "coffee",
      scene1: null,
      scene2: null,
      createdAt: "2023-04-22T17:40:58.124Z",
      updatedAt: "2023-04-22T17:47:58.767Z",
    },
    {
      id: 5,
      firstName: "Andy",
      lastName: "Sanders",
      city: "Barcelona",
      member: "4Marks",
      endorsed: null,
      reviewCount: null,
      press: null,
      ig: "@userrr4",
      email: "ilovescne@scne.com",
      password: "$2b$10$ocAicTZEKtzB4nIOpHayeOLpi25dyrLWxXNyuRdLcXHbOgSIAAhrq",
      bio: "Hiiii. Love eating well. Keep me in the loop about events!",
      photo:
        "http://res.cloudinary.com/dqfsyl5rv/image/upload/v1682185738/download-4_jedha2.jpg",
      scene0: "coffee",
      scene1: null,
      scene2: null,
      createdAt: "2023-04-22T17:54:45.896Z",
      updatedAt: "2023-04-22T18:02:14.183Z",
    },
    {
      id: 6,
      firstName: "Logan",
      lastName: "Smith",
      city: "Barcelona",
      member: "Drip",
      endorsed: null,
      reviewCount: null,
      press: null,
      ig: "@cooluser5",
      email: "ilovescne@scne.com",
      password: "$2b$10$0Oy2jZYDUYUBEyJQ1GmE.eeQOjF0oYc6iFhA1sAIyGlzcLHddESEG",
      bio: "hi. hmu if you should feel ",
      photo:
        "http://res.cloudinary.com/dqfsyl5rv/image/upload/v1682186492/guy1_fkil1m.jpg",
      scene0: "coffee",
      scene1: null,
      scene2: null,
      createdAt: "2023-04-22T17:54:45.896Z",
      updatedAt: "2023-04-22T18:03:46.465Z",
    },
    {
      id: 4,
      firstName: "Alex",
      lastName: "Jones",
      city: "Barcelona",
      member: "4Marks",
      endorsed: null,
      reviewCount: null,
      press: null,
      ig: "@awsomeguy",
      email: "ilovescne@scne.com",
      password: "$2b$10$5AQLcEE1leI2ZfwHA8ygR.EvKu7vdRX3mOSrMyLWIAv7Jd2pSP272",
      bio: "Creator of 4Marks. Love dogs and surfing. 🤙",
      photo:
        "http://res.cloudinary.com/dqfsyl5rv/image/upload/v1682185631/download_esjvau.jpg",
      scene0: "coffee",
      scene1: null,
      scene2: null,
      createdAt: "2023-04-22T17:40:58.124Z",
      updatedAt: "2023-04-22T17:50:01.984Z",
    },
  ];

  jest.mock("../api-service", () => ({
    getAllProfiles: jest.fn(() => Promise.resolve(profiles)),
  }));

  const { getByRole } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Community scene={scene} profiles={profiles} />
      </MemoryRouter>
    </Provider>
  );

  getByRole("img", { name: /andy/i });
});
