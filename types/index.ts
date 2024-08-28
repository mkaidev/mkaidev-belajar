import { Course } from "@prisma/client";
import { LucideIcon } from "lucide-react";

export type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export type TitleFormProps = {
  initialData: {
    title: string;
  };
  courseId: string;
};

export type CoreFormProps = {
  initialData: Course;
  courseId: string;
};

export type CategoryFormProps = {
  initialData: Course;
  courseId: string;
  options: {
    label: string;
    value: string;
  }[];
};
