import { SET_FORM_INITIAL_VALUE, SetFormValuePayload } from "../../../actions";
import { IAction } from "../../../interfaces";

export function initialValueReduer(state: boolean|undefined, action:IAction<unknown>){
  switch (action.type) {
    case SET_FORM_INITIAL_VALUE:
      return (action.payload as SetFormValuePayload).value
  }
  return state
}