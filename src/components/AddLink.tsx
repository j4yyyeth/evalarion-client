const AddLink = () => {
  // value and onChange -->
  return (
    <form>
      <input type="url" name="url" placeholder="Enter URL" required></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddLink;
