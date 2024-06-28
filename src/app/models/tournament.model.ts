export interface TournamentModel {
  id: number;
  name: string;
  initialDate: string;
  endDate: string;
  categoryId: number;
  typeId: number;
  prize: number;
  inscription: number;
  arbitration: number;
  firstPlacePercentage: number;
  secondPlacePercentage: number;
  thirdPlacePercentage: number;
  fourthPlaceCent: boolean;
  numberOfParticipants: number;
}
