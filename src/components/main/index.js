import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./main.css";
import Codex from "../codex";
import Loader from "../../ui/loader";
import Modal from "../../ui/modal";

function Main() {
  const { search = "" } = useLocation();
  const navigate = useNavigate();
  const [province, setProvince] = React.useState([]);
  const [directions, setDirections] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [change, setChange] = React.useState(false);

  const [key, q_id] = useMemo(
    () => search?.split("&").map((it) => it.split("=")[1]),
    [search]
  );

  const {
    register,
    handleSubmit,
    // formState: { errors },
    // setValue,
    // watch,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .get(`https://question.gkey.uz/api/question/?key=${key}&q_id=${q_id}`)
      .then(({ data }) => {
        setQuestions(data);
        setLoading(false);
        setChange(true);
        setProvince(data);
      })
      .catch(({ response: { data = {} } = { data: {} } }) => {
        console.log(data, "error");
        setLoading(false);
        navigate("/", { replace: true });
        setProvince(data);
      });
  };

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("https://question.gkey.uz/api/province/")
      .then(({ data }) => {
        setProvince(data);
        setLoading(false);
      })
      .catch(({ data }) => {
        console.log(data, "error");
        setLoading(false);
        setChange(false);
      });
  }, []);

  const onChange = ({ target: { value } }) => {
    const { direction = [] } = JSON.parse(value);
    setDirections(direction);
  };

  return key && q_id ? (
    change ? (
      <Codex questions={questions} />
    ) : (
      <div className="main">
        <div className="main_title">
          <p>
            Ҳурматли номзод, танловнинг суҳбат босқичига хуш келибсиз. Сизга
            омад тилаймиз.
          </p>
        </div>
        <div className="main_content">
          {loading ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Viloyatni tanlang</label>
              <div className="region_select">
                <select
                  {...register("region", { required: true })}
                  className="region"
                  onChange={onChange}
                  // style={errors.region ? { border: "1px solid red" } : {}}
                >
                  {province?.map((item, i) => (
                    <option key={i} value={JSON.stringify(item)}>
                      {item?.province}
                    </option>
                  ))}
                </select>
              </div>
              <div className="region_select">
                <select
                  {...register("direction", { required: true })}
                  className="region"
                  // style={errors.direction ? { border: "1px solid red" } : {}}
                  onChange={(e) => console.log(e.target.value)}
                >
                  {directions.map(({ direction }, i) => (
                    <option value={direction} key={i}>
                      {direction}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit">Саволлар руйхати</button>
            </form>
          )}
        </div>
      </div>
    )
  ) : (
    <Modal text={province?.message} />
  );
}

export default Main;
