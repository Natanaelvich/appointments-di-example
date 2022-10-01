import Appointments from "../entities/appointments";

export interface AppointmentRepository {
  create(appointment: Appointments): Promise<void>;
  update(appointment: Appointments): Promise<void>;
}
