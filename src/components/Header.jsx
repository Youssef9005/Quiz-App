import quiz_logo from "/quiz-logo.png";

export default function Header() {
  return(
    <header>
      <img src={quiz_logo} alt="Quiz Logo"/>
      <h1>Quiz App</h1>
    </header>
  )
}