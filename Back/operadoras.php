<?php

$dados = [];

$oi = [];
$oi['nome'] = 'Oi';
$oi['codigo'] = 14;
$oi['categoria'] = 'Celular';
$oi['preco'] = 3;
array_push($dados, $oi);

$vivo = [];
$vivo['nome'] = 'Vivo';
$vivo['codigo'] = 15;
$vivo['categoria'] = 'Celular';
$vivo['preco'] = 2;
array_push($dados, $vivo);

$tim = [];
$tim['nome'] = "Tim";
$tim['codigo'] = 41;
$tim['categoria'] = "Celular";
$tim['preco'] = 3;
array_push($dados, $tim);

$gvt = [];
$gvt['nome'] = "GVT";
$gvt['codigo'] = 25;
$gvt['categoria'] = "Fixo";
$gvt['preco'] = 3;
array_push($dados, $gvt);

$embratel = [];
$embratel['nome'] = "Embratel";
$embratel['codigo'] = 21;
$embratel['categoria'] = "Fixo";
$embratel['preco'] = 2;
array_push($dados, $embratel);

echo json_encode($dados);
