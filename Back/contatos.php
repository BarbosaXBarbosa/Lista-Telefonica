<?php

$dados = [];

/*
	{nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
*/
$oi = [];
$oi['nome'] = 'Oi';
$oi['codigo'] = 14;
$oi['categoria'] = 'Celular';

$vivo = [];
$vivo['nome'] = 'Vivo';
$vivo['codigo'] = 15;
$vivo['categoria'] = 'Celular';

$tim = [];
$tim['nome'] = "Tim";
$tim['codigo'] = 41;
$tim['categoria'] = "Celular";

$bruno = [];
$bruno['nome'] = 'Bruno';
$bruno['telefone'] = '9999-2222';
$bruno['data'] = date("d/m/Y");
$bruno['operadora'] = $oi;
array_push($dados, $bruno);

$sandra = [];
$sandra['nome'] = 'Sandra';
$sandra['telefone'] = '9999-3333';
$sandra['data'] = date("d/m/Y");
$sandra['operadora'] = $vivo;
array_push($dados, $sandra);

$mariana = [];
$mariana['nome'] = 'Mariana';
$mariana['telefone'] = '9999-9999';
$mariana['data'] = date("d/m/Y");
$mariana['operadora'] = $tim;
array_push($dados, $mariana);

// Retorna o array de dados como um JSON
echo json_encode($dados);
