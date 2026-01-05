
const dataProducts = [
    // --- NGÀNH HÀNG THỰC PHẨM (Category 1-10) ---
    {
        "id": 1,
        "product_code": "SP001",
        "product_name": "Táo Envy Mỹ (1kg)",
        "category_id": 1, // Hoa quả
        "stock": 50,
        "price": 120000,
        "discount": 10,
        "image": "https://example.com/tao-envy.jpg",
        "status": "ACTIVE",
        "description": "Táo Envy nhập khẩu trực tiếp từ Mỹ, size lớn, ngọt giòn.",
        "created_at": "2023-01-05T08:00:00Z"
    },
    {
        "id": 2,
        "product_code": "SP002",
        "product_name": "Cải thìa hữu cơ (500g)",
        "category_id": 2, // Rau củ
        "stock": 100,
        "price": 25000,
        "discount": 0,
        "image": "https://example.com/cai-thia.jpg",
        "status": "ACTIVE",
        "description": "Rau cải thìa trồng theo phương pháp hữu cơ, không thuốc trừ sâu.",
        "created_at": "2023-01-06T09:30:00Z"
    },
    {
        "id": 3,
        "product_code": "SP003",
        "product_name": "Ba chỉ bò Mỹ (500g)",
        "category_id": 3, // Thịt
        "stock": 40,
        "price": 165000,
        "discount": 5,
        "image": "https://example.com/ba-chi-bo.jpg",
        "status": "ACTIVE",
        "description": "Thịt ba chỉ bò Mỹ thái lát mỏng, thích hợp ăn lẩu, nướng.",
        "created_at": "2023-01-10T10:00:00Z"
    },
    {
        "id": 4,
        "product_code": "SP004",
        "product_name": "Cá hồi Nauy Fillet (300g)",
        "category_id": 4, // Hải sản
        "stock": 25,
        "price": 220000,
        "discount": 0,
        "image": "https://example.com/ca-hoi.jpg",
        "status": "ACTIVE",
        "description": "Cá hồi tươi Nauy cắt miếng, giàu Omega-3.",
        "created_at": "2023-02-01T11:15:00Z"
    },
    {
        "id": 5,
        "product_code": "SP005",
        "product_name": "Nước ngọt Coca Cola (Thùng 24 lon)",
        "category_id": 5, // Đồ uống
        "stock": 200,
        "price": 195000,
        "discount": 15,
        "image": "https://example.com/coca-cola.jpg",
        "status": "ACTIVE",
        "description": "Giải khát sảng khoái cùng Coca Cola vị nguyên bản.",
        "created_at": "2023-02-15T14:20:00Z"
    },
    {
        "id": 6,
        "product_code": "SP006",
        "product_name": "Bánh Snack khoai tây Lay's (Vị Tảo biển)",
        "category_id": 6, // Bánh kẹo
        "stock": 150,
        "price": 12000,
        "discount": 0,
        "image": "https://example.com/snack-lays.jpg",
        "status": "ACTIVE",
        "description": "Snack khoai tây chiên giòn rụm vị tảo biển thơm ngon.",
        "created_at": "2023-03-05T16:00:00Z"
    },
    {
        "id": 7,
        "product_code": "SP007",
        "product_name": "Nước mắm Nam Ngư (Chai 750ml)",
        "category_id": 7, // Gia vị
        "stock": 80,
        "price": 45000,
        "discount": 0,
        "image": "https://example.com/nuoc-mam.jpg",
        "status": "ACTIVE",
        "description": "Nước mắm cốt nhĩ thơm ngon, đậm đà hương vị Việt.",
        "created_at": "2023-03-20T09:00:00Z"
    },
    {
        "id": 8,
        "product_code": "SP008",
        "product_name": "Gạo ST25 Ông Cua (Túi 5kg)",
        "category_id": 8, // Thực phẩm khô
        "stock": 60,
        "price": 180000,
        "discount": 0,
        "image": "https://example.com/gao-st25.jpg",
        "status": "ACTIVE",
        "description": "Gạo ngon nhất thế giới, hạt dài, dẻo thơm.",
        "created_at": "2023-04-01T10:30:00Z"
    },
    {
        "id": 9,
        "product_code": "SP009",
        "product_name": "Sữa tươi TH True Milk (Lốc 4 hộp 180ml)",
        "category_id": 9, // Sữa
        "stock": 300,
        "price": 32000,
        "discount": 5,
        "image": "https://example.com/sua-th.jpg",
        "status": "ACTIVE",
        "description": "Sữa tươi tiệt trùng nguyên chất từ trang trại TH.",
        "created_at": "2023-04-10T08:45:00Z"
    },
    {
        "id": 10,
        "product_code": "SP010",
        "product_name": "Cá ngừ ngâm dầu Hạ Long (Hộp 175g)",
        "category_id": 10, // Đồ hộp
        "stock": 90,
        "price": 35000,
        "discount": 0,
        "image": "https://example.com/ca-ngu-hop.jpg",
        "status": "INACTIVE",
        "description": "Cá ngừ tươi ngon ngâm dầu hướng dương, tiện lợi chế biến.",
        "created_at": "2023-05-01T13:00:00Z"
    },

    // --- NGÀNH HÀNG PHI THỰC PHẨM (Category 11-15) ---
    {
        "id": 11,
        "product_code": "SP011",
        "product_name": "Dầu gội Head & Shoulders (Bạc hà 650ml)",
        "category_id": 11, // Hóa mỹ phẩm
        "stock": 45,
        "price": 145000,
        "discount": 10,
        "image": "https://example.com/dau-goi.jpg",
        "status": "ACTIVE",
        "description": "Dầu gội sạch gàu, mát lạnh sảng khoái.",
        "created_at": "2023-05-15T15:00:00Z"
    },
    {
        "id": 12,
        "product_code": "SP012",
        "product_name": "Chảo chống dính Sunhouse 26cm",
        "category_id": 12, // Đồ gia dụng
        "stock": 30,
        "price": 250000,
        "discount": 20,
        "image": "https://example.com/chao-sunhouse.jpg",
        "status": "ACTIVE",
        "description": "Chảo đá chống dính cao cấp, dùng được cho bếp từ.",
        "created_at": "2023-06-01T09:00:00Z"
    },
    {
        "id": 13,
        "product_code": "SP013",
        "product_name": "Tã quần Bobby size L (54 miếng)",
        "category_id": 13, // Mẹ và bé
        "stock": 70,
        "price": 280000,
        "discount": 5,
        "image": "https://example.com/ta-bobby.jpg",
        "status": "ACTIVE",
        "description": "Tã quần siêu mỏng, thấm hút tốt, thoáng khí cho bé.",
        "created_at": "2023-06-10T10:00:00Z"
    },
    {
        "id": 14,
        "product_code": "SP014",
        "product_name": "Bút bi Thiên Long (Hộp 20 cây)",
        "category_id": 14, // Văn phòng phẩm
        "stock": 200,
        "price": 80000,
        "discount": 0,
        "image": "https://example.com/but-bi.jpg",
        "status": "ACTIVE",
        "description": "Bút bi mực xanh truyền thống, viết trơn, đều mực.",
        "created_at": "2023-07-01T08:00:00Z"
    },
    {
        "id": 15,
        "product_code": "SP015",
        "product_name": "Chuột không dây Logitech M331",
        "category_id": 15, // Thiết bị điện tử
        "stock": 25,
        "price": 350000,
        "discount": 0,
        "image": "https://example.com/mouse-logitech.jpg",
        "status": "ACTIVE",
        "description": "Chuột silent giảm tiếng ồn, kết nối ổn định, pin lâu.",
        "created_at": "2023-07-15T11:00:00Z"
    },
    {
        "id": 16,
        "product_code": "SP016",
        "product_name": "Tai nghe Bluetooth AirPods Pro",
        "category_id": 15, // Thiết bị điện tử
        "stock": 10,
        "price": 4500000,
        "discount": 10,
        "image": "https://example.com/airpods.jpg",
        "status": "ACTIVE",
        "description": "Tai nghe chống ồn chủ động, âm thanh vòm sống động.",
        "created_at": "2023-08-01T14:00:00Z"
    },
    {
        "id": 17,
        "product_code": "SP017",
        "product_name": "Xoài Cát Chu (1kg)",
        "category_id": 1, // Hoa quả
        "stock": 40,
        "price": 60000,
        "discount": 0,
        "image": "https://example.com/xoai-cat-chu.jpg",
        "status": "ACTIVE",
        "description": "Xoài cát chu chín vàng, ngọt lịm, hạt lép.",
        "created_at": "2023-08-05T09:00:00Z"
    },
    {
        "id": 18,
        "product_code": "SP018",
        "product_name": "Bột giặt OMO Matic (Túi 3kg)",
        "category_id": 11, // Hóa mỹ phẩm
        "stock": 60,
        "price": 135000,
        "discount": 5,
        "image": "https://example.com/omo.jpg",
        "status": "ACTIVE",
        "description": "Bột giặt chuyên dụng cho máy giặt cửa trên, xoáy bay vết bẩn.",
        "created_at": "2023-08-10T10:30:00Z"
    },
    {
        "id": 19,
        "product_code": "SP019",
        "product_name": "Nồi cơm điện Sharp 1.8L",
        "category_id": 12, // Đồ gia dụng
        "stock": 15,
        "price": 850000,
        "discount": 15,
        "image": "https://example.com/noi-com-sharp.jpg",
        "status": "INACTIVE",
        "description": "Nồi cơm nắp gài nấu cơm ngon, giữ ấm lâu.",
        "created_at": "2023-08-20T16:00:00Z"
    },
    {
        "id": 20,
        "product_code": "SP020",
        "product_name": "Bia Heineken (Thùng 24 lon)",
        "category_id": 5, // Đồ uống
        "stock": 120,
        "price": 420000,
        "discount": 2,
        "image": "https://example.com/bia-heineken.jpg",
        "status": "ACTIVE",
        "description": "Bia hương vị thượng hạng, đẳng cấp quốc tế.",
        "created_at": "2023-09-01T18:00:00Z"
    }
];
// Hàm bật/tắt danh sách
function toggleDropdown() {
    const dropdown = document.getElementById('statusDropdown');
    dropdown.classList.toggle('active');
}

