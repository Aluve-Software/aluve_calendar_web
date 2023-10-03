import { connect } from "react-redux";
import { Main as Component } from "./Main";

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export const Authentication = connect(mapStateToProps, mapDispatchToProps)(Component)