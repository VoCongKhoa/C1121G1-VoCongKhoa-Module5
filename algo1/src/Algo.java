public class Algo {
    public static void main(String[] args) {
        System.out.println(check(new int[]{1, 2, 2, 3, 1, 3, 1, 3, 1, 1}));
//        System.out.println(sort(new int[]{1, 2, 2, 3, 1, 3, 1, 3}));
    }

    public static int[] sort(int[] a) {
        for (int i = 0; i < a.length; i++) {      //Loop over java Array  outer Loop use
            for (int j = i + 1; j < a.length; j++) {  // Loop over java array
                int tmp = 0;                            //tempraory variable in order to compare.
                if (a[i] > a[j]) {          //compare outer loop object with inner loop
                    tmp = a[i];               // if greater than swapping.
                    a[i] = a[j];            // Swaping code here.
                    a[j] = tmp;
                }
            }
        }
        return a;
    }

    public static boolean check(int[] a) {
        int l = a.length;
        for (int i = 0; i < l; i++) {
            for (int j = i + 1; j < l; j++) {
                int t;
                if (a[i] > a[j]) {
                    t = a[i];
                    a[i] = a[j];
                    a[j] = t;
                }
            }
        }
        int n = 0;
        int m = a[0];
        int[] arr = new int[l];
        arr[0] = a[0];
        for (int i = 1; i < l; i++) {
//            for (int j = 1; j <l; j++) {
                if (a[i] != arr[i]){
                    arr[i] = a[i];
                    break;
                }
//            }
//            m += a[i + 1];
//            int b = a[i];
//            if (b != a[i + 1]) {
//
//                n += b;
//            }
        }
        return m % n == 0;
    }

//    public static boolean check(int[] a) {
//        int length = a.length;
//        int sum = 0;
//        int sumA = a[0];
//        for (int i = 0; i < length-1; i++) {
//            sumA += a[i+1];
//            int b = a[i];
//            if (b != a[i+1]){
//                sum += b;
//            }
//        }
//        return sumA % sum == 0;
//    }
}