// Hàm xử lý select option trạng thái
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

// --- Khai báo biến trạng thái ---
let currentSort = {
    column: '',     // Cột đang chọn
    direction: 'desc' // Mặc định là giảm dần (desc)
};

// Khởi tạo dữ liệu từ LocalStorage
let products = JSON.parse(localStorage.getItem('products')) || dataProducts;

// START XỬ LÝ SELECT OPTION DANH MỤC
function renderCategory() {
    // Lấy dữ liệu từ Local Storage
    const categoriesData = localStorage.getItem('categories');
    let categories = [];

    if (categoriesData) {
        categories = JSON.parse(categoriesData);
    }

    // Xác định phần tử mặc định (Phần tử đầu tiên)
    let defaultText = "Không có dữ liệu";
    let defaultValue = "";

    if (categories.length > 0) {
        // Lấy phần tử đầu tiên trong mảng
        defaultText = categories[0].category_name;
        defaultValue = categories[0].id;
    }

    // Tạo chuỗi HTML cho danh sách <li>
    const listItemsHTML = categories.map(item => {
        // Lưu ý: Truyền tham số vào hàm selectOptionCategory cần dấu nháy đơn
        return `<li onclick="selectCategoryOption('${item.id}', '${item.category_name}')">${item.category_name}</li>`;
    }).join('');

    // Render toàn bộ HTML vào container
    const dropdownContainer = document.getElementById("statusDropdownCategory");

    dropdownContainer.innerHTML = `
        <label>Danh mục <span class="required">*</span></label>
                                    <div class="dropdown-category-selected" onclick="toggleDropdownCategory()">
                                        <span id="selectedCategoryText">${defaultText}</span>
                                        <i class="ri-arrow-down-s-line arrow-icon"></i>
                                    </div>

                                    <ul class="dropdown-list" id="categoryListUl">
                                        ${listItemsHTML}
                                    </ul>

                                    <input type="hidden" name="status" id="categoryValue" value="${defaultValue}">
    `;
}


