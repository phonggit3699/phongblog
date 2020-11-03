import './css/posts.css';

const posts = () =>{

    return(
        <div className="posts-container">
            <h4 className="title">Lorem Ipsum</h4>
            <div className="img-des">
                <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Photo IT" />
                <p className="des">Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày 
                và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công 
                nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành 
                một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin 
                học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ
                 việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các 
                 ứng dụng dàn trang, như Aldus PageMaker.</p>
            </div>
        </div>
    );
}

export default posts;