import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-2 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Dibujito</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <span
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle text-white "
                >
                  <span className="ms-1 d-none d-sm-inline">
                    <Link to="/" className="text-white">
                      <i className="ri-home-line" />
                      Inicio
                    </Link>
                  </span>
                </span>
              </li>
              <li>
                <a
                  href="#submenu2"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle text-white "
                >
                  <span className="ms-1 d-none d-sm-inline">
                    <i className="ri-file-paper-line" />
                    Juegos
                  </span>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu2"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <span className="ms-3">
                      <span className="d-none d-sm-inline">
                        <Link to="juego" className="text-white">
                          Juego
                        </Link>
                      </span>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
