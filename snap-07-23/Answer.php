<?php

class Snowboard {
	private $price;
	private $cost;

	public function __construct (float $newPrice, float $newCost) {
		$this->setPrice($newPrice);
		$this->setCost($newCost);
	}

	public function getPrice() :float{
		return ($this->price);
	}

	public function getCost() :float{
		return ($this->cost);
	}

	public function setPrice (float $newPrice) :void {
		$this->price = $newPrice;
	}

	public function setCost (float $newCost) :void {
		$this->cost = $newCost;
	}

	public function profit () :void {
		echo ($this->price - $this->cost);
	}



}

$customBoard = new Snowboard(1000, 400);
$customBoard->profit();