// Hàm bật/tắt select option
function toggleDropdownCategory() {
    const dropdown = document.getElementById('statusDropdownCategory');
    dropdown.classList.toggle('active');
}

// Hàm xử lý khi chọn 1 item
function selectCategoryOption(id, name) {
    // Cập nhật text hiển thị
    document.getElementById("selectedCategoryText").innerText = name;

    // Cập nhật giá trị input ẩn
    document.getElementById("categoryValue").value = id;

    // Đóng dropdown
    document.getElementById("statusDropdownCategory").classList.remove("active");

    console.log("Đã chọn:", { id, name });
}

// Gọi hàm render khi trang tải xong
document.addEventListener("DOMContentLoaded", renderCategory);

/* END Xử lý SELECT OPTION */

// Lưu vào localStorage ngay lần đầu nếu chưa có để đồng bộ
if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(products));
}

// Hàm Render bảng dữ liệu
function renderTableByPage() {
    const tbody = document.getElementById('productTableBody');
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
                <td>${cat.product_code}</td>
                <td>${cat.product_name}</td>
                <td>${cat.price}</td>
                <td>${cat.stock}</td>
                <td>${cat.discount}</td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn-icon btn-delete" onclick="deleteProduct(${cat.id})"><i class="ri-delete-bin-line"></i></button>
                    <button class="btn-icon btn-edit" onclick="editProduct(${cat.id})"><i class="ri-pencil-line"></i></button>
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

    // Lấy giá trị lọc danh mục
    const categoryInput = document.getElementById('filterCategoryInput').value;

    const filtered = products.filter(productItem => {
        // Điều kiện 1: Nếu statusInput là ALL -> render tất cả
        const matchStatus = statusInput === 'ALL' || productItem.status === statusInput;

        // --- Điều kiện 2: Lọc theo danh mục
        // Dùng so sánh == (hai dấu bằng) vì item.category_id có thể là số, input.value là chuỗi
        const matchCategory = (categoryInput === 'ALL') || (productItem.category_id == categoryInput);

        // --- Điều kiện 3: Lọc theo tên
        const matchName = productItem.product_name.toLowerCase().includes(searchName);

        // Phải thỏa mãn CẢ 3 điều kiện
        return matchStatus && matchCategory && matchName;
    });

    // Sắp xếp theo mũi tên
    if (currentSort.column) {
        filtered.sort((a, b) => {
            const column = currentSort.column;
            const valA = a[currentSort.column];
            const valB = b[currentSort.column];

            // TRƯỜNG HỢP 1: Sắp xếp SỐ 
            if (column === 'price') {
                // Đảm bảo chuyển về số để tính toán (đề phòng dữ liệu là string "50000")
                const numA = Number(valA);
                const numB = Number(valB);

                if (currentSort.direction === 'asc') {
                    return numA - numB; // Tăng dần: Số nhỏ lên trước
                } else {
                    return numB - numA; // Giảm dần: Số lớn lên trước
                }
            }

            // TRƯỜNG HỢP 2: Sắp xếp CHỮ 
            const strA = String(valA);
            const strB = String(valB);

            if (currentSort.direction === 'asc') {
                return strA.localeCompare(strB, 'vi');
            } else {
                return strB.localeCompare(strA, 'vi');
            }
        });
    }

    currentFilteredData = filtered;
    currentPage = 1;

    // Render bảng và Phân trang
    renderPagination();
    renderTableByPage();

    updateSortIcons(currentSort.column, currentSort.direction);
}


