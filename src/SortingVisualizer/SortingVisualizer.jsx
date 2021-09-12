 import React from 'react';
 import './SortingVisualizer.css'
 import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
 const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

 export default class SortingVisualizer extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             array: [],
         };
     }
     componentDidMount(){
        this.resetArray();
    }
    resetArray(){
        const array = [];
        for(let i=0;i<100;i++){
          array.push(randomIntfromInterval(5,700));
        }
        this.setState({array});
    }
    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
          const array = [];
          const length = randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const mergeSortedArray = getMergeSortAnimations(array.slice());
          console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
      }
    render(){
        const {array} = this.state;
        return(
            <div className="array-container">
 
 { array.map((value,idx) => (
                    <div className = "array-bar" key = {idx}
                    style ={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value}px`,
                    }}
                    >
                    </div>
                ))
            }
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.testSortingAlgorithms()}>
          Test Sorting Algorithms (BROKEN)
        </button>
            </div>
            
                        
        );
    }
 }
 function randomIntfromInterval(min,max){
     return Math.floor(Math.random() * (max-min+1)+min);
 }

  