<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Snap Challenge 07-30</title>
	</head>
	<body>

/*** gets Tweets by Tweet Date
*
* @param \PDO $pdo PDO connection object
* @param datetime $tweetDateTime tweet date to search for
* @return \SplFixedArray SplFixedArray of Tweets found or null if not found
* @throws \PDOException when mySQL related errors occur
* @throws \TypeError when variables are not the correct data type
**/

	public static function getTweetsByTweetDate(\PDO $pdo) : \SPLFixedArray {
		// create query template
		$query = "SELECT tweetId, tweetProfileId, tweetContent, tweetDate FROM tweet WHERE tweetDate = :tweetDate";
		$statement = $pdo->prepare($query);
		$statement->execute();

		// bind the tweet content to the place holder in the template
		$tweetDate = "%$tweetDate%";
		$parameters = ["tweetDate" => $tweetDate];
		$statement->execute($parameters);

		// build an array of tweets
		$tweets = new \SplFixedArray($statement->rowCount());
		$statement->setFetchMode(\PDO::FETCH_ASSOC);
		while(($row = $statement->fetch()) !== false) {
				try {
						$tweet = new Tweet($row["tweetId"], $row["tweetProfileId"], $row["tweetContent"], $row["tweetDate"]);
						$tweets[$tweets->key()] = $tweet;
						$tweets->next();
				} catch(\Exception $exception) {
						// if the row couldn't be converted, rethrow it
						throw(new \PDOException($exception->getMessage(), 0, $exception));
				}
		}
		return ($tweets);
}

	</body>
</html>