export default function HobbyLinks() {
  const hobbyLinks = [
    "https://www.ravelry.com/account/login",
    "https://hotchocolate15k.com/city/st-louis/",
    "https://libbyapp.com/interview/welcome#doYouHaveACard",
  ];
  return (
    <div>
      <h3>My Hobbies</h3>
      <a href={hobbyLinks[0]}>
        Knitting: Ravelry is like a Wikipedia for knitters and crocheters
      </a>
      <br></br>
      <a href={hobbyLinks[1]}>
        Jogging: There is a lot of chocolate at the end of this 5K
      </a>
      <br></br>
      <a href={hobbyLinks[2]}>
        Reading: Reading on the Libby app has saved me hundreds of dollars
      </a>
    </div>
  );
}
