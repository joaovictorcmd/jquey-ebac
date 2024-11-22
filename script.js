$(document).ready(function () {
    $('#addTask').click(function () {
      const taskText = $('#taskInput').val().trim();
      if (taskText) {
        const taskItem = `
          <li>
            <span class="task-text">${taskText}</span>
            <div class="task-actions">
              <button class="complete-btn">✔</button>
              <button class="delete-btn">✖</button>
            </div>
          </li>`;
        $('#taskList').append(taskItem);
        $('#taskInput').val('');
      } else {
        alert('Digite uma tarefa!');
      }
    });
  
    $('#taskList').on('click', '.complete-btn', function () {
      $(this).closest('li').toggleClass('completed');
    });
  
    $('#taskList').on('click', '.delete-btn', function () {
      $(this).closest('li').remove();
    });
  });
  