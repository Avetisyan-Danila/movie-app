import { Button } from "../../components/Button/Button.tsx";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store.ts";
import { logout } from "../../store/user/userSlice.ts";
import { useSelector } from "react-redux";
import { selectStatus } from "../../store/user/userSelectors.ts";

export const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const status = useSelector(selectStatus);

  const onLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <div>
      <h2>Layout</h2>
      <Button onClick={onLogout} disabled={status === "loading"}>
        Выход
      </Button>
    </div>
  );
};
