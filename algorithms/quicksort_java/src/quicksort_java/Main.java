package quicksort_java;

import java.util.concurrent.ThreadLocalRandom;

public class Main {
    static int[] randomFill(int[] arr)
    {
        for(int i = 0; i < arr.length ; i++){
            arr[i] = ThreadLocalRandom.current().nextInt(0, arr.length + 1);
        }
        return arr;
    }

    public static void main(String[] args) {
	    int n = 100000;
        int[] array01 = new int[n];
        randomFill(array01);
        int[] array02 = array01.clone();

        double startTimeLomuto = System.nanoTime();
        LomutoQuicksort.quickSort(array01, 0, n-1);
        double stopTimeLomuto = System.nanoTime();

        double startTimeHoare = System.nanoTime();
        HoareQuicksort.quickSort(array02, 0, n-1);
        double stopTimeHoare = System.nanoTime();

        System.out.printf("Execution Time Lomuto: \t %.2f ms \n", (stopTimeLomuto - startTimeLomuto) / 1000000);
        System.out.printf("Execution Time Hoare: \t %.2f ms \n", (stopTimeHoare - startTimeHoare) / 1000000);
    }
}
