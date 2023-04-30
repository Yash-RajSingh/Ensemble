import { useNavigate } from "react-router-dom";
import {
  createCookie,
  deleteCookie,
} from "../../../hooks/randomStuff/randomStuff";
import { BoardBoxBody, BoardDescription, BoardTitle } from "./boardBoxElements";

const BoardBox = ({ data, wuid }) => {
  const navigate = useNavigate();
  return (
    <>
      <BoardBoxBody
        onClick={() => {
          deleteCookie({ name: "bname" });
          deleteCookie({ name: "wuid" });
          createCookie({
            name: "bname",
            value: data?.board_title,
            validDays: 30,
          });
          createCookie({ name: "wuid", value: wuid, validDays: 7 });
          navigate(`/list/${data?.board_id}`);
        }}
      >
        <BoardTitle bold size={"1rem"}>
          {data?.board_title}
        </BoardTitle>
        <BoardDescription size={"0.75rem"} top={"2%"}>
          {data?.board_description}
        </BoardDescription>
      </BoardBoxBody>
    </>
  );
};

export default BoardBox;
