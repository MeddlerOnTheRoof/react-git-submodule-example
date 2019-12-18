import * as constants from './constants';

export const loadWidgets = widgets => {
    return {
        type: constants.LOAD_WIDGETS,
        payload: widgets
    };
};

export const loadWidgetCategories = widgetCategories => {
    return {
        type: constants.LOAD_WIDGET_CATEGORIES,
        payload: widgetCategories
    }
};


export const addWidget = widget => {
    return {
        type: constants.CREATE_WIDGET,
        payload: widget
    };
};

export const updateWidget = updatedWidget => {
    return {
        type: constants.UPDATE_WIDGET,
        payload: updatedWidget
    };
};

export const deleteWidget = id => {
    return {
        type: constants.DELETE_WIDGET,
        payload: id
    };
};
