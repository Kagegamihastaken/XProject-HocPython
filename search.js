$(document).ready(function () {
    // Define an array of searchable items
    var items = [
        { name: "Giới thiệu về ngôn ngữ lập trình Python", link: "/course/1.1/#A", subname: "1.1 - Giới thiệu Python và cách cài đặt Python" },
        { name: "Cách cài đặt Python", link: "/course/1.1/#B", subname: "1.1 - Giới thiệu Python và cách cài đặt Python" },
        { name: "Visual Studio Code", link: "/course/1.2/#A", subname: "1.2 - Cài đặt IDE để lập trình Python" },
        { name: "Pycharm", link: "/course/1.2/#B", subname: "1.2 - Cài đặt IDE để lập trình Python" },
        { name: "IDE Khác", link: "/course/1.2/#C", subname: "1.2 - Cài đặt IDE để lập trình Python"},
        { name: "Python Shell là gì?", link: "/course/1.3/#A", subname: "1.3 - Giới thiệu về môi trường Python Shell" },
        { name: "In một dòng ra console", link: "/course/2.1/#A", subname: "2.1 - Xuất dữ liệu" },
        { name: "In ra nhiều dòng trong console", link: "/course/2.1/#B", subname: "2.1 - Xuất dữ liệu" },
        { name: "Câu lệnh sep và end trong hàm print", link: "/course/2.1/#C", subname: "2.1 - Xuất dữ liệu" },
        { name: "Mở rộng của hàm print", link: "/course/2.1/#D", subname: "2.1 - Xuất dữ liệu" },
        { name: "Cú pháp của hàm print", link: "/course/2.1/#E", subname: "2.1 - Xuất dữ liệu" },
        { name: "Biến số", link: "/course/2.2/#A", subname: "2.2 - Biến số" },
        { name: "Cú pháp đặt biến và một số lưu ý khi đặt tên", link: "/course/2.2/#B", subname: "2.2 - Biến số" },
        { name: "Khai báo nhiều biến cùng một dòng", link: "/course/2.2/#C", subname: "2.2 - Biến số" },
        { name: "Kiểu dữ liệu trong biến số", link: "/course/2.2/#D", subname: "2.2 - Biến số" },
        { name: "Các phép toán cơ bản trong Python", link: "/course/2.2/#E", subname: "2.2 - Biến số" },
        { name: "Một số phép tính rút gọn", link: "/course/2.2/#F", subname: "2.2 - Biến số" },
        { name: "Các hàm số toán học mở rộng", link: "/course/2.2/#G", subname: "2.2 - Biến số" },
        { name: "Hàm để tạo một số ngẫu nhiên", link: "/course/2.2/#H", subname: "2.2 - Biến số" },
        { name: "Nhập dữ liệu ở trong console", link: "/course/2.3/#A", subname: "2.3 - Nhập dữ liệu" },
        { name: "Cú pháp của hàm input", link: "/course/2.3/#B", subname: "2.3 - Nhập dữ liệu" },
        { name: "Câu lệnh rẽ nhánh if", link: "/course/3.1/#A", subname: "3.1 - Câu lệnh rẽ nhánh" },
        { name: "Câu lệnh rẽ nhánh if-else", link: "/course/3.1/#B", subname: "3.1 - Câu lệnh rẽ nhánh" },
        { name: "Câu lệnh rẽ nhánh if-elif", link: "/course/3.1/#C", subname: "3.1 - Câu lệnh rẽ nhánh" },
        { name: "Một số lưu ý khi dùng câu lệnh rẽ nhánh", link: "/course/3.1/#D", subname: "3.1 - Câu lệnh rẽ nhánh" },
        { name: "Các phép so sánh số học", link: "/course/3.1/#E", subname: "3.1 - Câu lệnh rẽ nhánh" },
        { name: "Một số cách viết rút gọn", link: "/course/3.1/#F", subname: "3.1 - Câu lệnh rẽ nhánh" },
        { name: "Câu lệnh lặp", link: "/course/3.2/#A", subname: "3.2 - Câu lệnh lặp" },
        { name: "Vòng lặp với số lần lặp được xác định trước", link: "/course/3.2/#B", subname: "3.2 - Câu lệnh lặp" },
        { name: "Một số câu lệnh for mở rộng", link: "/course/3.2/#C", subname: "3.2 - Câu lệnh lặp" },
        { name: "Vòng lặp với số lần lặp không được xác định trước", link: "/course/3.2/#D", subname: "3.2 - Câu lệnh lặp" },
        { name: "Câu lệnh continue", link: "/course/3.2/#E", subname: "3.2 - Câu lệnh lặp" },
        { name: "Câu lệnh break", link: "/course/3.2/#F", subname: "3.2 - Câu lệnh lặp" },
        { name: "Câu lệnh pass", link: "/course/3.2/#G", subname: "3.2 - Câu lệnh lặp" },
        { name: "Định nghĩa của chuỗi xâu", link: "/course/4.1/#A", subname: "4.1 - Kiểu dữ liệu chuỗi xâu" },
        { name: "Độ dài của chuỗi", link: "/course/4.1/#B", subname: "4.1 - Kiểu dữ liệu chuỗi xâu" },
        { name: "Truy cập đến từng ký tự trong chuỗi xâu", link: "/course/4.1/#C", subname: "4.1 - Kiểu dữ liệu chuỗi xâu" },
        { name: "Ghép chuỗi xâu (tạo một chuỗi mới bằng cách ghép nhiều chuỗi xâu con)", link: "/course/4.1/#D", subname: "4.1 - Kiểu dữ liệu chuỗi xâu" },
        { name: "Lặp chuỗi xâu", link: "/course/4.1/#E", subname: "4.1 - Kiểu dữ liệu chuỗi xâu" },
        { name: "So sánh chuỗi xâu", link: "/course/4.1/#F", subname: "4.1 - Kiểu dữ liệu chuỗi xâu" },
        { name: "Lấy chuỗi con", link: "/course/4.1/#G", subname: "4.1 - Kiểu dữ liệu chuỗi xâu" },
        { name: "Đảo ngược thứ tự chuỗi", link: "/course/4.1/#H", subname: "4.1 - Kiểu dữ liệu chuỗi xâu" },
        { name: "Tách chuỗi", link: "/course/4.2/#A", subname: "4.2 - Một số thao tác với chuỗi xâu" },
        { name: "Phép toán in", link: "/course/4.2/#B", subname: "4.2 - Một số thao tác với chuỗi xâu" },
        { name: "Phương thức đếm số lần xuất hiện", link: "/course/4.2/#C", subname: "4.2 - Một số thao tác với chuỗi xâu" },
        { name: "Phương thức tìm kiếm", link: "/course/4.2/#D", subname: "4.2 - Một số thao tác với chuỗi xâu" },
        { name: "Phương thức thay thế", link: "/course/4.2/#E", subname: "4.2 - Một số thao tác với chuỗi xâu" },
        { name: "Phương thức is_()", link: "/course/4.2/#F", subname: "4.2 - Một số thao tác với chuỗi xâu" },
        { name: "Hàm max, min trên chuỗi", link: "/course/4.2/#G", subname: "4.2 - Một số thao tác với chuỗi xâu" },
        { name: "Hàm eval cho toán học", link: "/course/4.2/#H", subname: "4.2 - Một số thao tác với chuỗi xâu" },
        { name: "Khai báo dữ liệu danh sách", link: "/course/4.3/#A", subname: "4.3 - Kiểu dữ liệu danh sách" },
        { name: "Lấy số lượng phần tử trong danh sách", link: "/course/4.3/#B", subname: "4.3 - Kiểu dữ liệu danh sách" },
        { name: "Truy cập đến phần tử trong danh sách", link: "/course/4.3/#C", subname: "4.3 - Kiểu dữ liệu danh sách" },
        { name: "Lấy các phần tử liên tiếp trong danh sách", link: "/course/4.3/#D", subname: "4.3 - Kiểu dữ liệu danh sách" },
        { name: "Ghép danh sách", link: "/course/4.3/#E", subname: "4.3 - Kiểu dữ liệu danh sách" },
        { name: "Lặp danh sách", link: "/course/4.3/#F", subname: "4.3 - Kiểu dữ liệu danh sách" },
        { name: "Toám tử in", link: "/course/4.3/#G", subname: "4.3 - Kiểu dữ liệu danh sách" },
        { name: "Phương thức index", link: "/course/4.3/#H", subname: "4.3 - Kiểu dữ liệu danh sách" },
        { name: "Hàm min, max trên danh sách", link: "/course/4.3/#I", subname: "4.3 - Kiểu dữ liệu danh sách" },
        { name: "Thêm phần tử vào trong danh sách", link: "/course/4.3/#J", subname: "4.3 - Kiểu dữ liệu danh sách" },
        { name: "Hàm sum", link: "/course/4.3/#J", subname: "4.3 - Kiểu dữ liệu danh sách" },
        // Add more items as needed
    ];

    // Function to perform search
    function performSearch(query) {
        var results = [];
        for (var i = 0; i < items.length; i++) {
            if (items[i].name.toLowerCase().includes(query.toLowerCase()) || items[i].subname.toLowerCase().includes(query.toLowerCase())) {
                results.push(items[i]);
            }
        }
        return results;
    }

    // Function to display search results
    function displayResults(results) {
        var searchResults = $("#search-results");
        searchResults.empty();
        if (results.length > 0) {
            for (var i = 0; i < results.length; i++) {
                if (i % 2 == 0) {
                    var link = '<a href='+results[i].link+' role="button" class="rounded-3 list-group-item list-group-item-action index-1" aria-current="true" style="padding-bottom: 5px; padding-top: 5px;">' + 
                    '<div class="d-flex w-100 justify-content-between">' + "\n" + '<h5 class="mb-1">' + results[i].name + "</h5>" +
                        "</div>" + '<p class="mb-1">' + results[i].subname + "</p>" + 
                    "</a>";
                }
                else if (i % 2 == 1) {
                    var link = '<a href='+results[i].link+' role="button" class="rounded-3 list-group-item list-group-item-action index-2" aria-current="true" style="padding-bottom: 5px; padding-top: 5px;">' + 
                    '<div class="d-flex w-100 justify-content-between">' + "\n" + '<h5 class="mb-1">' + results[i].name + "</h5>" +
                        "</div>" + '<p class="mb-1">' + results[i].subname + "</p>" + 
                    "</a>";
                }
                //var link = $("<a>").attr("href", result.link).attr("role", "button").attr("class", "btn rounded-2 text-start list-group-item list-group-item-action").text();
                var listItem = link;
                searchResults.append(listItem);
            }
        } else {
            searchResults.empty();
        }
    }

    function erase() {
        $("#search-input").empty();
    }


    // Event listener for search input
    $("#search-input").on("input", function () {
        if ($(this).val() != "") {
            var query = $(this).val();
            var results = performSearch(query);
            displayResults(results);
        }
        else {
            $("#search-results").empty();
        }
    });
});