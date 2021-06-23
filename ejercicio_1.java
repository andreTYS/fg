import java.util.Scanner;
public class ejercicio_1 {
    public static void main(String[] args) {
    int m[][],AT[][],s[][];
    int a,b,j = 0,i = 0;
        a = n();
        b = n();
        m = new int [a][b];
        AT = new int [b][a];
        s = new int [a][b];
        ma(m,a,b,i,j);
        tra(AT,m,a,b,i,j);
        im(m,AT,s,a,b,i,j);
}
    private static int n() {
        Scanner teclado = new Scanner (System.in);
        int n;
        n = teclado.nextInt();
        return n;
    }
    
    private static void ma(int[][] m, int a, int b, int i, int j) {
        for (i=1;i<=a;i++) {
    		for (j=1;j<=b;j++) {
    			System.out.println("A["+i+","+j+"]");
    			m[i-1][j-1] = n();
    		}
        }
    }

    private static void tra(int[][] AT, int[][] m, int a, int b, int i, int j) {
        for (i=1;i<=a;i++) {
    		for (j=1;j<=b;j++) {
    			AT[j-1][i-1] = m[i-1][j-1];
    		}
        }
    }

    private static void im(int[][] m, int[][] AT, int[][] s, int a, int b, int i, int j) {
        for (i=1;i<=a;i++) {
    		for (j=1;j<=b;j++) {
    			System.out.println("A["+i+","+j+"] "+m[i-1][j-1]);
    		}
        }
        for (i=1;i<=b;i++) {
    		for (j=1;j<=a;j++) {
                        System.out.println("AT["+i+","+j+"] "+AT[i-1][j-1]+" ");
    		}
        }
        for (i=1;i<=a;i++) {
    		for (j=1;j<=b;j++) {
    			s[i-1][j-1] = m[i-1][j-1]+AT[i-1][j-1];
                        System.out.println("S["+i+","+j+"] "+s[i-1][j-1]);
    		}
    	}
    }
}