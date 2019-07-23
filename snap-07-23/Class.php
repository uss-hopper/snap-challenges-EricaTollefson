<?php
namespace Etollefson\Class;

require_once("autoload.php");
require_once(dirname(__DIR__) . "/vendor/autoload.php");

use Ramsey\Uuid\Uuid;

/**
 * Cat class that describes cats in a neighborhood
 *
 * Cats can be identified with implanted technology ("Chips") holding unique identifier numbers, and described by color
 *
 * @author Erica Tollefson (etollefson@cnm.edu)
 * @version 1.0.0
 */


class Cat implements \JsonSerializable {
	use ValidateUuid;
	/**
	 * id for this Cat; this is the primary key
	 * @var Uuid $catId
	 **/
	private $catId;
	/**
	 * Descriptive color data of this Cat
	 * @var string $catColor
	 **/
	private $catColor;

	/**
	 * constructor for this Cat
	 *
	 * @param string|Uuid $newCatId id of this Cat or null if a new Cat
	 * @param string $newCatColor string containing actual cat descriptive color
	 * @throws \InvalidArgumentException if data types are not valid
	 * @throws \RangeException if data values are out of bounds (e.g., strings too long, negative integers)
	 * @throws \TypeError if data types violate type hints
	 * @throws \Exception if some other exception occurs
	 * @Documentation https://php.net/manual/en/language.oop5.decon.php
	 **/
	public function __construct($newCatId, string $newCatColor) {
		try {
			$this->setCatId($newCatId);
			$this->setCatColor($newCatColor);
		}
			//determine what exception type was thrown
		catch(\InvalidArgumentException | \RangeException | \Exception | \TypeError $exception) {
			$exceptionType = get_class($exception);
			throw(new $exceptionType($exception->getMessage(), 0, $exception));
		}
	}

	/**
	 * accessor method for cat id
	 *
	 * @return Uuid value of cat id
	 **/
	public function getCatId() : Uuid {
		return($this->catId);
	}

	/**
	 * mutator method for cat id
	 *
	 * @param Uuid|string $newCatId new value of cat id
	 * @throws \RangeException if $newCatId is not positive
	 * @throws \TypeError if $newCatId is not a uuid or string
	 **/
	public function setCatId( $newCatId) : void {
		try {
			$uuid = self::validateUuid($newCatId);
		} catch(\InvalidArgumentException | \RangeException | \Exception | \TypeError $exception) {
			$exceptionType = get_class($exception);
			throw(new $exceptionType($exception->getMessage(), 0, $exception));
		}

		// convert and store the cat id
		$this->catId = $uuid;
	}

	/**
	 * accessor method for cat color
	 *
	 * @return string value of cat color data
	 **/
	public function getCatColor() : string {
		return($this->catColor);
	}

	/**
	 * mutator method for cat color data
	 *
	 * @param string $newCatColor new value of cat color data
	 * @throws \InvalidArgumentException if $newCatColor is not a string or insecure
	 * @throws \RangeException if $newCatColor is > 13 characters
	 * @throws \TypeError if $newCatColor is not a string
	 **/
	public function setCatColor(string $newCatColor) : void {
		// verify the cat color data is secure
		$newCatColor = trim($newCatColor);
		$newCatColor = filter_var($newCatColor, FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
		if(empty($newCatColor) === true) {
			throw(new \InvalidArgumentException("cat color is empty or insecure"));
		}

		// verify the cat color data will fit in the database
		if(strlen($newCatColor) > 13) {
			throw(new \RangeException("cat color is too large"));
		}

		// store the cat color data
		$this->catColor = $newCatColor;
	}

	/**
	 * inserts this Cat into mySQL
	 *
	 * @param \PDO $pdo PDO connection object
	 * @throws \PDOException when mySQL related errors occur
	 * @throws \TypeError if $pdo is not a PDO connection object
	 **/
	public function insert(\PDO $pdo) : void {

		// create query template
		$query = "INSERT INTO cat(catId, catColor) VALUES(:catId, :catColor)";
		$statement = $pdo->prepare($query);

		// bind the member variables to the place holders in the template
		$parameters = ["catId" => $this->catId->getBytes(), "catColor" => $this->catColor];
		$statement->execute($parameters);
	}

	/**
	 * gets the Cat by catId
	 *
	 * @param \PDO $pdo PDO connection object
	 * @param Uuid|string $catId cat id to search for
	 * @return Cat|null Cat found or null if not found
	 * @throws \PDOException when mySQL related errors occur
	 * @throws \TypeError when a variable are not the correct data type
	 **/
	public static function getCatByCatId(\PDO $pdo, $catId) : ?Cat {
		// sanitize the catId before searching
		try {
			$catId = self::validateUuid($catId);
		} catch(\InvalidArgumentException | \RangeException | \Exception | \TypeError $exception) {
			throw(new \PDOException($exception->getMessage(), 0, $exception));
		}

		// create query template
		$query = "SELECT catId, catColor FROM cat WHERE catId = :catId";
		$statement = $pdo->prepare($query);

		// bind the cat id to the place holder in the template
		$parameters = ["catId" => $catId->getBytes()];
		$statement->execute($parameters);

		// grab the cat from mySQL
		try {
			$cat = null;
			$statement->setFetchMode(\PDO::FETCH_ASSOC);
			$row = $statement->fetch();
			if($row !== false) {
				$cat = new Cat($row["catId"], $row["catColor"]);
			}
		} catch(\Exception $exception) {
			// if the row couldn't be converted, rethrow it
			throw(new \PDOException($exception->getMessage(), 0, $exception));
		}
		return($cat);
	}

	/**
	 * formats the state variables for JSON serialization
	 *
	 * @return array resulting state variables to serialize
	 **/
	public function jsonSerialize(): array {
		$fields = get_object_vars($this);

		$fields["catId"] = $this->catId->toString();

		return ($fields);
	}


}


?>