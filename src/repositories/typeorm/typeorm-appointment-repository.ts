import Appointments from "../../entities/appointments";
import { AppointmentRepository } from "../appointments-repositories";

export default class TypeOrmAppointmentRepository
  implements AppointmentRepository
{
  async create(appointment: Appointments): Promise<void> {
    //const appointmentRepository = AppDataSource.getRepository(Appointments);
    //await appointmentRepository.create(...)
}

async update(appointment: Appointments): Promise<void> {
      //const appointmentRepository = AppDataSource.getRepository(Appointments);
      //await appointmentRepository.update(...)
  }
}
