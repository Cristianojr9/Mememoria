import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import Logon from '../pages/logon';
import Register from '../pages/register';
import Landing from '../pages/landing';
import Profile from '../pages/profile';
import Diario from '../pages/diario';
import InfoMemorie from '../pages/infomemorie';
import Configuracoes from '../pages/configuracoes';
import Senha from '../pages/senha';
import Memorial from '../pages/memorial';
import ConfigHerdeiro from '../pages/configHerdeiros';
import Herdeiro from '../pages/herdeiros';
import newHerdeiro from '../pages/addHerdeiros';
import MemorieRecentes from '../pages/memoriasrecentes';
import Lixeira from '../pages/lixeira';
import InfoPastas from '../pages/pastas';
import ForgetPassword from '../pages/forgetPassword';
import DeleteConta from '../pages/deleteConta';
import RestorePassword from '../pages/restorePassword';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Logon} />
      <Route path="/register" component={Register} />
      <Route path="/forget-password" exact component={ForgetPassword} />
      <Route path="/forget-password/reset-password/" exact component={RestorePassword} />
      <Route path="/profile" exact isPrivate component={Profile} />
      <Route path={"/profile/memoria/:id"} exact isPrivate component={InfoMemorie} />
      <Route path={"/profile/pastas/:id"} exact isPrivate component={InfoPastas} />
      <Route path={"/profile/configuracoes"} exact isPrivate component={Configuracoes} />
      <Route path={"/profile/configuracoes/senha"} isPrivate component={Senha} />
      <Route path={"/profile/configuracoes/herdeiros/new"} isPrivate component={newHerdeiro} />
      <Route path={"/profile/configuracoes/herdeiros"} exact isPrivate component={Herdeiro} />
      <Route path={"/profile/configuracoes/conta"} exact isPrivate component={DeleteConta} />
      <Route path={"/profile/configuracoes/herdeiros/:id"} isPrivate component={ConfigHerdeiro} />
      <Route path={"/profile/diario"} isPrivate component={Diario} />
      <Route path={"/profile/memorial"} isPrivate component={Memorial} />
      <Route path={"/profile/memorias-recentes"} isPrivate component={MemorieRecentes} />
      <Route path={"/profile/lixeira"} isPrivate component={Lixeira} />
    </Switch>
  );
}

export default Routes;