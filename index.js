case 1 ( array indices start from 1 ) :



         &( arr[i][j] ) = address + [ ( i-1 )*n + ( j-1 ) ]*( sizeof(int) ) ] so here we are performing 6 operations



case 2 ( array indices start from 0 ) :



        &( arr[i][j] ) = address + [ ( i )*n + ( j ) ]*( sizeof(int) ) ] and here we are performing only 4 operations

