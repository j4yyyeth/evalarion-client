import SelectLanguagesBtn from "./selectLanguagesBtn/SelectLanguagesBtn";

const AddProject = () => {
  return (
    <>
      <form>
        <input
          type="text"
          name="projectName"
          placeholder="Enter Project Name ..."
          required
        ></input>
      </form>
      <SelectLanguagesBtn endpoint="add-project-test" />
    </>
  );
};

export default AddProject;
