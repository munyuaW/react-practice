import { useState } from "react";
import students from "./default-data";
import {
  capitalizeText,
  validateName,
  saveToLocalStorage,
  readFromLocalStorage,
} from "./utils";

function App() {
  const [output, setOutput] = useState([]);

  const displayStudentList = () => {
    setOutput([]);
  };
  const getGrade = (score) => {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
  };
  const showPassing = () => {
    const passing = students.filter(({ score }) => score >= 70);
    setOutput(passing.map(({ name, score }) => `${name} passed with ${score}`));
  };
  const showAverage = () => {
    const average =
      students.reduce((sum, { score }) => sum + score, 0) / students.length;
    setOutput([`The average score is ${average.toFixed(2)}`]);
  };
  const showTop = () => {
    const scores = students.map(({ score }) => score);
    const topScore = Math.max(...scores);
    const topScorers = students.filter(({ score }) => score === topScore);
    setOutput(topScorers.map(({ name, score }) => `${name}: ${score}`));
  };

  return (
    <div className="app">
      <h1>🎓 Student Dashboard</h1>

      <div className="button-group">
        <button onClick={displayStudentList}>Show All</button>
        <button onClick={showPassing}>Passing Students</button>
        <button onClick={showAverage}>Show Average</button>
        <button onClick={showTop}>Top Scorers</button>
      </div>

      <div className="search-group">
        <input type="text" placeholder="Search by name" />
        <button>Search</button>
      </div>

      <h3>Add a New Student</h3>
      <div className="add-student-form">
        <input type="text" placeholder="Student name" />
        <input type="number" placeholder="Score" />
        <button>Add Student</button>
      </div>

      <div className="output">
        {output.length === 0 ?
          <ol>
            {students.map(({ id, name, score }) => (
              <li key={id}>
                {name} - {score} ({getGrade(score)})<button>Edit</button>
                <button>Delete</button>
              </li>
            ))}
          </ol>
        : output.map((line, index) => <p key={index}>{line}</p>)}
      </div>
    </div>
  );
}

export default App;
