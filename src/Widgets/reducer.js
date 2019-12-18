import * as constants from './constants';

const initialState = {
    initialized: false,
    widgets: [],
    widgetCategories: []
};

export default (state = initialState, action) => {
    let index;
    let widgets;
    switch (action.type) {
        case constants.LOAD_WIDGETS:
            return { ...state, widgets: action.payload, initialized: true };
        case constants.LOAD_WIDGET_CATEGORIES:
            return { ...state, widgetCategories: action.payload };

        case constants.CREATE_WIDGET:
            widgets = state.widgets.slice();

            action.payload.id = state.widgets.length + 1;

            widgets.push(action.payload);

            return { ...state, widgets: widgets };
        case constants.UPDATE_WIDGET:
            index = state.widgets.findIndex(w => w.id === action.payload.id);

            widgets = Object.assign([], state.widgets, { [index]: action.payload });

            debugger;

            return { ...state, widgets };
        case constants.DELETE_WIDGET:
            index = state.widgets.findIndex(w => w.id === action.payload);

            // non-destructive remove widget with matching id from array
            // note that splice does not error if given index out of bounds
            return { ...state, widgets: [...state.widgets.slice(index, 1), ...state.widgets.slice(index + 1)] };
        default:
            return state;
    }
};