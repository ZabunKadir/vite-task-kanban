import CustomLink from "@/components/common/customLink";

const SolutionsModule = () => {
  return (
    <section className="min-h-[calc(100vh-105px)] p-4">
      Solution Page
      <CustomLink
        children={"Example Solution"}
        to={"/solutions/example-solution"}
      />
    </section>
  );
};

export default SolutionsModule;
