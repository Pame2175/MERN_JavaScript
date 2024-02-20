// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);
    // iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
    }
    iFib(20);
    /*Entre estas implementaciones, la iterativa suele ser la más rápida en términos de tiempo de ejecución,
    seguida de la versión con memorización y luego la versión recursiva simple. Esto se debe a que la 
    iterativa evita la sobrecarga de las llamadas recursivas y realiza un número constante de operaciones en 
    cada iteración del bucle. La versión con memorización también es eficiente ya que evita recalcular los 
    mismos valores intermedios repetidamente. Por otro lado, la recursión simple puede ser bastante lenta 
    debido a la gran cantidad de llamadas recursivas y recálculos. */
    