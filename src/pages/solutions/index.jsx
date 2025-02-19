import SolutionsModule from "@/features/solutions";
import PublicLayout from "@/layout/PublicLayout";
import { Outlet } from "react-router";

const SolutionsPage = () => {
  return (
    <PublicLayout>
      <SolutionsModule />
      <Outlet />
    </PublicLayout>
  );
};

export default SolutionsPage;
