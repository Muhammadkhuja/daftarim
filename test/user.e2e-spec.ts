import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import * as request from "supertest";

describe("User (e2e)", () => {
  let app: INestApplication;
  let token: String;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post("/auth/singin_user")
      .send({
        email: "rustamov@example.com",
        password: "qwe123",
      });
    token = response.body.token;
    console.log(token);
  });
  it("/user (GET) --> 200 OK", () => {
    return request(app.getHttpServer())
      .get("/user")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
  })
  it(`/user (GET) --> 401 "Unauthoruzed", error`, ()=>{
    return request(app.getHttpServer())
    .get("/user")
    .expect("Content-Type", /json/)
    .expect(401)
  })
  it("auth/singup_user (POST) --> 201", async () => {
    return request(app.getHttpServer()).post("/auth/singup_user").send({
      first_name: "Javlon1",
      last_name: "Rustamov1",
      email: "rustamov1@example.com",
      hashed_psaaword: "qwe1231",
      photo: "javlon.jpg",
      activation_link:
        "1f4e2c7e-2f5c-4bfa-9bda-1273fd3bfb7e",
    })
    .expect("Content-Type", /json/)
    .expect(201)
    .expect({
        messgae: "Bunday email foydalanuvchhis bor",
        error: "Bad request"
    })
  })

  afterAll(async ()=>{
    await app.close()
  })
});
