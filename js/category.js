const sampleData = [
    { "id": 1, "category_code": "DM001", "category_name": "Hoa quả tươi", "image": "https://example.com/img1.jpg", "status": "ACTIVE", "created_at": "2023-01-10" },
    { "id": 2, "category_code": "DM002", "category_name": "Rau củ hữu cơ", "image": "https://example.com/img2.jpg", "status": "INACTIVE", "created_at": "2023-02-15" },
    { "id": 3, "category_code": "DM003", "category_name": "Thịt tươi sống", "image": "https://example.com/img3.jpg", "status": "ACTIVE", "created_at": "2023-03-20" },
    { "id": 4, "category_code": "DM004", "category_name": "Hải sản tươi", "image": "https://example.com/img4.jpg", "status": "ACTIVE", "created_at": "2023-04-05" },
    { "id": 5, "category_code": "DM005", "category_name": "Đồ uống & Giải khát", "image": "https://example.com/img5.jpg", "status": "ACTIVE", "created_at": "2023-05-12" },
    { "id": 6, "category_code": "DM006", "category_name": "Bánh kẹo & Ăn vặt", "image": "https://example.com/img6.jpg", "status": "INACTIVE", "created_at": "2023-06-01" },
    { "id": 7, "category_code": "DM007", "category_name": "Gia vị & Nước chấm", "image": "https://example.com/img7.jpg", "status": "ACTIVE", "created_at": "2023-06-15" },
    { "id": 8, "category_code": "DM008", "category_name": "Thực phẩm khô", "image": "https://example.com/img8.jpg", "status": "ACTIVE", "created_at": "2023-07-20" },
    { "id": 9, "category_code": "DM009", "category_name": "Sữa & Chế phẩm sữa", "image": "https://example.com/img9.jpg", "status": "ACTIVE", "created_at": "2023-08-05" },
    { "id": 10, "category_code": "DM010", "category_name": "Đồ hộp & Đóng gói", "image": "https://example.com/img10.jpg", "status": "INACTIVE", "created_at": "2023-08-25" },
    { "id": 11, "category_code": "DM011", "category_name": "Hóa mỹ phẩm", "image": "https://example.com/img11.jpg", "status": "ACTIVE", "created_at": "2023-09-10" },
    { "id": 12, "category_code": "DM012", "category_name": "Đồ dùng gia đình", "image": "https://example.com/img12.jpg", "status": "ACTIVE", "created_at": "2023-10-01" },
    { "id": 13, "category_code": "DM013", "category_name": "Mẹ và Bé", "image": "https://example.com/img13.jpg", "status": "INACTIVE", "created_at": "2023-10-20" },
    { "id": 14, "category_code": "DM014", "category_name": "Văn phòng phẩm", "image": "https://example.com/img14.jpg", "status": "ACTIVE", "created_at": "2023-11-05" },
    { "id": 15, "category_code": "DM015", "category_name": "Thiết bị điện tử", "image": "https://example.com/img15.jpg", "status": "ACTIVE", "created_at": "2023-12-01" }
];
// Hàm bật/tắt danh sách
function toggleDropdown() {
    const dropdown = document.getElementById('statusDropdown');
    dropdown.classList.toggle('active');
}

// Hàm xử lý select Option
function selectOption(text, value) {
    // Cập nhật chữ hiển thị
    document.getElementById('selectedText').innerText = text;

    // Cập nhật giá trị vào input ẩn (để gửi form)
    document.getElementById('statusInput').value = value;

    // Đóng dropdown
    document.getElementById('statusDropdown').classList.remove('active');

    //Gọi hàm lọc dữ liệu
    filterData();
}

// Đóng dropdown khi click ra ngoài
window.onclick = function (event) {
    const dropdown = document.getElementById('statusDropdown');
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
}

// Khởi tạo dữ liệu từ LocalStorage
let categories = JSON.parse(localStorage.getItem('categories')) || sampleData;

// Lưu vào localStorage ngay lần đầu nếu chưa có để đồng bộ
if (!localStorage.getItem('categories')) {
    localStorage.setItem('categories', JSON.stringify(categories));
}

