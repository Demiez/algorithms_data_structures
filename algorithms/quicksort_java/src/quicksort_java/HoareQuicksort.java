package quicksort_java;

class HoareQuicksort extends BasicQuicksort {
    static int partition(int []arr, int low, int high) {
        int pivot = arr[low];
        int smallerIndex = low - 1, greaterIndex = high + 1;

        while (true) {
            do {
                smallerIndex++;
            } while (arr[smallerIndex] < pivot);

            do {
                greaterIndex--;
            } while (arr[greaterIndex] > pivot);

            // Two pointers met
            if (smallerIndex >= greaterIndex)
                return greaterIndex;
            swap(arr, smallerIndex, greaterIndex);
        }
    }

    static void quickSort(int []arr, int low,
                          int high)
    {
        if (low < high) {
            int partitionIndex = partition(arr, low, high);
            // Separate sort before and after partition
            quickSort(arr, low, partitionIndex);
            quickSort(arr, partitionIndex + 1, high);
        }
    }
}
