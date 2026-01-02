const buttons = document.querySelectorAll('.squad-buttons button');
const modals = document.querySelectorAll('.modal');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetModal = document.getElementById(targetId);

    const isActive = targetModal.classList.contains('active');

    // 모든 모달 닫기 + 버튼 비활성화
    modals.forEach(modal => modal.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active')); 

    if (!isActive) {
      // 클릭한 모달 열기 + 버튼 활성화
      targetModal.classList.add('active');
      button.classList.add('active');
    }
  });
});
