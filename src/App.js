import { createContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Output from "./components/Output";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  loader: false,
  errors: [],
  json: {},
  jsonFetched: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateLoader":
      return { ...state, loader: true };
    case "updateJsonFetchedValue":
      return { ...state, jsonFetched: false };
    case "setJsonData":
      return {
        json: action.data,
        jsonFetched: true,
        errors: [],
        loader: false,
      };
    case "setErrors":
      return { ...state, errors: action.data, loader: false };
    default:
      return state;
  }
};

export const SumContext = createContext(null);

function App() {
  const [jsonData, dispatch] = useReducer(reducer, initialState);
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  useEffect(() => {
    if (jsonData?.jsonFetched) {
      toast.success("Output fetched", {
        toastId: 1,
      });
      dispatch({ type: "updateJsonFetchedValue" });
    }
  }, [jsonData.jsonFetched]);

  const submitData = async () => {
    dispatch({ type: "updateLoader" });
    try {
      const fetchData = async () => {
        const response = await axios.post("http://localhost:8000/cal", {
          firstNumber,
          secondNumber,
        });
        return response;
      };
      const data = await fetchData();
      dispatch({ type: "setJsonData", data: data.data.data });
    } catch (error) {
      dispatch({ type: "setErrors", data: error.response.data.data });
    }
  };

  const sumData = {
    firstNumber,
    setFirstNumber,
    secondNumber,
    setSecondNumber,
    submitData,
  };

  return (
    <>
      <ToastContainer hideProgressBar theme="dark" position="top-center" />
      <SumContext.Provider value={sumData}>
        <Banner />
        <Form jsonData={jsonData} />
        <Output jsonData={jsonData} />
      </SumContext.Provider>
    </>
  );
}

export default App;
