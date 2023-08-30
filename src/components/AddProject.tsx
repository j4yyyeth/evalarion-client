import SelectLanguages from "./selectLanguagesBtn/SelectLanguages";

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
      <SelectLanguages endpoint="add-project-test" />
    </>
  );
};

export default AddProject;
