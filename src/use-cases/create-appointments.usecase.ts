import Appointments, { AppointmentProps } from "../entities/appointments";
import { AppointmentRepository } from "../repositories/appointments-repositories";

type CreateAppointmentRequest = AppointmentProps;

type CreateAppointmentResponse = Appointments;

class CreateAppointmentUseCase {
  constructor(private appointmentsRepository: AppointmentRepository) {}

  async execute({
    customer,
    endsAt,
    startsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const appointment = new Appointments({ customer, endsAt, startsAt });

    await this.appointmentsRepository.create(appointment);

    return appointment;
  }
}

export default CreateAppointmentUseCase;
