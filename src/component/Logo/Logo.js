import { useNavigate } from "react-router-dom";
import "./Logo.scss";


function Logo() {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/");
  };
  return (
    <div className="logo" onClick={moveToMain}>
      <img src="/images/groad_logo.png" alt="groad logo" />
    </div>
  );
}
export default Logo;
