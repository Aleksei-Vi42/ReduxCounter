import {connect} from 'react-redux'
import Counter from './counter'

//сопоставление состояния Redux cо свойствами компонента

function mapStateToProps(state) {
	return {
		countValue: state.count
	}
}
//действие 
let increaseAction = {type: 'increase'}
let decreaseAction = {type: 'decrease'}
//сопоставление действий Redux со свойствами компонента
function mapDispatchToProps(dispatch) {
	return {
		increaseCount: function() {
			return dispatch(increaseAction)
		},
	    decreaseCount: function() {
	    	return dispatch(decreaseAction)
	    }
	}
}
//HOC компонент
let connectedComponent = connect(
	mapStateToProps,
	mapDispatchToProps
	) (Counter)
export default connectedComponent
