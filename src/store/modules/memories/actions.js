export function uploadRequest(file) {
  return {
    type: '@memories/UPLOAD_REQUEST',
    payload: { file }
  };
}

export function uploadSucess(fileName, fileDownloadUri) {
  return {
    type: '@memories/UPLOAD_SUCCESS',
    payload: { fileName, fileDownloadUri, fileType, size }
  };
}

export function uploadFailure() {
  return {
    type: '@auth/UPLOAD_FAILURE'
  };
}