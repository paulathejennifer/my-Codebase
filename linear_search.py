def linear_search(arr, target_value):
    for i in range(len(arr)):
        if arr[i] == target_value:
            return i
      
    return -1


