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

export type DescriptionFormProps = {
  initialData: {
    description: string;
  };
  courseId: string;
};
