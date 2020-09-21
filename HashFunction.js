function hash(text,bit)
{
  var CharactersA = ["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","?",">","<",":","}","{","+","_","~","`","!","@","#","$","%","^","&","*","(",")","-","=","[","]",";","'",",",".","/"," "];
  var CharactersB = ["a","g","n","v","z","0","2","4","6","8"];
  var OutputA = text.split('');
  var OutputB = [];


  for (i = 0 ; i < OutputA.length ; i++)
  {
    OutputB.push(CharactersA.indexOf(OutputA[i]) * (i + 1));
  }
  OutputA = [];
  OutputB = BigInt(OutputB.join('') ** 2).toString();


  while (OutputB.length < bit)
  {
    OutputB = BigInt(OutputB * 3.14).toString();
  }
  OutputB = OutputB.split('');


  for (i = 0 ; i < OutputB.length ; i++)
  {
    OutputA.push(CharactersB[parseInt(OutputB[i])]);
  }

  return(OutputA.join(''));
}
