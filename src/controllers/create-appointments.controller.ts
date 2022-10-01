import { Request, Response } from "express";
import PrismaAppointmentRepository from "../repositories/prisma/prisma-appointment-repository";
import TypeOrmAppointmentRepository from "../repositories/typeorm/typeorm-appointment-repository";
import CreateAppointmentUseCase from "../use-cases/create-appointments.usecase";

export class CreateAppointmentsController {
  async handle(request: Request, response: Response) {
    const { customer, endsAt, startsAt } = request.body;

    // const typeOrmAppointmentRepository = new TypeOrmAppointmentRepository();
    const prismaAppointmentRepository = new PrismaAppointmentRepository();

    /**
     * nesse momento é que você qual dependencia passar, nesse caso foi 
     * escolhido o respositorio que implementa o prisma
     */
    const createAppointmentUseCase = new CreateAppointmentUseCase(
      prismaAppointmentRepository
    );

    createAppointmentUseCase.execute({
      customer,
      endsAt,
      startsAt,
    });
  }
}
