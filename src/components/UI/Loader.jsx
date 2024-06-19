import loader from "../../assets/pulse.svg";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={loader}
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;
