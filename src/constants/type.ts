export type Course = {
  id: number;
  title: string;
  status: "Booked" | "Not Booked";
  schedule: Date;
  instructor: string;
  details: string;
  action: string;
  image: string;
};

export interface ContextState {
  courses: Course[];
  handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBooking: (id: number) => void;
  page: number;
  noOfItem: number;
  noOfPage: number;
  setNoOfItem: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
