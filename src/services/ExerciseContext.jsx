import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { EXERCISE_URL, options } from "../utils/textConstants";

const ExerciseContext = createContext();

const ExerciseContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const searchRef = useRef();
  const exerciseRef = useRef();
  const sliderRef = useRef();
  const youtubeRef = useRef();
  const bodyPartRef = useRef();
  const equipmentRef = useRef();

  async function fetchEquipment(equipmentName) {
    try {
      setLoading(true);
      const response = await fetch(
        `${EXERCISE_URL}/equipment/${equipmentName}?limit=0`,
        options
      );
      const data = await response.json();
      setEquipment(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function fetchBodyPart(bodyPartName) {
    try {
      setLoading(true);
      const response = await fetch(
        `${EXERCISE_URL}/bodyPart/${bodyPartName}?limit=0`,
        options
      );
      const data = await response.json();
      setBodyParts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function fetchExerciseDetail(id) {
    try {
      setLoading(true);
      const response = await fetch(`${EXERCISE_URL}/exercise/${id}`, options);
      const data = await response.json();
      setExerciseDetail(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleBodyPartClick(each) {
    try {
      const reponse = await fetch(
        `${EXERCISE_URL}/bodyPart/${each}?limit=0`,
        options
      );
      const data = await reponse.json();
      setExercises(data);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleSearchClick() {
    try {
      setLoading(true);
      const response = await fetch(`${EXERCISE_URL}?limit=0`, options);
      const data = await response.json();
      const searchExercises = data?.filter(
        (exercise) =>
          exercise?.name?.includes(search) ||
          exercise?.target?.includes(search) ||
          exercise?.bodayPart?.includes(search) ||
          exercise?.equipment?.includes(search)
      );
      setSearch("");
      setExercises(searchExercises);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(`${EXERCISE_URL}/bodyPartList`, options);
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchExercises() {
      try {
        const response = await fetch(`${EXERCISE_URL}?limit=0`, options);
        const data = await response.json();
        setExercises(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchExercises();
  }, []);

  return (
    <ExerciseContext.Provider
      value={{
        categories,
        exercises,
        currentPage,
        setCurrentPage,
        search,
        setSearch,
        handleSearchClick,
        handleBodyPartClick,
        exerciseDetail,
        fetchExerciseDetail,
        bodyParts,
        fetchBodyPart,
        equipment,
        fetchEquipment,
        searchRef,
        exerciseRef,
        sliderRef,
        youtubeRef,
        bodyPartRef,
        equipmentRef,
        loading,
        error,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

const useExerciseContext = () => {
  const context = useContext(ExerciseContext);
  return context;
};

export { ExerciseContextProvider, useExerciseContext };
