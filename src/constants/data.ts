import { Course } from "./type";

export const data: Course[] = [
  {
    id: 1,
    title: "UI/UX Designing",
    status: "Booked",
    schedule: new Date(new Date().getTime() - 42 * 60 * 1000),
    instructor: "Suriya R",
    details: "Additional details",
    action: "Join now",
    image:
      "https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTF0mNdJcF3jx2WBPIT95jd5tPuOG3XoJ0FiA2WRQDl8hWN3U~D-hevEfLBKEfpRBaJ2CM87LdEhCoRUbe9eSqOVTO13J9MHzW0cbcNhFZyAqwAr2A7X3L1R5t8WJGHRz9mDSyCMpd7xA9fXtBNBPq1bsKjUke6iQn-HIyEWzkeMwY5VeM0bLhH02lDF4moYzoCJORPjQqGrMcjP4lIfbWDD5ObMPGgf9YbjcShqI4fry85P7vKDJTvuHGuLe~Sv-gJHynUKJfPqwvMCOO0lJQPfNn-v3xLM56n5uc-higgmRIvZN4Oz-fYWkq8elAt~5xOtEe6iIT3p~izaz97J-A__",
  },
  {
    id: 2,
    title: "Graphic Designing",
    status: "Booked",
    schedule: new Date("2024-09-05T10:00:00"),
    instructor: "Priya Sweety",
    details: "Additional details",
    action: "Join",
    image:
      "https://s3-alpha-sig.figma.com/img/97fe/e250/e209bbaac8f168c05747eb2ab4fd609e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bHy3F9xhV8-PR8xZi2f0hsTB0OA6MRGVOHIKaq9fV0UwNFp-19zcJrej6MK6aaryAI9Yl9oVxtswXYGtf2llshiZMSyQQ8t7moGwl0ZyWts5Hr90W-JEN7OrafzUyEhNsvrhvyGJNnc2J7etY46Q2Cz318KtFAGvcn97YO95hU1sOnSw3vODeH07hqihMm2LtIIAJSBCE0n5U13zci5GYehreFd~6JGLeFhIvAih~3wcmMpUDJobk0mVvNVy-Zo5kSflPyLSpZANCjhujaQt~GYDuVOx23N0XBnSjjJ-89RJ-0PD5kTWkDPjKQOt0-3~tD4LLw7rok3TrdlpOYYjxQ__",
  },
  {
    id: 3,
    title: "Design Hierarchy",
    status: "Not Booked",
    schedule: new Date("2024-09-22T10:00:00"),
    instructor: "Leslie Alexander",
    details: "Additional details",
    action: "Book now",
    image:
      "https://s3-alpha-sig.figma.com/img/9fa4/9264/4538aeb8fa7ffd83195864e66d955fde?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGlQyt8gCiowyr17VJF478QuVkuZsW0ATvLIagKf-IKEUvEobnnLuYtFi-cwtvfYjDFVHdzTVmwWak790Vti5h9k7H8OC5yk1GXnrVIlTwHpSYN8zdePudDZ6v7~FYySKGr4xCjj8Cpm2wlc7rlxF2nTGyrnqiOSSVodcsjQ117mAog56g0lv0nlDlQahDa3QT9Fx4lSWBTBMZw5pjqaWpcZKJDzwYMjvYvzVWqrO28HJP-WhAjbXSfOFadrL~t1rFquzxwJLWMW43lOUv6wYTgqADhIClyX7wuQUHQYnuRmiTSPS1oV4kzI1906C2B3PcxWXRVECAJ6Jp1agZCM-Q__",
  },
  {
    id: 4,
    title: "Basics of Frontend",
    status: "Booked",
    schedule: new Date("2024-09-22T10:00:00"),
    instructor: "Courtney Henry",
    details: "Additional details",
    action: "Join",
    image:
      "https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTF0mNdJcF3jx2WBPIT95jd5tPuOG3XoJ0FiA2WRQDl8hWN3U~D-hevEfLBKEfpRBaJ2CM87LdEhCoRUbe9eSqOVTO13J9MHzW0cbcNhFZyAqwAr2A7X3L1R5t8WJGHRz9mDSyCMpd7xA9fXtBNBPq1bsKjUke6iQn-HIyEWzkeMwY5VeM0bLhH02lDF4moYzoCJORPjQqGrMcjP4lIfbWDD5ObMPGgf9YbjcShqI4fry85P7vKDJTvuHGuLe~Sv-gJHynUKJfPqwvMCOO0lJQPfNn-v3xLM56n5uc-higgmRIvZN4Oz-fYWkq8elAt~5xOtEe6iIT3p~izaz97J-A__",
  },
  {
    id: 5,
    title: "Graphic Designing",
    status: "Not Booked",
    schedule: new Date("2024-09-22T10:00:00"),
    instructor: "Jerome Bell",
    details: "Additional details",
    action: "Book now",
    image:
      "https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTF0mNdJcF3jx2WBPIT95jd5tPuOG3XoJ0FiA2WRQDl8hWN3U~D-hevEfLBKEfpRBaJ2CM87LdEhCoRUbe9eSqOVTO13J9MHzW0cbcNhFZyAqwAr2A7X3L1R5t8WJGHRz9mDSyCMpd7xA9fXtBNBPq1bsKjUke6iQn-HIyEWzkeMwY5VeM0bLhH02lDF4moYzoCJORPjQqGrMcjP4lIfbWDD5ObMPGgf9YbjcShqI4fry85P7vKDJTvuHGuLe~Sv-gJHynUKJfPqwvMCOO0lJQPfNn-v3xLM56n5uc-higgmRIvZN4Oz-fYWkq8elAt~5xOtEe6iIT3p~izaz97J-A__",
  },
  {
    id: 6,
    title: "Graphic Designing",
    status: "Not Booked",
    schedule: new Date("2024-09-22T10:00:00"),
    instructor: "Wade Warren",
    details: "Additional details",
    action: "Book now",
    image:
      "https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTF0mNdJcF3jx2WBPIT95jd5tPuOG3XoJ0FiA2WRQDl8hWN3U~D-hevEfLBKEfpRBaJ2CM87LdEhCoRUbe9eSqOVTO13J9MHzW0cbcNhFZyAqwAr2A7X3L1R5t8WJGHRz9mDSyCMpd7xA9fXtBNBPq1bsKjUke6iQn-HIyEWzkeMwY5VeM0bLhH02lDF4moYzoCJORPjQqGrMcjP4lIfbWDD5ObMPGgf9YbjcShqI4fry85P7vKDJTvuHGuLe~Sv-gJHynUKJfPqwvMCOO0lJQPfNn-v3xLM56n5uc-higgmRIvZN4Oz-fYWkq8elAt~5xOtEe6iIT3p~izaz97J-A__",
  },
  {
    id: 7,
    title: "Graphic Designing",
    status: "Not Booked",
    schedule: new Date("2024-09-22T10:00:00"),
    instructor: "Robert Fox",
    details: "Additional details",
    action: "Book now",
    image:
      "https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTF0mNdJcF3jx2WBPIT95jd5tPuOG3XoJ0FiA2WRQDl8hWN3U~D-hevEfLBKEfpRBaJ2CM87LdEhCoRUbe9eSqOVTO13J9MHzW0cbcNhFZyAqwAr2A7X3L1R5t8WJGHRz9mDSyCMpd7xA9fXtBNBPq1bsKjUke6iQn-HIyEWzkeMwY5VeM0bLhH02lDF4moYzoCJORPjQqGrMcjP4lIfbWDD5ObMPGgf9YbjcShqI4fry85P7vKDJTvuHGuLe~Sv-gJHynUKJfPqwvMCOO0lJQPfNn-v3xLM56n5uc-higgmRIvZN4Oz-fYWkq8elAt~5xOtEe6iIT3p~izaz97J-A__",
  },
  {
    id: 8,
    title: "Graphic Designing",
    status: "Not Booked",
    schedule: new Date("2024-09-22T10:00:00"),
    instructor: "Courtney Henry",
    details: "Additional details",
    action: "Book now",
    image:
      "https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTF0mNdJcF3jx2WBPIT95jd5tPuOG3XoJ0FiA2WRQDl8hWN3U~D-hevEfLBKEfpRBaJ2CM87LdEhCoRUbe9eSqOVTO13J9MHzW0cbcNhFZyAqwAr2A7X3L1R5t8WJGHRz9mDSyCMpd7xA9fXtBNBPq1bsKjUke6iQn-HIyEWzkeMwY5VeM0bLhH02lDF4moYzoCJORPjQqGrMcjP4lIfbWDD5ObMPGgf9YbjcShqI4fry85P7vKDJTvuHGuLe~Sv-gJHynUKJfPqwvMCOO0lJQPfNn-v3xLM56n5uc-higgmRIvZN4Oz-fYWkq8elAt~5xOtEe6iIT3p~izaz97J-A__",
  },
  {
    id: 9,
    title: "Graphic Designing",
    status: "Not Booked",
    schedule: new Date("2024-09-22T10:00:00"),
    instructor: "Eleanor Pena",
    details: "Additional details",
    action: "Book now",
    image:
      "https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTF0mNdJcF3jx2WBPIT95jd5tPuOG3XoJ0FiA2WRQDl8hWN3U~D-hevEfLBKEfpRBaJ2CM87LdEhCoRUbe9eSqOVTO13J9MHzW0cbcNhFZyAqwAr2A7X3L1R5t8WJGHRz9mDSyCMpd7xA9fXtBNBPq1bsKjUke6iQn-HIyEWzkeMwY5VeM0bLhH02lDF4moYzoCJORPjQqGrMcjP4lIfbWDD5ObMPGgf9YbjcShqI4fry85P7vKDJTvuHGuLe~Sv-gJHynUKJfPqwvMCOO0lJQPfNn-v3xLM56n5uc-higgmRIvZN4Oz-fYWkq8elAt~5xOtEe6iIT3p~izaz97J-A__",
  },
  {
    id: 10,
    title: "Graphic Designing",
    status: "Not Booked",
    schedule: new Date("2024-09-22T10:00:00"),
    instructor: "Guy Hawkins",
    details: "Additional details",
    action: "Book now",
    image:
      "https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTF0mNdJcF3jx2WBPIT95jd5tPuOG3XoJ0FiA2WRQDl8hWN3U~D-hevEfLBKEfpRBaJ2CM87LdEhCoRUbe9eSqOVTO13J9MHzW0cbcNhFZyAqwAr2A7X3L1R5t8WJGHRz9mDSyCMpd7xA9fXtBNBPq1bsKjUke6iQn-HIyEWzkeMwY5VeM0bLhH02lDF4moYzoCJORPjQqGrMcjP4lIfbWDD5ObMPGgf9YbjcShqI4fry85P7vKDJTvuHGuLe~Sv-gJHynUKJfPqwvMCOO0lJQPfNn-v3xLM56n5uc-higgmRIvZN4Oz-fYWkq8elAt~5xOtEe6iIT3p~izaz97J-A__",
  },
];

export const assignmentList = [
  {
    title: "Logo design for a Airline",
    deadline: "20/06/2024",
  },
  {
    title: "UIUX Design - Ecommerce Mobile app",
    deadline: "22/06/2024",
  },
  {
    title: "User Persona and User Journey",
    deadline: "24/06/2024",
  },
  {
    title: "Typefaces",
    deadline: "28/06/2024",
  },
];
