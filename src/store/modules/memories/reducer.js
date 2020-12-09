import produce from 'immer';

const INITIAL_STATE = {
  bearer: null,
  file: null,
  fileName: null,
  fileDownloadUri: null
};

export default function memorie(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@memories/UPLOAD_REQUEST': {
        draft.file = action.payload.file;
        break;
      }
      case '@memories/UPLOAD_SUCCESS': {
        draft.fileName = action.payload.fileName;
        draft.fileDownloadUri = action.payload.fileDownloadUri;
        break;
      }
      case '@memories/UPLOAD_FAILURE': {
        draft.file = false;
        break;
      }
      default:
        return state;
    }
  });
}