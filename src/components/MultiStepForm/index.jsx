import StepsController from "./StepsController";
const MultiStepForm = ({ id, ariaLabelledBy, handleMemeData }) => {
  return (
    <form id={id} aria-labelledby={ariaLabelledBy} className="flex">
      <StepsController handleMemeData={handleMemeData} />
    </form>
  );
};
export default MultiStepForm;
