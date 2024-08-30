import { Menu } from "lucide-react";

import { CourseSidebarProps } from "@/types";
import { CourseSidebar } from "./CourseSidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const CourseMobileSidebar = ({
  course,
  progressCount,
}: CourseSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white w-72">
        <CourseSidebar course={course} progressCount={progressCount} />
      </SheetContent>
    </Sheet>
  );
};
