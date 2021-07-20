function calcTotalGrades()
{
    var subject1Grade = parseInt(document.getElementById("subject1").value);
    var subject2Grade = parseInt(document.getElementById("subject2").value);
    var subject3Grade = parseInt(document.getElementById("subject3").value);
    var subject4Grade = parseInt(document.getElementById("subject4").value);
    document.getElementById("totalGrade").value = subject1Grade + subject2Grade + subject3Grade + subject4Grade;
}

function calcAvgGrades()
{
    var subject1Grade = parseInt(document.getElementById("subject1").value);
    var subject2Grade = parseInt(document.getElementById("subject2").value);
    var subject3Grade = parseInt(document.getElementById("subject3").value);
    var subject4Grade = parseInt(document.getElementById("subject4").value);
    document.getElementById("avgGrade").value = (subject1Grade + subject2Grade + subject3Grade + subject4Grade) / 4
}
