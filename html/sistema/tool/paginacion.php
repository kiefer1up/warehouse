<?php
class peliculas extends DB{
    private $paginaActual;
  private $totalPagina;
  private $nResultados;
  private $resultadosPorPagina;
  private $indice;

  function __construct($nPorPagina){
    parent::__construct();
    $this->resultadoPorPagina=0;
    $this->indice=0;
    $this->paginaActual=1;

    $this->calcularPaginas();
  }
  function calcularPaginas(){
    $query= $this->connect()->query('select count(*) as total from order');
    $this->nResultados = $query->fetch(PDO::FETCH_OBJ)->total;
    $this->totalPaginas = $this->nResultados / $this->resultadosPorPagina;
    
    if(isset($_GET['pagina'])){
      //validar que pagina sea un numero
      if($_GET['pagin        $this->paginaActual = $_GET['pagina'];
        $this->indice = ($this->paginaActual-1)
a']>=1 && $_GET['pagina']<= $this-> totalPaginas){
      //validar que pagina sea mayor o igual a 1 y menor o igual a total de pagina
        $this->paginaActual=$_GET['pagina'];
        $this->indice = ($this->paginaActual-1)*($this->resultadosPorPagina);
      }else{
        echo "No existe esa pagina";
      }
    }else{
      //confirmar error
    }
  }
}
?>

