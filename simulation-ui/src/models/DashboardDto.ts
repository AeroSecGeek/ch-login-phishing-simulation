import { LoggedAttemptDto } from "./LoggedAttemptDto";

export interface DashboardDto {
  chLogin: LoggedAttemptDto[];
  otherAttempts: number;
  numberOfVisits: number;
}
