import React from 'react';
import {useState} from "react";
import { bubbleSort } from "../sortingAlgorithms/BubbleSort";
import { mergeSort } from "../sortingAlgorithms/MergeSort";
import { quickSort } from "../sortingAlgorithms/QuickSort";
import { heapSort } from "../sortingAlgorithms/HeapSort";
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 50;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
function SortingVisualizer(){
  
    const [array, setarray] = useState([]);
  

  const resetArray = ()=> {
    const arr = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
     
      arr.push(randomIntFromInterval(5, 550));
    }
    setarray(arr);
    // const arrayBars = document.getElementsByClassName("array-bar");
    // for (let i = 0; i < arrayBars.length; i++)
    //   arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
  };
    const animate = (animations) => {
      const arrayBars = document.getElementsByClassName("array-bar");
  
      for (let i = 0; i < animations.length; i++) {
        const [barOneIdx, barTwoIdx] = animations[i];
        if (i % 3 === 2) {
          setTimeout(() => {
            const height = barTwoIdx;
            arrayBars[barOneIdx].style.height = `${height}px`;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            arrayBars[barOneIdx].style.backgroundColor =
              i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
  
            arrayBars[barTwoIdx].style.backgroundColor =
              i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    };
  

  const handleBubbleSort = () => {
    const animations = bubbleSort(array);
     animate(animations);
  };

  const handleMergeSort = () => {
    const animations = mergeSort(array);
    animate(animations);
  };

  const handleQuickSort = () => {
    const animations = quickSort(array);
    animate(animations);
  };

  const handleHeapSort = () => {
    const animations = heapSort(array);
    animate(animations);
  };



//   quickSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

//   heapSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

//   bubbleSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
//   const testSortingAlgorithms=()=> {
//     for (let i = 0; i < 100; i++) {
//       const array = [];
//       const length = randomIntFromInterval(1, 1000);
//       for (let i = 0; i < length; i++) {
//         array.push(randomIntFromInterval(-1000, 1000));
//       }
//       const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
//       const mergeSortedArray = mergeSort(array.slice());
//       console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
//     }
//   }

 
    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
        <br />
        <button onClick={resetArray}>Generate New Array</button>
        <button onClick={handleMergeSort}>Merge Sort</button>
        <button onClick={handleQuickSort}>Quick Sort</button>
        <button onClick={handleHeapSort}>Heap Sort</button>
        <button onClick={handleBubbleSort}>Bubble Sort</button>
      </div>
    );
}


function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
export default SortingVisualizer;