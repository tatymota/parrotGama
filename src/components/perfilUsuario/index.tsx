import { Button } from "react-bootstrap";
import './index.scss';
import profile from '../../assets/img/profile.png'


export default function Usuario() {
  return (
    <div className="containerUsuarioProfile">
      <div className="user-container">
        <img
          src= {profile}
          width="100"
          height="100"
          className="d-block"
        />
        <div className="px-4 mx-4 containerPerfil">
          <h2>Nome Sobrenome</h2>
          <p>apê 222</p>
          <p>user@email.com</p>
          <>0 publicações</>
        </div>
        <div className="px-4">
          <Button className="buttonProfile" type="submit">
            editar perfil
          </Button>
        </div>
      </div>
    </div>
  );
}