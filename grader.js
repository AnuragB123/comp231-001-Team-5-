//This function allows to calculate the average of the grade
function calcAvgGrades()
{
    var subject1Grade = parseInt(document.getElementById("subject1").value);
    var subject2Grade = parseInt(document.getElementById("subject2").value);
    var subject3Grade = parseInt(document.getElementById("subject3").value);
    var subject4Grade = parseInt(document.getElementById("subject4").value);
    document.getElementById("avgGrade").value = (subject1Grade + subject2Grade + subject3Grade + subject4Grade) / 4
}

//This function allows to present a letter grading for each subject score and the average grade
function calcGrades()
{
    var subject1Grade = parseInt(document.getElementById("subject1").value);
    var subject2Grade = parseInt(document.getElementById("subject2").value);
    var subject3Grade = parseInt(document.getElementById("subject3").value);
    var subject4Grade = parseInt(document.getElementById("subject4").value);
    var averageGrade = parseInt(document.getElementById("avgGrade").value);

    var letter;

    //For each Subject
    //Subject 1
    if (subject1Grade >= 90)
    {
        letter = 'A';
        document.getElementById("letterGrade1").value = letter;
    }
    else if (subject1Grade >= 80)
    {
        letter = 'B';
        document.getElementById("letterGrade1").value = letter;
    }
    else if (subject1Grade >= 70)
    {
        letter = 'C';
        document.getElementById("letterGrade1").value = letter;
    }
    else if (subject1Grade >= 60)
    {
        letter = 'D';
        document.getElementById("letterGrade1").value = letter;
    }
    else
    {
        letter = 'F';
        document.getElementById("letterGrade1").value = letter;
    }

    //Subject 2
    if (subject2Grade >= 90)
    {
        letter = 'A';
        document.getElementById("letterGrade2").value = letter;
    }
    else if (subject2Grade >= 80)
    {
        letter = 'B';
        document.getElementById("letterGrade2").value = letter;
    }
    else if (subject2Grade >= 70)
    {
        letter = 'C';
        document.getElementById("letterGrade2").value = letter;
    }
    else if (subject2Grade >= 60)
    {
        letter = 'D';
        document.getElementById("letterGrade2").value = letter;
    }
    else
    {
        letter = 'F';
        document.getElementById("letterGrade2").value = letter;
    }

    //Subject 3
    if (subject3Grade >= 90)
    {
        letter = 'A';
        document.getElementById("letterGrade3").value = letter;
    }
    else if (subject3Grade >= 80)
    {
        letter = 'B';
        document.getElementById("letterGrade3").value = letter;
    }
    else if (subject3Grade >= 70)
    {
        letter = 'C';
        document.getElementById("letterGrade3").value = letter;
    }
    else if (subject3Grade >= 60)
    {
        letter = 'D';
        document.getElementById("letterGrade3").value = letter;
    }
    else
    {
        letter = 'F';
        document.getElementById("letterGrade3").value = letter;
    }

    //Subject 4
    if (subject4Grade >= 90)
    {
        letter = 'A';
        document.getElementById("letterGrade4").value = letter;
    }
    else if (subject4Grade >= 80)
    {
        letter = 'B';
        document.getElementById("letterGrade4").value = letter;
    }
    else if (subject3Grade >= 70)
    {
        letter = 'C';
        document.getElementById("letterGrade4").value = letter;
    }
    else if (subject4Grade >= 60)
    {
        letter = 'D';
        document.getElementById("letterGrade4").value = letter;
    }
    else
    {
        letter = 'F';
        document.getElementById("letterGrade4").value = letter;
    }

    //Average Grade
    if (averageGrade >= 90)
    {
        letter = 'A';
        document.getElementById("letterGrade5").value = letter;
    }
    else if (subject3Grade >= 80)
    {
        letter = 'B';
        document.getElementById("letterGrade5").value = letter;
    }
    else if (subject3Grade >= 70)
    {
        letter = 'C';
        document.getElementById("letterGrade5").value = letter;
    }
    else if (subject3Grade >= 60)
    {
        letter = 'D';
        document.getElementById("letterGrade5").value = letter;
    }
    else
    {
        letter = 'F';
        document.getElementById("letterGrade5") = letter;
    }
}