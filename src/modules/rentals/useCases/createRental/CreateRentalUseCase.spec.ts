import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let createRentalUseCase: CreateRentalUseCase;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
  });

  it("Should be able to create a new rental", async () => {
    const rental = await createRentalUseCase.execute({
      car_id: "12345",
      user_id: "121212",
      expected_return_date: new Date()
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("Should not be able to create a new rental if there's another open rental to the same user", () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "121212",
        car_id: "12345",
        expected_return_date: new Date()
      });
      await createRentalUseCase.execute({
        user_id: "121212",
        car_id: "12346",
        expected_return_date: new Date()
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to create a new rental if there's another open rental to the same car", () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "121212",
        car_id: "12345",
        expected_return_date: new Date()
      });
      await createRentalUseCase.execute({
        user_id: "121213",
        car_id: "12345",
        expected_return_date: new Date()
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
