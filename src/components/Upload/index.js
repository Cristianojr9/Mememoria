import React from 'react';

import Dropzone from 'react-dropzone';

import { FiUploadCloud } from 'react-icons/fi';

import { DropContainer } from './styles';

function Upload(props) {
  const { onUpload } = props;

  return (
    <Dropzone accept='imagem/*' onDropAccepted={onUpload}>
      {({ getRootProps, getInputProps, isDragAccept, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragAccept={isDragAccept}
          isDragReject={isDragReject}
        >
          <FiUploadCloud size={35} />
          Enviar memorias
          <input {...getInputProps()} />

        </DropContainer>

      )}
    </Dropzone>
  )
}

export default Upload;