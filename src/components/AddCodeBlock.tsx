const AddCodeBlock = () => {
  return (
    <form className="max-w-lg mx-auto mt-8">
      <div className="bg-gray-900 rounded-lg">
        <textarea
          id="codeInput"
          rows={10}
          cols={50}
          className="w-full p-4 text-white bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter your code here..."
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default AddCodeBlock;
