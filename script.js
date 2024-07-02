function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "解決") {
        result.textContent = "おめでとう！";
    } else if (answerInput === "真相") {
        result.textContent = "完全解決";
    } else {
        result.textContent = "残念";
    }
}