// Hàm Render bảng dữ liệu
function renderTableByPage() {
    const tbody = document.getElementById('categoryTableBody');
    tbody.innerHTML = '';

    // Tính toán vị trí bắt đầu và kết thúc
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Cắt dữ liệu cho trang hiện tại
    const dataToShow = currentFilteredData.slice(startIndex, endIndex);

    if (dataToShow.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 20px; color:#888;">Không tìm thấy dữ liệu</td></tr>`;
        return;
    }

    // render dữ liệu
    dataToShow.forEach(cat => {
        const statusBadge = cat.status === 'ACTIVE'
            ? '<span class="badge badge-active"><span class="green-dot"></span>Đang hoạt động</span>'
            : '<span class="badge badge-inactive"><span class="red-dot"></span>Ngừng hoạt động</span>';

        const row = `
            <tr>
                <td>${cat.category_code}</td>
                <td>${cat.category_name}</td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn-icon btn-delete" onclick="deleteCategory(${cat.id})"><i class="ri-delete-bin-line"></i></button>
                    <button class="btn-icon btn-edit" onclick="editCategory(${cat.id})"><i class="ri-pencil-line"></i></button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Chức năng Tìm kiếm (Theo Mã và Tên)
function filterData() {
    const statusInput = document.getElementById('statusInput').value;
    const searchName = document.getElementById('searchName').value.toLowerCase();

    const filtered = categories.filter(cat => {
        // Nếu statusInput là ALL -> render tất cả
        const matchStatus = statusInput === 'ALL' || cat.status === statusInput;

        // Logic lọc tên: Kiểm tra chuỗi con
        const matchName = cat.category_name.toLowerCase().includes(searchName);

        // Cả 2 điều kiện phải cùng đúng
        return matchStatus && matchName;
    });

    // Sắp xếp theo mũi tên
    if (currentSort.column) {
        filtered.sort((a, b) => {
            const valA = a[currentSort.column].toString();
            const valB = b[currentSort.column].toString();

            // So sánh tiếng Việt
            if (currentSort.direction === 'asc') {
                return valA.localeCompare(valB, 'vi'); // Tăng dần
            } else {
                return valB.localeCompare(valA, 'vi'); // Giảm dần
            }
        });
    }

    currentFilteredData = filtered;
    currentPage = 1;

    // Render bảng và Phân trang
    renderPagination();
    renderTableByPage();
}


/* --- KHAI BÁO BIẾN TOÀN CỤC CHO PHÂN TRANG --- */
let currentPage = 1;
const itemsPerPage = 8; // Số dòng mỗi trang
let currentFilteredData = []; // Lưu trữ dữ liệu sau khi Lọc & Sort


/* --- HÀM RENDER GIAO DIỆN PHÂN TRANG --- */
function renderPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(currentFilteredData.length / itemsPerPage);

    // Nếu không có dữ liệu hoặc chỉ có 1 trang thì ẩn phân trang
    if (totalPages <= 1) return;

    // --- NÚT PREV ---
    const prevBtn = document.createElement('div');
    prevBtn.className = `page-btn ${currentPage === 1 ? 'disabled' : ''}`;
    prevBtn.innerHTML = `<i class="ri-arrow-left-s-line"></i>`;
    prevBtn.onclick = () => changePage(currentPage - 1, totalPages);
    paginationContainer.appendChild(prevBtn);

    // --- LOGIC TẠO SỐ TRANG (1 ... 4 5 6 ... 20) ---
    const pages = [];

    if (totalPages <= 7) {
        // Ít trang thì hiện hết (1 2 3 4 5 6 7)
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        // Nhiều trang -> Xử lý dấu 3 chấm
        if (currentPage <= 4) {
            // Đang ở đầu: 1 2 3 4 5 ... 20
            pages.push(1, 2, 3, 4, 5, '...', totalPages);
        } else if (currentPage >= totalPages - 3) {
            // Đang ở cuối: 1 ... 16 17 18 19 20
            pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
            // Đang ở giữa: 1 ... 4 5 6 ... 20
            pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
        }
    }

    // Vẽ các nút số trang
    pages.forEach(page => {
        if (page === '...') {
            const dots = document.createElement('div');
            dots.className = 'page-dots';
            dots.innerText = '...';
            paginationContainer.appendChild(dots);
        } else {
            const pageBtn = document.createElement('div');
            pageBtn.className = `page-btn ${page === currentPage ? 'active' : ''}`;
            pageBtn.innerText = page;
            pageBtn.onclick = () => changePage(page, totalPages);
            paginationContainer.appendChild(pageBtn);
        }
    });

    // --- NÚT NEXT ---
    const nextBtn = document.createElement('div');
    nextBtn.className = `page-btn ${currentPage === totalPages ? 'disabled' : ''}`;
    nextBtn.innerHTML = `<i class="ri-arrow-right-s-line"></i>`;
    nextBtn.onclick = () => changePage(currentPage + 1, totalPages);
    paginationContainer.appendChild(nextBtn);
}

/* --- HÀM CHUYỂN TRANG --- */
function changePage(newPage, totalPages) {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;

    currentPage = newPage;
    renderTableByPage();
    renderPagination();
}

// Lắng nghe sự kiện nhập liệu ô tìm kiếm
document.getElementById('searchName').addEventListener('input', filterData);

// MODAL & FORM LOGIC
function openModal() {
    document.getElementById('categoryModal').style.display = 'flex';
    document.getElementById('modalTitle').innerText = 'Thêm mới danh mục';
    resetForm();
}

function closeModal() {
    document.getElementById('categoryModal').style.display = 'none';
}

function resetForm() {
    document.getElementById('categoryId').value = '';

    const codeInput = document.getElementById('categoryCode');
    const nameInput = document.getElementById('categoryName');
    //Reset gap của modalContent
    document.getElementById("modalContent").style.gap = "24px";

    // Reset giá trị phòng trường hợp vừa click edit xong thì click thêm
    codeInput.value = '';
    nameInput.value = '';

    // Cho phép nhập khi thêm mới
    // codeInput.readOnly = false;
    // nameInput.readOnly = false;

    // Xóa lỗi cũ
    clearError('categoryCode', 'errorCode');
    clearError('categoryName', 'errorName');

    // Reset radio về Active
    const radios = document.getElementsByName('modalStatus');
    for (const radio of radios) {
        if (radio.value === 'ACTIVE') radio.checked = true;
    }
}

// VALIDATION LOGIC
function clearError(inputId, errorId) {
    document.getElementById(inputId).classList.remove('input-error');
    document.getElementById(errorId).style.display = 'none';
    document.getElementById(errorId).innerText = '';
}

function validateForm() {
    let isValid = true;
    const code = document.getElementById('categoryCode').value.trim();
    const name = document.getElementById('categoryName').value.trim();

    if (!code) {
        document.getElementById('errorCode').innerText = "Mã danh mục không được để trống";
        document.getElementById('errorCode').style.display = 'block';
        document.getElementById('categoryCode').classList.add('input-error');
        isValid = false;
    }

    if (!name) {
        document.getElementById('errorName').innerText = "Tên danh mục không được để trống";
        document.getElementById('errorName').style.display = 'block';
        document.getElementById('categoryName').classList.add('input-error');
        isValid = false;
    }
    return isValid;
}

// LƯU DỮ LIỆU (THÊM / SỬA)
function saveCategory() {
    // Validate trước
    if (!validateForm()) {
        document.getElementById("modalContent").style.gap = "12.6px";
        return;
    };

    const id = document.getElementById('categoryId').value;
    const code = document.getElementById('categoryCode').value.trim();
    const name = document.getElementById('categoryName').value.trim();

    // Lấy value Radio Button
    const statusRadio = document.querySelector('input[name="modalStatus"]:checked');
    const status = statusRadio ? statusRadio.value : 'ACTIVE';

    if (id) {
        // UPDATE
        const index = categories.findIndex(c => c.id == id);
        if (index !== -1) {
            categories[index].category_code = code;
            categories[index].category_name = name;
            categories[index].status = status;
        }
        showSuccessToast('Cập nhật sản phẩm thành công!');
    } else {
        // CREATE
        // Kiểm tra trùng mã (Optional)
        const isDuplicate = categories.some(c => c.category_code === code);
        if (isDuplicate) {
            document.getElementById('errorCode').innerText = "Mã danh mục đã tồn tại";
            document.getElementById('errorCode').style.display = 'block';
            document.getElementById('categoryCode').classList.add('input-error');
            return;
        }

        const newId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1;
        const newCategory = {
            id: newId,
            category_code: code,
            category_name: name,
            status: status,
            created_at: new Date().toISOString()
        };
        categories.push(newCategory);
        showSuccessToast('Thêm sản phẩm thành công!');
    }

    updateLocalStorage();
    closeModal();
    filterData(); // Load lại có áp dụng bộ lọc hiện tại
}

// 7. SỬA & XÓA
function editCategory(id) {
    const cat = categories.find(c => c.id == id);
    if (cat) {
        resetForm(); // Xóa lỗi cũ trước khi load data
        document.getElementById('categoryId').value = cat.id;
        const codeInput = document.getElementById('categoryCode');
        const nameInput = document.getElementById('categoryName');

        // Điền dữ liệu cũ
        codeInput.value = cat.category_code;
        nameInput.value = cat.category_name;

        // Khóa input (Không cho sửa)
        // codeInput.readOnly = true;
        // nameInput.readOnly = true;

        // Set Radio Button
        const radios = document.getElementsByName('modalStatus');
        for (const radio of radios) {
            if (radio.value === cat.status) {
                radio.checked = true;
                break;
            }
        }

        document.getElementById('modalTitle').innerText = 'Cập nhật danh mục';
        document.getElementById('categoryModal').style.display = 'flex';
    }
}

async function deleteCategory(id) {
    // Lấy danh sách sản phẩm hiện có
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // Kiểm tra xem có sản phẩm nào thuộc danh mục này không
    const isCategoryInUse = products.some(product => product.category_id == id);

    if (isCategoryInUse) {
        // Nếu có ít nhất 1 sản phẩm, hiện lỗi và dừng hàm
        showErrorToast('Không thể xóa! Danh mục này đang chứa sản phẩm.');
        return;
    }

    const categoryToDelete = categories.find(c => c.id === id);
    const name = categoryToDelete ? categoryToDelete.category_name : 'Sản phẩm này';

    // Gọi Modal và CHỜ (await) kết quả
    const isConfirmed = await showConfirmModal(name);

    // Nếu không có sản phẩm nào, tiến hành hỏi xác nhận và xóa
    if (isConfirmed) {
        // Lọc bỏ danh mục cần xóa
        categories = categories.filter(c => c.id !== id);

        // Cập nhật lại dữ liệu và giao diện
        updateLocalStorage();
        filterData();

        // Thông báo thành công
        showSuccessToast('Đã xóa danh mục thành công!');
    }
}

function updateLocalStorage() {
    localStorage.setItem('categories', JSON.stringify(categories));
}

// --- Khai báo biến trạng thái ---
let currentSort = {
    column: '',     // Cột đang chọn
    direction: 'desc' // Mặc định là giảm dần (desc)
};

// --- Hàm xử lý khi click vào th ---
function handleSort(column) {
    // Nếu click lại vào cột đang chọn -> Đảo chiều
    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'desc' ? 'asc' : 'desc';
    } else {
        // Nếu click vào cột MỚI -> Luôn reset về Giảm dần
        currentSort.column = column;
        currentSort.direction = 'desc';
    }

    // Cập nhật giao diện và dữ liệu
    updateSortIcons(column, currentSort.direction);
    filterData();
}

// --- Hàm cập nhật Icon mũi tên ---
function updateSortIcons(activeColumn, direction) {
    // Reset tất cả icon về trạng thái chờ (Mũi tên xuống,)
    const icons = document.querySelectorAll('th i');
    icons.forEach(icon => {
        icon.className = 'ri-arrow-down-line'; // Luôn để hình mũi tên xuống
        icon.style.color = '#ccc';
    });

    // Cập nhật icon của cột ĐANG CHỌN
    const activeIcon = document.getElementById(`icon-${activeColumn}`);
    if (activeIcon) {
        activeIcon.style.color = '#000';

        // Nếu đang tăng dần -> Mũi tên lên. Giảm dần -> Mũi tên xuống
        activeIcon.className = direction === 'asc' ? 'ri-arrow-up-line' : 'ri-arrow-down-line';
    }
}

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

// MODAL CALL

function showConfirmModal(productName) {
    return new Promise((resolve) => {
        const modal = document.getElementById('confirm-modal');
        const overlay = document.querySelector('.modal-overlay');
        const productNameEl = document.getElementById('confirm-product-name');
        const btnConfirm = document.getElementById('btn-confirm');
        const btnCancel = document.getElementById('btn-cancel');

        if (!modal) return resolve(false);

        // Điền tên sản phẩm
        productNameEl.textContent = productName;

        // Hiển thị Modal
        modal.classList.remove('hidden');
        modal.classList.add('show');

        // Hàm đóng modal và trả kết quả
        const closeModal = (result) => {
            modal.classList.remove('show');
            modal.classList.add('hidden');

            // Xóa sự kiện để tránh lặp lại lần sau (Cleanup)
            btnConfirm.onclick = null;
            btnCancel.onclick = null;

            resolve(result); // Trả về true (Xóa) hoặc false (Hủy)
        };

        // Gắn sự kiện click
        btnConfirm.onclick = () => closeModal(true);
        btnCancel.onclick = () => closeModal(false);

        // Click ra ngoài overlay thì đóng
        modal.onclick = (e) => {
            if (e.target === modal) closeModal(false);
        }
    });
}

filterData();
renderTableByPage();