/* --- KHAI BÁO BIẾN TOÀN CỤC CHO PHÂN TRANG --- */
let currentPage = 1;
const itemsPerPage = 8; // Số dòng mỗi trang
let currentFilteredData = []; // Lưu trữ dữ liệu sau khi Lọc & Sort


/* --- HÀM VẼ GIAO DIỆN PHÂN TRANG (Logic 3 chấm ...) --- */
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

    // --- NÚT NEXT---
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
    document.getElementById('modalTitle').innerText = 'Thêm mới sản phẩm';
    resetForm();
}

function closeModal() {
    document.getElementById('categoryModal').style.display = 'none';
}

function resetForm() {
    document.getElementById('categoryId').value = '';

    const codeInput = document.getElementById('productCode');
    const nameInput = document.getElementById('productName');

    // Reset giá trị phòng trường hợp vừa click edit xong thì click thêm
    codeInput.value = '';
    nameInput.value = '';

    // Cho phép nhập khi thêm mới
    codeInput.readOnly = false;
    nameInput.readOnly = false;

    // Xóa lỗi cũ
    clearError('productCode', 'errorCode');
    clearError('productName', 'errorName');

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
    const code = document.getElementById('productCode').value.trim();
    const name = document.getElementById('productName').value.trim();

    if (!code) {
        document.getElementById('errorCode').innerText = "Mã sản phẩm không được để trống";
        document.getElementById('errorCode').style.display = 'block';
        document.getElementById('productCode').classList.add('input-error');
        isValid = false;
    }

    if (!name) {
        document.getElementById('errorName').innerText = "Tên sản phẩm không được để trống";
        document.getElementById('errorName').style.display = 'block';
        document.getElementById('productName').classList.add('input-error');
        isValid = false;
    }
    return isValid;
}

