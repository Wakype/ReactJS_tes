import React from "react";
import { Button, Input, InputStateEvent, Select } from "../component";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    username: "",
    name: "",
    jenis_kelamin: "",
    email: "",
    password: "",
    password_confimation: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    setUser((user) => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://belajar-react.smkmadinatulquran.sch.id/api/users/create",
        user
      );
      setIsLoading(false);
      return navigate("/user");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  return (
    <section className="bg-purple-900 h-[633px]">
      <div>
        <form
          action=""
          className="flex flex-col justify-center items-center "
          onSubmit={handleSubmit}
        >
          <div className="border border-green-500 px-[30px] rounded my-5 bg-white shadow-xl shadow-black">
            <div className="text-center text-xl font-semibold my-3">
              <h1>Buat User</h1>
            </div>
            <InputStateEvent
              name={"username"}
              placeholder="Username"
              label={"Username"}
              value={user.username}
              onChange={handleChange}
            />
            <InputStateEvent
              name={"name"}
              placeholder="Nama"
              label={"Nama"}
              value={user.name}
              onChange={handleChange}
            />
            <InputStateEvent
              name={"email"}
              placeholder="Email"
              label={"Email"}
              value={user.email}
              onChange={handleChange}
            />
            <Select
              name={"jenis_kelamin"}
              placeholder="Jenis Kelamin"
              label={"Jenis Kelamin"}
              value={user.jenis_kelamin}
              onChange={handleChange}
            >
              <option value={user.jenis_kelamin}>laki-laki</option>
              <option value="">perempuan</option>
            </Select>
            <InputStateEvent
              name={"password"}
              placeholder="Password"
              label={"Password"}
              value={user.password}
              onChange={handleChange}
            />
            <InputStateEvent
              name={"password_confimation"}
              placeholder="Confirm Password"
              label={"Confirm Password"}
              value={user.password_confimation}
              onChange={handleChange}
            />
            <div className="flex flex-row justify-between">
              <button
                className="button border border-green-500 rounded px-3 py-1 my-1 hover:bg-green-500 transition-all ease-in-out hover:text-white"
                onClick={() => {
                  return navigate(-1);
                }}
              >
                Back
              </button>
              <Button title={isLoading ? "Sedang Menyimpan" : "Simpan"} />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateUser;
