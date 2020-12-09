package quicksort_java;

class LomutoQuicksort extends BasicQuicksort {

    static int partition(int []arr, int low, int high) {
        int pivot = arr[high];

        int smallerIndex = (low - 1);

        for (int j = low; j <= high- 1; j++)
        {
            if (arr[j] <= pivot)
            {
                smallerIndex++;
                swap(arr, smallerIndex, j);
            }
        }

        swap(arr, smallerIndex + 1, high);
        return (smallerIndex + 1);
    }

    static void quickSort(int []arr, int low,
                          int high)
    {
        if (low < high)
        {
            int partitionIndex = partition(arr, low, high);
            // Separate sort before and after partition
            quickSort(arr, low, partitionIndex - 1);
            quickSort(arr, partitionIndex + 1, high);
        }
    }
}
