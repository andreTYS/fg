import java.util.Random;
import javax.swing.*;
public class sumat {
    public static void main(String[] args){             
    int a[][];
    int b[][];
    int c[][];
    String resultado = "";
    int i;
    int j;
    int m;
    int n;
    int p;
    int q;
    JOptionPane.showMessageDialog(null,"¡Hello World!\n"
    + "GOOD AFTEERNOON \n"
    + "SUMA DE MATRICES \n"
    + " つ ◕_◕ つ ->> ");
    m = Integer.parseInt(JOptionPane.showInputDialog(" MATRIZ A[M * N] ?\n"
    + "[M] ?"));
    n = Integer.parseInt(JOptionPane.showInputDialog(" MATRIZ A[M * N] ?\n"
    + "[N] ?"));
    p = Integer.parseInt(JOptionPane.showInputDialog(" MATRIZ B[M * N] ?\n"
    + "[M] ?"));
    q = Integer.parseInt(JOptionPane.showInputDialog(" MATRIZ B[M * N] ?\n"
    + "[N] ?"));
    a = new int[m+1][n+1];
    b = new int[p+1][q+1];
    c = new int[m+1][q+1];
    if (m<1 || n<1 || p<1 || q<1 || m!=p || n!=q) {
    	JOptionPane.showMessageDialog(null,"Las matrices no se pueden sumar.\n"
    	+ "Intentar Nuevamente\n"
        + " :v ");
    } else {
    	JOptionPane.showMessageDialog(null,"Se  generará una  Matriz C["+m+"*"+q+"] \n"
        + "\n"
    	+ "MATRIZ A["+m+"*"+n+"]" );
    	llenarmatriz(a,m,n);
        JOptionPane.showMessageDialog(null,"MATRIZ B["+p+"*"+q+"] ");
        llenarmatriz(b,p,q);
    	JOptionPane.showMessageDialog(null,"A+B = C   ->   MATRIZ C["+m+"*"+q+"] ");
    	for (i=1;i<=m;i++) {
    		resultado += "[ ";
    		for (j=1;j<=q;j++) {
                    c[i][j] = a[i][j]+b[i][j];
                    resultado += " "+c[i][j];
    		}
    		resultado += "  ]\n";
    	}
        JOptionPane.showMessageDialog(null,resultado+ "\n"
        + "**** FIN ****\n"
        + "☜(ﾟヮﾟ☜)");
    }
}
public static void llenarmatriz(int arr[][], int f, int c) {
    Random r = new Random();
    int i;
    String resultado = "";
    int j;
    for (i=1;i<=f;i++) {
        resultado += "[ ";
    	for (j=1;j<=c;j++) {
    		arr[i][j] = r.nextInt(9);
                resultado += " "+arr[i][j];
    	}
        resultado += "  ]\n";
    }
    JOptionPane.showMessageDialog(null,resultado);       
}

}
