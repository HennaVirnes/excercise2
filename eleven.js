process.stdout.write( "\n This program is a computer game. Please, "
                    + "\n type in a number : " ) ;

process.stdin.on( "data", function( input_from_user )
{

   var given_number = Number( input_from_user ) ;

   var winning_number = given_number + 1 ;

   process.stdout.write( "\n You typed in " + given_number + "."
                      +  "\n My number is " + winning_number  + "."
                      +  "\n Sorry, you lost. I won. The game is over.\n\n" ) ;

   process.exit() ;
   
   } ) ;