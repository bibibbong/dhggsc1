document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const inputId = document.getElementById('studentId').value.trim();
  const inputName = document.getElementById('studentName').value.trim();

  const resultBox = document.getElementById('result');
  const idField = document.getElementById('googleId');

  const student = studentData.find(
    s => s.id === Number(inputId) && s.name === inputName
  );

  if (student) {
    idField.textContent = student.googleid;
  } else {
    idField.textContent = '찾을 수 없음';
  }

  resultBox.style.display = 'block';
});
