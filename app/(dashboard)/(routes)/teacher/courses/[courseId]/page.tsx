const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  return <div>Course id: {params.courseId}</div>;
};

export default CourseIdPage;
