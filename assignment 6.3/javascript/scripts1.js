
//Subject Object constructor pattern
function Subject(name, totalMarks, minMarks = 35) {
    this.totalMarks = totalMarks;
    this.minMarks = minMarks;
    this.name = name;

}
//new subjects created using subject object constructor method
var Science = new Subject('Science', 100, 35);
var Maths = new Subject('Maths', 100, 35);
var English = new Subject('English', 100, 35);
var SocialStudies = new Subject('Social Studies', 100, 35);
var Geography = new Subject('Geography', 100, 35);

/* Add your subjects Above and add then to array below as well */


//*IMPORTANT* Any new Subject created must be added to the array below!!!!!!!!!!!!!!!!!
var subjectArr = [Science, Maths, English, SocialStudies, Geography];

//Student Object constructor pattern
function Student(name) {
    this.name = name;
}
//Function to evaluate result of individual Subject
Student.prototype.StudentResult = function(subjectMarks, subject) {
        if (subjectMarks < subject.minMarks) {
            this[subject.name] = 'Fail';
        } else if (subjectMarks < 75 && subjectMarks > 50) {
            this[subject.name] = 'B';
        } else if (subjectMarks >= 75) {
            this[subject.name] = 'A';
        } else {
            this[subject.name] = 'C';
        }

    }
//Function to evaluate and add result of all Subjects

Student.prototype.allResult = function() {

    var total = 0;

    for (var i = 0; i < subjectArr.length; i++) {
        var marks = prompt('Enter marks of ' + this.name + ' for ' + subjectArr[i].name + ' subject' + ' out of ' + subjectArr[i].totalMarks);
        if (marks == "") {
            marks = 0;
        }

        function studentMarks(marks) {

            var intMark = parseInt(marks);
            total = total + intMark;
        };
        studentMarks(marks);
        this.StudentResult(marks, subjectArr[i]);
    }
    this.avgMarks = (total / (subjectArr.length));
}

//function that creates table for student's result sheet
function tableMaker() {
    var table = document.querySelector('#resultDiv table');
    var tableRow = document.createElement('tr');
    var tableData = document.createElement('td');
    var headingStu = document.createElement('th');
    tableRow.appendChild(headingStu);
    var appendTr = table.appendChild(tableRow);
    var studentHe = document.createTextNode('Students');
    headingStu.appendChild(studentHe);

    for (var i = 0; i < subjectArr.length; i++) {
        var tableHeading = document.createElement('th');
        var SubjectHead = document.createTextNode(subjectArr[i].name);
        var appendTh = tableRow.appendChild(tableHeading);
        var appendHe = tableHeading.appendChild(SubjectHead);
    }
    var heAvg = document.createElement('th');
    var avgHe = document.createTextNode('Average Marks');
    heAvg.appendChild(avgHe);
    var rowTh = document.querySelector('tr');

    var tableLast = rowTh.getElementsByTagName('th')[subjectArr.length];
    tableRow.insertBefore(heAvg, tableLast.nextSibling);


};
tableMaker();

//function that prints out results detail to the table sheet
Student.prototype.printResult = function() {
    var table = document.querySelector('#resultDiv table');
    var tableRow = document.createElement('tr');
    var appendTr = table.appendChild(tableRow);

    for (prop in this) {
        if (this.hasOwnProperty(prop)) {
            var tableData = document.createElement('td');
            tableRow.appendChild(tableData);
            var studentDetails = document.createTextNode(this[prop]);
            tableData.appendChild(studentDetails);
        }
    }

}




//created student named John Doe
var JohnIce = new Student('John Ice');
JohnIce.allResult();

//created student named Jane Doe
var JaneDoe = new Student('Jane Doe');
JaneDoe.allResult();

// //created student named Mary Doe
// var MaryDoe = new Student('Mary Doe');
// MaryDoe.allResult();

// //created student named Dominic Blue
// var DominicBlue = new Student('Dominic Blue');
// DominicBlue.allResult();

// //created student named Peter Parker
// var PeterParker = new Student('Peter Parker');
// PeterParker.allResult();

//printed their result to result sheet table
JohnIce.printResult();
JaneDoe.printResult();