import React from 'react';

import components from '../../components';

//import { Container } from './styles';
//import api from '../../services/api';

const { Sidebar, Memories } = components;


function Profile() {
  //const [memories, setMemories] = useState([])

  /* useEffect(() => {
    api.get('person', {
      headers: {
        Authorization: token,
      }
    }).then(response => {
      setMemories(response.data)
    })
  }, [token]);
 */
  return (
    <>
      <Sidebar />
      {/* <Memories /> */}
    </>
  )
}

export default Profile;