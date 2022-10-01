import Appointments from "../../entities/appointments";
import { AppointmentRepository } from "../appointments-repositories";

export default class PrismaAppointmentRepository
  implements AppointmentRepository
{
  async create(appointment: Appointments): Promise<void> {
    //await prismaClient.appointment.create(...)
  }

  async update(appointment: Appointments): Promise<void> {
    //await prismaClient.appointment.update(...)
  }
}
