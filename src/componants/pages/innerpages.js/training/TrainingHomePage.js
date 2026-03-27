import React, { useEffect } from "react";
import TrainingPage from "./training pages layout/TrainingPage";
import { fullStackTrainingData } from "./TrainingDataTemplate";

const TrainingHomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <TrainingPage trainingData={fullStackTrainingData} />;
};

export default TrainingHomePage;

