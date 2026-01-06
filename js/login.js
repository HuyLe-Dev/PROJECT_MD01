

document.addEventListener('DOMContentLoaded', () => {
    // Kiểm tra xem có cờ đăng ký thành công không
    if (localStorage.getItem('registerSuccess')) {

        showSuccessToast("Đăng ký tài khoản thành công! Vui lòng đăng nhập.")
        // Xóa cờ để không hiện lại khi F5
        localStorage.removeItem('registerSuccess');
    }

    const loginForm = document.querySelector('.form');
    const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');

    // Hàm hiển thị lỗi input (viền đỏ)
    function showInputError(input, message) {
        const formGroup = input.parentElement;
        const errorSmall = formGroup.querySelector('small.error-message');
        if (errorSmall) {
            errorSmall.innerText = message;
        }
        formGroup.classList.add('error');
    }

    // Hàm xóa lỗi input
    function showInputSuccess(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
        const errorSmall = formGroup.querySelector('small.error-message');
        if (errorSmall) {
            errorSmall.innerText = '';
        }
    }

    // Xử lý sự kiện Submit
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Chặn reload trang

            let isValid = true;
            const emailValue = emailEl.value.trim();
            const passwordValue = passwordEl.value.trim();

            // Validate: Email rỗng
            if (!emailValue) {
                showInputError(emailEl, 'Email không được để trống');
                isValid = false;
            } else {
                showInputSuccess(emailEl);
            }

            // Validate: Password rỗng
            if (!passwordValue) {
                showInputError(passwordEl, 'Mật khẩu không được để trống');
                isValid = false;
            } else {
                showInputSuccess(passwordEl);
            }

            // Nếu dữ liệu nhập vào hợp lệ, tiến hành kiểm tra thông tin đăng nhập
            if (isValid) {
                // Lấy danh sách users từ LocalStorage
                const users = JSON.parse(localStorage.getItem('users')) || [];

                // Tìm user khớp email và password
                const user = users.find(
                    u => u.email === emailValue && u.password === passwordValue
                );

                if (user) {
                    // --- ĐĂNG NHẬP THÀNH CÔNG ---

                    // Lưu thông tin người dùng đang đăng nhập để sử dụng ở Dashboard
                    // Xóa password trước khi lưu để bảo mật
                    const currentUser = { ...user };
                    delete currentUser.password;
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));

                    // Thông báo & Chuyển trang
                    showSuccessToast('Đăng nhập thành công! Đang chuyển hướng...');

                    setTimeout(() => {
                        window.location.href = '../pages/statistics.html'; // Chuyển về Dashboard
                    }, 1500); // Đợi 1.5s để người dùng đọc thông báo

                } else {
                    // --- ĐĂNG NHẬP THẤT BẠI ---
                    showErrorToast('Email hoặc mật khẩu không chính xác');
                }
            }
        });
    }
});

function showToast({ title = '', message = '', type = 'success', duration = 3000 }) {
    const main = document.getElementById('toast-container');
    if (main) {
        const toast = document.createElement('div');
        // ... (Giữ nguyên phần logic tạo thẻ div như cũ) ...
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: 'ri-checkbox-circle-line',
            error: 'ri-error-warning-line',
            warning: 'ri-alert-line'
        };
        const icon = icons[type];

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft 0.3s ease forwards, fadeOut linear 1s ${duration / 1000}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon"><i class="${icon}"></i></div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close"><i class="ri-close-line"></i></div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast(message) {
    showToast({
        title: 'Thành công!',
        message: message,
        type: 'success',
        duration: 3000
    });
}

function showErrorToast(message) {
    showToast({
        title: 'Thất bại!',
        message: message,
        type: 'error',
        duration: 3000
    });
}