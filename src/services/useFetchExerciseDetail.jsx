import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useExerciseContext } from "./ExerciseContext";

const useFetchExerciseDetail = () => {
  const { fetchExerciseDetail } = useExerciseContext();
  const { id } = useParams();
  useEffect(() => {
    fetchExerciseDetail(id);
    return () => fetchExerciseDetail(id);
  }, [id]);
  return null;
};

export default useFetchExerciseDetail;