// LƯU DỮ LIỆU (THÊM / SỬA)
function saveProduct() {
    // Validate trước
    if (!validateForm()) {
        return;
    };

    const id = document.getElementById('categoryId').value;
    const code = document.getElementById('productCode').value.trim();
    const name = document.getElementById('productName').value.trim();

    // Lấy Category ID từ input hidden của custom dropdown
    const categoryId = document.getElementById('categoryValue').value;

    // Lấy các chỉ số số học (Chuyển từ string sang number)
    const stock = Number(document.getElementById('stock').value) || 0;
    const price = Number(document.getElementById('price').value) || 0;
    const discount = Number(document.getElementById('discount').value) || 0;

    const image = document.getElementById('image').value.trim();
    const description = document.getElementById('description').value.trim();

    // Lấy value Radio Button
    const statusRadio = document.querySelector('input[name="modalStatus"]:checked');
    const status = statusRadio ? statusRadio.value : 'ACTIVE';

    if (id) {
        // UPDATE
        const index = products.findIndex(p => p.id == id);
        if (index !== -1) {
            products[index].product_code = code;
            products[index].product_name = name;
            products[index].category_id = categoryId; // Cập nhật danh mục
            products[index].stock = stock;
            products[index].price = price;
            products[index].discount = discount;
            products[index].image = image;
            products[index].description = description;
            products[index].status = status;
        }
        showSuccessToast('Cập nhật sản phẩm thành công!');

    } else {
        const validImageTypes = /\.(jpg|jpeg|png|webp)$/i;
        // Kiểm tra trùng mã
        const isDuplicate = products.some(c => c.product_code === code);
        const nameIsDuplicate = products.some(c => c.product_name === name);
        const image = document.getElementById('image').value.trim();

        if (isDuplicate) {
            document.getElementById('errorCode').innerText = "Mã sản phẩm đã tồn tại";
            document.getElementById('errorCode').style.display = 'block';
            document.getElementById('productCode').classList.add('input-error');
            return;
        }

        if (nameIsDuplicate) {
            document.getElementById('errorName').innerText = "Tên sản phẩm đã tồn tại";
            document.getElementById('errorName').style.display = 'block';
            document.getElementById('productName').classList.add('input-error');
            return;
        }

        if (image && !validImageTypes.test(image)) {
            document.getElementById('errorImage').innerText = "Link ảnh phải có đuôi .jpg, .png hoặc .webp";
            document.getElementById('errorImage').style.display = 'block';
            document.getElementById('image').classList.add('input-error');
            return;
        }

        // Tạo ID mới tự tăng
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

        const newProduct = {
            id: newId,
            product_code: code,
            product_name: name,
            category_id: categoryId, // Lưu ID danh mục
            stock: stock,
            price: price,
            discount: discount,
            image: image,
            description: description,
            status: status,
            created_at: new Date().toISOString()
        };

        products.push(newProduct);
        showSuccessToast('Thêm sản phẩm thành công!');
    }
    updateLocalStorage();
    closeModal();
    filterData(); // Load lại có áp dụng bộ lọc hiện tại
}

// SỬA & XÓA
function editProduct(id) {
    // Tìm sản phẩm trong danh sách
    const product = products.find(p => p.id == id);
    const categories = JSON.parse(localStorage.getItem('categories'));
    if (product) {
        resetForm(); // Xóa các thông báo lỗi cũ

        // Các trường ID/Code/Name
        document.getElementById('categoryId').value = product.id; // Input hidden dùng để nhận biết đang Edit
        document.getElementById('productCode').value = product.product_code;
        document.getElementById('productName').value = product.product_name;

        // Các trường dữ liệu (Số lượng, Giá, Giảm giá, Hình ảnh, Chi tiết)
        document.getElementById('stock').value = product.stock;
        document.getElementById('price').value = product.price;
        document.getElementById('discount').value = product.discount;
        document.getElementById('image').value = product.image;
        document.getElementById('description').value = product.description || ''; // Dùng || '' để tránh lỗi nếu null

        // Xử lý Dropdown Category
        // Set giá trị cho input ẩn
        document.getElementById('categoryValue').value = product.category_id;

        // Tìm tên danh mục để hiển thị lên UI (dựa vào category_id của sản phẩm)
        const selectedCat = categories.find(c => c.id == product.category_id);
        const categoryNameDisplay = selectedCat ? selectedCat.category_name : 'Chọn danh mục';

        // Cập nhật text hiển thị trên Dropdown
        const textElement = document.getElementById('selectedCategoryText');
        if (textElement) {
            textElement.innerText = categoryNameDisplay;
        }

        // Xử lý Radio Button Status
        const radios = document.getElementsByName('modalStatus');
        for (const radio of radios) {
            if (radio.value === product.status) {
                radio.checked = true;
                break;
            }
        }

        // Đổi tiêu đề và hiện Modal
        document.getElementById('modalTitle').innerText = 'Cập nhật sản phẩm';
        document.getElementById('categoryModal').style.display = 'flex';
    }
}

