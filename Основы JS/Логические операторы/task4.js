if (-1 || 0) alert( 'first' ); // выполнится -1 (True)
if (-1 && 0) alert( 'second' );// не выполнится 0 (False)
if (null || -1 && 1) alert( 'third' ); // выполнится 1 (True)