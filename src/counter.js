import { connect } from "react-redux";
const mapStateToProps = (state) => {
    return {
        number: state.number
    };
}

export default connect(mapStateToProps)(Counter);


addOne = () => {
    this.props.dispatch({ type: 'ADD_ONE'});
} minusOne = () => {
    this.props.dispatch({ type: 'MINUS_ONE'});
}