import React from 'react';
import  { useState, useEffect } from 'react';
import { bubbleSort } from "../sortingAlgorithms/BubbleSort";
import { mergeSort } from "../sortingAlgorithms/MergeSort";
import { quickSort } from "../sortingAlgorithms/QuickSort";
import { heapSort } from "../sortingAlgorithms/HeapSort";
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
var delay= 1;

// Change this value for the number of bars (value) in the array.


// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';


// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
function SortingVisualizer(){
  
    var [array, setarray] = useState([]);
    var [arrSize,setArrSize] = useState(50);
    var  [wid ,setWid] = useState(9);
  

  const resetArray = ()=> {
    const arr = [];
    for (let i = 0; i < arrSize; i++) {
     
      arr.push(randomIntFromInterval(5, 550));
    }
    setarray(arr);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBars.length; i++)
      arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
  };
    const animate = (animations) => {
      const arrayBars = document.getElementsByClassName("array-bar");
  
      for (let i = 0; i < animations.length; i++) {
        const [barOneIdx, barTwoIdx] = animations[i];
        if (i % 3 === 2) {
          setTimeout(() => {
            const height = barTwoIdx;
            arrayBars[barOneIdx].style.height = `${height}px`;
          }, i * delay);
        } else {
          setTimeout(() => {
            arrayBars[barOneIdx].style.backgroundColor =
              i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
  
            arrayBars[barTwoIdx].style.backgroundColor =
              i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          }, i * delay);
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

useEffect(() => {
  resetArray();
}, [])
function setArrSizeHelper(val) {

  console.log(val);
  if (val > 100) {
    setWid(2)
  }
  else if (val > 80) {
    setWid(5);
  }
  else if (val > 70) {
    setWid(7);
  }
  else if (val > 60) {
    setWid(10);
  }
  else if (val > 50) {
    setWid(15);
  }
  else if (val > 40) {
    setWid(19);
  }
  else if (val > 30) {
    setWid(25);
  }
  else if (val > 20) {
    setWid(33);
  }
  else if (val > 10) {
    setWid(40);
  }
  else {
    setWid(60);
  }

  setArrSize(val);
 resetArray();
}
function changeDelay(val) {
	delay = val;
}
 
    return (
      <div className="Nav-bar">
				<label className='sliderLabel'>
					Array Size
					<br />
					<input id='rangeSlider' type='range' min='1' max='200' value={arrSize} onChange={(e) => setArrSizeHelper(e.target.value)} />
				</label>
        <label className='sliderLabel'>
					Delay
					<input type='range' min='5' max='200' onChange={(e) => { changeDelay(e.target.value) }} />
				</label>
        
           <button className='btn' onClick={resetArray}>Generate New Array</button>
        <button className='btn' onClick={handleMergeSort}>Merge Sort</button>
        <button className='btn' onClick={handleQuickSort}>Quick Sort</button>
        <button className='btn' onClick={handleHeapSort}>Heap Sort</button>
        <button className='btn' onClick={handleBubbleSort}>Bubble Sort</button>
        <br/>
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
  
      </div>
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