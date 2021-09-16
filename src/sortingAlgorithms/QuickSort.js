export function quickSort(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }
  function quickSortHelper(arr, low, high, animations) {
    if (low < high) {
      let pi = partition(arr, low, high, animations);
      quickSortHelper(arr, low, pi - 1, animations);
      quickSortHelper(arr, pi + 1, high, animations);
    }
  }
  
  function partition(arr, low, high, animations) {
    let pivot = arr[high]; 
    let i = low - 1,j;
    for (j = low; j <= high - 1; j++) {
      if (arr[j] <= pivot) {
        animations.push([i + 1, j]);
        animations.push([i + 1, j]); 
        animations.push([i + 1, arr[j]]); 
  
        animations.push([i + 1, j]);
        animations.push([i + 1, j]); 
        animations.push([j, arr[i + 1]]);
        i++; 
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  
    animations.push([i + 1, high]); 
    animations.push([i + 1, high]); 
    animations.push([i + 1, arr[high]]);
  
    animations.push([i + 1, high]); 
    animations.push([i + 1, high]); 
    animations.push([high, arr[i + 1]]); 
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
  