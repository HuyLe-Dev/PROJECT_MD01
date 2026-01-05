document.addEventListener('DOMContentLoaded', () => {

  // CHẠY LẦN ĐẦU
  // Load thông tin User (Avatar)
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const avatarEl = document.getElementById('currentUserAvatar');

  if (currentUser) {
    // Nếu user có avatar thì lấy, nếu không dùng ảnh mặc định trong HTML
    if (currentUser.avatar && avatarEl) {
      avatarEl.src = currentUser.avatar;
    }
  } else {
    // Nếu chưa đăng nhập -> Chuyển về login
    window.location.href = '../pages/login.html';
  }

  // Xử lý Dropdown User
  const userBtn = document.getElementById('userBtn');
  const userDropdown = document.getElementById('userDropdown');

  // Click vào avatar -> Toggle dropdown
  if (userBtn) {
    userBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Ngăn sự kiện click lan ra window
      userDropdown.classList.toggle('active');
    });
  }

  // Click ra ngoài -> Đóng dropdown
  window.addEventListener('click', (e) => {
    if (userDropdown && !userBtn.contains(e.target)) {
      userDropdown.classList.remove('active');
    }
  });

  const logoutModal = document.getElementById('logout-modal');
  const openLogoutBtn = document.getElementById('openLogoutModalBtn');
  const confirmLogoutBtn = document.getElementById('btn-confirm-logout');
  const cancelLogoutBtn = document.getElementById('btn-cancel-logout');

  // Mở Modal
  if (openLogoutBtn) {
    openLogoutBtn.addEventListener('click', () => {
      userDropdown.classList.remove('active'); // Đóng dropdown trước
      logoutModal.classList.remove('hidden');  // Hiện modal logout
      logoutModal.classList.add('show');       // Thêm class show (nếu có animation)
    });
  }

  // Đóng Modal (Nút Hủy)
  if (cancelLogoutBtn) {
    cancelLogoutBtn.addEventListener('click', () => {
      logoutModal.classList.add('hidden');
      logoutModal.classList.remove('show');
    });
  }

  // Xác nhận Đăng xuất (Nút Logout)
  if (confirmLogoutBtn) {
    confirmLogoutBtn.addEventListener('click', () => {
      // Xóa thông tin user hiện tại
      localStorage.removeItem('currentUser');

      // Chuyển hướng về trang Login
      window.location.href = '../pages/login.html';
    });
  }

  // Click ra ngoài vùng đen mờ để đóng Modal Logout
  if (logoutModal) {
    logoutModal.addEventListener('click', (e) => {
      if (e.target === logoutModal) {
        logoutModal.classList.add('hidden');
        logoutModal.classList.remove('show');
      }
    });
  }
});