async function deleteProduct(id) {
    const productToDelete = products.find(c => c.id === id);
    const name = productToDelete ? productToDelete.product_name : 'Sản phẩm này';

    // Gọi Modal và CHỜ (await) kết quả
    const isConfirmed = await showConfirmModal(name);

    // Nếu người dùng chọn True (Xóa)
    if (isConfirmed) {
        products = products.filter(c => c.id !== id);
        updateLocalStorage();
        filterData();

        showSuccessToast('Đã xóa thành công!');
    }
    // Nếu false thì không làm gì cả
}

function updateLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}


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
    // A. Reset tất cả icon về trạng thái chờ 
    const icons = document.querySelectorAll('th i');
    icons.forEach(icon => {
        icon.className = 'ri-arrow-down-line'; // Luôn để hình mũi tên xuống
        icon.style.color = '#ccc';           
    });

    // B. Cập nhật icon của cột ĐANG CHỌN 
    const activeIcon = document.getElementById(`icon-${activeColumn}`);
    if (activeIcon) {
        activeIcon.style.color = '#000'; 

        // Nếu đang tăng dần -> Mũi tên lên. Giảm dần -> Mũi tên xuống
        activeIcon.className = direction === 'asc' ? 'ri-arrow-up-line' : 'ri-arrow-down-line';
    }
}

// --- Render danh sách lọc danh mục ---
function renderFilterCategory() {
    const categories = JSON.parse(localStorage.getItem('categories'));
    // Lấy dữ liệu danh mục từ LocalStorage
    const listUl = document.getElementById('filterCategoryList');

    // Mặc định luôn có nút "Tất cả danh mục"
    let html = `<li onclick="selectFilterCategoryOption('Tất cả danh mục', 'ALL')">Tất cả danh mục</li>`;

    // Nối thêm các danh mục từ dữ liệu
    categories.forEach(cat => {
        html += `<li onclick="selectFilterCategoryOption('${cat.category_name}', '${cat.id}')">${cat.category_name}</li>`;
    });

    listUl.innerHTML = html;
}

// --- Xử lý sự kiện Click mở/đóng dropdown ---
function toggleFilterCategoryDropdown() {
    document.getElementById("categoryFilterDropdown").classList.toggle("active");
}

// --- Xử lý khi chọn 1 danh mục để lọc ---
function selectFilterCategoryOption(name, id) {
    // Cập nhật giao diện text
    document.getElementById('selectedFilterCategoryText').innerText = name;

    // Cập nhật giá trị input ẩn
    document.getElementById('filterCategoryInput').value = id;

    // Đóng menu
    document.getElementById("categoryFilterDropdown").classList.remove("active");

    // GỌI HÀM LỌC DỮ LIỆU NGAY
    filterData();
}

window.onclick = function (event) {
    if (!event.target.closest('#categoryFilterDropdown')) {
        const listCat = document.getElementById("categoryFilterDropdown");
        if (listCat && listCat.classList.contains('active')) {
            listCat.classList.remove('active');
        }
    }

    if (!event.target.closest('#statusDropdown')) {
        const list = document.getElementById("statusDropdown");
        if (list && list.classList.contains('active')) {
            list.classList.remove('active');
        }
    }

    if (!event.target.closest('#statusDropdownCategory')) {
        const list = document.getElementById("statusDropdownCategory");
        if (list && list.classList.contains('active')) {
            list.classList.remove('active');
        }
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

// Gọi hàm này khi trang vừa load xong
document.addEventListener("DOMContentLoaded", () => {
    renderFilterCategory();
    filterData();
    renderTableByPage();
});
