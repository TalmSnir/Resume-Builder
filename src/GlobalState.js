import React, { createContext, useReducer } from 'react';
const initialState = {
  formToShow: 'contactInformation',
  selectedSections: ['about me', 'contact information', 'skills', 'experience'],
  unSelectedSections: ['avatar image', 'projects', 'education', 'social links'],
  formFields: {
    contactInformation: {
      firstName: 'Jon',
      lastName: 'last name',
      title: 'title',
      email: 'someemail@gmail.com',
      phoneNumber: '+972050000000',
      address: '8 Street St tel aviv',
    },
    aboutMe: { aboutMe: 'some text' },
    education: {
      institution: 'tel aviv uv',
      years: '2000-2001',
      degree: 'science',
    },
    avatarImage: { imageSrc: './ProfileIcon.svg', shape: 'round' },
    projects: {
      projectName: 'project name',
      description: 'some text',
      why: 'because',
      tools: 'python',
      linkToLiveView: 'some link',
      linkToSourceCode: 'some link',
    },
    skills: { programingLanguages: 'js' },
    socialLinks: { linkedin: 'some url' },
  },
};
const ACTIONS = {
  HANDLE_CHANGED_INPUT: 'handleChangeInput',
  HANDLE_ON_SUBMIT: 'handleOnSubmit',
  HANDLE_ADD_SELECTION_TO_SELECTED: 'handleAddSelectionToSelected',
  HANDLE_ADD_SELECTION_TO_UNSELECTED: 'handleAddSelectionToUnSelected',
  HANDLE_REMOVE_SELECTION_FROM_SELECTED: 'handleRemoveSelectionFromSelected',
  HANDLE_REMOVE_SELECTION_FROM_UNSELECTED:
    'handleRemoveSelectionFromUnSelected',
  HANDLE_EDIT_SELECTION: 'handleEditSelection',
  HANDLE_CHANGED_SHAPE_IMAGE: 'handleChangedShapeImage',
  HANDLE_UPLOAD_IMAGE: 'handleUploadImage',
  HANDLE_DRAG_SWITCH: 'handleDragSwitch',
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.HANDLE_CHANGED_INPUT:
      const { name, value, sectionName } = action.payload;
      return {
        ...state,
        formFields: {
          ...state.formFields,
          [sectionName]: {
            ...state.formFields[sectionName],
            [name]: value,
          },
        },
      };
    case ACTIONS.HANDLE_REMOVE_SELECTION_FROM_SELECTED: {
      const newSelections = state.selectedSections.filter(
        item => item !== action.payload
      );
      return { ...state, selectedSections: newSelections };
    }

    case ACTIONS.HANDLE_REMOVE_SELECTION_FROM_UNSELECTED: {
      const newSelections = state.unSelectedSections.filter(
        item => item !== action.payload
      );
      return { ...state, unSelectedSections: newSelections };
    }

    case ACTIONS.HANDLE_ADD_SELECTION_TO_UNSELECTED: {
      const newSelections = [...state.unSelectedSections, action.payload];
      return { ...state, unSelectedSections: newSelections };
    }

    case ACTIONS.HANDLE_ADD_SELECTION_TO_SELECTED: {
      const newSelections = [...state.selectedSections, action.payload];
      return { ...state, selectedSections: newSelections };
    }
    case ACTIONS.HANDLE_EDIT_SELECTION:
      return { ...state, formToShow: action.payload };
    case ACTIONS.HANDLE_UPLOAD_IMAGE:
      return {
        ...state,
        formFields: {
          ...state.formFields,
          avatarImage: {
            ...state.formFields.avatarImage,
            imageSrc: action.payload,
          },
        },
      };
    case ACTIONS.HANDLE_CHANGED_SHAPE_IMAGE:
      return {
        ...state,
        formFields: {
          ...state.formFields,
          avatarImage: {
            ...state.formFields.avatarImage,
            shape: action.payload,
          },
        },
      };
    case ACTIONS.HANDLE_DRAG_SWITCH:
      const newSelectedSections = [...state.selectedSections];
      const draggedItem = newSelectedSections[action.payload.draggedId];
      newSelectedSections[action.payload.draggedId] =
        newSelectedSections[action.payload.draggedOverId];
      newSelectedSections[action.payload.draggedOverId] = draggedItem;

      return { ...state, selectedSections: newSelectedSections };
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);
export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Actions
  function handleChangeInput({ name, value }, sectionName) {
    dispatch({
      type: ACTIONS.HANDLE_CHANGED_INPUT,
      payload: { value, name, sectionName },
    });
  }
  function handleOnSubmit(e) {
    e.preventDefault();
  }
  function handleAddSelection(item) {
    dispatch({ type: ACTIONS.HANDLE_ADD_SELECTION_TO_SELECTED, payload: item });
    dispatch({
      type: ACTIONS.HANDLE_REMOVE_SELECTION_FROM_UNSELECTED,
      payload: item,
    });
  }
  function handleRemoveSelection(item) {
    dispatch({
      type: ACTIONS.HANDLE_ADD_SELECTION_TO_UNSELECTED,
      payload: item,
    });

    dispatch({
      type: ACTIONS.HANDLE_REMOVE_SELECTION_FROM_SELECTED,
      payload: item,
    });
  }
  function handleDragSwitch(draggedId, draggedOverId) {
    dispatch({
      type: ACTIONS.HANDLE_DRAG_SWITCH,
      payload: { draggedId, draggedOverId },
    });
  }
  const handleEditSelection = sectionName => {
    dispatch({ type: ACTIONS.HANDLE_EDIT_SELECTION, payload: sectionName });
  };
  const handleUploadImage = e => {
    const imageSrc = URL.createObjectURL(e.target.files[0]);
    dispatch({ type: ACTIONS.HANDLE_UPLOAD_IMAGE, payload: imageSrc });
  };
  const handleChangedShapeImage = e => {
    const shape = e.target.checked ? 'square' : 'round';
    dispatch({ type: ACTIONS.HANDLE_CHANGED_SHAPE_IMAGE, payload: shape });
  };
  return (
    <GlobalContext.Provider
      value={{
        unSelectedSections: state.unSelectedSections,
        selectedSections: state.selectedSections,
        formFields: state.formFields,
        formToShow: state.formToShow,

        handleChangeInput,
        handleOnSubmit,
        handleEditSelection,
        handleRemoveSelection,
        handleAddSelection,
        handleUploadImage,
        handleChangedShapeImage,
        handleDragSwitch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
