import {
  Attachment,
  Category,
  Chapter,
  Course,
  MuxData,
  UserProgress
} from "@prisma/client";
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

export type ChapterTitleFormProps = {
  initialData: {
    title: string;
  };
  courseId: string;
  chapterId: string;
}

export type CoreFormProps = {
  initialData: Course;
  courseId: string;
};

export type CoreChapterFormProps = {
  initialData: Chapter;
  courseId: string;
  chapterId: string;
}

export type CategoryFormProps = {
  initialData: Course;
  courseId: string;
  options: {
    label: string;
    value: string;
  }[];
};

export type AttachmentFormProps = {
  initialData: Course & { attachments: Attachment[] };
  courseId: string;
};

export type ChaptersFormProps = {
  initialData: Course & { chapters: Chapter[] };
  courseId: string;
};

export type ChaptersListProps = {
  items: Chapter[];
  onReorder: (
    updateData: {
      id: string;
      position: number;
    }[]
  ) => void;
  onEdit: (id: string) => void;
};

export type ChapterVideoFormProps = {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
}

export type CategoriesProps = {
  items: Category[];
}

export type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

export type CourseSidebarProps = {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}
