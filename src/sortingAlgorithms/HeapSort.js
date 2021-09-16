export function heapSort(array) {
    const animations = [];
    heapSortHelper(array, array.length, animations);
    return animations;
  }
  function heapSortHelper(arr, n, animations) {
    for (let i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i , animations);
    for (let i = n - 1; i > 0; i--) {
      animations.push([0, i]);
      animations.push([0, i]);
      animations.push([0, arr[i]]);
      animations.push([0, i]);
      animations.push([0, i]);
      animations.push([i, arr[0]]);
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0 , animations);
    }
  }
  
  function heapify(arr, n, i, animations) {
    let largest = i; 
    let l = 2 * i + 1; 
    let r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest != i) {
      animations.push([i, largest]);
      animations.push([i, largest]);
      animations.push([i, arr[largest]]);
  
      animations.push([i, largest]);
      animations.push([i, largest]);
      animations.push([largest, arr[i]]);
       [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest , animations);
    }
  }
  