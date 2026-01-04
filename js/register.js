const form = document.querySelector('.register-form');
const lastnameEl = document.getElementById('lastname');
const firstnameEl = document.getElementById('firstname');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');
const termsEl = document.getElementById('terms');

// Hàm hiển thị lỗi
function showError(input, message) {
    const formGroup = input.parentElement; // Lấy thẻ cha .form-group
    const errorSmall = formGroup.querySelector('small.error-message');

    // Nếu chưa có thẻ small thì tạo mới
    if (!errorSmall) {
        const small = document.createElement('small');
        small.className = 'error-message';
        small.innerText = message;
        formGroup.appendChild(small);
    } else {
        errorSmall.innerText = message;
    }

    formGroup.classList.add('error');
}

// Hàm xóa lỗi (khi người dùng nhập lại đúng)
function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    const errorSmall = formGroup.querySelector('small.error-message');
    if (errorSmall) {
        errorSmall.innerText = '';
    }
}

// Hàm kiểm tra định dạng Email (Regex)
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Hàm lấy danh sách user từ LocalStorage
function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Xử lý sự kiện Submit
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn form reload trang

    let isValid = true;

    // --- Validate Họ và Tên ---
    if (lastnameEl.value.trim() === '') {
        showError(lastnameEl, 'Họ và tên đệm không được để trống');
        isValid = false;
    } else {
        showSuccess(lastnameEl);
    }

    if (firstnameEl.value.trim() === '') {
        showError(firstnameEl, 'Tên không được để trống');
        isValid = false;
    } else {
        showSuccess(firstnameEl);
    }

    // --- Validate Email ---
    const emailValue = emailEl.value.trim();
    if (emailValue === '') {
        showError(emailEl, 'Email không được để trống');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        showError(emailEl, 'Email không đúng định dạng');
        isValid = false;
    } else {
        // Kiểm tra email đã tồn tại chưa
        const users = getUsers();
        const isExist = users.some(user => user.email === emailValue);
        if (isExist) {
            showError(emailEl, 'Email này đã được sử dụng');
            isValid = false;
        } else {
            showSuccess(emailEl);
        }
    }

    // --- Validate Mật khẩu ---
    const passwordValue = passwordEl.value.trim();
    if (passwordValue === '') {
        showError(passwordEl, 'Mật khẩu không được để trống');
        isValid = false;
    } else if (passwordValue.length < 8) {
        showError(passwordEl, 'Mật khẩu phải có ít nhất 8 ký tự');
        isValid = false;
    } else {
        showSuccess(passwordEl);
    }

    // --- Validate Xác nhận mật khẩu ---
    const confirmPasswordValue = confirmPasswordEl.value.trim();
    if (confirmPasswordValue === '') {
        showError(confirmPasswordEl, 'Vui lòng xác nhận mật khẩu');
        isValid = false;
    } else if (passwordValue !== confirmPasswordValue) {
        showError(confirmPasswordEl, 'Mật khẩu xác nhận không khớp');
        isValid = false;
    } else {
        showSuccess(confirmPasswordEl);
    }

    // --- Validate Checkbox Điều khoản ---
    if (!termsEl.checked) {
        showErrorToast("Bạn phải đồng ý với chính sách và điều khoản")
        isValid = false;
    }

    // --- NẾU TẤT CẢ HỢP LỆ ---
    if (isValid) {
        const users = getUsers();

        // Tạo ID tự tăng
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

        // Tạo object User theo đúng cấu trúc ảnh JSON bạn gửi
        const newUser = {
            id: newId,
            first_name: firstnameEl.value.trim(),
            last_name: lastnameEl.value.trim(),
            gender: 0, // Mặc định 
            date_of_birth: "", // Mặc định
            address: "", // Mặc định
            avatar: "https://placehold.co/150x150", // Ảnh mặc định
            email: emailEl.value.trim(),
            password: passwordEl.value.trim(), 
            phone_number: "", // Mặc định
            created_at: new Date().toISOString()
        };

        // Lưu vào mảng và đẩy lên LocalStorage
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Đặt cờ để trang Login hiển thị thông báo thành công
        localStorage.setItem('registerSuccess', 'true');

        // Chuyển hướng về trang đăng nhập
        window.location.href = 'login.html';
    }
});

function showToast({ title = '', message = '', type = 'success', duration = 3000 }) {
    const main = document.getElementById('toast-container');
    if (main) {
        const toast = document.createElement('div');
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