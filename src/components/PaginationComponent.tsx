import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContextState } from "@/constants/type";
import { CourseContext } from "@/context/CourseContext";
import { useContext } from "react";

const PaginationComponent = () => {
  const { setNoOfItem, setPage, noOfPage } = useContext(
    CourseContext
  ) as ContextState;
  return (
    <div className="inline-flex my-3">
      <Pagination className="justify-start">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer "
              onClick={() =>
                setPage((prev) => (prev - 1 > 0 ? prev - 1 : prev))
              }
            />
          </PaginationItem>
          {[...Array(noOfPage)].map((_, index) => (
            <PaginationItem key={index} onClick={() => setPage(index + 1)}>
              <PaginationLink isActive>{index + 1}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              onClick={() =>
                setPage((prev) => (prev + 1 <= noOfPage ? prev + 1 : prev))
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Select onValueChange={(val) => setNoOfItem(Number(val))}>
        <SelectTrigger className="w-[70px] outline-none">
          <SelectValue placeholder="10" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PaginationComponent;
