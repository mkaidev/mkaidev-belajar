import { CourseSidebarProps } from "@/types";
import { CourseMobileSidebar } from "./CourseMobileSidebar";
import NavbarRoutes from "@/components/shared/NavbarRoutes";

export const CourseNavbar = ({ course, progressCount }: CourseSidebarProps) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <CourseMobileSidebar course={course} progressCount={progressCount} />
      <NavbarRoutes />
    </div>
  );
};
