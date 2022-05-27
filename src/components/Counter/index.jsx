import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import translations from './translations.json';

const Counter = (props) => {
  const { count, handleIncrement, hanldeDecrement, changeStep, step, lang } = props;
  const handleStep = ({ target: { value } }) => changeStep(Number(value));

  const { countText, plusBtn, minusBtn } = translations[lang.lang];

  return (
    <>
      <p>{countText} {count}</p>
      <input type="number" onChange={handleStep} value={step} />
      <button onClick={handleIncrement}>{plusBtn}</button>
      <button onClick={hanldeDecrement}>{minusBtn}</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
    step: state.step,
    lang: state.lang,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch(actionCreators.increment()),
    hanldeDecrement: () => dispatch(actionCreators.decrement()),
    changeStep: (newStep) => dispatch(actionCreators.setStep(newStep)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
