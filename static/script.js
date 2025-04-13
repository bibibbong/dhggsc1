let studentData = [];

// JSON 불러오기
fetch('static/students.json')
  .then(response => response.json())
  .then(data => {
    studentData = data;
  })
  .catch(error => {
    console.error('데이터 로딩 오류:', error);
  });

document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const inputId = document.getElementById('studentId').value.trim();
  const inputName = document.getElementById('studentName').value.trim();

  const resultBox = document.getElementById('result');
  const idField = document.getElementById('googleId');

  const student = studentData.find(
    s => s.id === inputId && s.name === inputName
  );

  if (student) {
    idField.textContent = student.googleId;
  } else {
    idField.textContent = '찾을 수 없음';
  }

  resultBox.style.display = 'block';
});
